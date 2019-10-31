const showLabel = (body,plotConfig) => {
  const yAxisLabelOffset = +plotConfig.yAxisLabelOffset
  const innerHeight = +plotConfig.innerHeight
  const innerWidth = +plotConfig.innerWidth
  const xAxisLabelOffset = +plotConfig.xAxisLabelOffset
  body
    .append('text')
    .text('Fastest 2-minute wind speed')
    .attr('class', 'axis-label')
    .attr(
      'transform',
      'translate(' + -yAxisLabelOffset + ',' + innerHeight / 2 + ') rotate(-90)'
    );

  body
    .append('text')
    .text('Date')
    .attr('class', 'axis-label')
    .attr(
      'transform',
      'translate(' +innerWidth / 2 +
        ',' +
        (innerHeight + xAxisLabelOffset) +
        ')'
    );
};