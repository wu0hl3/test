<script>
  import * as d3 from 'd3'

  import Line from '$lib/components/chart/Line.svelte'
  import Circles from '$lib/components/chart/Circles.svelte'
  import Axis from '$lib/components/chart/Axis.svelte'
  import { fade, blur } from 'svelte/transition'

  import SelectionsMap from '$lib/components/SelectionsMap.svelte'
  export let data

  $: county = data.county
  $: lName = data.data.location[county].locationName

  $: target = data.data.location[county].weatherElement
  $: tData = target[1].time //平均相對溫度 C
  $: maxTData = target[12].time //最高溫 C
  $: maxATData = target[5].time //最高體感溫度 C
  $: minTData = target[8].time //最低溫度 C
  $: minATData = target[11].time //最低體感溫度 C
  $: tdData = target[14].time //平均露點溫度 C

  // // $: popData = target[0].time //降雨機率percentage
  // // $: rhData = target[2].time //平均相對溼度 percentage

  // // $: minCIData = target[3].time //最小舒適指數 數字+描述
  // // $: maxCIData = target[7].time //最大舒適指數 數字+描述

  // // $: wsData = target[4].time //最大風速 數字 公尺/秒
  // // $: uviData = target[9].time //紫外線指數 數字(+描述)

  // // $: wxData = target[6].time //天氣現象 描述
  // // $: weatherDescriptionTData = target[10].time //
  // // $: wdData = target[13].time //風向

  let clientWidth, clientHeight
  $: console.log(clientWidth)
  $: console.log(clientHeight)

  $: width = clientWidth > clientHeight ? clientHeight * 0.8 * 1.25 : clientWidth * 0.8
  $: height = clientWidth > clientHeight ? clientHeight * 0.8 : clientWidth * 0.8 * 0.75

  let svg, svgWidth, svgHeight, bounds

  const boundsMarginLeft = 80
  const boundsMarginRight = 100

  const boundsMarginTop = 50
  const boundsMarginBottom = 80

  $: boundsWidth = width - boundsMarginLeft - boundsMarginRight
  $: boundsHeight = height - boundsMarginTop - boundsMarginBottom

  // 溫度
  const formate = d3.timeParse('%Y-%m-%d %H:%M:%S')
  const xAccessor = d => formate(d.startTime)
  const YAccessor = d => d.elementValue[0].value

  $: xScale = d3.scaleTime().domain(d3.extent(tData, xAccessor)).range([0, boundsWidth])

  $: temYScale = d3
    .scaleLinear()
    .domain([0, d3.max(maxATData, YAccessor)])
    .range([boundsHeight, 0])
    .nice()

  $: temlineGenerator = d3
    .line()
    .curve(d3.curveCardinal)
    .y(d => temYScale(YAccessor(d)))
    .x(d => xScale(xAccessor(d)))

  //x,y軸
  $: temAxisGenerator = d3.axisLeft().scale(temYScale).tickSize(10)
  $: timeAxisGenerator = d3
    .axisBottom()
    .scale(xScale)
    .ticks(width > 600 ? d3.timeHour.every(12) : d3.timeHour.every(24))

  // 舒適度
  // const percentageYScale = d3.scaleLinear().domain([0, 100]).range([boundsHeight, 0])
  // const percentageLineGenerator = d3
  //   .line()
  //   .curve(d3.curveLinear)
  //   .y(d => percentageYScale(YAccessor(d)))
  //   .x(d => xScale(xAccessor(d)))

  // function change(e) {
  //   county = e.detail
  // }
</script>

<div id="chartWrapper" bind:clientWidth bind:clientHeight>
  {#if clientWidth}
    <a href="/.." class="homeButton">HOME</a>
    <SelectionsMap data={data.data.location} />

    <svg bind:this={svg} {width} {height}>
      <g bind:this={bounds} style="transform:translate({boundsMarginLeft}px,{boundsMarginTop}px);">
        <g>
          <text x={boundsWidth / 2} y="0" style="transform:translate(-81px,-14px);">
            {lName}未來一周溫度表
          </text>
        </g>

        <g style="transform:translate({boundsWidth + 20}px,{boundsMarginTop}px);" in:fade={{ delay: 2000 }}>
          <text x="20" y="10" font-size="12px">平均溫度</text>
          <line x1="0" y1="5" x2="10" y2="5" stroke="#14B8A6" />

          <text x="20" y="30" font-size="12px">最高溫度</text>
          <line x1="0" y1="25" x2="10" y2="25" stroke="#EF4444" />

          <text x="20" y="50" font-size="12px">最高體感溫度</text>
          <line x1="0" y1="45" x2="10" y2="45" stroke="#DC2626" />

          <text x="20" y="70" font-size="12px">最低溫度</text>
          <line x1="0" y1="65" x2="10" y2="65" stroke="#3B82F6" />

          <text x="20" y="90" font-size="12px">最低體感溫度</text>
          <line x1="0" y1="85" x2="10" y2="85" stroke="#2563EB" />

          <text x="20" y="110" font-size="12px">露點溫度</text>
          <line x1="0" y1="105" x2="10" y2="105" stroke="#1E3A8A" />
        </g>
        <Axis axisGenerator={temAxisGenerator} />
        <Axis axisGenerator={timeAxisGenerator} style="transform:translateY({boundsHeight}px);" />
        <Line
          data={tData}
          {xScale}
          yScale={temYScale}
          {xAccessor}
          yAccessor={YAccessor}
          fill="none"
          stroke="#14B8A6"
          stroke-width="2"
          lineGenerator={temlineGenerator}
          title="平均溫度"
        />
        <Circles data={tData} {xScale} yScale={temYScale} {xAccessor} yAccessor={YAccessor} r="4" fill="#14B8A6" />

        <Line
          data={maxTData}
          {xScale}
          yScale={temYScale}
          {xAccessor}
          yAccessor={YAccessor}
          fill="none"
          stroke="#EF4444"
          stroke-width="1"
          lineGenerator={temlineGenerator}
          title="最高溫度"
        />
        <Circles data={maxTData} {xScale} yScale={temYScale} {xAccessor} yAccessor={YAccessor} r="4" fill="#EF4444" />
        <Line
          data={maxATData}
          {xScale}
          yScale={temYScale}
          {xAccessor}
          yAccessor={YAccessor}
          fill="none"
          stroke="#DC2626"
          stroke-width="1"
          lineGenerator={temlineGenerator}
          title="最高體感溫度"
        />
        <Circles data={maxATData} {xScale} yScale={temYScale} {xAccessor} yAccessor={YAccessor} r="4" fill="#DC2626" />

        <Line
          data={minTData}
          {xScale}
          yScale={temYScale}
          {xAccessor}
          yAccessor={YAccessor}
          fill="none"
          stroke="#3B82F6"
          stroke-width="1"
          lineGenerator={temlineGenerator}
          title="最低溫度"
        />
        <Circles data={minTData} {xScale} yScale={temYScale} {xAccessor} yAccessor={YAccessor} r="4" fill="#3B82F6" />
        <Line
          data={minATData}
          {xScale}
          yScale={temYScale}
          {xAccessor}
          yAccessor={YAccessor}
          fill="none"
          stroke="#2563EB"
          stroke-width="1"
          lineGenerator={temlineGenerator}
          title="最低體感溫度"
        />
        <Circles data={minATData} {xScale} yScale={temYScale} {xAccessor} yAccessor={YAccessor} r="4" fill="#2563EB" />
        <Line
          data={tdData}
          {xScale}
          yScale={temYScale}
          {xAccessor}
          yAccessor={YAccessor}
          fill="none"
          stroke="#1E3A8A"
          stroke-width="1"
          lineGenerator={temlineGenerator}
          title="露點溫度"
        />
        <Circles data={tdData} {xScale} yScale={temYScale} {xAccessor} yAccessor={YAccessor} r="4" fill="#1E3A8A" />
      </g>
    </svg>
  {/if}
</div>

<style lang="scss">
  #chartWrapper {
    width: 100%;
    height: 100%;
    max-height: 1920px;
    max-width: 1080px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  a.homeButton {
    display: block;
    width: 20px;
    height: 20px;
    position: fixed;
    left: 0;
    top: 0;
    opacity: 0;
  }
</style>
