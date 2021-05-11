import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { ServantScreen } from "../../../components/servants/ServantScreen";

describe('Pruebas en <ServantScreen />', () => {
    
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };
    
    test('Debe de mostrar el componente <Redirect /> si no hay argumentos en el URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/servant']}>
                <ServantScreen history={historyMock}/>
            </MemoryRouter>
        );

        expect( wrapper.find('Redirect').exists() ).toBe(true);
        
    });

    test('Debe de mostrar un servant si el parámetro existe y se encuentra', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/servant/saber-artoria']}>
                <Route path="/servant/:servantId" component={ServantScreen} />
            </MemoryRouter>
        );

        expect( wrapper.find('h3').exists() ).toBe( true );

    });

    test('Debe de regresar a la pantalla anterior con push', () => {
        
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/servant/saber-artoria']}>
                <Route
                    path="/servant/:servantId"
                    component={ () => <ServantScreen history={historyMock} /> }
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        
        expect( historyMock.push ).toHaveBeenCalledWith('/saber');
        expect( historyMock.goBack ).not.toHaveBeenCalled();

    });

    test('Debe de regresar a la pantalla anterior con goBack', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/servant/saber-artoria']}>
                <Route
                    path="/servant/:servantId"
                    component={ () => <ServantScreen history={historyMock} /> }
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        
        expect( historyMock.push ).not.toHaveBeenCalled();
        expect( historyMock.goBack ).toHaveBeenCalled();

    });
    
    test('Debe de llamar el redirect', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/servant/saber-artoria33442323']}>
                <Route
                    path="/servant/:servantId"
                    component={ () => <ServantScreen history={historyMock} /> }
                />
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('');

    });
    
});