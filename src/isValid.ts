function isValid(s: string): boolean {
    const stack: string[] = []
    for (let c of s.split("")) {
        if (c == '(') {
            stack.push(')')
        } else if (c == '{') {
            stack.push('}')
        } else if (c == '[') {
            stack.push(']')
        } else if (stack.length == 0 || c != stack.pop()) {
            return false
        }
    }
    return stack.length == 0
};

console.log(isValid("()"))