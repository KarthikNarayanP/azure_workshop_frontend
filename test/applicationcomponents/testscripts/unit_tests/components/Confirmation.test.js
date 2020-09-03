import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Confirmation from '../../../../../src/components/confirmation/Confirmation';


describe('Confirmation test', () => {
    it("Component - Confirmation should match snapshot",  () => {
      let shallow = createShallow();
      const component = shallow(<Confirmation />);
      expect(component).toMatchSnapshot();
    });

});