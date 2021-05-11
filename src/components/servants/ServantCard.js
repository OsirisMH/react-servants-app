import React from 'react';
import { Link } from 'react-router-dom';

import { servantImages } from '../../helpers/servantImages';

export const ServantCard = ({
    id,
    servant,
    servantClass,
    noblePhantasm,
    region,
    source,
}) => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card mb-3" style={ { maxWidth: 540 } }>
                <div className="row g-0">
                    <div className="col-md-4">
                        {/* <img src={`./assets/servants/${ id }.png`} className="card-img" alt={ servant } /> */}
                        <img src={ servantImages(`./${ id }.png`).default } className="card-img" alt={ servant } />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ servant }</h5>
                            <p className="card-text">{ noblePhantasm } </p>

                            {/* {
                                ( alter_ego !== characters )
                                    && <p className="card-text">{ characters }</p>
                            } */}

                            <p className="card-text">
                                <small className="text-muted">{ source }</small>
                            </p> 

                            <Link to={`./servant/${ id }`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
