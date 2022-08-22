<script>
  import * as d3 from 'd3'
  export let data
  export let xAccessor, yAccessor, xScale, yScale, fill, stroke, strokeWidth,

  const lineGenerator = d3
    .line()
    .y(d => yScale(yAccessor(d)))
    .x(d => xScale(xAccessor(d)))

</script>

<path d={lineGenerator(data)} {stroke} {strokeWidth} {fill} />
