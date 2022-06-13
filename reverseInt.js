function reverseInt(n) {
    var arr = n.toString().split('').reverse();
 
    var sign = Math.sign(n);
    if(sign === -1){
        return (parseInt((Math.abs(n).toString().split('').reverse().join('')),10)) * sign;
    }else{
        return parseInt(n.toString().split('').reverse().join(''));
    }
}

console.log(reverseInt(1234));
console.log(reverseInt(-20050));