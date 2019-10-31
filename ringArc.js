const badWeather = d => {
  const colorScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.weatherLevel))
    .range([0, 1]);
  const colorMap = d3.interpolateRgb(d3.rgb('#4099ff'), d3.rgb('#ff0000'));
  return colorMap(colorScale(d.weatherLevel));
};

const addXAxis = (
  xScale,
  bandwidth,
  innerRadius,
  outerRadius,
  innerWidth,
  innerHeight
) => {
  const ticks = xScale.ticks().slice(0, -1);
  const xAxisRadius = (innerRadius + outerRadius) / 2.5;
  const tickColor = '#ccc';
  xAxis = d3
    .select('#ring-chart-body')
    .append('g')
    .attr('id', 'x-axis')
    .attr('text-anchor', 'middle')
    .attr('transform', `translate(${innerWidth / 2},${innerHeight / 2})`)
    .attr('pointer-events', 'none');
  tick = xAxis
    .selectAll('g')
    .data(ticks)
    .enter()
    .append('g')
    .attr(
      'transform',
      d => `
          rotate(${((xScale(d) + bandwidth / 2) * 180) / Math.PI - 90})
          translate(${innerRadius},0)
        `
    );
  tick
    .append('line')
    .attr('x2', xAxisRadius)
    .attr('x1', xAxisRadius / 2)
    .attr('stroke', tickColor);
  tick
    .append('text')
    .attr('x', xAxisRadius + 10)
    .style('text-anchor', d =>
      xScale(d) >= Math.PI && xScale(d) < 2 * Math.PI ? 'end' : null
    )
    .attr(
      'transform',
      d => 'rotate(' + (90 - xScale(d)) + ',' + (xAxisRadius + 10) + ',0)'
    )
    .text(d => d3.timeFormat('%b')(d));
};

const ringArc = () => {
  data = data.filter(d => d.year == 2016);
  data.map(
    d =>
      (d.weatherLevel =
        d.WT01 + d.WT02 + d.WT03 + d.WT04 + d.WT05 + d.WT06 + d.WT08 + d.WT09)
  );
  plotConfig = getRingChartConfig();
  const width = +plotConfig.width;
  const height = +plotConfig.height;
  const margin = plotConfig.margin;
  const innerHeight = +plotConfig.innerHeight;
  const innerWidth = +plotConfig.innerWidth;
  const innerRadius = +plotConfig.innerRadius;
  const outerRadius = +plotConfig.outerRadius;
  const centerX = +plotConfig.centerX;
  const centerY = +plotConfig.centerY;

  const svg = d3.select('#ring-chart-container');
  svg.attr('height', height).attr('width', width);

  const tooltip = svg.append('g').attr('id', 'radialTooltip');

  const body = d3.select('#ring-chart-body');
  body
    .attr('height', innerHeight)
    .attr('width', innerWidth)
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  const scatterCircles = d3.select('#weather-data').selectAll('circle');

  // showTitle(svg, 'Logan Airport Weather Delay');

  const fullCircle = 2 * Math.PI;

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, d => d.date))
    .nice()
    .range([0, fullCircle]);

  // data.map(d => (d.angle = xScale(d.date)));

  const bandwidth = xScale(data[2].date) - xScale(data[1].date);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.DEP_DELAY))
    // .range([0, innerHeight/2])
    .range([innerRadius, outerRadius]);

  const colorLegend = svg
    .append('g')
    .attr('id', 'radial-color-legend')
    .attr(
      'transform',
      `translate(${width - margin.right - 180},${margin.top + 80})`
    )
    .attr('cursor', 'default');
  const normalWeather = colorLegend.append('g');
  normalWeather
    .append('rect')
    .attr('width', 30)
    .attr('height', 3)
    .attr('fill', '#4099ff');
  normalWeather
    .append('text')
    .text('Normal Weather')
    .attr('x', 100)
    .attr('y', 1.5);
  const badWeather = colorLegend
    .append('g')
    .attr('transform', `translate(${0},${40})`);
  badWeather
    .append('rect')
    .attr('width', 30)
    .attr('height', 3)
    .attr('fill', '#ff0000');
  badWeather
    .append('text')
    .text('Bad Weather')
    .attr('x', 88)
    .attr('y', 1.5);

  const radialArcContainer = body
    .append('g')
    .attr('id', 'radial-bars')
    .attr(
      'transform',
      'translate(' + innerWidth / 2 + ',' + innerHeight / 2 + ')'
    );
  const interactiveBarContainer = body
    .append('g')
    .attr('id', 'interactive-bars')
    .attr(
      'transform',
      'translate(' + innerWidth / 2 + ',' + innerHeight / 2 + ')'
    );

  const radialArcBars = radialArcContainer
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('path')
    .attr(
      'd',
      d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(d => yScale(d.DEP_DELAY))
        .startAngle(d => xScale(d.date))
        .endAngle(d => xScale(d.date) + bandwidth)
        .padAngle(0.001)
        .padRadius(innerRadius)
    )
    .attr('fill', d => {
      return d.weatherLevel > 0 ? '#ff0000' : '#4099ff';
    });

  addXAxis(
    xScale,
    bandwidth,
    innerRadius,
    outerRadius,
    innerWidth,
    innerHeight
  );

  interactiveBarContainer
    .selectAll('.interctive-bar')
    .data(data)
    .enter()
    .append('path')
    .attr(
      'd',
      d3
        .arc()
        .innerRadius(0)
        .outerRadius(1000)
        .startAngle(d => xScale(d.date))
        .endAngle(d => xScale(d.date) + bandwidth)
        .padAngle(0.001)
        .padRadius(innerRadius)
    )
    .attr('fill', 'rgba(255,255,255,0)')
    .on('mouseover', function(d, i) {
      tooltip
        .append('text')
        .attr('class', 'tooltip')
        // .attr('transform',`translate(${d3.event.x - centerX},${d3.event.y - centerY})`)
        .attr('x',width/2)
    .attr('y',40)
        .text(d.DATE + ', WEATHER_DELAY: ' + d.DEP_DELAY)
        .attr('cursor', 'default')
        .attr('pointer-events', 'none');
    radialArcBars._groups[0][i].style.fill = '#fe8e22';
      scatterCircles._groups[0][i].style.fill = '#fe8e22';
    })
    .on('mouseout', function(d, i) {
      tooltip.selectAll('text').remove();
    radialArcBars._groups[0][i].style.fill =
        d.weatherLevel > 0 ? '#ff0000' : '#4099ff';
      scatterCircles._groups[0][i].style.fill = scatterPlotColor(d);
    });
};
