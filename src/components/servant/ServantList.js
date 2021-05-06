import React, { useMemo } from 'react';
import { getServantsByClass } from '../../selectors/getServantsByClass';
import { ServantCard } from './ServantCard';

export const ServantList = ({ servantClass }) => {

    const servants = useMemo(() => getServantsByClass( servantClass ), [ servantClass ]);
    // const servants = getServantsByClass( servantClass );

    return (
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-2 animate__animated animate__fadeIn animate__faster">
            {
                servants.map( servant => (
                    <ServantCard
                        key={ servant.id }
                        { ...servant }
                    />
                ))
            }
        </div>
    )
};
