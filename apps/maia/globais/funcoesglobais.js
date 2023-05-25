
const checkTableSheetExists = (nameTable, sheet) => {
    const sheetName = nameTable;
    const sheets = sheet.getSheets();
    return sheets
               .map(sheet => sheet.getName())
               .includes(sheetName);
  }
  
  
  const fCondicional = (sh, rowinitone, rowendone, rowinittwo, rowendtwo) => {
    const rangeP = sh.getRange(`${rowinitone}:${rowendone}`)
    const rangeR = sh.getRange(`${rowinittwo}:${rowendtwo}`)
  
   
    const gradientRuleP = sh.newConditionalFormatRule()
      .setGradientMinpoint("#FFFFFF", sh.InterpolationType.PERCENT, "0%")
      .setGradientMaxpoint("#00FF00", sh.InterpolationType.PERCENT, "49%")
      .setBackground("#FFFFFF")
      .setFontColor("#000000")
      .setRanges([rangeP])
      .build();
  
    const gradientRuleR = sh.newConditionalFormatRule()
      .setGradientMinpoint("#FFFFFF", sh.InterpolationType.PERCENT, "50%")
      .setGradientMaxpoint("#FF0000", sh.InterpolationType.PERCENT, "100%")
      .setBackground("#FFFFFF")
      .setFontColor("#000000")
      .setRanges([rangeR])
      .build();
  
   
    sh.setConditionalFormatRules([])
  
    
    const rules = sh.getConditionalFormatRules()
    rules.push(gradientRuleP)
    rules.push(gradientRuleR)
    sh.setConditionalFormatRules(rules)
  }


  const createMemorySheet = () => {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    const sheets = spreadsheet.getSheets()
    
    const memorySheet = sheets.find(sheet => sheet.getName() === 'memory')
    
    if (memorySheet) {
      
      return
    }
    
    const newSheet = spreadsheet.insertSheet('memory')
    newSheet.getRange('A1').setValue('memory')
    
    const maxRows = newSheet.getMaxRows()
    const maxCols = newSheet.getMaxColumns()
    
    if (maxRows > 2) {
      newSheet.deleteRows(3, maxRows - 2)
    }
    
    if (maxCols > 1) {
      newSheet.deleteColumns(2, maxCols - 1)
    }

    input(questMemory)  
    const resp = userInput

    newSheet.getRange('A2').setValue(resp)
    mensCreateTable("Criamos uma aba memory, onde onde salvamos a quantidade de memoria informada do seu computador.")
    sheet.activate();

  }
  

  const loadBarr = (value) => {

    
    const valueT = 100
    const call = value/valueT
    const resp = sheet.getRange("A2").setValue(call)
    
    return resp

  }

  const formatText = (value) => {

    const formPorcentagem = sheet.getRange(value)
        .setNumberFormat("0.00%")
        .setFontSize(9)
        .setVerticalAlignment("center")
        .setHorizontalAlignment("left");


    const formaTexto = sheet.getRange(value)
        .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP)
        .setNumberFormat("@")
        .setVerticalAlignment("center")
        .setHorizontalAlignment("left")
        .setFontWeight("bold")
        .setFontSize(11);

        return {

            formPorcentagem : formPorcentagem,
            formaTexto : formaTexto,
        }
  }

  const autoResize = (coll) => {
  
    const maxWidth = 100
    sheet.setColumnWidth(2, maxWidth)
    const resp = sheet.autoResizeColumn(coll)

    return resp

  }

  const autoResizeRowL = (row,t) => {

   return sheet.setRowHeight(row, t);

  }

  const formatCondicional = (array,formt,colorone,colortwo) => {

    const rows = array
    const rowIndices = Array.from({ length: rows }, (_, i) => i + 1);
    
    rowIndices.forEach((rowIndex, index) => {
      const colorIndex = index % 2;
      const rowRange = formt.offset(rowIndex, 0, 1, 23);
      const color = (colorIndex === 0) ? colorone : colortwo;
      rowRange.setBackground(color);
    });

  }

  function insertSparkline() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const range = sheet.getRange("B2");
    const dataRange = sheet.getRange("A2");
    
    const sparklineChart = Charts.newSparklineChart()
      .setRange(dataRange)
      .setChartType(Charts.ChartType.BAR)
      .setOption("color1", "green")
      .build();
    
    range.setSparkline(sparklineChart);
  }



function closeModal() {
  if (isModalOpen) {
    SpreadsheetApp.getUi().alert('Auditoria concluída!');
    SpreadsheetApp.getUi().showSidebar();
  }
}

const lastColl = (sh) => {

    const lastColumn = sh.getLastColumn();

    return lastColumn

}

const mesclarProgress = (sh) => {
    
    const range = sh.getRange("A11:T11")
    
    range.mergeAcross()
  }

const desfazerMes = (sh) => {
    const range = sh.getRange("A11:T11")
    range.unmerge()
  }

const definirSparkLine = (sh,cel) => {
    const range = sh.getRange(cel);
    range.setFormula('=SPARKLINE(A2*100; {"charttype"\\"bar";"max"\\100})')
  }

  function deleteRows(sheet) {
    const lastRow = sheet.getLastRow();
    const totalRows = sheet.getMaxRows();
  
    if (totalRows > lastRow) {
      const rowsToDelete = totalRows - lastRow;
      sheet.deleteRows(lastRow + 1, rowsToDelete);
    }
  }
  function searchAndAddTimestamp() {
    const searchValue = url
    const timestampColumn = 3
    const user = 5 
   
   
    const dataRange = sheetLinks.getDataRange();
    const values = dataRange.getValues();
  
    values.map((row, index) => {
      const cellValue = row[1];
  
      if (cellValue === searchValue) {
        const timestamp = nowBr
        console.log(timestamp)
        sheetLinks.getRange(index + 1, timestampColumn).setValue(timestamp)
        sheetLinks.getRange(index + 1, user).setValue(userName)
      }
    });
  }
  
