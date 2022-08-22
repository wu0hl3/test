<script>
  import * as d3 from 'd3'
  import { onMount } from 'svelte'
  export let axisGenerator, style
  let el
  $: if (el) {
    d3.select(el).transition().call(axisGenerator)
  }
</script>

<g bind:this={el} {style} />

<style lang="scss">
  g.tick line {
    opacity: 0.5;
  }
</style>
