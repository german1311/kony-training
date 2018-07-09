/* jshint esnext: true */
define({
    //Type your controller code here 
    populateSegment: function(rowData) {
        var dataFormatted = [];
        for (var i = 0; i < rowData.length; i++) {
            const element = rowData[i];
            dataFormatted[i] = {
                flxLeft: {
                    onClick: this.onDeleteRowSegmentClick
                },
                flxRight: {
                    onClick: this.onRowSegmentClick
                },
                imgProfile: {
                    src: "option3.png",
                },
                lblFullName: element.FirstName + " " + element.LastName,
                lblStatus: element.Active ? "" : "Off",
                imgDelete: "icons8_minus_48.png",
                primaryKey: element.Id
            };
        }
        this.view.segPersons.removeAll();
        this.view.segPersons.addAll(dataFormatted);
    },
    onAddClick: function() {
        var editForm = new kony.mvc.Navigation("frmEditPerson");
        editForm.navigate();
    },
    onDeleteClick: function() {
        this.isDeleting = !this.isDeleting;
        this.animateSegmentOnDelete(this.isDeleting);
    },
    onPersonsClick: function() {
        var self = this;
        personModel.get().then((data) => {
            self.populateSegment(data);
            self.view.mainContainer.setActiveFooterMenu(1);
        }).catch(Util.logError);
    },
    onSyncClick: function() {
        this.view.mainContainer.setActiveFooterMenu(2);
        personModel.startSync().then(self.onPersonsClick);
    },
    onExportClick: function() {
        this.view.mainContainer.setActiveFooterMenu(3);
    },
    onDoneSearchText: function(e, ar) {
        var self = this;
        if (!e.text) {
            this.onPersonsClick();
            this.view.search.disableFullInput();
            return;
        }
        personModel.findPerson(e.text).then((data) => {
            self.populateSegment(data);
        }).catch(Util.logError);
    },
    onDeleteRowSegmentClick: function(args) {
        let person = this.view.segPersons.selectedRowItems[0];
        let self = this;
        let basicProperties = {
            message: `Seguro que quiere eliminar a: ${person.lblFullName}?`,
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            yesLabel: "Si",
            alertHandler: (params) => {
                if (params) {
                    personModel.delete(person.primaryKey).then(self.onPersonsClick).catch(Util.logError);
                }
            }
        };

        let platformSpecificProperties = {};
        kony.ui.Alert(basicProperties, platformSpecificProperties);


    },
    onRowSegmentClick: function(eventObject, rowNumber) {
        var editForm = new kony.mvc.Navigation("frmEditPerson");
        editForm.navigate(this.view.segPersons.selectedRowItems[0]);
    },
    onInit: function() {
        this.isDeleting = false;
        if (!dataBase) {
            setupSync().then(() => {
                console.log("database created");
            }).catch(Util.logError);
        }

        console.log("onInit called");
    },
    onPostShow: function() {
        let PersonModelClass = require("personModel");
        var self = this;
        self.PromiseUntilExists().then(() => {
            if (!personObjectService) {
                personObjectService = dataBase.performObjectService(PersonServiceConfig.name, {
                    "access": "offline"
                });
            }
            if (!personModel) {
                personModel = new PersonModelClass(new kony.sdk.KNYObj(PersonServiceConfig.objects.person.name));
            }

            personModel.startSync().then(self.onPersonsClick);
        }).catch(Util.logError);
    },
    animateSegmentOnDelete: function(isDeleting) {
        let finalWidthLeft = "0%";
        let finalWidthRight = "100%";
        this.view.lblLeft.text = "Delete"
        if (isDeleting) {
            finalWidthLeft = "15%";
            finalWidthRight = "85%";
            this.view.lblLeft.text = "Done"
        }
        let transformPropOne = kony.ui.makeAffineTransform();
        transformPropOne.scale(1, 0);
        let transformPropTwo = kony.ui.makeAffineTransform();
        transformPropTwo.scale(1, 1);
        let animationDefinitionLeft = {
            0: {
                "transform": transformPropOne,
            },
            100: {
                "transform": transformPropTwo,
                "width": finalWidthLeft
            }
        };
        let animationLeft = kony.ui.createAnimation(animationDefinitionLeft);
        let animationConfig = {
            "duration": 0.3,
            "iterationCount": 1,
            "delay": 0,
            "fillMode": kony.anim.FILL_MODE_FORWARDS
        };
        let animationCallbacksLeft = {
            animationStart: (flexContainer) => {
                flexContainer.width = finalWidthLeft;
                // Util.logError("animation segment row has begun");
            },
            animationEnd: (flexContainer) => {
                // Util.logError("animation flex ends");
            }
        }
        let fullAnimationLeft = {
            definition: animationLeft,
            config: animationConfig,
            callbacks: animationCallbacksLeft
        };
        this.view.segPersons.animateRows({
            rows: this.getSegmentRows(),
            widgets: ["flxLeft"],
            animation: fullAnimationLeft
        });
        let animationDefinitionRight = {
            0: {
                "transform": transformPropOne,
            },
            100: {
                "transform": transformPropTwo,
                "width": finalWidthRight
            }
        };
        let animationCallbacksRight = {
            animationStart: (flexContainer) => {
                flexContainer.width = finalWidthRight;
                // Util.logError("animation segment row has begun");
            },
            animationEnd: (flexContainer) => {
                // Util.logError("animation flex ends");
            }
        }
        let animationRight = kony.ui.createAnimation(animationDefinitionRight);
        let fullAnimationRight = {
            definition: animationRight,
            config: animationConfig,
            callbacks: animationCallbacksRight
        };
        this.view.segPersons.animateRows({
            rows: this.getSegmentRows(),
            widgets: ["flxRight"],
            animation: fullAnimationRight
        });
    },
    getSegmentRows: function() {
        var rowList = [];
        for (var i = 0; i < this.view.segPersons.data.length; i++) {
            var rowItem = {
                sectionIndex: 0,
                rowIndex: i
            };
            rowList.push(rowItem);
        }
        return rowList;
    },
    PromiseUntilExists(secondsToWait = 5) {
        let promise = new Promise((resolve, reject) => {
            kony.timer.schedule("idTimer", () => {
                if (dataBase.isUp) { //no exists
                    resolve();
                    kony.timer.cancel("idTimer");
                    console.log("timer canceled");
                    return;
                }

                secondsToWait--;
                if (secondsToWait === 0) {
                    reject(`time out ${secondsToWait} seconds`);
                    kony.timer.cancel("idTimer");
                    console.log("timer canceled");
                }

                console.log(`create Person try: ${secondsToWait}`);
            }, 1, true);
        });

        return promise;
    }
});