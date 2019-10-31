const showTitle = (svg, text) => {
  svg
    .append('text')
    .text(text)
    .attr('transform', 'translate(' + svg.attr('width') / 2 + ',40)')
    .attr('font-size', '3em')
    .attr('pointer-events', 'none');
};
