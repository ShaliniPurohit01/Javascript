
//arrow funcion declaration syntax
/* 

//function with 2 argumnts 
function sum(a,b){
    return a+b;
}

let sum2=(a,b)=> a+b


// function with 1 argumnts 
function isPositive(number){
    return number >=0
} 

let isPositive2=(number)=> number >= 0

//function with zero argumnts 
function randomNumber(){
    return Math.random
}

let randomNumber2=()=>Math.random



//anonymus function  
document.addEventListener('click',function(){
    console.log('click')
})

document.addEventListener('click',()=>console.log('click'))

*/

//example

class Person{
    constructor(name){
        this.name=name
    }

    printNameArrow(){
        setTimeout(()=>{
            console.log('Function:'+this.name)
        },100)
    }
    printNameFunction(){
        setTimeout(function(){
            console.log('Function:'+this.name)
        },100)
    }
}

let p=new Person('shaily')
p.printNameArrow()
p.printNameFunction()
console.log(this.name)

