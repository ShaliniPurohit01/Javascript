const recordVid1=new Promise((resolve,reject)=>{
    resolve('video one recorded')
})

const recordVid2=new Promise((resolve,reject)=>{
    resolve('video two recorded')
})

const recordVid3=new Promise((resolve,reject)=>{
    resolve('video three recorded')
})

//promise all
Promise.all([
    recordVid1,
    recordVid2,
    recordVid3  
    ]).then((msgs)=>{  //it will return all values
    console.log(msgs)
})

//promise race
Promise.race([
    recordVid1,
    recordVid2,
    recordVid3
    ]).then((msg)=>{  //it will return only single value
    console.log(msg)
})
