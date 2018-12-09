const person = {
    name: 'Peter',
    age: 24,
    greet() {
        console.log('HI, I am ' + this.name)
    }
};

const printName = ({
    name
}) => {
    console.log(name);
}

printName(person);

const {name,age} = person;
console.log(name, age);
// printAge(person);
// const copiePerson = { ...person
// };
// console.log(copiePerson);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }

// // console.log(hobbies.map(hobby => 'Hobby' + hobby));
// // console.log(hobbies);


// // hobbies.push('Programming');
// const copieArray = [...hobbies];
// console.log(copieArray);

// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1, 2, 3, 4));