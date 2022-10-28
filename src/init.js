import Bell from './img/bell.png';
import Bottle from './img/bottle.jpg';
import Brush from './img/brush.png';
import Carrot from './img/carrot.png';
import Corn from './img/corn.png';
import Fire from './img/fire.png';
import Fork from './img/fork.png';
import Fur from './img/fur.png';
import Grass from './img/grass.jpg';
import Grove from './img/grove.png';
import Knife from './img/knife.jpg';
import Pink from './img/pink.jpg';
import Tree from './img/tree.jpg';
import Veg from './img/veg.png';
import Water from './img/water.png';

function init() {
  const num_bell = Math.ceil(Math.random() * 10) * 3;
  const num_bottle = Math.ceil(Math.random() * 10) * 3;
  const num_brush = Math.ceil(Math.random() * 10) * 3;
  const num_carrot = Math.ceil(Math.random() * 10) * 3;
  const num_corn = Math.ceil(Math.random() * 10) * 3;
  const num_fire = Math.ceil(Math.random() * 10) * 3;
  const num_fork = Math.ceil(Math.random() * 10) * 3;
  const num_fur = Math.ceil(Math.random() * 10) * 3;
  const num_grass = Math.ceil(Math.random() * 10) * 3;
  const num_grove = Math.ceil(Math.random() * 10) * 3;
  const num_knife = Math.ceil(Math.random() * 10) * 3;
  const num_pink = Math.ceil(Math.random() * 10) * 3;
  const num_tree = Math.ceil(Math.random() * 10) * 3;
  const num_veg = Math.ceil(Math.random() * 10) * 3;
  const num_water = Math.ceil(Math.random() * 10) * 3;
  const array_cards = [];
  const data = [];
  for (let i = 0; i < num_bell; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const bell = {
      name: 'bell',
      src: Bell,
      top,
      left,
    };
    array_cards.push(bell);
  }
  data.push({ name: 'bell', src: Bell, count: num_bell });
  for (let i = 0; i < num_bottle; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const bottle = {
      name: 'bottle',
      src: Bottle,
      top,
      left,
    };
    array_cards.push(bottle);
  }
  data.push({ name: 'bottle', src: Bottle, count: num_bottle });
  for (let i = 0; i < num_brush; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const brush = {
      name: 'brush',
      src: Brush,
      top,
      left,
    };
    array_cards.push(brush);
  }
  data.push({ name: 'brush', src: Brush, count: num_brush });
  for (let i = 0; i < num_carrot; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const carrot = {
      name: 'carrot',
      src: Carrot,
      top,
      left,
    };
    array_cards.push(carrot);
  }
  data.push({ name: 'carrot', src: Carrot, count: num_carrot });
  for (let i = 0; i < num_corn; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const corn = {
      name: 'corn',
      src: Corn,
      top,
      left,
    };
    array_cards.push(corn);
  }
  data.push({ name: 'corn', src: Corn, count: num_corn });
  for (let i = 0; i < num_fire; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const fire = {
      name: 'fire',
      src: Fire,
      top,
      left,
    };
    array_cards.push(fire);
  }
  data.push({ name: 'fire', src: Fire, count: num_fire });
  for (let i = 0; i < num_fork; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const fork = {
      name: 'fork',
      src: Fork,
      top,
      left,
    };
    array_cards.push(fork);
  }
  data.push({ name: 'fork', src: Fork, count: num_fork });
  for (let i = 0; i < num_fur; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const fur = {
      name: 'fur',
      src: Fur,
      top,
      left,
    };
    array_cards.push(fur);
  }
  data.push({ name: 'fur', src: Fur, count: num_fur });
  for (let i = 0; i < num_grass; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const grass = {
      name: 'grass',
      src: Grass,
      top,
      left,
    };
    array_cards.push(grass);
  }
  data.push({ name: 'grass', src: Grass, count: num_grass });
  for (let i = 0; i < num_grove; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const grove = {
      name: 'grove',
      src: Grove,
      top,
      left,
    };
    array_cards.push(grove);
  }
  data.push({ name: 'grove', src: Grove, count: num_grove });
  for (let i = 0; i < num_knife; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const knife = {
      name: 'knife',
      src: Knife,
      top,
      left,
    };
    array_cards.push(knife);
  }
  data.push({ name: 'knife', src: Knife, count: num_knife });
  for (let i = 0; i < num_pink; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const pink = {
      name: 'pink',
      src: Pink,
      top,
      left,
    };
    array_cards.push(pink);
  }
  data.push({ name: 'pink', src: Pink, count: num_pink });
  for (let i = 0; i < num_tree; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const tree = {
      name: 'tree',
      src: Tree,
      top,
      left,
    };
    array_cards.push(tree);
  }
  data.push({ name: 'tree', src: Tree, count: num_tree });
  for (let i = 0; i < num_veg; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const veg = {
      name: 'veg',
      src: Veg,
      top,
      left,
    };
    array_cards.push(veg);
  }
  data.push({ name: 'veg', src: Veg, count: num_veg });
  for (let i = 0; i < num_water; i++) {
    let top = Math.floor(Math.random() * 515);
    let left = Math.floor(Math.random() * 415);
    const water = {
      name: 'water',
      src: Water,
      top,
      left,
    };
    array_cards.push(water);
  }
  data.push({ name: 'water', src: Water, count: num_water });
  const cards = [];
  const n = array_cards.length;
  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * array_cards.length);
    cards.push(array_cards[index]);
    array_cards.splice(index, 1);
  }
  return {
    cards,
    data,
  };
}

export default init;
