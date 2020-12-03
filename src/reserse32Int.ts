function reverse(x: number): number {
    let max: number = Math.pow(2, 31) - 1
    let min: number = -Math.pow(2, 31)
    let rev: number = 0
    while (x != 0) {
        let pop = x % 10
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
        if (rev > Math.floor(max / 10) || (rev == Math.floor(max / 10) && pop > 7)) {
            return 0
        }
        if (rev < Math.ceil(min / 10) || (rev == Math.ceil(min / 10) && pop < -8)) {
            return 0
        }
        rev = rev * 10 + pop
    }
    return rev
};