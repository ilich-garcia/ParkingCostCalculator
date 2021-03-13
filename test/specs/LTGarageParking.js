import 'chai/register-should';
import ParkingCostPage from '../pages/ParkingCostPage'

describe('Long-Term Garage Parking Page', () => {
    before(() => {
        ParkingCostPage.open();
        browser.pause(2000);
    });
    
    it('should calculate $ 4.00 for 2 hours', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Long-Garage');
        ParkingCostPage.clearDates();
        ParkingCostPage.leavingTime.clearValue();
        browser.pause(2000);

        ParkingCostPage.setSameDates();
        ParkingCostPage.leavingTime.addValue('2:00');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 4.00');
    });

    it('should calculate $ 12.00 maximum for 8 hours -> $ 2.00 * 8 hours = $ 16.00', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Long-Garage');
        ParkingCostPage.leavingTime.clearValue();
        browser.pause(2000);

        ParkingCostPage.leavingTime.addValue('8:00');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 12.00');
    });

    it('should calculate $ 72.00 per week (7th day free)', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Long-Garage');
        ParkingCostPage.clearLeavingDateAndTime();
        browser.pause(2000);

        ParkingCostPage.leavingTime.addValue('12:00');
        ParkingCostPage.leavingDate.addValue('3/15/2021'); // Giving one week.
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 72.00');
    });
});