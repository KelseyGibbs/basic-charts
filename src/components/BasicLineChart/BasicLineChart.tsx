import React, { useEffect } from "react";
// import basicLineChart from './BasicLineChart.module.scss'
import * as d3 from "d3";
import { Types } from "./Types";
// import { appendFile } from 'fs/promises'

const BasicLineChart = (props: BasicLineChartProps) => {
  useEffect(() => {
    draw();
  });

  const draw = () => {
    const width = props.width - props.left - props.right;
    const height = props.height - props.top - props.bottom;

    d3.dsv(",", "./Data/PRFT.csv", (d) => {
      const res = d as unknown as Types.Data;
      const date = d3.timeParse("%Y-%m-%d")(res.date);
      return {
        date,
        open: res.open,
      };
    }).then((data) => {
      const svg = d3
        .select("#basicLineChart")
        .append("svg")
        .attr("width", width + props.left + props.right)
        .attr("height", height + props.top + props.bottom)
        .append("g")
        .attr("transform", `translate(${props.left}, ${props.right})`);

      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, (d) => {
            return d.date;
          }) as [Date, Date]
        )
        .range([0, width]);

      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));

      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d) => {
            return Math.max(
              ...data.map((dt) => (dt as unknown as Types.Data).open),
              0
            );
          }),
        ] as number[])
        .range([height, 0]);
        
      svg.append("g").call(d3.axisLeft(y))
        .append('path')
        .datum(data)
        .attr("fill", "none")
        .attr('stroke', props.fill)
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          // @ts-ignore
          d3
            .line()
            .x((d) => {
              return x((d as unknown as { date: number }).date);
            })
            .y((d) => {
              return y((d as unknown as Types.Data).open);
            })
        );
    });
  };

  return <div id="basicLineChart" />;
};

interface BasicLineChartProps {
  width: number;
  height: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
  fill: string;
}

export default BasicLineChart;
