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
        expect(underTest.donutCount).toEqual(1gi);

    });

    


    
});
