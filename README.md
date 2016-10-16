# D3 Data visualisation

 The goal of this repository is to provide a quick info-point to those developers that want to represent ***real time*** data using the JavaScript library D3 .
 
 ### Let's begin with the boring part a.k.a. some basic knowledge:
> 1.0 **Vector  graphics** on the web.

 **A vector graphic** is constructed by *geometric primitives* and *attributes*. By geometric primitives I mean shapes, and by attributes I mean margins, size, etc. We can deduct that the ***vector*** is created from primitives because it is either created solely from primitives, or created out of complex shapes which are themselves created by **primitives**. If  we *know* that primitives can be characterized by mathematical expressions, we also know that vectors can be described using mathematical expressions.

 - For vector graphics, how 'expensive' it is to draw a graphic is mostly dependent of the **numbers of elements** in the graphic. This is something that we call **lossless rescalling**, and it normally does not calculate on the resolution of the graphic image.

I have created an html file called *svgExamples.html* to illustrate two ways of creating an SVG:
 - by embedding SVG directly to the DOM (Document Object Model)
     - all components of a vector graphic are commonly stored in a **scene graph**, which is installed in the DOM tree
 - by using JavaScript
    - create custom functions which can set up SVGs


> 1.1  ***Pixel Graphics***

Here we do not care about how many elements do exist in a graph (image), but what is the actual image resolution.
In pixel graphics we talk pixels, not elements.
The bigger the number of pixels in an image, the higher the computation for it.

You can check the file *canvasExamples.html* which ilustrates how to create an image using Pixel Graphics and **JavaScript**.