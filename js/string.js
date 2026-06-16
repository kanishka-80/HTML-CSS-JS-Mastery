//  length

let name="   Kanishka  "
console.log(name.length);

// uppercase
console.log(name.toUpperCase());

// lowercase
console.log(name.toLowerCase());

// trim
console.log(name.trim());

// includes: check the specific string is present or not in main string
let n="Vishal is not handsome"
console.log(name.includes("not"));

// startswith: checks whether the string strtswith that word
console.log(n.startsWith("Vishal"));

// endswith
console.log(n.endsWith("so"));

// indexOf: checks the is present on which index
console.log(n.indexOf("is"));

// slice: returns the elements within range
console.log(n.slice(1,2))

// substring
console.log(n.substring(1,4))

// relace
console.log(n.replace("vishal","bunty"))

// replaceall:replace all occurence
console.log(n.replaceAll("vishal","bunty"))

// split
console.log(n.split(" "));

