# Deprecated!

I found a solution with better adoption and support for (almost) all icon libraries: https://github.com/unplugin/unplugin-icons
Since it is better maintained we've archived our own solution in favor of theirs.


# Svelte Material Icons - a different take

This package bundles Material Design Icons dynamically.
It also includes an `IconStack` component. The idea is to render this `IconStack`; render the icons inside of it and in all other locations render them using SVG's `use`.

## Demos

Run the application using `npm run dev`, visit the path `/` to see all icons loaded via a single include.
Open `/pruned` to show a demo page that dynamically picks 10 random icons and then loads them via their generated components.
