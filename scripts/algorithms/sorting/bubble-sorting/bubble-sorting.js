/**
 * [bubbleSorting Sort an array using bubble sorting algorithm. It processes only single-level array]
 * @param  {Array} array [The array you want to sort]
 * @param  {Boolean} order [The order of the sorting: true - ascending, false - descending]
 * @return {Array}      [Returns new sorted array]
 */
function bubbleSorting(array, order = true) {

    if (!Array.isArray(array)) {
        throw new Error('You must supply an array, but given: ', Object.prototype.toString.call(array));
    }

    const newArray = [...array];
    for (let i = 0, length = newArray.length; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (
                order ? 
                newArray[j] > newArray [j+1] : 
                newArray[j] < newArray [j+1]
                ) {
                let temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }
    }

    return newArray;
}
