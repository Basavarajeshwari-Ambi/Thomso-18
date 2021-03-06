const convertArrayOfObjectsToCSV = args => {
    let result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;
    data.forEach(item => {
        ctr = 0;
        keys.forEach(key => {
            if (ctr > 0) result += columnDelimiter;
            if (item[key] && typeof item[key] === "object") {
                if (item[key].length > 0 && key === "event") {
                    let tempResult = "";
                    for(let i = 0; i < item[key].length; i++ ) {
                        tempResult += `${item[key][i].name}, `;
                    }
                    result += JSON.stringify(tempResult);
                } else {
                    result += JSON.stringify(item[key]);
                }
            } else {
                result += JSON.stringify(item[key]);
            }
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

const downloadCSV= args => {
    let data, filename, link;
    let csv = convertArrayOfObjectsToCSV({
        data: args.data
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}

export default downloadCSV;