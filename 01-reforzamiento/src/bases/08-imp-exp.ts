import { heroes, Owner, type Hero } from './data/heroes.data';

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find( (hero) => {
        return hero.id === id
    })

    // if (!hero) {
    //     throw new Error(`No existe un héroe con el id ${id}`)
    // }
    
    return hero;
}

// console.log(getHeroById(10));


export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const heroesByOwner = heroes.filter( (hero) => 
        hero.owner === owner
    );

    // if (heroesByOwner.length == 0) {
    //     throw new Error(`No existen héroes con el owner ${owner}`)
    // }
    
    return heroesByOwner;
}

/*
export const getHeroesByOwner2 = (owner: Owner): Hero[] => 
    heroes.filter( (hero: Hero) => hero.owner === owner );
*/

console.log(getHeroesByOwner(Owner.Marvel));