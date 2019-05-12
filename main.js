// Get the input field
var input = document.getElementById("generator");
var widthLine;
var fontSize;
var fontWeight;
var fontFamily;

document.addEventListener('DOMContentLoaded', (event) => {
    widthLine = 400;
    fontSize =12;
    fontWeight = 'bold';
    fontFamily = 'arial';
    document.getElementById("text").value = '';
    document.getElementById('widthLine').value = widthLine;
    setWidthLine(widthLine);
    console.log('DOMContentLoaded');
})

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

function setWidthLine(value) {
    document.getElementById('valueWidthLine').innerText = value;
}

function refactor() {
 var text = document.getElementById("text").value;
 var textArray = text.replace(/\n/g, ' ').split(' ');
 var textResult = [''];
 var j = 0;
 for (var i =0; i<textArray.length; i++) {
  while (
         getTextWidth(
             textResult[i],
             fontWeight + " " + fontSize+ "pt "  + fontFamily
             ) < widthLine &&
         textArray[j]
        ) {
    textResult[i] += textArray[j] + ' ';
    // console.log(getTextWidth(textResult[i], "bold 12pt arial"));
    j++;
  }
  textResult.push('');
 }
 document.getElementById('text_refactored').value = textResult.join('\n');
 console.log('refactor');
};

function changeWidthLine() {
    widthLine = document.getElementById('widthLine').value;
    setWidthLine(widthLine);
    refactor();
    // console.log(document.getElementById('widthLine').value);
    console.log('change width line');
}