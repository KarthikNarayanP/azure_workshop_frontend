import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ProductListWidget from '../../../../../src/containers/plp/ProductListWidget';

describe('ProductListWidget test', () => {
    it("Container - ProductListWidget should match snapshot", () => {
        const match = { params: { id: 'foobar' } }
        let shallow = createShallow();
        const component = shallow(<ProductListWidget match={match}/>);
        expect(component).toMatchSnapshot();
    });
});