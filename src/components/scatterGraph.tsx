'use client'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

import { reduceSumFunc } from 'utils'

interface ScatterGraphProps {
  data: any
  xAxisObj: {
    label: string
    labelOffset: number
    labelFormatter?: (d?: any) => string
  }
  yAxisObj: {
    label: string
    labelOffset: number
    labelFormatter?: (d?: any) => string
  }
}

d3.selection.prototype.moveToFront = function () {
  return this.each(() => {
    this.parentNode.appendChild(this)
  })
}

export const ScatterGraph: React.FC<ScatterGraphProps> = ({ data, xAxisObj, yAxisObj }) => {
  const ref = useRef(null)

  const margins = { top: 30, right: 30, bottom: 30, left: 30 }
  const width = 400 - margins.left - margins.right
  const height = 200 - margins.top - margins.bottom

  useEffect(() => {
    const svgElement = d3.select(ref.current)

    const x = configureXAxis(svgElement, xAxisObj)
    const y = configureYAxis(svgElement, yAxisObj)

    // extract the x labels for the axis and scale domain
    const xLabels = data
      .sort((a: any, b: any) => (a.x > b.x ? 1 : -1))
      .map(function (d: any) {
        return d.x
      })

    // get the x and y values for least squares
    const xSeries = d3.range(1, xLabels.length + 1)
    const ySeries = data.map(function (d: any) {
      return d.y
    })

    const leastSquaresCoeff = leastSquares(xSeries, ySeries)

    // apply the results of the least squares regression
    const x1 = xLabels[0] - 0.1
    const y1 = leastSquaresCoeff[0] + leastSquaresCoeff[1]
    const x2 = xLabels[xLabels.length - 1] + 0.1
    const y2 = leastSquaresCoeff[0] * xSeries.length + leastSquaresCoeff[1]
    const trendData = [[x1, y1, x2, y2]]

    const trendLine = svgElement.selectAll('.trendLine').data(trendData)

    trendLine
      .enter()
      .append('line')
      .attr('class', 'trendLine')
      .attr('x1', function (d) {
        return x(d[0])
      })
      .attr('y1', function (d) {
        return y(d[1])
      })
      .attr('x2', function (d) {
        return x(d[2])
      })
      .attr('y2', function (d) {
        return y(d[3])
      })
      .attr('stroke', 'black')
      .attr('stroke-width', 0.5)

    // Add points
    svgElement
      .append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => x(d.x))
      .attr('cy', (d: any) => y(d.y))
      .attr('r', 1)
      .style('fill', '#df4a00')
  })

  const configureXAxis = (svgElement: any, xAxisObj: any) => {
    const xDomain = d3.extent(data, (d: any) => d.x)
    const x = d3
      .scaleLinear()
      .domain([Number(xDomain[0]) - 0.1, Number(xDomain[1]) + 0.1])
      .range([0, width])

    const xAxis = d3.axisBottom(x)
    if (xAxisObj.labelFormatter) {
      xAxis.tickFormat((d: any) => xAxisObj.labelFormatter(d))
    }
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)

    // text label for the x axis
    svgElement
      .append('text')
      .attr('transform', 'translate(' + width / 2 + ' ,' + (height + margins.top) + ')')
      .style('text-anchor', 'middle')
      .style('font', '0.4em arial')
      .text(xAxisObj.label)

    return x
  }

  const configureYAxis = (svgElement: any, yAxisObj: any) => {
    // Add Y axis
    const yDomain = d3.extent(data, (d: any) => d.y)

    const y = d3
      .scaleLinear()
      .domain([Number(yDomain[0]) - 0.1, Number(yDomain[1]) + 0.1])
      .range([height, 0])

    // format the y axis
    const yAxis = d3.axisLeft(y)
    if (yAxisObj.labelFormatter) {
      yAxis.tickFormat((d: any) => yAxisObj.labelFormatter(d))
    }
    svgElement.append('g').call(yAxis)

    // text label for the y axis
    svgElement
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', +yAxisObj.labelOffset - margins.left)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font', '0.4em arial')
      .text(yAxisObj.label)

    return y
  }

  return (
    <div id="svgContainer">
      <svg viewBox="-45 -5 400 178" ref={ref} />
    </div>
  )
}

const leastSquares = (xSeries: number[], ySeries: number[]) => {
  const xBar = (xSeries.reduce(reduceSumFunc, 0) * 1.0) / xSeries.length
  const yBar = (ySeries.reduce(reduceSumFunc, 0) * 1.0) / ySeries.length

  const ssXX = xSeries
    .map(function (d) {
      return Math.pow(d - xBar, 2)
    })
    .reduce(reduceSumFunc, 0)

  const ssYY = ySeries
    .map(function (d) {
      return Math.pow(d - yBar, 2)
    })
    .reduce(reduceSumFunc, 0)

  const ssXY = xSeries
    .map(function (d, i) {
      return (d - xBar) * (ySeries[i] - yBar)
    })
    .reduce(reduceSumFunc, 0)

  const slope = ssXY / ssXX
  const intercept = yBar - xBar * slope
  const rSquare = Math.pow(ssXY, 2) / (ssXX * ssYY)
  const a = [slope, intercept, rSquare]
  return a
}
