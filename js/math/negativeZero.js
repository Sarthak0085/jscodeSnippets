const isNegativeZero = num => {
    console.log(num == 0 && 1 / num == -Infinity)
}

isNegativeZero(0); //false
isNegativeZero(-0); //true