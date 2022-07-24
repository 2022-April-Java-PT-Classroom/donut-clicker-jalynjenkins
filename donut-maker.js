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
        this.donutCount++;
    }

    activateAutoClickersDonutCounter(){
        this.donutCount = this.donutCount + this.autoClickerCount;
    }

    getDonutCount(){
        return this.donutCount;
    }

    buyAutoClicker(){
        if (this.donutCount >= this.autoClickerCost){
            this.autoClickerCount ++;
            this.donutCount = this.donutCount - this.autoClickerCost;
        } else {

        } this.autoClickerCost = (this.autoClickerCost * .10) + this.autoClickerCost;
        
    }

    getAutoClicker(){
        return this.autoClickerCount;
    }

    multipliedDonuts(){
        if(this.donutCount >= 10){
            this.donutMultiplier ++;
        }
    }
    
    getDonutMultiplier(){
        return this.donutMultiplier;
    }

    getDonutMultiplierCount(){
        return this.donutMultiplierCount ++;
    }

    buyDonutMultiplier(){
        if (this.donutCount >= this.donutMultiplierCost){
            this.donutMultiplierCount ++;
            this.donutCount = this.donutCount - this.donutMultiplierCost;
        } else {

        } this.donutMultiplierCost = (this.donutMultiplierCost * .10) + this.donutMultiplierCost;
        
    }
    
    activateDonutMultiplier(){
        this.donutCount = (this.donutCount * 1.2) + this.donutCount;
    }
    
    multiplyMultiplier(){
        this.donutCount = Math.pow(1.2, this.donutMultiplierCount) + this.donutCount;
    }

    donutMultiplierClickBonus(){
        this.donutCount = (this.autoClickerCount * this.donutMultiplierCount) + this.donutCount; 
    }

}

export default DonutMaker;
