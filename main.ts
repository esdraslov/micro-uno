namespace microUno {
    export function unoLed (x: number, y: number){
        for (let i = 0; i < y; i++) {
            led.plot(x, i)
            basic.pause(1000)
        }
    }
    export function unUnoLed(x: number, y: number) {
        for (let i = 0; i < y; i++) {
            led.unplot(x, i)
            basic.pause(1000)
        }
    }
    export function unoConnectServoP0Angle(angle: number) {
        servos.P0.setAngle(angle)
    }
    export function unoConnectServoP1Angle(angle: number) {
        servos.P1.setAngle(angle)
    }
    export function unoConnectServoP2Angle(angle: number) {
        servos.P2.setAngle(angle)
    }
    export function unoConnectSonarP0P0() {
        sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    export function unoConnectSonarP0P1() {
        sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.MicroSeconds)
    }
    export function unoConnectSonarP1P1() {
        sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    export function unoConnectSonarP1P0() {
        sonar.ping(DigitalPin.P1, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    export function unoConnectSonarP0P2() {
        sonar.ping(DigitalPin.P0, DigitalPin.P2, PingUnit.MicroSeconds)
    }
    export function unoConnectSonarP2P0() {
        sonar.ping(DigitalPin.P2, DigitalPin.P0, PingUnit.MicroSeconds)
    }
    export function unoConnectSonarP2P2() {
        sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MicroSeconds)
    }
}