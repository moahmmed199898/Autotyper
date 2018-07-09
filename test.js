// var a = false;
// function test() {
//     let p =  new Promise((resolve,reject)=>{
//         let v = setInterval(()=>{
//             console.log("hello");
//             if(a){
//                 clearInterval(v);
//                 resolve();
//             }
//         })
//     })
//     a=p;
//     return p;
// }
// test().then(()=>{
//     console.log(a)
// })

// setTimeout(() => {
//     a= true
//     console.log(test())
// }, 2000);