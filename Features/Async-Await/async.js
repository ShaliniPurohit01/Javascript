function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to+ ${location}`)

        if(location === 'Google'){
            resolve('Google says hi')
        }
        else{
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('Processing response')
        resolve(`Extra information + ${response}`)
    })
}

async function doWork(){
    try{
        const response=await makeRequest('facebook')
        console.log('Response Recieved')

        const processedRespnse=await processRequest(reponse)
        console.log(processedRespnse)
    }
    catch(err){
        console.log(err)
    }
}
doWork()