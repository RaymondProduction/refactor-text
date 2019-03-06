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
 text = text.replace(/\n/g, ' ');
 var textArray = text.split(' ');
 var textResult = [''];
 var j = 0;
 for (var i =0; i<textArray.length; i++) {
  debugger;
  while (getTextWidth(textResult[i], "bold 12pt arial") < 100) {
    textResult[j] += textArray[j] + ' ';
    console.log(textResult);
    j++;
  }
  textResult.push('');
 }
 console.log(getTextWidth(text, "bold 12pt arial"));
 // text = text.replace(/\n/g, '').replace(/(.{15})/g, '$1\n');
 console.log(textResult);
 document.getElementById('text_refactored').value = text;
 console.log(document.getElementById("text").value);
// https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
};

