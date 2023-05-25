function getSingleSheetInfo(sheet) {

    loadBarr(50)
    formatText("A2").formPorcentagem
    
    const singleSheetArray = [];
  
    const name = sheet.getName();
  
    const maxRows = sheet.getMaxRows();
    const maxCols = sheet.getMaxColumns();
  
    const totalCells = maxRows * maxCols;
   
    const r = sheet.getLastRow();
    const c = sheet.getLastColumn();
    let data_counter = r * c;
    let countLoad = 20
    loadBarr(50)
    formatText("A2").formPorcentagem
    if (data_counter !== 0) {
      const dataRange = sheet.getRange(1, 1, r, c);
      const dataValues = dataRange.getValues();
  
      dataValues.forEach(function (row) {
        row.forEach(function (cell) {
          if (cell === "") {
            data_counter--;
          }
        });
      });
    }
    
const slowFuncs = slowFunctions(sheet);
 
    singleSheetArray.push(
      name,
      maxRows,
      maxCols,
      totalCells,
      data_counter,
      ...slowFuncs,
      
    );
    
    loadBarr(55)
    formatText("A2").formPorcentagem
    
    
    return singleSheetArray;
  }