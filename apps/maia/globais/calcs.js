const getMemoryUsagePercentage = (memoryUsage) => {

    const sheetM = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("memory");
    let qtM = sheetM.getRange("B2").getValue();
    qtM = parseFloat(qtM)
    console.log(qtM)
    const totalMemory = 18 * 1024 * 1024 * 1024; 
    const memoryUsagePercentage = (memoryUsage / totalMemory) * 100
    return memoryUsagePercentage.toFixed(2)

  }

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60)
    const minutes = Math.floor((time / (1000 * 60)) % 60)
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
  
    let formattedTime = ""
  
    if (hours > 0) {
      formattedTime += hours.toString().padStart(2, "0") + " hr "
    }
  
    if (minutes > 0) {
      formattedTime += minutes.toString().padStart(2, "0") + " min "
    }
  
    if (seconds > 0) {
      formattedTime += seconds.toString().padStart(2, "0") + " seg"
    }
  
    return formattedTime
  }

  const negativeCalculation = () => {

      const vlOne = sheet.getRange("B7").getValue()
      const vlTwo = sheet.getRange("D7").getValue()
      const vlNOne = sheet.getRange("F7").getValue()
      const vlNTwo = sheet.getRange("B7").getValue()
      const resp = vlOne - vlTwo
      const respn = vlNOne / vlNTwo
      const carrV = sheet.getRange("F7").setValue(resp)
      const carrN = sheet.getRange("G7").setValue(respn)

      return {

        respOne : carrV,
        respTwo : carrN

      }

  }


