import Page from './Page';

class ParkingCostPage extends Page {
    open() {
        super.open('http://www.shino.de/parkcalc/');
    }
}

export default new ParkingCostPage();