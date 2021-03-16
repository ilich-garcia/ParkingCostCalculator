import 'chai/register-should';
import ParkingCostPage from '../pages/ParkingCostPage'

describe('Economy Parking Page', () => {
    before(() => {
        ParkingCostPage.open();
        browser.pause(2000);
    });
    
    it('should return $ 6.00 for 3 hours', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Economy');
        ParkingCostPage.clearDates();
        ParkingCostPage.leavingTime.clearValue();
        browser.pause(2000);

        ParkingCostPage.setSameDates();
        ParkingCostPage.leavingTime.addValue('3:00');
        ParkingCostPage.calculateParkingCostResult();

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 6.00');
    });

    it('should return $ 9.00 maximum for 7 hours -> $ 2.00 * 7 hours = $ 14.00', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Economy');
        ParkingCostPage.leavingTime.clearValue();
        browser.pause(2000);

        ParkingCostPage.leavingTime.addValue('7:00');
        ParkingCostPage.calculateParkingCostResult();

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 9.00');
    });

    it('should return $ 54.00 per week (7th day free)', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Economy');
        ParkingCostPage.clearLeavingDateAndTime();
        browser.pause(2000);

        ParkingCostPage.leavingTime.addValue('12:00');
        ParkingCostPage.leavingDate.addValue('3/15/2021'); // Giving one week.
        ParkingCostPage.calculateParkingCostResult();

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 54.00');
    });
});