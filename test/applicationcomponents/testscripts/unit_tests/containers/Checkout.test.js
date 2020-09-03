import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Checkout from '../../../../../src/containers/checkout/Checkout';
import { createMemoryHistory } from 'history';

describe('Checkout test', () => {

    let shallow;
    beforeEach(() => {
        shallow = createShallow();
    });

    it('Checkout should match snapshot', () => {
        const history = createMemoryHistory('/')
        const component = shallow(<Checkout history={history} />);
        expect(component).toMatchSnapshot();
    });

    it('Checkout error message', () => {
        const history = createMemoryHistory('/')
        const component = shallow(<Checkout history={history} />);
        component.find('#buttonnext').simulate('click');
        expect(component.state('showdaerror')).toBe(true);
    });

    it('Checkout valid data', () => {
        const history = createMemoryHistory('/')
        const component = shallow(<Checkout history={history} />);
        component.setState({ daisvalid: true});
        component.find('#buttonnext').simulate('click');
        expect(component.state('daisvalid')).toBe(true);
    });

    it('Checkout back button', () => {
        const history = createMemoryHistory('/')
        const component = shallow(<Checkout history={history} />);
        component.find('#backbutton').simulate('click');
        expect(component.state('activeStep')).toBe(-1);
    });
});