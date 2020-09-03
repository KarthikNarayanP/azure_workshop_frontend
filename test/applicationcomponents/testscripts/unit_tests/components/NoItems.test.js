import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import NoItems from '../../../../../src/components/noitems/NoItems';

describe('NoItems test', () => {
    it("Component - NoItems should match snapshot",  () => {
       
          let shallow = createShallow();
          const component = shallow(<NoItems />);
          expect(component).toMatchSnapshot();
      });
});