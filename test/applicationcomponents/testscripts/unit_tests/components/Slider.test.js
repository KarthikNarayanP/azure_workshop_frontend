import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Slider from '../../../../../src/components/slider/Slider';

describe('Slider test', () => {
    it("Component - Slider should match snapshot",  () => {
        let shallow = createShallow();
        const component = shallow(<Slider />);
        expect(component).toMatchSnapshot();
    });
});