<script>
  import * as d3 from 'd3'
  import { draw } from 'svelte/transition'
  export let data
  export let xAccessor, yAccessor, xScale, yScale, fill, stroke, strokeWidth, lineGenerator, title

  $: d = lineGenerator(data)
  function show(e) {
    e.target.style.strokeWidth = 5
  }
  function hide(e) {
    e.target.style.strokeWidth = 2
  }
</script>

<path
  d={lineGenerator(data)}
  {stroke}
  {strokeWidth}
  {fill}
  in:draw={{ duration: 1000, delay: 500 }}
  on:mouseenter={show}
  on:mouseleave={hide}
>
  <title>{title}</title>
</path>

<style lang="scss">
  path {
    transition: all 0.3s ease;
  }
</style>
