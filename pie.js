// Plot the default route once the page loads
var defaultURL = "/data";
d3.json(defaultURL).then(function(data) {
  var data = $('/state','/energytype', );
  var layout = {
    height: 400,
    width: 500
  };
  Plotly.plot("pie", data, layout);
});

// Update the plot with new data
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", data, [newdata.data]);
// }

// // Get new data whenever the dropdown selection changes
// function getData() {
//   console.log(route);
//   d3.json(`/${/data/state}`).then(function(data) {
//     console.log("newdata", data);
//     updatePlotly(data);
//   });
// }

// init();