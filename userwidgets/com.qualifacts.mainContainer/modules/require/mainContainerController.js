define(function() {

    return {
        /** set active menu,        
        menuNumber 1 ~ 3
        */
        setActiveFooterMenu(menuNumber) {
            var imgPersonActive = "icons8_user_account_filled_50";
            var imgSyncActive = "clouds_icon_filled.png";
            var imgExportActive = "icons8_download_filled_50.png";

            var imgPersonDefault = "icons8_user_account_50";
            var imgSyncDefault = "clouds_icon.png";
            var imgExportDefault = "icons8_download_50.png";

            switch (menuNumber) {
                case 1:
                    {
                        this.view.imgPersons.src = imgPersonActive;
                        this.view.imgSync.src = imgSyncDefault;
                        this.view.imgExport.src = imgExportDefault;
                        break;
                    }
                case 2:
                    {
                        this.view.imgPersons.src = imgPersonDefault;
                        this.view.imgSync.src = imgSyncActive;
                        this.view.imgExport.src = imgExportDefault;
                        break;
                    }
                case 3:
                    {
                        this.view.imgPersons.src = imgPersonDefault;
                        this.view.imgSync.src = imgSyncDefault;
                        this.view.imgExport.src = imgExportActive;
                        break;
                    }

            }
        }
    };
});