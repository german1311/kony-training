class Util {
    static logError(err) {
        kony.print(err);
        console.log(err);
    }

    static JsonToCsv(jsonObject) {
        const replacer = (key, value) => value === null ? '' : value;
        const header = Object.keys(jsonObject[0]);
        let csv = jsonObject.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
        csv.unshift(header.join(','));
        csv = csv.join('\r\n');

        return csv;
    }

    static uniqueString() {
        return (new Date()).toISOString().replace(/[:.-]/g, "");
    }
}