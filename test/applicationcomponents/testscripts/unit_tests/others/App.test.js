import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import App from '../../../../../src/App';


describe('App test', () => {

    it('App should match snapshot', () => {
        let shallow = createShallow();
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});