function maxChar(str){
    const strArr = str.split('');
    const mpString = {};
    max = 0;
    mxChar = '';

    for(const e of strArr){
        if(mpString[e]){
            mpString[e] += 1;
        }else{
            mpString[e] = 1;
        }
    }
    console.log(mpString);
    
    for(let char in mpString){
        if(mpString[char] > max){
            max = mpString[char];
            mxChar = char;
        }
    }
    
    return mxChar;
}