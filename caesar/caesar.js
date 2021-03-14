const caesar = function(theString, seed) {
  // theString = "A"
  // seed  = 1;
//convvert each character to unicode
    function toUnicode(theString) {
        let unicodeString = '';
        for (var i=0; i < theString.length; i++) {
          var theUnicode = theString.charCodeAt(i).toString(10);
          while (theUnicode.length < 4) {
            theUnicode = 0 + theUnicode;
          }
          theUnicode = ' ' + theUnicode;
          unicodeString += theUnicode;
        }
        console.log(unicodeString);
        return unicodeString;
      }
      
const testUni  = toUnicode(theString).split(' ');
testUni.shift();

const decodedMessage = testUni.map(function (x) { 
  return parseInt(x, 10); 
});

const encodedMessage = decodedMessage.map(function (x) { 
  return x + seed; 
});

encodedMessage.toString();

return String.fromCharCode(...encodedMessage);





//check if letter (32 are spaces)

//put each unicode in an array


}



module.exports = caesar
