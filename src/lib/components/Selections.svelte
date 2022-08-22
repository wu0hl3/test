<script>
  import { createEventDispatcher } from 'svelte'

  const dispatcher = createEventDispatcher()

  export let data
  let county
  console.log(data)
  $: console.log(county)

  $: counties = data.map((e, i) => e.locationName)
  $: console.log(counties)
  $: dispatcher('countySelected', county)
</script>

<select bind:value={county}>
  {#each counties as item, i}
    <option value={i}> {item}</option>
  {/each}
</select>
