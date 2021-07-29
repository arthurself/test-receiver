let Tilt = 0
radio.setGroup(1)
basic.showLeds(`
    # # # # #
    # . . . #
    # # # # .
    # . . # .
    # . . . #
    `)
basic.pause(1000)
basic.forever(function () {
    radio.sendValue("left", pins.digitalReadPin(DigitalPin.P0))
    radio.sendValue("right", pins.digitalReadPin(DigitalPin.P1))
    Tilt = input.acceleration(Dimension.X)
    basic.clearScreen()
    if (Tilt > 5) {
        led.plot(4, 4)
    }
    if (Tilt > 100) {
        led.plot(4, 3)
    }
    if (Tilt > 150) {
        led.plot(4, 2)
    }
    if (Tilt > 200) {
        led.plot(4, 1)
    }
    if (Tilt > 250) {
        led.plot(4, 0)
        basic.pause(200)
        led.toggle(4, 0)
    }
    if (Tilt < -5) {
        led.plot(0, 4)
    }
    if (Tilt < -100) {
        led.plot(0, 3)
    }
    if (Tilt < -150) {
        led.plot(0, 2)
    }
    if (Tilt < -200) {
        led.plot(0, 1)
    }
    if (Tilt < -250) {
        led.plot(0, 0)
        basic.pause(200)
        led.toggle(0, 0)
    }
    basic.pause(100)
    radio.sendNumber(Tilt)
})
