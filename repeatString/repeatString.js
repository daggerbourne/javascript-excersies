const repeatString = function(text, repeatAmount) {
  
    
    let i = 0;
    do {
        i += 1
        text += 'hey'
    } while (i < repeatAmount-1);
    return text;



        
 //       for (let i = 0; i < repeatAmount; i++) {
 //       text += 'hey'
 //       return text;
//}
}

module.exports = repeatString
