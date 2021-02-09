function usernamesSystem(u) {
    // Write your code here
    
    let temp=[]
    let counter=0
    //temp[0]=u[0]
    let isFound=false
    while(counter<u.length){

        for (let index = 0; index < temp.length; index++) {
            if(temp[index]===u[counter]){
                isFound=true
                
                console.log(temp[index].replace("alex"))
                break
            }
         
         }
         if(isFound){
            temp.push(u[counter]+"1")
            isFound=false
         }
         else{
            temp.push(u[counter])
         }
        counter++
    }

    return temp

}

temp=[ 'alex', 'xylos', 'alex', 'alan' ]
console.log(usernamesSystem(temp))