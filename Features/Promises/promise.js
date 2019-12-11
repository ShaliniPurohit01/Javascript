let p=new Promise((resolve,reject)=>{
    let a=1+1
    if(a == 2){
        resolve(' Success')
    }else
    {
        reject('Failed')
    }
})

p.then((msg)=>{
    console.log('this is in the then ' +msg)
}).catch((msg)=>{
    console.log('this is in catch '+msg)
})