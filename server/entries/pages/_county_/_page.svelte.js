import { c as create_ssr_component } from "../../../chunks/index.js";
import * as d3 from "d3";
/* empty css                                                     */const SelectionsMap_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#chartWrapper.svelte-1ex5h7v{width:100%;height:100%;max-height:1920px;max-width:1080px;display:flex;justify-content:center;align-items:center;margin:0 auto}a.homeButton.svelte-1ex5h7v{display:block;width:20px;height:20px;position:fixed;left:0;top:0;opacity:0}",
  map: null
};
const boundsMarginLeft = 80;
const boundsMarginRight = 100;
const boundsMarginTop = 50;
const boundsMarginBottom = 80;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let county;
  let target;
  let tData;
  let maxATData;
  let width;
  let height;
  let boundsWidth;
  let boundsHeight;
  let xScale;
  let temYScale;
  let { data } = $$props;
  let clientWidth, clientHeight;
  const formate = d3.timeParse("%Y-%m-%d %H:%M:%S");
  const xAccessor = (d) => formate(d.startTime);
  const YAccessor = (d) => d.elementValue[0].value;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  county = data.county;
  data.data.location[county].locationName;
  target = data.data.location[county].weatherElement;
  tData = target[1].time;
  target[12].time;
  maxATData = target[5].time;
  target[8].time;
  target[11].time;
  target[14].time;
  {
    console.log(clientWidth);
  }
  {
    console.log(clientHeight);
  }
  width = clientWidth * 0.8;
  height = clientWidth * 0.8 * 0.75;
  boundsWidth = width - boundsMarginLeft - boundsMarginRight;
  boundsHeight = height - boundsMarginTop - boundsMarginBottom;
  xScale = d3.scaleTime().domain(d3.extent(tData, xAccessor)).range([0, boundsWidth]);
  temYScale = d3.scaleLinear().domain([0, d3.max(maxATData, YAccessor)]).range([boundsHeight, 0]).nice();
  d3.line().curve(d3.curveCardinal).y((d) => temYScale(YAccessor(d))).x((d) => xScale(xAccessor(d)));
  d3.axisLeft().scale(temYScale).tickSize(10);
  d3.axisBottom().scale(xScale).ticks(width > 600 ? d3.timeHour.every(12) : d3.timeHour.every(24));
  return `<div id="${"chartWrapper"}" class="${"svelte-1ex5h7v"}">${``}
</div>`;
});
export {
  Page as default
};
