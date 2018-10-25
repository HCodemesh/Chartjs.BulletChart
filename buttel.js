var helpers = Chart.helpers;
console.log(JSON.stringify(Chart.defaults.horizontalBar));
Chart.defaults.Bullet = Chart.defaults.horizontalBar;

Chart.controllers.Bullet = Chart.controllers.horizontalBar.extend({
  draw: function() {
    var ctx = this.chart.chart.ctx;

    var elements = this.getMeta().data;
    var dataset = this.getDataset();
    var ilen = elements.length;
    var i = 0;
    var d;
    console.log(elements[0]._view);
    console.log(elements[0]._yScale);
    for (; i < ilen; ++i) {
      d = dataset.data[i];
      var vm = elements[i]._view;
      var _yScale = elements[i]._yScale;
      if (d !== null && d !== undefined && !isNaN(d)) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
        ctx.lineWidth = 1;
        ctx.moveTo(0, 100);
        ctx.rect(_yScale.maxWidth, vm.y - 25, 1000, vm.height * 1.2);
        ctx.fill();
        ctx.stroke();
        elements[i].draw();
      }
    }
  }
});
