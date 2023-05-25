/* Tester  maia 
* Maio / 2023
* github : 
* email para ajuda : maiaemersondev@gmail.com
* Documentação git : https://github.com/mayaemerson
*/

function sheetAuditor() {
    try {
        const startTime = new Date()
       
        clearData(sheet)
        sheet.getRange("A11").setValue("-")
        definirSparkLine(sheet,"B2")
        loadBarr(10)
        formatText("A2").formPorcentagem

        url = sheet.getRange(3, 2).getValue()
        const audit_data = auditUrl(url)
      
    
      const fileRange = sheet.getRange(7, 1, 1, 5)
      const fileFormats = [
        ["#,###,##0", "#,###,##0", "0.0%", "#,###,##0", "0.0%"]
      ]
 
      const fileHorizontalAlignments = [
        ["center", "center", "center", "center", "center"]
      ]
     
     
      fileRange
        .setValues([audit_data[0]])
        .setNumberFormats(fileFormats)
        .setHorizontalAlignments(fileHorizontalAlignments)
        .setFontSize(10)
        .setBorder(true, true, true, true, true, true, "#D3D3D3", null);

        loadBarr(50)
        formatText("A2").formPorcentagem

        
        negativeCalculation().respOne
        negativeCalculation().respTwo
        
        formatText("G7").formPorcentagem

        sheet.getRange("F7").setNumberFormat("#,###,##0")
        sheet.getRange("F7:G7").setHorizontalAlignment("center")
      const sheetRange = sheet.getRange(11, 1, audit_data[1].length, 23)
    
      const sheetFormats = [
        
        ["#,###,##0", "#,###,##0", "0.0%", "#,###,##0", "0.0%"]
        
      ];

      let updatedData= audit_data[1].map((row) => {
        const value3 = row[3]
        const value4 = row[4]
        const result = value3 - value4
        row[5] = result
        return row;
      });

      updatedData = audit_data[1].map((row) =>
         row.map((element) => (element === 0 ? '-' : element))
     );



      sheetRange.setValues(updatedData)


      loadBarr(75)
      formatText("A2").formPorcentagem
      deleteRows(sheet)

      const formatRange = sheet.getRange(
        11,
        2,
        audit_data[1].length,
      23
      );
      const formatCond = sheet.getRange(
        11,
        1,
        audit_data[1].length,
        23
      );
      
      
      formatRange
      .setHorizontalAlignment("center")
      .setFontSize(10);
      
      formatCondicional (audit_data[1].length,formatCond,"#D3D3D3","#FFFFFF")

      sheet.getRange("A11:A")
                .setHorizontalAlignment("left")
                .setFontWeight("bold");
      const endTime = new Date();
      const tm = endTime.getTime() - startTime.getTime();
      const formattedTime = formatTime(tm)
      
      sheet.getRange("S2").setValue(`Tempo ${formattedTime}`)
      sheet.getRange("S2")
        .setWrap(true)
        .setHorizontalAlignment("left")
        .setVerticalAlignment("middle")
        .setFontSize(10);
        searchAndAddTimestamp()
        loadBarr(100)
        formatText("A2").formPorcentagem
        
        sheet.getRange("A2").setValue(`Tempo ${formattedTime}`)
        sheet.getRange("B2").setValue("")
        sheet.getRange("A2")
        .setWrap(true)
        .setHorizontalAlignment("left")
        .setVerticalAlignment("middle")
        .setFontSize(10);
        sheet.getRange("S2").setValue("")


    } catch (e) {

    const url = sheet.getRange(3, 2).getValue()
      mensAuditor(url);
    }
  }
