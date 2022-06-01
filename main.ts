let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let VELOCIDAD = 100
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, VELOCIDAD)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        soundExpression.sad.play()
        maqueen.motorStop(maqueen.Motors.All)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, VELOCIDAD)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, VELOCIDAD)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        soundExpression.spring.playUntilDone()
    }
})
