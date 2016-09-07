# Countdown Timer Custom Element

A dumb example Custom Element

See the [blog post]().

## Installing

To install: `npm i countdown-timer-element`

Then load it into your page somehow, such as: `import 'countdown-timer-element`

It'll register itself onto the DOM.

## Using

```
<countdown-timer seconds="6">
```

Property: `seconds` (number)

Outputs an `on-countdown-ended` event when the timer reaches zero.
