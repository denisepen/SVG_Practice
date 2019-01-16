
// alert("Hello")

const data = [
{width: 200, height: 700, fill: 'orange'}
]

// select the svg container first
const svg = d3.select('svg');

const rect = svg.select('rect')
    .data(data)
    .attr('width', (d, i, n) => d.width )
    .attr('height', (d) => d.height  )
    .attr('fill', (d) => d.fill );

    console.log(rect);
    