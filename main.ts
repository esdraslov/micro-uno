namespace microUno {
    //% block="plot the last of column"
    //% x.min=0 x.max=4
    //% y.min=1 y.max=2
    export function unoLed (x: number, y: number){
        for (let i = 0; i < y; i++) {
            led.plot(x, i)
            basic.pause(1000)
        }
    }
    //% block="unplot the last of column"
    //% x.min=0 x.max=4
    //% y.min=1 y.max=2
    export function unUnoLed(x: number, y: number) {
        for (let i = 0; i < y; i++) {
            led.unplot(x, i)
            basic.pause(1000)
        }
    }
    //% block="connect with the servo on P0 and set the angle"
    //% angle.min=0 angle.max=360
    export function unoConnectServoP0Angle(angle: number) {
        servos.P0.setAngle(angle)
    }
    //% block="connect with the servo on P1 and set the angle"
    //% angle.min=0 angle.max=360
    export function unoConnectServoP1Angle(angle: number) {
        servos.P1.setAngle(angle)
    }
    //% block="connect with the servo on P2 and set the angle"
    //% angle.min=0 angle.max=360
    export function unoConnectServoP2Angle(angle: number) {
        servos.P2.setAngle(angle)
    }
    //% block="connect with the sonar on P0 P0"
    export function unoConnectSonarP0P0() {
        sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="connect with the sonar on P0 P1"
    export function unoConnectSonarP0P1() {
        sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.MicroSeconds)
    }
    //% block="connect with the sonar on P1 P1"
    export function unoConnectSonarP1P1() {
        sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="connect with the sonar on P1 P0"
    export function unoConnectSonarP1P0() {
        sonar.ping(DigitalPin.P1, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="connect with the sonar on P0 P2"
    export function unoConnectSonarP0P2() {
        sonar.ping(DigitalPin.P0, DigitalPin.P2, PingUnit.MicroSeconds)
    }
    //% block="connect with the sonar on P2 P0"
    export function unoConnectSonarP2P0() {
        sonar.ping(DigitalPin.P2, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="connect with the sonar on P2 P2"
    export function unoConnectSonarP2P2() {
        sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    //% block="show the notes of a melody"
    export function unoShowMelody(melody: string) {
        
    }
}