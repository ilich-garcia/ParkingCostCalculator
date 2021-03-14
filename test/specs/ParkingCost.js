import { expect as chaiExpect } from 'chai';
import 'chai/register-should';
import ParkingCostPage from '../pages/ParkingCostPage'

describe('Parking Cost Page', () => {
    before(() => {
        ParkingCostPage.open();
        browser.pause(2000);
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

    it('should not accept leaving date or time before starting date or time', () => {
        ParkingCostPage.startingDate.clearValue();
        ParkingCostPage.startingDate.addValue('3/9/2021');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostMessage.should.be.equal('ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME');
    });

    it('should not accept negative hours or dates', () => {
        ParkingCostPage.startingTime.clearValue();
        ParkingCostPage.startingDate.clearValue();
        browser.pause(2000);
        ParkingCostPage.startingTime.addValue('-12:00');
        ParkingCostPage.startingDate.addValue('-3/8/2021');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('ERROR! ENTER A CORRECTLY FORMATTED HOUR AND DATE');
    });
    
    it('should not accept more than 12 hours', () => {
        ParkingCostPage.startingDate.clearValue();
        ParkingCostPage.startingTime.clearValue();
        browser.pause(2000);
        ParkingCostPage.startingDate.addValue('3/8/2021');
        ParkingCostPage.startingTime.addValue('20:00');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('ERROR! ENTER A CORRECTLY FORMATTED HOUR');
    });

    it('should not accept incorrect dates', () => {
        ParkingCostPage.clearDates();
        browser.pause(2000);
        
        ParkingCostPage.startingDate.addValue('3/40/2021');
        ParkingCostPage.leavingDate.addValue('30/4/2021');
        browser.pause(2000);
        ParkingCostPage.calculateParkingCost.click();
        browser.pause(4000);

        ParkingCostPage.estimatedParkingCostResult.should.be.equal('ERROR! ENTER A CORRECTLY FORMATTED DATE');
    });
});