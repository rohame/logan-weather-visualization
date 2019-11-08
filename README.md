# Logan International Airport Weather and Aviation Data Visualization

## Final Deliverables
[See here](#deliverables)

## Data

The data I proposed to visualize are [2016-2018 daily weather report of Logan International Airport](https://gist.github.com/rohame/c26cf5cb80db6520d56fd0921510520b), and [2016-2018 Logan International Airport aviation data](https://gist.github.com/rohame/0141629f53fc311b7b5c68faefda94ef).

## Prototypes

I’ve created a proof of concept visualization of this data. It's a scatter plot and it shows the max temperatures across a calendar, colored by precipitation.

[![image](https://user-images.githubusercontent.com/33828578/65563834-ec68a180-df18-11e9-8b22-230521fc3cbe.png)](https://beta.vizhub.com/rohame/58c151eb7f1f451588679e2e5d0ec982)

Also a scatter plot showing max temperature against min temperature, colored by precipitation.

[![image](https://user-images.githubusercontent.com/33828578/65563936-3f425900-df19-11e9-944b-2011e579712d.png)](https://beta.vizhub.com/rohame/01d996251ca94317879be273e9d70aa3)

## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

 * Is the relationship between TMAX and TMIN influenced by precipitation?
 * Are there interesting patterns between TMAX and precipitation?
 * Do extreme weather conditions influence flights? 
 * How is temperature distribution across the year?

## Sketches

The upper part has been delivered in *Prototypes*.

The lower part is a circle marking the mean temperature in a year. Each angle represents a day. The point corresponding to the angle is the temperature of the day. When hovered, the points and lines should reflect the data where the mouse places.
![image](https://user-images.githubusercontent.com/33828578/65564199-21292880-df1a-11e9-8dd2-e6d2eebe3f09.png)

## Interactive Ideas
* Make a menu to filter data of specific intervals
* Make a menu to choose different indice of temperature (snow, precipitation) and flights (cancel, delay)
* Create tooltips to reflect details of each data point

## Schedule
Item | Estimated time of complete
-- | --:
Collect and clean data | Done
Use d3 to draw the basic plot like the first prototype (plus flight data) with axises and color | Sun. 10/06/2019
Add interactions for above | Fri. 10/11/2019
Ring chart | Sun. 10/20/2019
Add interactions for ring shart | Fri. 10/25/2019
Final polish | Sun. 10/30/2019


## Open Questions

* ~~Aviation data are needed, but Logan Airport doesn't provide daily flight statistics. Perhaps refer to other airport.~~ Dataset found.
* ~~The "ring chart" is now beyond my capability.~~ Addressed by Professor.

## Interemediate Versions
* [Scatter plot](https://beta.vizhub.com/rohame/a2876336ebb3453bb22f4e09986e58f1)
* [Scatter plot with interactive color legend](https://beta.vizhub.com/rohame/901bed0992504bd6921d72554ff75be1)
* [Ring chart with rectangle](https://beta.vizhub.com/rohame/2c3fb8f2543842798d941493c754ca74)
* [Ring chart with d3.arc()](https://beta.vizhub.com/rohame/cf04c9370e4746c0891713e7d7d5e3a4)
* [Ring chart with path](https://beta.vizhub.com/rohame/535e80e5bce34c4095a5b82ccb26ea6f)
* [Ring chart with color representing bad weather](https://beta.vizhub.com/rohame/c2bf33809f374802ab78372dd49db450)
* [Ring chart with interaction](https://beta.vizhub.com/rohame/011d1bb13d484d25be5f47e528dde9a8)
* [Linked views (final version)](https://beta.vizhub.com/rohame/d916689f2e564c88bdb4b322af923727)

## Deliverables
[![Final project](https://user-images.githubusercontent.com/33828578/67913789-906ee980-fb64-11e9-94ce-04aee0b3fafc.png)](https://beta.vizhub.com/rohame/d916689f2e564c88bdb4b322af923727)

[Portfolio Video](https://youtu.be/sSTFB9J3PiM)

### Features:
* Scatter plot
  * x-axis is days in a year
  * y-axis is the fastest 2-minute wind speed in the day
  * Size of the circles represents the delay caused by weather
  * Color represents the precipitation
* Ring chart
  * Axial dimension is the delay caused by weather
  * Tangential dimension is the days in a year
  * Red means bad weather such as fog, glaze, and smoke
  * Blue means normal weather
* Interactions
  * When the circles are hovered, the color of the circle and the corresponding bar in ring chart will change
  * When the direction of the bar of ring chart is hovered, thecolor of the bar and the corresponding circle in scatter plot will change
  * When circle or bar are hovered, a tooltip indicating the date and delay caused by weather will show up.

## Future Work
* Create a menu to select different y-axises
* Rewrite with React
* Make the code dynamic
* Create a hover effect or menu to select from different years
* Add another axis to the ring chart
