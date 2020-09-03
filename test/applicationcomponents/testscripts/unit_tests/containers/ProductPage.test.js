import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ProductPage from '../../../../../src/containers/pdp/ProductPage';

describe('ProductPage test', () => {
    it("Container - ProductPage should match snapshot", () => {
        const match = { params: { id: 'foobar' } }
        let shallow = createShallow();
        const component = shallow(<ProductPage match={match}/>);
        expect(component).toMatchSnapshot();
    });
});