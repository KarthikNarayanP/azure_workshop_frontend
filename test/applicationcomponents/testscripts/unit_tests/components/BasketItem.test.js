import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import BasketItem from '../../../../../src/components/basketitem/BasketItem';

describe('BasketItem test', () => {
  it("Component - BasketItem should match snapshot",  () => {
    let shallow = createShallow();
    const data = {
      "productImage": "https://place-hold.it/300x500",
      "productCode": "ABC123",
      "productName": "Fitbit",
      "productPrice": "189.00"
    }
    const component = shallow(<BasketItem data={data} />);
    expect(component).toMatchSnapshot();
  });
});