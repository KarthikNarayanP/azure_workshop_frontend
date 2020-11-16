import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Register from '../../../../../src/containers/register/Register';
import Request from '../../../../../src/shared/Request';
import { createMemoryHistory } from 'history';
import * as reportfactory from '../../../../utilities/reportfactory'

//jest.mock('Request');
describe('Register test', () => {

    let shallow;
    let history;
    beforeEach(() => {
        shallow = createShallow();
        history = createMemoryHistory('/home')
    });

    it('Register should match snapshot', () => {
        const component = shallow(<Register />);
        expect(component).toMatchSnapshot();
    });
    /*
    it('Register a user', () => {
        jest.spyOn(Request, 'post').mockResolvedValue({
            data:
            {
                firstName: 'sridhar',
                lastName: 'bandi',
                email: 'sridhar.bandi@mm.com',
                password: 'somepassword'
            }
        });
        const component = shallow(<Register />);
        component.find('#firstname').simulate('change', { target: { name: 'firstname', value: 'sridhar' } });
        component.find('#lastname').simulate('change', { target: { name: 'lastname', value: 'bandi' } });
        component.find('#registeremail').simulate('change', { target: { name: 'registeremail', value: 'sridhar.bandi@mm.com' } });
        component.find('#password').simulate('change', { target: { name: 'password', value: 'somepassword' } });
        component.find('#confirmpassword').simulate('change', { target: { name: 'confirmpassword', value: 'somepassword' } });
        component.find('#registerbutton').simulate('click');
        expect(component.state('err')).toBe('');
    });*/

    it('Register should display first name', () => {
        const wrapper = shallow(<Register history={history}/>);
        const firstanme = wrapper.find('#firstName')
        expect(firstanme.exists()).toBe(true);
        firstanme.simulate('click');
        firstanme.value = 'Hello';
        let textReceived = firstanme.value;
        expect(textReceived).toBe('Hello');
    });

    it("Register - Last name should be present", async () => {
        const lastnameID = process.env.lastnameID || '#lastName1';
        const wrapper = shallow(<Register history={history}/>);
        const lastname = wrapper.find(lastnameID)
        expect(lastname.exists()).toBe(true);
    });


    it('Should display Email', () => {
        const wrapper = shallow(<Register history={history}/>);
        const email = wrapper.find('#email')
        expect(email.exists()).toBe(true);
    })

    it('Should display Password', () => {
        const wrapper = shallow(<Register history={history}/>);
        const password = wrapper.find('#password')
        expect(password.exists()).toBe(true);
    });

    it('Should display Confirm Password', () => {
        const wrapper = shallow(<Register history={history}/>);
        const confirmpassword = wrapper.find('#confirmpassword')
        expect(confirmpassword.exists()).toBe(true);
    });
});