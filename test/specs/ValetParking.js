import 'chai/register-should';
import ParkingCostPage from '../pages/ParkingCostPage'

describe('Valet Parking Page', () => {
    before(() => {
        ParkingCostPage.open();
        browser.pause(2000);
    });
    
    it('should return $ 12.00 for 5 hours', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Valet');
        ParkingCostPage.clearDates();
        ParkingCostPage.leavingTime.clearValue();
        browser.pause(2000);

        ParkingCostPage.setSameDates();
        ParkingCostPage.leavingTime.addValue('5:00');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 12.00');
    });

    it('should return $ 18.00 per day', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Valet');
        ParkingCostPage.clearLeavingDateAndTime();
        browser.pause(2000);

        ParkingCostPage.leavingTime.addValue('12:00');
        ParkingCostPage.leavingDate.addValue('3/9/2021'); // Giving one day.
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 18.00');
    });
});