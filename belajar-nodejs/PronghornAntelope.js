class PronghornAntelope {
    constructor(){
        this.speed = Math.floor(Math.random()*100);
    }
    family(){
        console.log('Pronghorn Antelope family is Antilocapridae');
    }
    howl(){
        console.log('woaarf woaarf!');
    }
    order(){
        console.log('Pronghorn Antelope order is Artiodactyla');
    }
}
//export
module.exports = PronghornAntelope;