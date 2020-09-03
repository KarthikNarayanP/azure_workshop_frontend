import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Basket from '../../../../../src/containers/basket/Basket';

describe('Basket test', () => {
    it("Container - Basket should match snapshot", () => {
        const productCodes = '["foo"]';
        localStorage.setItem('items', JSON.stringify(productCodes));
        let shallow = createShallow();
        const component = shallow(<Basket />);
        expect(component).toMatchSnapshot();
    });
});