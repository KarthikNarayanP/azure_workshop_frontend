import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Login from '../../../../../src/containers/login/Login';
import Request from '../../../../../src/shared/Request';

//jest.mock('Request');
describe('Login test', () => {

    let shallow;
    beforeEach(() => {
        shallow = createShallow();
    });

    it("Container - Login should match snapshot", () => {
        const component = shallow(<Login />);
        expect(component).toMatchSnapshot();
    });
/* 
    
    let testcaseName1 = "Container - Login Functionality Simulated Test"
    let testdescription1 = "To Validate if Container - Login Functionality is Simulated Correctly";
    it(testcaseName, async () => {
      let testParameter = await reportfactory.createTestReport(testcaseName1, '', testdescription1);
      try{
        jest.spyOn(Request, 'post').mockResolvedValue({
            data:
            {
                firstName: 'sridhar',
                lastName: 'bandi',
                email: 'sridhar.bandi@mm.com',
                password: 'somepassword'
            }
        });
        const component = shallow(<Login />);
        component.find('#email').simulate('change', { target: { name: 'email', value: 'sridhar.bandi@mm.com' } });
        component.find('#password').simulate('change', { target: { name: 'password', value: 'somepassword' } });
        component.find('#buttonlogin').simulate('click');
        expect(component.state('err')).toBe('');
      await reportfactory.reportApi("Container - Login Functionality Should be Simulated", "Container - Login Functionality is Simulated", '', 'pass', testParameter);
    }catch(err){
      await reportfactory.reportApi("Container - Login Functionality Should be Simulated", "Container - Login Functionality is Simulated", '', 'fail', testParameter);
    }
    finally {
        await reportfactory.endTestReport(testParameter);
      }
  
    });*/
}); 