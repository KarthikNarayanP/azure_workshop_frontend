import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import SmallThumb from '../../../../../src/components/productthumb/SmallThumb';

describe('SmallThumb test', () => {    
  it("Component - SmallThumb should match snapshot",  () => { 
    let shallow = createShallow();
    const data = {
      "productImage": "https://place-hold.it/300x500",
      "productCode": "ABC123",
      "productName": "Fitbit",
      "productPrice": "189.00"
    }
    const component = shallow(<SmallThumb data={data} />);
    expect(component).toMatchSnapshot();
  });
});