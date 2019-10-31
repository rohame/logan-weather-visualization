const connectedView = (scatterCircles, radialArcBars, interactiveBars) => {
  // let tooltip = d3.select('#radialTooltip');
  // interactiveBars
  //   .on('mouseover', function(d, i) {
  //   console.log('2')
  //     tooltip
  //       .append('text')
  //       .attr('class', 'tooltip')
  //       .attr(
  //         'transform',
  //         `translate(${d3.event.x - centerX},${d3.event.y - centerY})`
  //       )
  //       .text(d.DATE + ', WEATHER_DELAY: ' + d.DEP_DELAY)
  //       .attr('cursor', 'default')
  //       .attr('pointer-events', 'none');
  //     radialArcBars._groups[0][i].style.fill = '#fe8e22';
  //     scatterCircles._groups[0][i].style.fill = '#fe8e22';
  //   })
  //   .on('mouseout', function(d, i) {
  //     tooltip.selectAll('text').remove();
  //     radialArcBars._groups[0][i].style.fill =
  //       d.weatherLevel > 0 ? '#ff0000' : '#4099ff';
  //     scatterCircles._groups[0][i].style.fill = scatterPlotColor(d);
  //   });

  const tooltip = d3.select('#scatterTooltip');
  scatterCircles
    .on('mouseover', function(d, i) {
      tooltip
        .append('text')
        .attr('class', 'tooltip')
        // .attr('transform', `translate(${d3.event.x},${d3.event.y-20})`)
        .attr('x',480)
        .attr('y',350)
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
