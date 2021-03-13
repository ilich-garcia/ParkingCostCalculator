import { expect as chaiExpect } from 'chai';
import 'chai/register-should';
import ParkingCostPage from '../pages/ParkingCostPage'

describe('Parking Cost Page', () => {
    before(() => {
        ParkingCostPage.open();
    });
    
    it('should show the right title', () => {
        const title = browser.getTitle();

        title.should.be.equal('Parking Cost Calculator');
    });
});