export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// type Owner = 'DC' | 'Marvel';
export enum Owner {
    DC = 'DC', // 0
    Marvel = 'Marvel' // 1
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  },
  {
    id: 6,
    name: 'Green Lantern',
    // owner: 'DC'
    owner: Owner.DC,
  }
];

// export default heroes;
