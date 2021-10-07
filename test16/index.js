import Proton from proton - engine;
const proton = new Proton();
const emitter = new Proton.Emitter();
const canvasEl = document.getElementById('canvas');
const context = canvasEl.getContext('2d');

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

window.onresize = function() {
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
};

emitter.rate = new Proton.Rate(Proton.getSpan(20, 40));