const getScatterPlotConfig = () =>{
  const scatterPlotConfig = {
    width: 960,
    height: 500,
    margin: { top: 80, right: 150, bottom: 90, left: 90 },
    xAxisLabelOffset: 60,
    yAxisLabelOffset: 60,
    yAxisTextOffset: 20,
    horizontalTicks: 5,
    circleRadiusMin: 3.5,
    circleRadiusMax: 15
  };
  scatterPlotConfig.innerHeight = scatterPlotConfig.height - scatterPlotConfig.margin.top - scatterPlotConfig.margin.bottom;
  scatterPlotConfig.innerWidth = scatterPlotConfig.width - scatterPlotConfig.margin.left - scatterPlotConfig.margin.right;
  return scatterPlotConfig
};

const getRingChartConfig = () => {
	const ringChartConfig = {
    width: 960,
    height: 500,
    margin: { top: 50, right: 40, bottom: 0, left: 40 },
    innerRadius: 70
  };
  ringChartConfig.innerHeight = ringChartConfig.height - ringChartConfig.margin.top - ringChartConfig.margin.bottom;
  ringChartConfig.innerWidth = ringChartConfig.width - ringChartConfig.margin.left - ringChartConfig.margin.right;
  ringChartConfig.outerRadius = Math.min(ringChartConfig.innerHeight,ringChartConfig.innerWidth) / 2;
  ringChartConfig.centerX = ringChartConfig.margin.left+ringChartConfig.innerWidth / 2;
  ringChartConfig.centerY = ringChartConfig.margin.top+ringChartConfig.innerHeight / 2;
  return ringChartConfig
}