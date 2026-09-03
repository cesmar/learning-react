
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    addres: Address;
    
}

interface Address {
    postalCode: string;
    city: string;
}


const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    addres: {
        postalCode: 'ABC123',
        city: 'New York',
    }
};



console.log(ironman);

/*
// const spiderman = {...ironman};
const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.addres.city = 'San José';

console.log({spiderman, ironman});
*/

