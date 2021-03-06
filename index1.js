
// alert("Hello")

const data = [
{width: 200, height: 100, fill: 'purple'},
{width: 100, height: 60, fill: 'pink'},
{width: 50, height: 30, fill: 'orange'}
]

// select the svg container first
const svg = d3.select('svg');

// add attrs to rects already in the dom
const rect = svg.selectAll('rect')
    .data(data)
    .attr('width', (d, i, n) => d.width )
    .attr('height', (d) => d.height  )
    .attr('fill', (d) => d.fill );

    // add attrs to rects in enter selection (see lecture 19 D3)
   rect.enter()
    .append('rect')
    .attr('width', (d, i, n) => d.width )
    .attr('height', (d) => d.height  )
    .attr('fill', (d) => d.fill );

    // console.log(rect);
    