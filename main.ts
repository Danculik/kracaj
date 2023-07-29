input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    x = 2
    y = 2
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    if (!(led.point(x - 1, y))) {
        if (0 < x) {
            led.unplot(x, y)
            x = x - 1
            led.plot(x, y)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (!(led.point(x, y + 1))) {
        if (y < 4) {
            led.unplot(x, y)
            y = y + 1
            led.plot(x, y)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(led.point(x + 1, y))) {
        if (x < 4) {
            led.unplot(x, y)
            x = x + 1
            led.plot(x, y)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (!(led.point(x, y - 1))) {
        if (0 < y) {
            led.unplot(x, y)
            y = y - 1
            led.plot(x, y)
        }
    }
})
let y = 0
let x = 0
x = 2
y = 2
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # # # .
    . . . . .
    `)
