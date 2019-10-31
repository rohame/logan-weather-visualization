const ringLine = () => {
  plotConfig = getRingChartConfig();
  const width = +plotConfig.width;
  const height = +plotConfig.height;
  const margin = plotConfig.margin;
  const innerHeight = +plotConfig.innerHeight;
  const innerWidth = +plotConfig.innerWidth;
  const innerRadius = +plotConfig.innerRadius;
  const outerRadius = +plotConfig.outerRadius;

  const svg = d3.select('#ring-chart-container');
  svg.attr('height', height).attr('width', width);

  const body = d3.select('#ring-chart-body');
  body.attr("height",innerHeight).attr("width",innerWidth)
  .attr('transform', 'translate(' + width/2 + ',' + (height/2+60) + ')')
  // .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  showTitle(svg, 'Ring chart');

  const fullCircle = 2 * Math.PI;

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.date))
    .range([0, fullCircle]);
  
  const yScale = d3
    .scaleSqrt()
    .domain(d3.extent(data, d => d.DEP_DELAY))
    .range([innerRadius, 250]);

  const line = d3
    .lineRadial()
    .angle(d=>xScale(d.date))
    .radius(d => yScale(d.DEP_DELAY))
  .curve(d3.curveCatmullRomOpen)
  

  body
    .append('path')
    .attr('id', 'line-plot')
    .datum(data)
  	.attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', '#4099ff')
  .attr("stroke-width","1px")
  
    
};