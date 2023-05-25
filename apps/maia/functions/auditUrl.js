function auditUrl(url) {

    loadBarr(15)
    formatText("A2").formPorcentagem
   
    
    let CELL_LIMIT = 10000000;
    const ss = SpreadsheetApp.openByUrl(url);
    const sheets = ss.getSheets();
    
    let numSheets = 0;
    let totalCellCounter = 0;
    let totalDataCellCounter = 0;
    const fileArray = [];
    const sheetsArray = [];
  
    sheets.forEach(function (sheet) {
        loadBarr(55)
        formatText("A2").formPorcentagem
      const thisSheetInfo = getSingleSheetInfo(sheet);
      numSheets++;
      totalCellCounter += thisSheetInfo[3];
      totalDataCellCounter += thisSheetInfo[4];
      sheetsArray.push(thisSheetInfo);
    });
  
    totalCellPercent = totalCellCounter / CELL_LIMIT;
    totalDataCellPercent = totalDataCellCounter / CELL_LIMIT;
  
    fileArray.push(
      numSheets,
      totalCellCounter,
      totalCellPercent,
      totalDataCellCounter,
      totalDataCellPercent,
     
    );
    loadBarr(55)
    formatText("A2").formPorcentagem
    return [fileArray, sheetsArray];
  }