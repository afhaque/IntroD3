// Here's the Data!
var data = [55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85,
            101, 95, 105, 114, 150, 180, 210, 125, 100, 71,
            75, 72, 67];

// Here we set some parameters for our bar graph (we'll be using these later)
var barWidth = 10, barPadding = 3;

// We store the max value of the code. We'll use that to figure out the scale. 
var maxValue = d3.max(data);

// We create a main group that is a "selection" of the main body
// Inside of that we create an SVG window and give it some property
// We then append a "g" that's a way of saying we have an SVG group
var mainGroup = d3.select('body')
    .append('svg')
    .attr({ width: 1000, height: 250 })
    .append('g');

// We then create a set of functions for determining how the barWidth and barPadding should look
// We then create a set of functions for determining how far down on the vertical access to start.
function xloc(d, i) { return i * (barWidth + barPadding); }
function yloc(d) { return maxValue - d; }

// We then create a function for "moving" each rectangle to the appropriate place on the screen (horizontally) using xloc.
// We then deal with vertically aligning using yloc
function translator(d, i) {
    return "translate(" + xloc(d, i) + "," + yloc(d) + ")";
}

// We then create svg "rectangles" for each data element on our screen 
// We use the enter function to create new elements
// We append these rectangles and use the functions and variables we created earlier to determine how the rectangles should look 
mainGroup.selectAll("rect")
    .data(data)
    .enter()
    .append('rect')
    .attr({
        fill: 'steelblue',
        transform: translator,
        width: barWidth,
        height: function (d) { return d; }
    });