import {TextureLoader} from 'three';

import {dirt, wall} from './image';

const dirtTexture = new TextureLoader().load(dirt)
const wallTexture = new TextureLoader().load(wall)

export {
	dirtTexture, 
	wallTexture
}