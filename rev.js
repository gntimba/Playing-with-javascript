function reverseWords(input) {
    let reverse=""
 input=input.split(" ")
 for(let i=0;i<input.length;i++){
let str=input[i]
console.log(str)
let temp=""
let puc=""
 for(let x= 0; x<str.length; x++){
     if(str[x]==='.'){
    puc='.'
     }else{
    temp =str[x]+temp;}
    
    }
    reverse+=temp+puc+" "
 }
 return(reverse)

}

console.log(reverseWords("A helicopter is a type of rotorcraft."))