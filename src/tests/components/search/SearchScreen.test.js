import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe('Pruebas en <SearchScreen />', () => {
   
    test('Debe de mostrarse correctamente con valores por defecto', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']} >
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a servant');

    });
    
    test('Debe de mostrar Okita y el input con el valor del queryString', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=okita']} >
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('okita');
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe de mostrar un error si no se encuentra el servant', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=altria']} >
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-danger').exists() ).toBe( true );
        expect( wrapper.find('.alert').text().trim() ).toBe('Servant not found');

    });

    test('Debe de llamar el push del history', () => {
        
        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=altria']} >
                <Route
                    path="/search"
                    component={ () => <SearchScreen history={ history } /> }
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'crane'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        
        expect( history.push ).toHaveBeenCalledWith(`?q=crane`);

    });
    
});
