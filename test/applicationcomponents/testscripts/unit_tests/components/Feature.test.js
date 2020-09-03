import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Feature from '../../../../../src/components/feature/Feature';

describe('Feature test', () => {
    it("Component - Feature should match snapshot",  () => {
        let shallow = createShallow();
        const component = shallow(<Feature/>);
        expect(component).toMatchSnapshot(); 
    });
});