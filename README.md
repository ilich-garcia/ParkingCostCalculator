# Parking Cost Calculator Automation

This Parking Cost Calculator is a WebdriverIO automation project based on Mocha, Chai, and an integration with Jenkins to support the building and deploying of the automated tests.

## Technologies

- WebdriverIO
- Mocha
- Chai
- Selenium Standalone

## Getting Started

### Prerequisites

Install [NodeJS](https://nodejs.org/es/) to use the package manager to install the Parking Cost Calculator automation project.

To check if you have NodeJS installed, run this command in your terminal

```bash
node -v
```

To check if you have npm installed, run this command in your terminal

```bash
npm -v
```

### Installation

1. Clone the repository

```bash
git clone https://github.com/ilich-garcia/ParkingCostCalculator.git
```

2. Install NPM packages

```bash
npm install
```

3. Run the automated tests project

```bash
npx wdio
```

## Usage

```javascript
it('should return an error', () => {
    element.click();
    browser.pause(2000);

    textBox.should.be.equal('Error, please enter valid information');
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT License

Copyright (c) [2021] [Ilich Andrés García]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.