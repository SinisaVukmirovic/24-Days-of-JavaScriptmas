function centuryFromYear(year) {
    const century = 100;
    const centuryOfYear = Math.ceil(year / century);

    return centuryOfYear;
}

console.log(`Century: `, centuryFromYear(1985));
console.log(`Century: `, centuryFromYear(2000));
console.log(`Century: `, centuryFromYear(2020));