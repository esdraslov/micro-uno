namespace microUno {
    //% block="uno plot X: %x Y: %y"
    //% x.min=0 x.max=4
    //% y.min=1 y.max=5
    export function unoLed (x: number, y: number){
        for (let i = 0; i < y; i++) {
            led.plot(x, i)
            basic.pause(1000)
        }
    }
    //% block="uno unplot X: %x Y: %y"
    //% x.min=0 x.max=4
    //% y.min=1 y.max=5
    export function unUnoLed(x: number, y: number) {
        for (let i = 0; i < y; i++) {
            led.unplot(x, i)
            basic.pause(1000)
        }
    }
    //% block="unoConnectServoP0 set angle %angle"
    //% angle.min=0 angle.max=360
    export function unoConnectServoP0Angle(angle: number) {
        servos.P0.setAngle(angle)
    }
    //% block="unoConnectServoP1 set angle %angle"
    //% angle.min=0 angle.max=360
    export function unoConnectServoP1Angle(angle: number) {
        servos.P1.setAngle(angle)
    }
    //% block="unoConnectServoP2 set angle %angle"
    //% angle.min=0 angle.max=360
    export function unoConnectServoP2Angle(angle: number) {
        servos.P2.setAngle(angle)
    }
    //% block="unoConnectsonarP0P0"
    export function unoConnectSonarP0P0() {
        sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="unoConnectsonarP0P1"
    export function unoConnectSonarP0P1() {
        sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.MicroSeconds)
    }
    //% block="unoConnectsonarP1P1"
    export function unoConnectSonarP1P1() {
        sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="unoConnectsonarP1P0"
    export function unoConnectSonarP1P0() {
        sonar.ping(DigitalPin.P1, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="unoConnectsonarP0P2"
    export function unoConnectSonarP0P2() {
        sonar.ping(DigitalPin.P0, DigitalPin.P2, PingUnit.MicroSeconds)
    }
    //% block="unoConnectsonarP2P0"
    export function unoConnectSonarP2P0() {
        sonar.ping(DigitalPin.P2, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="unoConnectsonarP0P0"
    export function unoConnectSonarP2P2() {
        sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="show melody notes %melody"
    export function unoShowMelody(melody: string) {
        if(melody == "beethoven virus"){
            led.plot(0, 0)
            led.plot(1, 3)
            led.plot(2, 0)
            led.plot(3, 3)
            led.plot(4, 0)
        }
    }
}