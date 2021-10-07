const proton = new Proton()
const emitter = new Proton.Emitter()
const canvasEl = document.getElementById('canvas')
const context = canvasEl.getContext('2d')

canvasEl.width = window.innerWidth
canvasEl.height = window.innerHeight

window.onresize = function() {
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
}

emitter.rate = new Proton.Rate(Proton.getSpan(20, 40))

emitter.addInitialize(new Proton.Radius(0.5, 2))
emitter.addInitialize(new Proton.Life(5))
emitter.addInitialize(
    new Proton.Velocity(new Proton.Span(1, 2), new Proton.Span(0, 360), 'polar')
);

emitter.addBehaviour(new Proton.Gravity(1))
emitter.addBehaviour(new Proton.Color('random', '#ffffff'))
emitter.addBehaviour(new Proton.Scale(3, 0))
emitter.addBehaviour(new Proton.Alpha(1, 0))

proton.addEmitter(emitter)

const renderer = new Proton.CanvasRenderer(canvasEl);

renderer.onProtonUpdate = () => {
    context.fillStyle = "rgba(0,0,0,0.1)"
    context.fillRect(0, 0, canvasEl.width, canvasEl.height)
}

proton.addRenderer(renderer)

RAFManager.add(() => {
    proton.update()
}, 60)

canvasEl.onclick = handleClick

function handleClick(event) {
    emitter.p.x = event.clientX
    emitter.p.y = event.clientY
    emitter.emit('once')
    setTimeout(() => {
        emitter.emit('once');
    }, 200)
}