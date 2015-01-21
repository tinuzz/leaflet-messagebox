A Leaflet plugin to display a temporary message on a map

# Leaflet.Messagebox

Leaflet.Messagebox is a simple control to display a temporary message, like an
error, on a [Leaflet](http://leafletjs.com/) map.

## Using the Messagebox

There a are two ways to add the messagebox to the map. First:

    var box = L.control.messagebox().addTo(map);

or, add it on map initialization:

    var map = L.map( 'mapdiv', {'messagebox': true, ...} );

Then, show a message:

    box.show( 'This is the message' );

or, when implicitly used with the map:

    map.messagebox.show( 'This is the message' );

## Available Options:

There are only two options:

`position:` The standard Leaflet.Control position parameter. Defaults to 'topright'

`timeout:` The duration the messagebox is shown in milliseconds. Defaults to 3 seconds.

## Styling ##

The messagebox can be styled with CSS, see [the css file]( leaflet-messagebox.css) for details.
