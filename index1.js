
// alert("Hello")

const data = [
{width: 200, height: 700, fill: 'orange'}
]

// select the svg container first
const svg = d3.select('svg');

const rect = svg.select('rect')
    .data(data)
    .attr('width', function(d){return d.width} )
    .attr('height', function(d){ return d.height } )
    .attr('fill', function(d){return d.fill} );

    console.log(rect);
    