// Get the input field
var input = document.getElementById("generator");

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

function refactor() {
 var text = document.getElementById("text").value;
 var textArray = text.replace(/\n/g, ' ').split(' ');
 var textResult = [''];
 var j = 0;
 for (var i =0; i<textArray.length; i++) {
  while (
         getTextWidth(textResult[i], "bold 12pt arial") < 400 &&
         textArray[j]
        ) {
    textResult[i] += textArray[j] + ' ';
    console.log(getTextWidth(textResult[i], "bold 12pt arial"));
    j++;
  }
  textResult.push('');
 }
 document.getElementById('text_refactored').value = textResult.join('\n');
};

