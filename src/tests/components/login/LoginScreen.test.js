import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

describe('Pruebas en <LoginScreen />', () => {
   
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    const historyMock = {
        replace: jest.fn()
    };

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue } >
            <LoginScreen history={ historyMock } />
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de realizar el dispatch y la navegación', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Osiris'
            }
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/');
       
        localStorage.setItem('lastPath', '/saber');
        handleClick();

        expect( historyMock.replace ).toHaveBeenCalledWith('/saber');
        
    });
    
});