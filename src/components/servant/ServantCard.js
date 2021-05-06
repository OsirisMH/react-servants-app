import React from 'react';
import { Link } from 'react-router-dom';

export const ServantCard = ({
    id,
    servant,
    servantClass,
    noblePhantasm,
    region,
    source,
}) => {
    return (
        <div className="col">
            <div className="card mb-3" style={ { maxWidth: 540 } }>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${process.env.PUBLIC_URL}/assets/servants/${ id }.png`} className="card-img" alt={ servant } />
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

                            <Link to={`${process.env.PUBLIC_URL}/servant/${ id }`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
