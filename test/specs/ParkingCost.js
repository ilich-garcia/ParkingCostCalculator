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

    it('should ask for a correctly formatted date', () => {
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(2000);
        
        ParkingCostPage.estimatedParkingCostMessage.should.be.equal('ERROR! ENTER A CORRECTLY FORMATTED DATE');
    });

    it('should return $ 0.00', () => {
        ParkingCostPage.clearDates();
        browser.pause(2000);
        ParkingCostPage.setSameDates();
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 0.00');
    });

    it('should maintain the selected parking lot', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Economy');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        chaiExpect(ParkingCostPage.parkingLot.getValue()).to.be.equal('Economy');
    });
});