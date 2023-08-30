import { foodTypes } from './FoodTypesEnum';
import Broccoli from './images/Broccoli.jpg';
import Cabbage from './images/Cabbage.jpg';
import Capsicum from './images/Capsicum.jpg';
import Carrot from './images/Carrot.jpg';
import Cauliflower from './images/Cauliflower.jpg';
import Corn from './images/Corn.jpg';
import Cucumber from './images/Cucumber.jpg';
import Eggplant from './images/Eggplant.jpg';
import Garlic from './images/Garlic.jpg';
import Ginger from './images/Ginger.jpg';
import Lettuce from './images/Lettuce.jpg';
import Mushroom from './images/Mushroom.jpg';
import Onion from './images/Onion.jpg';
import Peas from './images/Peas.jpg';
import Potato from './images/Potato.jpg';
import Tomato from './images/Tomato.jpg';

interface pantryArrayStructure {
    name: string;
    type: foodTypes;
    image: string;
    count: number;
}

export default function pantryDB (): void {
    const data: pantryArrayStructure[] = [
        {name: 'Broccoli', type: foodTypes.Vegetable, image: Broccoli, count: 0},
        {name: 'Cabbage', type: foodTypes.Vegetable, image: Cabbage, count: 0},
        {name: 'Capsicum', type: foodTypes.Vegetable, image: Capsicum, count: 0},
        {name: 'Carrot', type: foodTypes.Vegetable, image: Carrot, count: 0},
        {name: 'Cauliflower', type: foodTypes.Vegetable, image: Cauliflower, count: 0},
        {name: 'Corn', type: foodTypes.Vegetable, image: Corn, count: 0},
        {name: 'Cucumber', type: foodTypes.Vegetable, image: Cucumber, count: 0},
        {name: 'Eggplant', type: foodTypes.Vegetable, image: Eggplant, count: 0},
        {name: 'Garlic', type: foodTypes.Vegetable, image: Garlic, count: 0},
        {name: 'Ginger', type: foodTypes.Vegetable, image: Ginger, count: 0},
        {name: 'Lettuce', type: foodTypes.Vegetable, image: Lettuce, count: 0},
        {name: 'Mushroom', type: foodTypes.Vegetable, image: Mushroom, count: 0},
        {name: 'Onion', type: foodTypes.Vegetable, image: Onion, count: 0},
        {name: 'Peas', type: foodTypes.Vegetable, image: Peas, count: 0},
        {name: 'Potato', type: foodTypes.Vegetable, image: Potato, count: 0},
        {name: 'Tomato', type: foodTypes.Vegetable, image: Tomato, count: 0},
    ]
}