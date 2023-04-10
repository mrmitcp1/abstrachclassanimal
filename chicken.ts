import {Animal} from "./Animal";
import {Edible} from "./edible";

export class Chicken extends Animal implements Edible{
    makeSound():string {
        return 'Chicken: cuc ta cuc tac'
    }

    howToEat(): string {
        return "an cam co";
    }

}