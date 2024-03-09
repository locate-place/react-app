/**
 * Converts given integer number to roman number.
 *
 * @param number
 */
const numberToRoman = (number: number): string =>
{
    const valueSymbols: [number, string][] = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let romanNumeral = '';

    for (const [value, symbol] of valueSymbols) {
        while (number >= value) {
            number -= value;
            romanNumeral += symbol;
        }
    }

    return romanNumeral;
}

/*
 * Export functions.
 */
export {
    numberToRoman
}
