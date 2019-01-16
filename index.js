const canvas = d3.select(".canvas")

const svg = canvas.append('svg')
    .attr('height', 600)
    .attr('width', 600);

// append shapes to svg container

const group = svg.append('g')
    .attr('transform', 'translate(75, 100)');


group.append('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 30);


group.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill', 'pink');


group.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y1', 120)
    .attr('stroke', 'red');

svg.append('text')
    .attr('x', 250)
    .attr('y', 200)
    .attr('fill', 'orange')
    .text('hello world!')
    .style('font-family', 'arial')
