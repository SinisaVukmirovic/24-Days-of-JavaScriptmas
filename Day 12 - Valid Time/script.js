function validTime(str) {
    const hoursMinsArr = str.split(':');
    const hours = parseInt(hoursMinsArr[0]);
    const mins = parseInt(hoursMinsArr[1]);

    if (hours < 0 || hours > 23 || mins < 0 || mins > 59) {
        return false;
    }
    
    return true;
}

console.log(validTime('12:46'));
console.log(validTime('03:86'));
console.log(validTime('23:07'));
console.log(validTime('33:33'));