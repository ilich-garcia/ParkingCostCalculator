import Page from './Page';

class ParkingCostPage extends Page {
    open() {
        super.open('http://www.shino.de/parkcalc/');
    }

    get parkingLot() {
        return $('#ParkingLot');
    }

    get startingDate() {
        return $('/html/body/form/table/tbody/tr[2]/td[2]/input[1]');
    }

    get leavingDate() {
        return $('/html/body/form/table/tbody/tr[3]/td[2]/input[1]');
    }

    get startingTime() {
        return $('#StartingTime');
    }

    get leavingTime() {
        return $('#LeavingTime');
    }

    get estimatedParkingCostMessage() {
        return $('/html/body/form/table/tbody/tr[4]/td[2]/b').getText();
    }

    get estimatedParkingCostResult() {
        return $('/html/body/form/table/tbody/tr[4]/td[2]/span[1]/b').getText();
    }

    get calculateParkingCost() {
        return $('/html/body/form/input[2]');
    }

    clearDates() {
        this.startingDate.clearValue();
        this.leavingDate.clearValue();
    }

    setSameDates() {
        this.startingDate.addValue('3/8/2021');
        this.leavingDate.addValue('3/8/2021');
    }

    clearLeavingDateAndTime() {
        this.leavingTime.clearValue();
        this.leavingDate.clearValue();
    }

    calculateParkingCostResult(element, text) {
        browser.pause(2000);
        this.calculateParkingCost.click();
        browser.pause(4000);

        element.should.be.equal(text);
    }
}

export default new ParkingCostPage();