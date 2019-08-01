function longestEvenWord(sentence) {
    let snt=sentence.split(' ')
    let prevword=0
     word=''

    snt.forEach(element => {
        if(element.length%2===0){
            if(element.length>prevword)
            {
                word=element
                prevword=element.length
            }
        }
    });

    return word

}

console.log(longestEvenWord('It is a pleasant day today'))