import DonutMaker from "./donut-maker.js";

let donutMaker = new DonutMaker (0, 0, 100, 0, 0, 10);

console.log(donutMaker);

let createDonutBtn = (document.getElementById('createDonutBtn'));
    createDonutBtn.addEventListener('click',() => {
    donutMaker.donutCounter();
    console.log(donutMaker.donutCount);
    document.getElementById('donutsCount').innerHTML = donutMaker.donutCount;
  });

let buyAutoClickerBtn = (document.getElementById('buyAutoClickerBtn'));
  buyAutoClickerBtn.addEventListener('click',() => {
    donutMaker.buyAutoClicker();
    donutMaker.activateAutoClickersDonutCounter();
    donutMaker.getDonutCount();
    donutMaker.getAutoClicker();
    console.log(donutMaker.autoClickerCount);
    document.getElementById('autoClickers').innerHTML = donutMaker.autoClickerCount;
});

let buyMultiplierBtn = (document.getElementById('buyMultiplierBtn'));
buyMultiplierBtn.addEventListener('click',() => {
    donutMaker.getDonutMultiplierCount();
    donutMaker.buyDonutMultiplier();
    donutMaker.multipliedDonuts();
    donutMaker.getDonutMultiplier();
    console.log(donutMaker.donutMultiplierCount);
    document.getElementById('donutMultipliers').innerHTML = donutMaker.donutMultiplierCount;
    
});




