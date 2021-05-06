import { servants } from "../data/servants";

export const getServantByName = ( name = '' ) => {
    
    if ( name === '' ){
        return [];
    }

    name = name.toLowerCase();
    return servants.filter( servant => servant.servant.toLowerCase().includes( name ) );

};