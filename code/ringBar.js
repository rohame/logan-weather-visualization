const ringBar = () => {
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
  body
    .attr('height', innerHeight)
    .attr('width', innerWidth)
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  // .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  showTitle(svg, 'Ring chart');

  const fullCircle = 2 * Math.PI;

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.date))
    .range([-90, 270]);
  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.DEP_DELAY))
    .range([0, outerRadius - innerRadius]);

  const radialBarContainer = body
    .append('g')
    .attr('id', 'radial-bars')
    .attr(
      'transform',
      'translate(' + innerWidth / 2 + ',' + innerHeight / 2 + ')'
    );
  radialBarContainer
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', d => yScale(d.DEP_DELAY))
    .attr('height', (fullCircle * innerRadius) / data.length)
    .attr(
      'transform',
      d => 'rotate(' + xScale(d.date) + ') translate(' + innerRadius + ',0)'
    )
    .attr('fill', '#4099ff');
};