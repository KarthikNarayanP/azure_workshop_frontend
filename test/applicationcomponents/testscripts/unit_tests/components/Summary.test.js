import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Summary from '../../../../../src/components/summary/Summary';

describe('Summary test', () => {
    it("Component - Summary should match snapshot", () => {
        let shallow = createShallow();
        const component = shallow(<Summary />);
        expect(component).toMatchSnapshot();
    });
});