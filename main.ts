//  set timer (button input)
let countdown = 21
let minute = 60000
// ms
let second = 1000
// ms
let currentSecond = -1
basic.showLeds(`
# # # # #
# # # # #
# # # # #
# # # # #
. . . . .
`)
//  display current countdown
//  count a minute and reduce countdown:
loops.everyInterval(minute, function countDown() {
    
    countdown = Math.constrain(countdown - 1, 0, 25)
})
loops.everyInterval(second, function secondsPass() {
    
    currentSecond = (currentSecond + 1) % 5
})
//  at 0, play alert until [button] pressed
//  run programme
loops.everyInterval(second / 2, function display() {
    let display_count: number;
    
    
    if (countdown == 0) {
        basic.showNumber(0)
    } else {
        //  audio.play(Sound.TWINKLE)
        display_count = countdown
        led.unplot(display_count % 5, Math.floor(display_count / 5))
        for (let i = 0; i < 5; i++) {
            led.unplot(i, 4)
        }
        led.plot(currentSecond, 4)
    }
    
})
