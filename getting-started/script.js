/**
 * Created by flash on 12/01/2017.
 */

// select all the p tags
var ps = d3.selectAll('p');
// select all elements with the class 'item'
var items = d3.selectAll('.item');
// select the 1st elem with the id 'first-item'
var firstItem = d3.select('#first-item');

// add a HTML attribute to all p tags
ps.attr('align', 'center');
// change the bg-color of the items
items.style('background-color','red');
// remove the element #first-item from the DOM
firstItem.remove();


