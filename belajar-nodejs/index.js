//import
const Cheetah = require('./Cheetah');
const PronghornAntelope = require('./PronghornAntelope');


const running = (Cheetah,PronghornAntelope) => {
    if(Cheetah.speed > PronghornAntelope.speed){
        Cheetah.growl();
        Cheetah.family();
        Cheetah.order();
        return;
    }

    else if(Cheetah.speed < PronghornAntelope.speed){
        PronghornAntelope.howl();
        PronghornAntelope.family();
        PronghornAntelope.order();
        return;
    }

    else{
        console.log('Cheetah and Pronghorn Antelope have same speed');
    }
}


const cheetah = new Cheetah();
const pronghorn = new PronghornAntelope();

running(cheetah,pronghorn);