const students=[  
{ name: "John",
  marks: [80, 90, 85] 
}, 
{ name: "Emma",
  marks: [95, 92, 98] 
}
]

const result = students.map(student => {
    const total = student.marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / student.marks.length;

    return {
        name: student.name,
        average: average
    };
});

console.log(result);

const revenue=[ 

{ category: "Electronics", amount: 500 }, 
{ category: "Books", amount: 100 }, 
{ category: "Electronics", amount: 300 }
]
const result = revenue.map(revenue => {
    const total=revenue.total.reduce((sum, amount) => sum + amount, 0 );

}); 
console.log(result)

const text = "The fox is quick. The fox is smart.";

const count = text
    .toLowerCase()
    .match(/\b\w+\b/g)
    .reduce((acc, word) => word === "fox" ? acc + 1 : acc, 0);

console.log(count);

const employees=[ 

{ name: "A", salary: 50000 }, 
{ name: "B", salary: 40000 }, 
{ name: "C", salary: 60000 }
]
const salary=employees.map(employees => employees.salary);
console.log(salary);
const result=salary.map(salary => {
    const total=salary.total.reduce((sum,salary) => sum + salary,0);
})

const products=[ 
{ name: "Laptop", stock: 5 }, 
{ name: "Phone", stock: 0 }, 
{ name: "Tablet", stock: 10 }
]

const availableProducts = products
    .filter(product => product.stock > 0)
    .map(product => product.name);

console.log(availableProducts);

const postAnalysis=[
{ postId: 1, likes: 100 }, 
{ postId: 2, likes: 200 } 
]

const likedPost= postAnalysis.map(postAnalysis =>{
    const total =postAnalysis.total.reduce((sum ,likes) => sum + likes,0);
})

const movies=[ 
{ title: "Movie A", rating: 8.5 }, 
{ title: "Movie B", rating: 6.0 }
]

const highRating= movies
      .filter(movies => movies.rating > 8)
      .map(movies => movies.title);
console.log(highRating);

