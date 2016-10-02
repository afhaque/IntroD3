var data = [55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85,
            101, 95, 105, 114, 123, 123, 111, 91, 75, 71,
            75, 72, 67];

var barWidth = 20, barPadding = 3;
var maxValue = d3.max(data);

var g = d3.select('body')
    .append('svg')
    .attr({ width: 1000, height: 250 })
    .append('g');

function xloc(d, i) { return i * (barWidth + barPadding); }
function yloc(d) { return maxValue - d; }
function translator(d, i) {
    return "translate(" + xloc(d, i) + "," + yloc(d) + ")";
}

var barGroup = g.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', translator);

barGroup.append('rect')
    .attr({
        fill: 'steelblue',
        width: barWidth,
        height: function(d) { return d; }
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