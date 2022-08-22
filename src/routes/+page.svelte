<script>
  import Map from '$lib/components/Map.svelte'
  import { fade, blur } from 'svelte/transition'

  export let data
  let county = 3
  $: weathers = data.data.location
  $: keyMap = weathers.map((e, i) => e.locationName)

  function getCounty(e) {
    county = e.detail
    county = keyMap.indexOf(e.detail)
    console.log(e.detail)
    console.log(county)
  }
</script>

<div class="wrapper">
  <div class="mapWrapper">
    <Map on:selectCounty={getCounty} data={weathers} />
  </div>
</div>

<style lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mapWrapper {
    width: 100%;
    height: 100%;
    padding: 5%;
  }
</style>
