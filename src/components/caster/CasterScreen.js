import React from 'react'
import { ServantList } from '../servant/ServantList'

export const CasterScreen = () => {
    return (
        <div>
            <h1>CasterScreen</h1>        
            <hr />

            <ServantList servantClass="Caster" />
        </div>
    )
};
