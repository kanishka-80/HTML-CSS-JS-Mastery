// // Question 6: Return the squares of even no.
// const nums=[1,2,3,4,5,6,7,8];

// const q6=nums.filter(function(num){
//     return num%2==0
// }).map(function(num){
//     return num*num;
// })
// console.log(q6);

// // same in one line
// // const q6ar=nums.filter(num => num%2==0).map(n => n*n).
// // console.log(q6ar)

// // Q7: Find 

// //Q8: Name of Passed students

// const students=[
//     {name:"A",marks:35},
//     {name:"B",marks:75},
//     {name:"C", marks:45},
//     {name:"D", marks:25}
// ];

// const q8=students.filter(function(mark){
//     return mark.marks > 40;
// }).map(function(name){
//     return name.name;
// });

// // const q8ar=students.filter(mark => markss > 40).map(name => name.name);
// console.log(q8);
// // console.log(q8ar);

// // Q9: Average marks of student

// const marks =[80,90,70,60];

// const q9=marks.reduce(function(total,n){
//     return total+=n;
// },0)/marks.length;
// // arrow function

// const q9ar=marks.reduce((total,n)=> total+=n,0)/marks.length;
// console.log(q9);
// console.log(q9ar);

// // Q10: Count Occurence of Elements
// const fruits=[
//     "apple",
//     "banana",
//     "apple",
//     "orange",
//     "banana",
//     "apple"
// ];

// //return: {apple:3, banana:2, orange:1}
// const count = fruits.reduce(function (occ, curr) {
//     occ[curr] = (occ[curr] || 0) + 1;
//     return occ;
// }, {});
// console.log(count);

// //const count = fruits.reduce((occ,fruit) => {occ[fruit] = (occ[fruit] || 0) + 1; return occ, {}});

const st=[
    {
        name:"Utkarsh",
        marks:[80,90,85]
    },
    {
        name:"Yukta",
        marks:[95,92,85]
    },
    {
        name:"Navneet",
        marks:[60,70,65]
    }
];
const topStudents = st.map((s) => {
    return{
        name: s.name,
        avg:s.marks.reduce((total,m) => {
            return total + m;
        },0)/s.marks.length
    };
}).filter((s) => s.avg >= 85).sort((a, b) => b.avg - a.avg).map(s => s.name);
console.log(topStudents);

// Group Products by category

const products=[
    {name: "laptop", category:"Electronics"},
    {name:"Phone", category:"Electronics"},
    {name:"Shirt", category:"Clothing"}
];


const p = products.reduce(function(group, product){
    if(!group[product.category]){
        group[product.category] = [];
    }
    group[product.category].push(product.name);
    return group;
}, {});
console.log(p);