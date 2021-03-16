import 'chai/register-should';
import ParkingCostPage from '../pages/ParkingCostPage'

describe('Short Term Parking Page', () => {
    before(() => {
        ParkingCostPage.open();
        browser.pause(2000);
    });
    
    it('should return $ 2.00 for the first hour', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Short');
        ParkingCostPage.clearDates();
        ParkingCostPage.leavingTime.clearValue();
        browser.pause(2000);

        ParkingCostPage.setSameDates();
        ParkingCostPage.leavingTime.addValue('1:00');
        ParkingCostPage.calculateParkingCostResult();

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 2.00');
    });

    it('should return $ 5.00 for 2.5 hours -> $ 2.00 + $ 3.00', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Short');
        ParkingCostPage.leavingTime.clearValue();
        browser.pause(2000);

        ParkingCostPage.leavingTime.addValue('2:30');
        ParkingCostPage.calculateParkingCostResult();

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 5.00');
    });

    it('should return $ 24.00 per day', () => {
        ParkingCostPage.parkingLot.selectByAttribute('value', 'Short');
        ParkingCostPage.clearLeavingDateAndTime();
        browser.pause(2000);

        ParkingCostPage.leavingTime.addValue('12:00');
        ParkingCostPage.leavingDate.addValue('3/9/2021'); // Giving one day.
        ParkingCostPage.calculateParkingCostResult();

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('$ 24.00');
    });
});