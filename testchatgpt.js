import chatgpt from './chatgpt.js'


(async ()=>{
    var res = await chatgpt("who are you?")
    console.log(res)
})()
