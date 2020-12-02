function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false
    }
    let revertedNumber: number = 0
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + Math.floor(x % 10)
        x = Math.floor(x / 10)
    }
    return x == revertedNumber || x == Math.floor(revertedNumber / 10)
};

console.log(isPalindrome(11))