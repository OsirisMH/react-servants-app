import { servants } from '../data/servants';

export const getServantsByClass = ( servantClass ) => {
    
    const validClasses = ['Saber', 'Caster'];

    if ( !validClasses.includes( servantClass ) ){
        throw new Error(`Clase "${ servantClass }" no es correcto`);
    }

    return servants.filter( servant => servant.servantClass === servantClass );
};