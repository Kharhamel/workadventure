import 'phaser';
import GameConfig = Phaser.Types.Core.GameConfig;
import {GameScene} from "./GameScene";
import {Connexion} from "./Connexion";

const resolution = 2;

const config: GameConfig = {
    title: "Office game",
    width: window.innerWidth / resolution,
    height: window.innerHeight / resolution,
    parent: "game",
    scene: [GameScene],
    zoom: resolution,
};

let game = new Phaser.Game(config);

window.addEventListener('resize', function (event) {
    game.scale.resize(window.innerWidth / resolution, window.innerHeight / resolution);
});

const connexion = new Connexion("test@gmail.com");
