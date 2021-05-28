class Cheetah {
    constructor(){
        this.speed = Math.floor(Math.random()*100);
    }
    family(){
        console.log('Cheetah family is Felidae');
    }
    growl(){
        console.log('Cheetah grrrrrrrr!!');
    }
    order(){
        console.log('Cheetah order is Carnivora');
    }
}
//export
module.exports = Cheetah;