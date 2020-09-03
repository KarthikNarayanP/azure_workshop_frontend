import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import DeliveryAddress from '../../../../../src/components/deliveryaddress/DeliveryAddress';

describe('DeliveryAddress test', () => {    
    it("Component - DeliveryAddress should match snapshot",  () => {
        let shallow = createShallow();
        const component = shallow(<DeliveryAddress />);
        expect(component).toMatchSnapshot();
      });
});