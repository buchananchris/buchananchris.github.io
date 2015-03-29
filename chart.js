var scattergraph = c3.generate({
  data: {
      url: 'data.csv',
      type: 'scatter',
  },
});


//This is the timeseries
var chart = c3.generate({
  data: {
      url: 'data.csv',
      type: 'line',
  },
  axis: {
    x:{label: 'time'},
    y:{label: 'random'}  
  }
});

/*
//This is the bargraph
var barchart = c3.generate({
  data: {
      url: 'hist.csv',
      type: 'bar',
  },
    bar: {
      width: {
        ratio: 0.5 // this makes bar width 50% of length between ticks
      }
      // or
      //width: 100 // this makes bar width 100px
    }
}); 

*/


//Here is a histogram
var experiment = {
  trials: 10000, // number of trials
  variables: 5 // number of random variables
};
experiment.values = pv.range(experiment.trials).map(function() {
  return pv.sum(pv.range(experiment.variables), Math.random);
});


var w = 420,
    h = 300,
    x = pv.Scale.linear(0, experiment.variables).range(0, w),
    bins = pv.histogram(experiment.values).bins(x.ticks(60)),
    y = pv.Scale.linear(0, pv.max(bins, function(d) d.y)).range(0, h);

var vis = new pv.Panel()
    .width(w)
    .height(h)
    .margin(20);

vis.add(pv.Bar)
    .data(bins)
    .bottom(0)
    .left(function(d) x(d.x))
    .width(function(d) x(d.dx))
    .height(function(d) y(d.y))
    .fillStyle("#aaa")
    .strokeStyle("rgba(255, 255, 255, .2)")
    .lineWidth(1)
    .antialias(false);

vis.add(pv.Rule)
    .data(y.ticks(5))
    .bottom(y)
    .strokeStyle("#fff")
  .anchor("left").add(pv.Label)
    .text(y.tickFormat);

vis.add(pv.Rule)
    .data(x.ticks())
    .left(x)
    .bottom(-5)
    .height(5)
  .anchor("bottom").add(pv.Label)
    .text(x.tickFormat);

vis.add(pv.Rule)
    .bottom(0);

vis.render();