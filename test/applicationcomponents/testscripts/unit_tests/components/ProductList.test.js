import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ProductList from '../../../../../src/components/productthumb/ProductList';

describe('ProductList test', () => {
  it("Component - ProductList should match snapshot",  () => {
  
    let shallow = createShallow();
    const data = {
      "productImage": "https://place-hold.it/300x500",
      "productCode": "ABC123",
      "productName": "Fitbit",
      "productPrice": "189.00"
    }
    const component = shallow(<ProductList data={data} />);
    expect(component).toMatchSnapshot();
  });
});