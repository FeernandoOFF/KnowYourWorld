function initialize() {
  let options ={zoom: 2,sky: true,tilting:false};
  let optionsLayer={maxZoom:4,tileSize:400}
  var earth = new WE.map('earth_div',options);
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',optionsLayer).addTo(earth);
}