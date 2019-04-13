(() => {

let container, renderer;
AFRAME.registerComponent('iframes', {
  init() {
    container = this.el;
    renderer = this.el.renderer;
    // console.log('got renderer', this.el, renderer);
  },
});
const _openTab = src => {
  const device = renderer.vr.getDevice();
  if (device) {
    if (device.layers.length === 0) {
      device.layers = [renderer.domElement];
    }

    const iframe = document.createElement('iframe');
    iframe.d = 3;
    iframe.hidden = true;
    iframe.src = src;
    device.layers.push(iframe);
    document.body.appendChild(iframe);

    console.log('total layers', device.layers.length);
  } else {
    console.warn(new Error('not in vr').stack);
  }
};

document.querySelector('#world1').addEventListener('mousedown',()=>{
  _openTab('https://flint-waitress.glitch.me/');
});

setTimeout(() => {
  _openTab('https://flint-waitress.glitch.me/');

  setTimeout(() => {
    _openTab('https://absorbed-football-1.glitch.me/');
  }, 5000);
}, 5000);

document.querySelector('#world2').addEventListener('mousedown',()=>{
  _openTab('https://fortune-cucumber.glitch.me/');
});

document.querySelector('#apainter').addEventListener('mousedown',()=>{
  _openTab('https://absorbed-football-1.glitch.me/');
});

document.querySelector('#ashooter').addEventListener('mousedown',()=>{
  _openTab('https://enthusiastic-condor.glitch.me/');
});

})();
