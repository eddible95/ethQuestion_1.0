// Ensure jsPDF does not import on Server Side
let jsPDF = null;
if (typeof window !== "undefined") {
  import("jspdf").then(module => {
    jsPDF = module.default;
  });
}

const exportQuestion = async(summary, answerList) => {
  // Initialise the PDF document to write
  let lMargin=15; //left margin in mm
  let rMargin=15; //right margin in mm
  let pdfInMM=210;  // width of A4 in mm
  let doc = new jsPDF("p","mm","a4");
  let yPos = 55;
  let maxYPos = 280;

  // Question Information
  let questionTitle = "Question Title: " + summary[0];
  let questionDescription = "Question Description: " + summary[1];
  let reward = "Reward: " + summary[2]*1e-4;
  doc.setFontSize(18)
  doc.text(lMargin, 45, "Question Information");
  doc.setLineWidth(0.2)
  doc.line(lMargin, 47, 190, 47)
  let lineHeight = doc.getLineHeight(questionDescription) / doc.internal.scaleFactor

  // Question Title
  let splittedText = doc.splitTextToSize(questionTitle, (pdfInMM-lMargin-rMargin));
  doc.setFontSize(13)
  doc.text(lMargin, yPos, splittedText);

  // Question Description
  let lines = splittedText.length
  lineHeight = doc.getLineHeight(splittedText) / doc.internal.scaleFactor
  let blockHeight = lines * lineHeight
  yPos += blockHeight
  splittedText = doc.splitTextToSize(questionDescription, (pdfInMM-lMargin-rMargin));
  doc.text(lMargin, yPos, splittedText);

  // Question Reward
  lines = splittedText.length
  lineHeight = doc.getLineHeight(splittedText) / doc.internal.scaleFactor
  blockHeight = lines * lineHeight
  yPos += blockHeight
  splittedText = doc.splitTextToSize(reward, (pdfInMM-lMargin-rMargin));
  doc.text(lMargin, yPos, splittedText);

  // Question's Images
  lines = splittedText.length
  blockHeight = lines * lineHeight
  yPos += lineHeight
  splittedText = doc.splitTextToSize("Link(s) of Image(s) Uploaded For Question:", (pdfInMM-lMargin-rMargin));
  doc.setFontType('bold')
  doc.text(lMargin, yPos, splittedText);

  if (summary[5].length != 0) {
      summary[5].map((imageHash, index) => {
        let link = "https://ipfs.io/ipfs/"+imageHash
        lines = splittedText.length
        blockHeight = lines * lineHeight
        yPos += lineHeight
        lines = doc.splitTextToSize(link, (pdfInMM-lMargin-rMargin));
        doc.setFontSize(13)
        doc.setFontType('normal')
        doc.text(lMargin,yPos,lines);
      })
  }

  // Answer Header
  lines = splittedText.length
  blockHeight = lines * lineHeight
  yPos += lineHeight * 2
  splittedText = doc.splitTextToSize("Answer(s) Provided", (pdfInMM-lMargin-rMargin));
  doc.setFontSize(18)
  doc.setFontType('normal')
  doc.text(lMargin, yPos, splittedText);
  lines = splittedText.length
  blockHeight = lines * lineHeight
  yPos += lineHeight * 0.3
  doc.setLineWidth(0.2)
  doc.line(lMargin, yPos, 190, yPos)

  // Answer Body
  if (answerList.length != 0) {
      answerList.map((answer, index) => {
        let answerAddress = answer[2];
        let content = answer[0];
        let numOfApprovals = answer[4];
        let rewarded = answer[1]
        let answerLine = answerAddress + ": " + content;
        let approvalLine = "Number of Approvals: " + numOfApprovals;
        let rewardedLine = "Rewarded: " + rewarded;

        // Answers
        lineHeight = doc.getLineHeight(splittedText) / doc.internal.scaleFactor
        lines = splittedText.length
        blockHeight = lines * lineHeight
        if (yPos > maxYPos) {
          doc.addPage()
          yPos = 40;
        } else {
          yPos += blockHeight
        }
        splittedText = doc.splitTextToSize(answerLine, (pdfInMM-lMargin-rMargin));
        doc.setFontSize(12)
        doc.setFontType('normal')
        doc.text(lMargin, yPos, splittedText);

        if (answer[8].length != 0) {
          answer[8].map((imageHash, index) => {
            let link = "https://ipfs.io/ipfs/"+imageHash
            lineHeight = doc.getLineHeight(splittedText) / doc.internal.scaleFactor
            lines = splittedText.length
            blockHeight = lines * lineHeight
            yPos += lineHeight
            splittedText = doc.splitTextToSize(link, (pdfInMM-lMargin-rMargin));
            doc.text(lMargin,yPos,splittedText);
          })
        }

        // Number Of Approvals
        lineHeight = doc.getLineHeight(splittedText) / doc.internal.scaleFactor
        lines = splittedText.length
        blockHeight = lines * lineHeight
        if (yPos > maxYPos) {
          doc.addPage()
          yPos = 40;
        } else {
          yPos += blockHeight
        }
        splittedText = doc.splitTextToSize(approvalLine, (pdfInMM-lMargin-rMargin));
        doc.text(lMargin, yPos, splittedText);

        // Rewarded Or Not
        lineHeight = doc.getLineHeight(splittedText) / doc.internal.scaleFactor
        lines = splittedText.length
        blockHeight = lines * lineHeight
        if (yPos > maxYPos) {
          doc.addPage()
          yPos = 40;
        } else {
          yPos += blockHeight
        }
        splittedText = doc.splitTextToSize(rewardedLine, (pdfInMM-lMargin-rMargin));
        doc.text(lMargin, yPos, splittedText);

        yPos += lineHeight * 0.3
        doc.setLineWidth(0.1)
        doc.line(lMargin, yPos, 190, yPos)
      })
  }
  let pageCount = doc.internal.getNumberOfPages();
  doc = createFooter(doc, pageCount);
  doc = createHeader(doc, pageCount);
  doc.save("EthQuestion_" + summary[0] + ".pdf");
}

const exportComments = async (comments) => {
  // Initialise the PDF document to write
  let lMargin=15; //left margin in mm
  let rMargin=15; //right margin in mm
  let pdfInMM=210;  // width of A4 in mm
  let doc = new jsPDF("p","mm","a4");
  let yPos = 55;
  let maxYPos = 230;

  // Comments Header
  doc.setFontSize(18)
  let commentHeader = "Comment(s) Provided By Users"
  let splittedText = doc.splitTextToSize(commentHeader, (pdfInMM-lMargin-rMargin));
  doc.text(lMargin, 45, splittedText);
  doc.setLineWidth(0.2)
  doc.line(lMargin, 47, 190, 47)

  // Comments Body
  if (comments.length != 0) {
      comments.map((comment, index) => {
        let lineHeight = doc.getLineHeight(splittedText) / doc.internal.scaleFactor
        let lines = splittedText.length
        let blockHeight = lines * lineHeight
        if (yPos > maxYPos) {
          doc.addPage()
          yPos = 40;
        } else {
          yPos += blockHeight
        }
        splittedText = doc.splitTextToSize(comment, (pdfInMM-lMargin-rMargin));
        doc.setFontSize(12)
        doc.setFontType('normal')
        doc.text(lMargin, yPos, splittedText);
      })
  }
  let pageCount = doc.internal.getNumberOfPages();
  doc = createFooter(doc, pageCount);
  doc = createHeader(doc, pageCount);
  doc.save("EthQuestion_Comments.pdf");

}

const createHeader = (document, pageCount) => {
  for(let i = 1; i <= pageCount; i++) {
    if (i == 1) {
      document.setPage(i)
      document.setTextColor(0)
      document.setFontSize(24)
      document.text(15, 30, "Ethereum Question & Answering System");
      document.setLineWidth(0.5)
      document.line(15, 33, 190, 33)
    } else {
      document.setPage(i)
      document.setTextColor(150)
      document.setFontSize(13)
      document.text(105, 30, "Ethereum Question & Answering System");
      document.setLineWidth(0.3)
      document.line(15, 33, 190, 33)
    }
  }
  return document
}

const createFooter = (document, pageCount) => {
  for(let i = 1; i <= pageCount; i++) {
    document.setPage(i)
    document.setFontSize(13)
    document.setTextColor(150)
    document.text(170, 285, "Page " + document.internal.getCurrentPageInfo().pageNumber + " of " + pageCount)
  }
  return document
}

export { exportQuestion, exportComments }
