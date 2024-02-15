import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { IData } from '../types';


interface Props {
    data: IData[];
  }

const Dashboard :  React.FC<Props>= ({data}) => {

    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
      if (!svgRef.current) return;
  
      const width = 800;
      const height = 400;
      const margin = { top: 20, right: 20, bottom: 20, left: 40 };
  
      const svg = d3
        .select(svgRef.current)
        .attr('width', width)
        .attr('height', height);
  
      const xScale = d3
        .scaleLinear()
        .domain([0, data.length])
        .range([margin.left, width - margin.right]);
  
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.intensity)!])
        .range([height - margin.bottom, margin.top]);
  
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);
  
      svg
        .append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis);
  
      svg
        .append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis);
  
      svg
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => xScale(i))
        .attr('y', (d) => yScale(d.intensity))
        .attr('width', width / data.length - 1)
        .attr('height', (d) => height - margin.bottom - yScale(d.intensity))
        .attr('fill', 'steelblue');
    }, [data]);
  
    return (
      <div>
        <h2>Data Visualization Dashboard</h2>
        <svg ref={svgRef}></svg>
      </div>
    );
};

export default Dashboard;
