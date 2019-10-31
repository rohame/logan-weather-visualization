const scatterPlotColor = d => {
  const cScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.PRCP))
    .range([0, 1]);

  const colorMap = d3.interpolateRgb(d3.rgb('#55ffff'), d3.rgb('#3399ff'));
  return d.PRCP < 0.1 ? 'rgba(224,224,240,0.5)' : colorMap(cScale(d.PRCP));
};

const scatterPlot = () => {
  plotConfig = getScatterPlotConfig();
  data = data.filter(d => d.year == 2016);
  const width = +plotConfig.width;
  const height = +plotConfig.height;
  const margin = plotConfig.margin;
  const xAxisLabelOffset = +plotConfig.xAxisLabelOffset;
  const yAxisLabelOffset = +plotConfig.yAxisLabelOffset;
  const yAxisTextOffset = +plotConfig.yAxisTextOffset;
  const innerHeight = +plotConfig.innerHeight;
  const innerWidth = +plotConfig.innerWidth;
  const horizontalTicks = +plotConfig.horizontalTicks;
  const circleRadiusMin = +plotConfig.circleRadiusMin;
  const circleRadiusMax = +plotConfig.circleRadiusMax;

  const svg = d3.select('#scatter-plot-container');
  svg.attr('height', height).attr('width', width);

  const body = d3.select('#scatter-plot-body');
  body.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  showTitle(svg, 'Logan Airport Weather vs Delay');

  showLabel(body, plotConfig);

  const leftScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.WSF2))
    .range([innerHeight, 0]);

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([0, innerWidth]);

  const sizeScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.DEP_DELAY))
    .range([circleRadiusMin, circleRadiusMax]);

  const xAxis = d3
    .axisBottom(xScale)
    .tickFormat(d3.timeFormat('%b'))
    .tickSize(-innerHeight);

  const leftAxis = d3
    .axisLeft(leftScale)
    .tickSize(-innerWidth)
    .ticks(horizontalTicks);

  body
    .append('g')
    .call(leftAxis)
    .selectAll('.domain')
    .remove();
  d3.selectAll('.tick')
    .select('text')
    .attr('transform', 'translate(' + -yAxisTextOffset + ',0)')
    .attr('dy', '.32em');

  body
    .append('g')
    .attr('transform', 'translate(0,' + innerHeight + ')')
    .call(xAxis)
    .selectAll('.domain')
    .remove();

  let cScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.PRCP))
    .range([0, 1]);

  let colorMap = d3.interpolateRgb(d3.rgb('#55ffff'), d3.rgb('#3399ff'));

  const tooltip = svg.append('g').attr('id', 'scatterTooltip');

  const radialArcBar = d3.selectAll('.bar');

  const radialArcBars = d3.select('#radial-bars').selectAll('path');
  const interactiveBars = d3.select('#interctive-bars').selectAll('circle');

  let weatherContainer = body.append('g').attr('id', 'weather-data');
  weatherContainer
    .selectAll('.dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', d => sizeScale(d.DEP_DELAY))
    .attr('cx', d => xScale(d.date))
    .attr('cy', d => leftScale(d.WSF2))
    .attr('fill', d => scatterPlotColor(d))
    .append('title')
    // .text(d => d.DATE + ', WEATHER_DELAY: ' + d.DEP_DELAY);

  const colorLegend = svg
    .append('g')
    .attr('id', 'scatter-color-legend')
    .attr(
      'transform',
      `translate(${width - margin.right / 2 - 20},${margin.top + 80})`
    )
    .attr('cursor', 'default');
  colorLegend
    .append('text')
    .text('Precipitation')
    .attr('x', 10)
    .attr('y', -30)
  .attr('font-size','1.5em');
  
  const lg = colorLegend
    .append('defs')
    .append('linearGradient')
    .attr('id', 'mygrad') //id of the gradient
    .attr('x1', '0%')
    .attr('x2', '0%')
    .attr('y1', '0%')
    .attr('y2', '100%'); //since its a vertical linear gradient
  lg.append('stop')
    .attr('offset', '0%')
    .style('stop-color', '#3399ff') //end in red
    .style('stop-opacity', 1);

  lg.append('stop')
    .attr('offset', '100%')
    .style('stop-color', '#55ffff') //start in blue
    .style('stop-opacity', 1);

  const legend = colorLegend.append('g');
  legend
    .append('rect')
    .attr('class', 'radial-color-legend')
    // .attr('transform',`translate(${width - margin.right - 180},${margin.top + 80})`)
    .attr('width', 30)
    .attr('height', 100)
    .attr('cursor', 'default')
    .attr('fill', 'url(#mygrad)');

  legend
    .append('text')
    .text(d3.max(data, d => d.PRCP))
    .attr('x', 50)
    .attr('y', 0);
  legend
    .append('text')
    .text('0.1')
    .attr('x', 50)
    .attr('y', 100);
  
  legend
    .append('rect')
    .attr('class', 'radial-color-legend')
    .attr('transform',`translate(${0},${110})`)
    .attr('width', 30)
    .attr('height', 30)
    .attr('cursor', 'default')
    .attr('fill', 'rgba(224,224,240,0.5)');
  legend
    .append('text')
    .text('< 0.1')
    .attr('x', 50)
    .attr('y', 125);
};
