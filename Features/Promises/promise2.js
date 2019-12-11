const userLeft=false
const userWathingCatMeme=true

//using normal function
/*
funcion watchTutorialCallBack(callback,errCallback){
    if(userLeft){
        errCallback({
            name:'User Left',
            msg:':('
        })
    }
    else if(userWathingCatMeme){
        errCallback({
            name:'Usr watchin cat Meme',
            msg:'webDevSimplified < Cat'
        })
    }
    else{
        callback('thubsup and subscribe')
    }
}

watchTutorialCallBack((msg)=>{
    console.log('Success:'+msg)
},(error)=>{
    console.log(error.name + ' ' + error.msg)
})

*/

//using promises

function watchTutorialPromise() {
    return new Promise((resolve,reject)=>{

        if(userLeft){
           reject({
                name:'User Left',
                msg:':('
            })
        }
        else if(userWathingCatMeme){
            reject({
                name:'Usr watching cat Meme   ',
                msg:'~webDevSimplified < Cat'
            })
        }
        else{
            resolve('thubs up and subscribe')
        }
    })  
}
watchTutorialPromise().then((msg)=>{
    console.log('Success:'+msg)
}).catch((error)=>{
    console.log(error.name + ' ' + error.msg)
})

