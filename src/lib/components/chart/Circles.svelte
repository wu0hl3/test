<script>
  import * as d3 from 'd3'
  import { fade } from 'svelte/transition'

  export let data
  export let xAccessor, yAccessor, xScale, yScale, fill, r

  function show() {
    this.style.strokeWidth = 6
  }
  function leave() {
    this.style.strokeWidth = 0
  }

  const timeFormate = d3.timeFormat('%b %d %H:%M')
</script>

<g
  >{#each data as d, i (i)}
    <circle
      in:fade={{ delay: 1000 + xScale(xAccessor(d)), duration: 300 }}
      out:fade={{ delay: 1000 - xScale(xAccessor(d)), duration: 300 }}
      cx={xScale(xAccessor(d))}
      cy={yScale(yAccessor(d))}
      {r}
      {fill}
      stroke={fill}
      on:mouseenter={show}
      on:mouseleave={leave}
    >
      <title>{timeFormate(xAccessor(d)) + ' ' + yAccessor(d)}&deg;C</title>
    </circle>
  {/each}</g
>

<style lang="scss">
  circle {
    transition: all 0.3s ease;
    filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.5));
  }
</style>
