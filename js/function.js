function greet(name, callback){
    console.log(`hello ${name}`);
    callback();
}

function goodbye(){
    console.log("goodbye");
}
greet("kanishka", goodbye);
console.log("Download Started");
 setTimeout(() =>{
    console.log("Download Completed");
 },5000);

//  setInterval(() => {
//     console.log("Show Data");
//  },2000);

//  To stop setInterval

let count=0;
const intervalId= setInterval(() => {
    console.log("Show Data");
    count++;
    if(count >= 5){
        clearInterval(intervalId);
    }
},1000);
                                                                                                                                 