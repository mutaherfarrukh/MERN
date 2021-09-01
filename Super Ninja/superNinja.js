class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log( "Name: " + this.name + ", Strength : " + this.strength + ", Speed : " + this.speed + ", Health : " + this.health);
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Mutaher");
// ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();

console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        const drinkSake = super.drinkSake();
        drinkSake;
        console.log("Wisdom: " + this.wisdom + ", 'What one programmer can do in one month, two programmers can do in two months.' ");
        return this;
    }

    showStatsOfSensei(){
        const showStat = super.showStats();
        showStat;
        console.log("Wisdom: " + this.wisdom);
        return this;
    }
}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"