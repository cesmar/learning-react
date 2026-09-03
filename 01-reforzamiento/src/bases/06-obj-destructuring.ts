
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};
/*
const name = person.name;
const age = person.age;
const key = person.key;
*/
const {name: ironmanName, age, key} = person;

console.log({ironmanName, age, key});


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ( {key, name, age, rank = 'sin rango'}: Hero) => {

    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank
    };
};

// const context = useContext(person);
// console.log(context);

const { 
    rank, 
    keyName, 
    user
    // user: { name } 
} = useContext(person);
const { name } = user;

console.log({rank, keyName, name});
