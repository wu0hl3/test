import { c as create_ssr_component, f as add_attribute, e as escape, h as each, d as createEventDispatcher, v as validate_component } from "../../../chunks/index.js";
import * as d3 from "d3";
/* empty css                                                     */const css$2 = {
  code: "path.svelte-3jypph{transition:all 0.3s ease}",
  map: null
};
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { xAccessor, yAccessor, xScale, yScale, fill, stroke, strokeWidth, lineGenerator, title } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.xAccessor === void 0 && $$bindings.xAccessor && xAccessor !== void 0)
    $$bindings.xAccessor(xAccessor);
  if ($$props.yAccessor === void 0 && $$bindings.yAccessor && yAccessor !== void 0)
    $$bindings.yAccessor(yAccessor);
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0)
    $$bindings.xScale(xScale);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.lineGenerator === void 0 && $$bindings.lineGenerator && lineGenerator !== void 0)
    $$bindings.lineGenerator(lineGenerator);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$2);
  lineGenerator(data);
  return `<path${add_attribute("d", lineGenerator(data), 0)}${add_attribute("stroke", stroke, 0)}${add_attribute("strokewidth", strokeWidth, 0)}${add_attribute("fill", fill, 0)} class="${"svelte-3jypph"}"><title>${escape(title)}</title></path>`;
});
const css$1 = {
  code: "circle.svelte-1oc1ut0{transition:all 0.3s ease;filter:drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))}",
  map: null
};
const Circles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { xAccessor, yAccessor, xScale, yScale, fill, r } = $$props;
  const timeFormate = d3.timeFormat("%b %d %H:%M");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.xAccessor === void 0 && $$bindings.xAccessor && xAccessor !== void 0)
    $$bindings.xAccessor(xAccessor);
  if ($$props.yAccessor === void 0 && $$bindings.yAccessor && yAccessor !== void 0)
    $$bindings.yAccessor(yAccessor);
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0)
    $$bindings.xScale(xScale);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.r === void 0 && $$bindings.r && r !== void 0)
    $$bindings.r(r);
  $$result.css.add(css$1);
  return `<g>${each(data, (d, i) => {
    return `
    <circle${add_attribute("cx", xScale(xAccessor(d)), 0)}${add_attribute("cy", yScale(yAccessor(d)), 0)}${add_attribute("r", r, 0)}${add_attribute("fill", fill, 0)}${add_attribute("stroke", fill, 0)} class="${"svelte-1oc1ut0"}"><title>${escape(timeFormate(xAccessor(d)) + " " + yAccessor(d))}\xB0C</title></circle>
  `;
  })}</g>`;
});
const Axis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { axisGenerator, style } = $$props;
  let el;
  if ($$props.axisGenerator === void 0 && $$bindings.axisGenerator && axisGenerator !== void 0)
    $$bindings.axisGenerator(axisGenerator);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<g${add_attribute("style", style, 0)}${add_attribute("this", el, 0)}></g>`;
});
const Selections = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let counties;
  const dispatcher = createEventDispatcher();
  let { data } = $$props;
  let county;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    console.log(county);
  }
  counties = data.map((e, i) => e.locationName);
  {
    console.log(counties);
  }
  {
    dispatcher("countySelected", county);
  }
  return `<select>${each(counties, (item, i) => {
    return `<option${add_attribute("value", i, 0)}>${escape(item)}</option>`;
  })}</select>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-163x19x{width:100%}",
  map: null
};
const width = 800;
const height = 400;
const boundsMarginLeft = 80;
const boundsMarginRight = 100;
const boundsMarginTop = 15;
const boundsMarginBottom = 80;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let target;
  let tData;
  let maxTData;
  let maxATData;
  let minTData;
  let minATData;
  let tdData;
  let xScale;
  let temYScale;
  let temlineGenerator;
  let temAxisGenerator;
  let timeAxisGenerator;
  let { data } = $$props;
  let county = 0;
  let svg, bounds;
  const boundsWidth = width - boundsMarginLeft - boundsMarginRight;
  const boundsHeight = height - boundsMarginTop - boundsMarginBottom;
  const formate = d3.timeParse("%Y-%m-%d %H:%M:%S");
  const xAccessor = (d) => formate(d.startTime);
  const YAccessor = (d) => d.elementValue[0].value;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  target = data.data[county].weatherElement;
  tData = target[1].time;
  maxTData = target[12].time;
  maxATData = target[5].time;
  minTData = target[8].time;
  minATData = target[11].time;
  tdData = target[14].time;
  xScale = d3.scaleTime().domain(d3.extent(tData, xAccessor)).range([0, boundsWidth]);
  temYScale = d3.scaleLinear().domain([0, d3.max(maxATData, YAccessor)]).range([boundsHeight, 0]).nice();
  temlineGenerator = d3.line().curve(d3.curveCardinal).y((d) => temYScale(YAccessor(d))).x((d) => xScale(xAccessor(d)));
  temAxisGenerator = d3.axisLeft().scale(temYScale).tickSize(10);
  timeAxisGenerator = d3.axisBottom().scale(xScale).ticks(d3.timeHour.every(12));
  return `${validate_component(Selections, "Selections").$$render($$result, { data: data.data }, {}, {})}

<div class="${"wrapper svelte-163x19x"}"><svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("this", svg, 0)}><g style="${"transform:translate(" + escape(boundsMarginLeft, true) + "px," + escape(boundsMarginTop, true) + "px);"}"${add_attribute("this", bounds, 0)}><g style="${"transform:translate(" + escape(boundsWidth + 20, true) + "px," + escape(boundsMarginTop, true) + "px);"}"><text x="${"20"}" y="${"10"}" font-size="${"12px"}">\u5E73\u5747\u6EAB\u5EA6</text><line x1="${"0"}" y1="${"5"}" x2="${"10"}" y2="${"5"}" stroke="${"#14B8A6"}"></line><text x="${"20"}" y="${"30"}" font-size="${"12px"}">\u6700\u9AD8\u6EAB\u5EA6</text><line x1="${"0"}" y1="${"25"}" x2="${"10"}" y2="${"25"}" stroke="${"#EF4444"}"></line><text x="${"20"}" y="${"50"}" font-size="${"12px"}">\u6700\u9AD8\u9AD4\u611F\u6EAB\u5EA6</text><line x1="${"0"}" y1="${"45"}" x2="${"10"}" y2="${"45"}" stroke="${"#DC2626"}"></line><text x="${"20"}" y="${"70"}" font-size="${"12px"}">\u6700\u4F4E\u6EAB\u5EA6</text><line x1="${"0"}" y1="${"65"}" x2="${"10"}" y2="${"65"}" stroke="${"#3B82F6"}"></line><text x="${"20"}" y="${"90"}" font-size="${"12px"}">\u6700\u4F4E\u9AD4\u611F\u6EAB\u5EA6</text><line x1="${"0"}" y1="${"85"}" x2="${"10"}" y2="${"85"}" stroke="${"#2563EB"}"></line><text x="${"20"}" y="${"110"}" font-size="${"12px"}">\u9732\u9EDE\u6EAB\u5EA6</text><line x1="${"0"}" y1="${"105"}" x2="${"10"}" y2="${"105"}" stroke="${"#1E3A8A"}"></line></g>${validate_component(Axis, "Axis").$$render($$result, { axisGenerator: temAxisGenerator }, {}, {})}${validate_component(Axis, "Axis").$$render(
    $$result,
    {
      axisGenerator: timeAxisGenerator,
      style: "transform:translateY(" + boundsHeight + "px);"
    },
    {},
    {}
  )}${validate_component(Line, "Line").$$render(
    $$result,
    {
      data: tData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      fill: "none",
      stroke: "#14B8A6",
      "stroke-width": "2",
      lineGenerator: temlineGenerator,
      title: "\u5E73\u5747\u6EAB\u5EA6"
    },
    {},
    {}
  )}${validate_component(Circles, "Circles").$$render(
    $$result,
    {
      data: tData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      r: "4",
      fill: "#14B8A6"
    },
    {},
    {}
  )}${validate_component(Line, "Line").$$render(
    $$result,
    {
      data: maxTData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      fill: "none",
      stroke: "#EF4444",
      "stroke-width": "1",
      lineGenerator: temlineGenerator,
      title: "\u6700\u9AD8\u6EAB\u5EA6"
    },
    {},
    {}
  )}${validate_component(Circles, "Circles").$$render(
    $$result,
    {
      data: maxTData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      r: "4",
      fill: "#EF4444"
    },
    {},
    {}
  )}${validate_component(Line, "Line").$$render(
    $$result,
    {
      data: maxATData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      fill: "none",
      stroke: "#DC2626",
      "stroke-width": "1",
      lineGenerator: temlineGenerator,
      title: "\u6700\u9AD8\u9AD4\u611F\u6EAB\u5EA6"
    },
    {},
    {}
  )}${validate_component(Circles, "Circles").$$render(
    $$result,
    {
      data: maxATData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      r: "4",
      fill: "#DC2626"
    },
    {},
    {}
  )}${validate_component(Line, "Line").$$render(
    $$result,
    {
      data: minTData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      fill: "none",
      stroke: "#3B82F6",
      "stroke-width": "1",
      lineGenerator: temlineGenerator,
      title: "\u6700\u4F4E\u6EAB\u5EA6"
    },
    {},
    {}
  )}${validate_component(Circles, "Circles").$$render(
    $$result,
    {
      data: minTData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      r: "4",
      fill: "#3B82F6"
    },
    {},
    {}
  )}${validate_component(Line, "Line").$$render(
    $$result,
    {
      data: minATData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      fill: "none",
      stroke: "#2563EB",
      "stroke-width": "1",
      lineGenerator: temlineGenerator,
      title: "\u6700\u4F4E\u9AD4\u611F\u6EAB\u5EA6"
    },
    {},
    {}
  )}${validate_component(Circles, "Circles").$$render(
    $$result,
    {
      data: minATData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      r: "4",
      fill: "#2563EB"
    },
    {},
    {}
  )}${validate_component(Line, "Line").$$render(
    $$result,
    {
      data: tdData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      fill: "none",
      stroke: "#1E3A8A",
      "stroke-width": "1",
      lineGenerator: temlineGenerator,
      title: "\u9732\u9EDE\u6EAB\u5EA6"
    },
    {},
    {}
  )}${validate_component(Circles, "Circles").$$render(
    $$result,
    {
      data: tdData,
      xScale,
      yScale: temYScale,
      xAccessor,
      yAccessor: YAccessor,
      r: "4",
      fill: "#1E3A8A"
    },
    {},
    {}
  )}</g></svg>
</div>`;
});
export {
  Page as default
};
