import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getServantById } from '../../selectors/getServantById';

export const ServantScreen = ({ history }) => {

    const { servantId } = useParams();

    const servant = useMemo(() => getServantById( servantId ), [ servantId ]);
    

    if ( !servant ){
        return <Redirect to="/" />;
    }

    const {
        servant:name,
        servantClass,
        noblePhantasm,
        region,
        source
    } = servant;

    const handleReturn = () => {

        if( history.length <= 2 ){
            history.push(`/${servantClass.toLowerCase()}`);
        }
        else{
            history.goBack();  
        }

    };

    return (
        <div className="row mt-5 animate__animated animate__fadeInLeft animate__faster">
            <div className="col-4">
                <img
                    src={`../assets/servants/${ servantId }.png`}
                    alt={ name }
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{ name }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Class: </b> { servantClass } </li>
                    <li className="list-group-item"> <b>Noble Phantasm: </b> { noblePhantasm } </li>
                    <li className="list-group-item"> <b>Region: </b> { region } </li>
                    <li className="list-group-item"> <b>Origin: </b> { source } </li>
                </ul>

                <h5> Origin </h5>
                <p>{ source }</p>

                <button
                    className="btn btn-outline-secondary"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
};
