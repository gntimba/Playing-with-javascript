function compareStrings(s1, s2) {
    // Write your code here

    let temp1 = []
    let temp2 = []

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === "#") {
            temp1.pop();
        } else {
            temp1.push(s1[i])
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (s1[i] === "#") {
            temp2.pop();
        } else {
            temp2.push(s1[i])
        }
    }

    temp1 = temp1.join("");
    temp2 = temp2.join("");
    if (temp1 === temp2)
        return 1
    else
        return 0
}

console.log(compareStrings("axx#bb#c","axbd#c#c99"))