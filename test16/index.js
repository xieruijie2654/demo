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

emitter.addInitialize(new Proton.Radius(0.5, 3));
emitter.addInitialize(new Proton.Life(5));
emitter.addInitialize(
    new Proton.Velocity(new Proton.Span(1, 2), new Proton.Span(0, 360), 'polar')
);