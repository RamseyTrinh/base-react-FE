export const compactNumber = (number) => {
    const suffixes = ['', 'nghìn', 'triêu', 'tỷ', 't']
    const suffixMax = Math.floor(('' + number).length / 3)
    let shortValue = parseFloat(
        (suffixMax !== 0 ? (number / Math.pow(1000, suffixMax)) : number).toPrecision(2),
    )
    if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1)
    }
    return shortValue + ' ' + suffixes[suffixMax]
}