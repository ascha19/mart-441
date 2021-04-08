# Summary

I looked up a bunch of examples of three.js being used to find inspiration for this week, as I had a lot of ideas but wasn't sure just how much I could do with it. Eventually, I came up with the idea of a snow scene with a large pearl orbiting a smaller one; I don't know why, I just know that the idea seemed abstract and cool to me. I found a couple different snow references (one with a camera dynamic that I really liked and wanted to try implementing) and a couple references on how to make one shape orbit another in order to learn how to do what I wanted to, then I found pearl textures to add to my sphere shapes.

- http://jsfiddle.net/3drjwj2n/ - camera reference
- https://enlight.nyc/projects/snowglobe-threejs - snow reference
- https://mattloftus.github.io/2016/01/23/threejs-p1/ - orbit reference 1
- https://mattloftus.github.io/2016/02/03/threejs-p2/ - orbit reference 2

## Issues

- Minor syntax errors breaking code (capitalization, missing parentheses); fixed
- Issues running loading and running OrbitControls.js; opted out of using said script
- "(Math.random() - (intermediate value)) is not a function" error; attempted several syntax fixes in hope of fixing, to no avail
- I didn't find a 3D model that fit my idea so I didn't implement one, but I did import textures on my geometry objects
- Code only showing black screen due to these errors
