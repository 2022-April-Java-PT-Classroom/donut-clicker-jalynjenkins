import DonutMaker from './donut-maker.js';

describe ('DonutMaker object', () => {

    test('Does donutMaker add one donut to count', () => {
        const underTest = new DonutMaker(1, 1, 100, 1, 1.2, 10);
        underTest.donutCounter();
        expect(underTest.donutCount).toEqual(2);
    });

    test('Does donutMaker retrieve the donut count', () => {
        const underTest = new DonutMaker (1, 1, 100, 1, 1.2, 10);
        underTest.donutCounter();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(2);
    });

    test('Does donutMaker purchase auto clicker with 100 donuts from donut count', () => {
        const underTest = new DonutMaker (99, 0, 100, 1, 1.2, 10);
        underTest.donutCounter();
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCount).toEqual(1);
    });

    test('Does donutMaker retrieve to auto clicker count', () => {
        const underTest = new DonutMaker (100, 0, 100, 3, 115, 201);
        underTest.buyAutoClicker();
        underTest.getAutoClicker();
        expect(underTest.autoClickerCount).toEqual(1);
    });

    test ('Does donutMaker subtract auto clicker cost from donut count', () => {
        const underTest = new DonutMaker (101, 0, 100, 3, 115, 201);
        underTest.buyAutoClicker();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(1);
     });

    test ('Does donutMaker make increase cost of one auto clicker by 10% ', () => {
        const underTest = new DonutMaker (100, 0, 100, 3, 115, 201);
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCost).toEqual(110);
    });

    test ('Does donutMaker prevent auto clicker increase if not enough clicks ', () => {
        const underTest = new DonutMaker (98, 0, 100, 3, 115, 201); 
        underTest.getDonutCount();
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCount).toEqual(0);
    });

    test ('Does donutMaker increase donut total by amount of auto clickers', () => {
        const underTest = new DonutMaker (112, 2, 100, 3, 115, 201);
        underTest.activateAutoClickersDonutCounter();
        expect(underTest.donutCount).toEqual(114);

    });

    test ('Does donutMaker purchase the first Donut Multiplier with 10 clicks from click count', () => {
        const underTest = new DonutMaker (9, 2, 100, 0, 115, 201);
        underTest.donutCounter();
        underTest.multipliedDonuts();
        expect(underTest.donutMultiplier).toEqual(1);
    });

    test ('Does donutMaker increase the Donut Multiplier count',() => { 
        const underTest = new DonutMaker (10, 20, 100, 1, 0, 10);
        underTest.getDonutMultiplierCount();
        expect(underTest.donutMultiplierCount).toEqual(1);
    });

    test('Does donutMaker subtract donut multiplier cost from donut count',() => {
        const underTest = new DonutMaker (80, 20, 100, 3, 115, 10);
        underTest.buyDonutMultiplier();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(70);
    });

    test ('Does donutMaker make increase cost of one donut multiplier by 10% ', () => {
        const underTest = new DonutMaker (100, 0, 100, 3, 115, 100);
        underTest.buyDonutMultiplier();
        expect(underTest.donutMultiplierCost).toEqual(110);
    });

    test ('Does donutMaker prevent donut multiplier increase if not enough clicks ', () => {
        const underTest = new DonutMaker (9, 0, 100, 3, 0, 10); 
        underTest.getDonutCount();
        underTest.buyDonutMultiplier();
        expect(underTest.donutMultiplierCount).toEqual(0);
    });

    test ('Does donutMaker increase the value of a click by 1.2x when donut multiplier is activated', () => {
        const underTest = new DonutMaker (1, 1, 1, 1, 1, 1,);
        underTest.activateDonutMultiplier();
        expect(underTest.donutCount).toEqual(2.2);
    })

    test ('Does donutMaker increase the value of donut multpliers exponentially by the amount of donut mutltipliers owned', () => {
        const underTest = new DonutMaker (2.2, 1, 1, 1, 4, 1);
        underTest.multiplyMultiplier();
        expect(underTest.donutCount).toEqual(4.2736);
    })

    test ('Does donutMaker increase value of each auto clicker by the amount of the donut multiplier', () => {
        const underTest = new DonutMaker (4, 2, 3, 1, 5, 1);
        underTest.donutMultiplierClickBonus();
        expect(underTest.donutCount).toEqual(14);
    })


    
});
