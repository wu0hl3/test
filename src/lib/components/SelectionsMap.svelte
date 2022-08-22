<script>
  import { geoOrthographic } from 'd3'

  import { createEventDispatcher } from 'svelte'
  import { goto } from '$app/navigation'
  const dispatcher = createEventDispatcher()

  export let data
  let county

  $: counties = data.map((e, i) => e.locationName)

  function changePage() {
    goto(`/${county}`)
  }
</script>

<select bind:value={county} on:change={changePage}>
  {#each counties as item, i}
    <option value={i}> {item}</option>
  {/each}
</select>

<style>
  select {
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
</style>
