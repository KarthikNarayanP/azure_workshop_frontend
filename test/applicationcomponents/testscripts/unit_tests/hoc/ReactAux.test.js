import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ReactAux from '../../../../../src/hoc/ReactAux';


describe('ReactAux test', () => {

    it('ReactAux should match snapshot', () => {
        let shallow = createShallow();
        const component = shallow(<ReactAux />);
        expect(component).toMatchSnapshot();
    });
});