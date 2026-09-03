
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// const [ p1, p2, p3 ] = characterNames;
// console.log({p1, p2, p3});

const [, , trunks] = characterNames;
console.log({ trunks });

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);



//Task
console.log('** Tarea **')

const useState = (value: string) => {
    return [
        value, 
        (newValue: string) => console.log(newValue)
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');