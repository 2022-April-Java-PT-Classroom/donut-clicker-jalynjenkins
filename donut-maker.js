class DonutMaker{

    constructor(donutCount, autoClickerCount, autoClickerCost, donutMultiplier, donutMultiplierCount, donutMultiplierCost){
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerCost = autoClickerCost;
        this.donutMultiplier = donutMultiplier;
        this.donutMultiplierCount = donutMultiplierCount;
        this.donutMultiplierCost = donutMultiplierCost;
    }

    donutCounter (){
        this.donutCount += 1;
    }

    getDonutCount(){
        return this.donutCount;
    }

    buyAutoClicker(){
        if (this.donutCount >= this.autoClickerCost){
            this.autoClickerCount ++;
            this.donutCount = this.donutCount - this.autoClickerCost;
        }
    }

    getAutoClicker(){
        return this.autoClickerCount;

    }

    
    

}

export default DonutMaker;
