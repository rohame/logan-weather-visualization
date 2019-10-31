const showData = () => {
  scatterPlot();
  ringArc();
  const scatterCircles = d3.select('#weather-data').selectAll('circle');
  const radialArcBars = d3.select('#radial-bars').selectAll('path');
  const interactiveBars = d3.select('#interctive-bars').selectAll('circle')
  connectedView(scatterCircles, radialArcBars, interactiveBars)
};

loadData().then(showData);
