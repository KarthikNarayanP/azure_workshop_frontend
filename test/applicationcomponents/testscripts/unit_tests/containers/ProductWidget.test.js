import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ProductWidget from '../../../../../src/containers/productswidget/ProductWidget';
import * as reportfactory from '../../../../utilities/reportfactory'

describe('ProductWidget test', () => {
    it("Container - ProductWidget should match snapshot", () => {
        const data = [
            {
                "id": 1234561,
                "productCode": "a214a774ce2a4e52b8fd85608458b59c",
                "productName": "Apple iPhone 6s Plus",
                "productImage": "Apple-iPhone-6s-Plus.jpg",
                "productDescription": "Lorem ipsum dolor sit amet",
                "productPrice": 488.8,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 1234562,
                "productCode": "83e50bc3a2ce47308ae8959720c3a206",
                "productName": "Apple iPhone 7",
                "productImage": "Apple-iPhone-7.jpg",
                "productDescription": "Lorem ipsum dolor sit amet",
                "productPrice": 498,
                "productQuantity": 20,
                "inStock": true
            }
        ];

        let shallow = createShallow();
        const component = shallow(<ProductWidget data={data}/>);
        expect(component).toMatchSnapshot();
    });

});