import React, { useMemo } from 'react';
import queryString from 'query-string';
import { ServantCard } from '../servants/ServantCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router';
import { getServantByName } from '../../selectors/getServantByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    
    const { q = '' } = queryString.parse(location.search);    
    const [ formValues, handleInputChange ] = useForm( { searchText: q } );
    const { searchText } = formValues;
    
    const servantsFiltered = useMemo(() => getServantByName( q ), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    };

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="find a servant"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn my-1 btn-outline-primary"
                            >
                                Search...
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    { 
                        ( q === '' ) ?
                            <div className="alert alert-info">
                                Search a servant
                            </div>
                        : ( servantsFiltered.length === 0 ) &&
                            <div className="alert alert-danger">
                                Servant not found
                            </div>
                    }

                    {/* { ( q === '' )
                        &&
                        <div className="alert alert-info">
                            Search a servant
                        </div>
                    }

                    { ( q !== '' && servantsFiltered.length === 0 )
                        &&
                        <div className="alert alert-danger">
                            Servant not founded
                        </div>
                    } */}

                    {
                        servantsFiltered.map( servant => (
                            <ServantCard
                                key={servant.id}
                                { ...servant }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};
