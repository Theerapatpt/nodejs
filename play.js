const name = 'Peter'; 
let age = 24; 
const hasHobbies = true; 


age = 30; 

const summarizationUser = (userName, userAge, userHobby) =>  {
    return (
    'Name is ' + 
    userName + 
    ', age is ' + 
    userAge + 
    ' and the user has hobbies:' + 
    userHobby
    ); 
}; 

// const addOne = a => a + 1; 
// const add = (a, b) => (a + b);
const addRandom = () => 1 + 2; 

// console.log(addOne(1))
// console.log(add(1, 2));

console.log(addRandom()); 

console.log(summarizationUser(name, age, hasHobbies))