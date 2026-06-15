// Using Array literal
let fruits=["Apple","Banana","Mango"];
// Using Array construcror
let fruits=newArray("Apple","Banana","Mango");
console.log(fruits.length);
// push
fruits.push("Lichi");
console.log(array);
// pop
fruits.pop();
console.log(fruits);
// unshift : insert element in starting
fruits.unshift("watermelon");
console.log(fruts);
// shift: removes the first element
fruits.shift();
console.log(fruits);
// includes: checks whether the element is present or not
console.log(fruits.includes("Mango"));
console.log(fruits.includes("watermelon"));
// indexof: returns the element's index
console.log(fruits.indexOf("Mango"));
// join
console.log(fruits.join("-"));
// slice: exclude right index
console.log(fruits.slice(1,3));
// splice:include right index
console.log(fruits.splice(1,4));

// normal for loop
for(var i=0;i,array.length;i++){
    console.log(array[i]);
}
// for of loop
for(let fruit of fruits){
    console.log(fruit);
}
// for each

fruits.forEach(function(i)){
    console.log(i);
}
// advance array method
// map: saaare elements par condition apply krega
const double=array.map(function(x){
     return x*2;
});
const  doubledemo=arr.map(x => x*2);
console.log(double);
console.log(doubledemo)
console.log(arr);

// filter: checks the condition jo bhi condition



// reduce: saare elements ko ek variable me convert kae dega

const sum= arr.reduce(function(sum,x){
    return sum+x;
},0);
const sum1=sum1=arr.reduce(function(sum,x){
    return sum+x;
});

const sum2=arr.reduce((sum,x)=>sum+x,0);
const sum3=arr.reduce((sum,x)=>sum+x);
console.log(sum);
console.log(sum1);
console.log(sum2);
console.log(sum3);

// find

const f=arr.find(function(x){
    return x==3;
});
const fdemo=arr.find(x=>x>3);
console.log(f);
console.log(fdemo);

// some(): batata hai ki condition elements satisfy kr rhe hai ya nhi
const s=arr.some(function(x){
    return x>3;
});
const sdemo=arr.some(x=>x>3);
console.log(s);
console.log(sdemo);

// every : batata h ki saaare elements condition satisfy kr rhe h ya ni

const e=arr.every(function(x){
    
})
