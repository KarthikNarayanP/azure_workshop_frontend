import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Header from '../../../../../src/components/header/Header';

describe('Header test', () => {
    it("Component - Header should match snapshot",  () => {
        let shallow = createShallow();
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
});