import { servants } from '../data/servants';

export const getServantById = ( id ) => {

    return servants.find( servant => servant.id === id );
};