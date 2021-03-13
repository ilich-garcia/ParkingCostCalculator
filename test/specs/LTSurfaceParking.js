import 'chai/register-should';
import ParkingCostPage from '../pages/ParkingCostPage'

describe('Long-Term Surface Parking Page', () => {
    before(() => {
        ParkingCostPage.open();
        browser.pause(2000);
    });
    
    it('should calculate $ 2.00 for 1 hour', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Long-Surface');
        ParkingCostPage.clearDates();
        ParkingCostPage.leavingTime.clearValue();
        browser.pause(2000);

        ParkingCostPage.setSameDates();
        ParkingCostPage.leavingTime.addValue('1:00');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 2.00');
    });

    it('should calculate $ 10.00 maximum for 10 hours -> $ 2.00 * 10 hours = $ 20.00', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Long-Surface');
        ParkingCostPage.leavingTime.clearValue();
        browser.pause(2000);

        ParkingCostPage.leavingTime.addValue('10:00');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 10.00');
    });

    it('should calculate $ 60.00 per week (7th day free)', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Long-Surface');
        ParkingCostPage.clearLeavingDateAndTime();
        browser.pause(2000);

        ParkingCostPage.leavingTime.addValue('12:00');
        ParkingCostPage.leavingDate.addValue('3/15/2021'); // Giving one week.
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 60.00');
    });
});