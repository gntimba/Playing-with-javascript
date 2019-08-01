function reverseWords(inputWords) {
    let reverse = ""
    inputWords = inputWords.split(" ")
    let i = inputWords.length;
    for (let x = 0; x < inputWords.length; x++) {
        i--
        reverse += inputWords[i] + " "
    }
    return reverse
}
// console.log(reverseWords("A helicopter is a type of rotorcraft."))

function sortDates(dates) {
    dates.sort(function (a, b) {
        a = new Date(a);
        b = new Date(b);
        return a > b ? -1 : a < b ? 1 : 0;
    });

    return dates
}

function getFirstTwoItemsWithoutPair(list) {
    let arra = []
    list.forEach(element => {
        i = 0
        for (let x = 0; x < list.length; x++) {
            if (element === list[x])
                i++
        }
        if (i === 1)
            arra.push(element)

       

    });
    let li= []
    for (let x = 0; x <2; x++) {
    li.push(arra[x])
    }

    return li
}
// let list2 = [2, 3, 4, 3, 5, 2, 6, 12, 6]
// console.log(getFirstTwoItemsWithoutPair(list2))

const so='moo'

function mak(){
    console.log(' myyy',so)
    const so ='baa'
    console.log(' myyy',so)
}
function log(){
    console.log(this)
}
new log()

