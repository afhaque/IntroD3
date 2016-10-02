var data = [55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85,
            101, 95, 105, 114, 150, 180, 210, 125, 100, 71,
            75, 72, 67];

var barWidth = 20, barPadding = 3;
var maxValue = d3.max(data);

var graphWidth = data.length * (barWidth + barPadding) - barPadding;
var margin = { top: 10, right: 10, bottom: 10, left: 50 };

var totalWidth = graphWidth + margin.left + margin.right;
var totalHeight = maxValue + margin.top + margin.bottom;

var svg = d3.select('body')
    .append('svg')
    .attr({ width: totalWidth, height: totalHeight });

svg.append('rect').attr({
        width: totalWidth, height: totalHeight,
        fill: 'white',
        stroke: 'black', 'stroke-width': 1
    });

var mainGroup = svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ")");

mainGroup.append('rect').attr({
    fill: 'rgba(0,0,0,0.1)', width: totalWidth - (margin.left + margin.right),
    height: totalHeight - (margin.bottom + margin.top)
});

function xloc(d, i) { return i * (barWidth + barPadding); }
function yloc(d) { return maxValue - d; }
function translator(d, i) {
    return "translate(" + xloc(d, i) + "," + yloc(d) + ")";
}

var barGroup = mainGroup.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', translator);

barGroup.append('rect')
    .attr({
        fill: 'steelblue',
        width: barWidth,
        height: function (d) { return d; }
    });

var textTranslator = "translate(" + barWidth / 2 + ",0)";

barGroup.append('text')
    .text(function(d) { return d; })
    .attr({
        fill: 'white',
        'alignment-baseline': 'before-edge',
        'text-anchor': 'middle',
        transform: textTranslator
    })
    .style('font', '10px sans-serif');

var leftAxisGroup = svg.append('g');
var axisPadding = 3;
leftAxisGroup.attr({ transform: 'translate(' + (margin.left - axisPadding) + ',' + margin.top + ')' });
var scale = d3.scale
  .linear()
  .domain([maxValue, 0])
  .range([0, maxValue]);

var axis = d3.svg.axis()
    .orient('left')
    .scale(scale);

var axisNodes = leftAxisGroup.call(axis);
var domain = axisNodes.selectAll('.domain');
domain.attr({
    fill: 'none',
    'stroke-width': 1,
    stroke: 'black'
});
var ticks = axisNodes.selectAll('.tick line');
ticks.attr({
    fill: 'none',
    'stroke-width': 1,
    stroke: 'black'
});