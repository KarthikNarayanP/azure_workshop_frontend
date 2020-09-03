import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Search from '../../../../../src/components/search/Search';

describe('Search test', () => {
    it("Component - Search should match snapshot",  () => {
        let shallow = createShallow();
        const component = shallow(<Search />);
        expect(component).toMatchSnapshot();
    });
});