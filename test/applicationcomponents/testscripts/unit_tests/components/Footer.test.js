import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Footer from '../../../../../src/components/footer/Footer';

describe('Footer test', () => {
    let testcaseName = "Component - Footer should match snapshot";
    it(testcaseName,  () => {
        let shallow = createShallow();
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });
});