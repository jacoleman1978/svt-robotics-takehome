/*
-Input: numberString is a string with only numeric characters
        desiredStrLength is the desired length of the output string
-Output: returns a string with numeric characters after added enough preceding zeros to reach the desired output length
*/
const addPrecedingZeros = (numberString, desiredStrLength) => {
    let formattedNumString = numberString;

    while (formattedNumString.length < desiredStrLength) {
        formattedNumString = "0" + formattedNumString;
    }

    return formattedNumString
}

export default addPrecedingZeros;