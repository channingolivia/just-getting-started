let Timer = 0
input.onGesture(Gesture.Shake, function () {
    Timer = 20
    basic.showIcon(IconNames.Happy)
    basic.pause(5000)
    for (let index = 0; index < 21; index++) {
        basic.showNumber(Timer)
        basic.pause(500)
        Timer += -1
    }
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
