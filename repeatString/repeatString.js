const repeatString = function(text, repeatAmount) {
    if (text == '') {
        return text;
    }

    if (repeatAmount == 1) {
        text = 'hey'
        return text;
    } 
    
    if (repeatAmount == 0) {
        text = '';
        return text;
    }
    
    if (repeatAmount == -1) {
        text = 'ERROR';
        return text;
    }
    
    else {
        let i = 0;
        do {
            i += 1
            text += 'hey'
        } while (i < repeatAmount-1);
        return text;
    } 
}

module.exports = repeatString
