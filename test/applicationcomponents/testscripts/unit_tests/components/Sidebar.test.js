import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Sidebar from '../../../../../src/components/sidebar/Sidebar';

describe('Sidebar test', () => {
    let shallow;
    beforeEach(() => {
        shallow = createShallow();
    });

    it("Component - Sidebar should match snapshot",  () => {
        let shallow = createShallow();
        const component = shallow(<Sidebar />);
        expect(component).toMatchSnapshot();
    });

    it("Component - Sidebar login Click Validation",  () => {
        const mProps = { history: { push: jest.fn() } };
        const component = shallow(<Sidebar.WrappedComponent {...mProps}/>);
        component.setState({ drawer: true });
        component.find('#login').simulate('click');
        expect(mProps.history.push).toBeCalledWith('/login');
    });

    it("Component - Sidebar logout Click Validation",  () => {
        const mProps = { history: { push: jest.fn() } };
        const component = shallow(<Sidebar.WrappedComponent {...mProps}/>);
        component.setState({ drawer: true, auth: true });
        component.find('#logout').simulate('click');
        expect(mProps.history.push).toBeCalledWith('/login');
    });

    
    it("Component - Sidebar All Products Click Validation",  () => {
        const mProps = { history: { push: jest.fn() } };
        const component = shallow(<Sidebar.WrappedComponent {...mProps}/>);
        component.setState({ drawer: true});
        component.find('#all-products').simulate('click');
        expect(mProps.history.push).toBeCalledWith('/products/all');
    });

    it("Component - Sidebar Home Click Validation",  () => {
        const mProps = { history: { push: jest.fn() } };
        const component = shallow(<Sidebar.WrappedComponent {...mProps}/>);
        component.setState({ drawer: true});
        component.find('#home').simulate('click');
        expect(mProps.history.push).toBeCalledWith('/');
    });
    
});