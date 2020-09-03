import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Home from '../../../../../src/containers/home/Home';

describe('Home test', () => {
    it("Container - Home should match snapshot", () => {
        let shallow = createShallow();
        const component = shallow(<Home />);
        expect(component).toMatchSnapshot();
    });
});