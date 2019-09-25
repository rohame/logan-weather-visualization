# Logan Weather Data Visualization

## Data

The data I propose to visualize for my project are [2016-2018 daily weather report of Logan International Airport](https://gist.github.com/rohame/c26cf5cb80db6520d56fd0921510520b).

## Prototypes

I’ve created a proof of concept visualization of this data. It's a scatter plot and it shows the max temperatures across a calendar, colored by precipitation.

[![image](https://user-images.githubusercontent.com/33828578/65563834-ec68a180-df18-11e9-8b22-230521fc3cbe.png)](https://beta.vizhub.com/rohame/58c151eb7f1f451588679e2e5d0ec982)

Also a scatter plot showing max temperature against min temperature, colored by precipitation.

[![image](https://user-images.githubusercontent.com/33828578/65563936-3f425900-df19-11e9-944b-2011e579712d.png)](https://beta.vizhub.com/rohame/01d996251ca94317879be273e9d70aa3)

## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

 * Is the relationship between TMAX and TMIN influenced by precipitation?
 * Are there interesting patterns between TMAX and precipitation?
 * Do extreme weather conditions influence flights? (more aviation data needed)
 * How is temperature distribution across the year?

## Sketches

The upper part has been delivered in *Prototypes*.

The lower part is a circle marking the mean temperature in a year. Each angle represents a day. The point corresponding to the angle is the temperature of the day. When hovered, the points and lines should reflect the data where the mouse places.
![image](https://user-images.githubusercontent.com/33828578/65564199-21292880-df1a-11e9-8dd2-e6d2eebe3f09.png)

## Open Questions

* Aviation data are needed, but Logan Airport doesn't provide daily flight statistics. Perhaps refer to other airport.
* The "ring chart" is now beyond my capability.
