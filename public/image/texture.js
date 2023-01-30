import {TextureLoader} from 'three';

import {grass, default_wall} from './image';

const grassTexture = new TextureLoader().load(grass)
const default_wallTexture = new TextureLoader().load(default_wall)

export {
	grassTexture, 
	default_wallTexture
}