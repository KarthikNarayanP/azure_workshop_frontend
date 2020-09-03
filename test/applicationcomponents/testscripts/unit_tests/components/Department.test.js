import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Department from '../../../../../src/components/sidebar/Department';

describe('Department test', () => {
    it("Component - Department should match snapshot",  () => {
        let shallow = createShallow();
        const component = shallow(<Department/>);
        expect(component).toMatchSnapshot();
    });
});