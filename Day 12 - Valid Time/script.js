function validTime(str) {
    let [hours, mins] = str.split(':');

    hours = parseInt(hours);
    mins = parseInt(mins);

    if (hours < 0 || hours > 23 || mins < 0 || mins > 59) {
        return false;
    }
    
    return true;
}

console.log(validTime('12:46'));
console.log(validTime('03:86'));
console.log(validTime('23:07'));
console.log(validTime('33:33'));