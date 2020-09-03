import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Payment from '../../../../../src/components/payment/Payment';

describe('Payment test', () => {
    it("Component - Payment should match snapshot",  () => {
        let shallow = createShallow();
        const component = shallow(<Payment />);
        expect(component).toMatchSnapshot();
    });
});