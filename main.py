
# set timer (button input)
countdown = 21
minute = 60000 #ms
second = 1000 #ms
currentSecond = -1

basic.show_leds("""
# # # # #
# # # # #
# # # # #
# # # # #
. . . . .
""")

# display current countdown
def display():
    global countdown
    global currentSecond

    if countdown == 0:
        basic.show_number(0)
        # audio.play(Sound.TWINKLE)
    else:
        display_count = countdown
        led.unplot((display_count % 5), Math.floor(display_count/5))
        for i in range(5):
            led.unplot(i, 4)
        led.plot(currentSecond, 4)
        
        
# count a minute and reduce countdown:
def countDown():
    global countdown
    countdown = Math.constrain(countdown-1, 0, 25)
    
def secondsPass():
    global currentSecond
    currentSecond = (currentSecond +1) % 5

loops.every_interval(minute, countDown)
loops.every_interval(second, secondsPass)

# at 0, play alert until [button] pressed

# run programme
loops.every_interval(second/2, display)