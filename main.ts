input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    Nave.move(-1)
})
input.onGesture(Gesture.Shake, function () {
    game.pause()
})
input.onButtonPressed(Button.AB, function () {
    Disparo = game.createSprite(Nave.get(LedSpriteProperty.X), Nave.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        Disparo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    Nave.move(1)
})
let Disparo: game.LedSprite = null
let Nave: game.LedSprite = null
Nave = game.createSprite(2, 4)
let Enemigo1 = game.createSprite(2, 0)
Disparo = game.createSprite(2, 0)
Enemigo1.delete()
Disparo.delete()
game.setScore(0)
basic.forever(function () {
    if (Disparo.get(LedSpriteProperty.Y) == 0) {
        Disparo.delete()
    }
})
basic.forever(function () {
    basic.pause(randint(1000, 3000))
    if (Enemigo1.isDeleted()) {
        Enemigo1 = game.createSprite(randint(0, 4), 0)
    }
})
basic.forever(function () {
    basic.pause(1000)
    if (!(Enemigo1.isDeleted())) {
        Enemigo1.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (Disparo.isTouching(Enemigo1)) {
        Enemigo1.delete()
        Disparo.delete()
        game.addScore(1)
    } else if (Enemigo1.isTouching(Nave)) {
        game.gameOver()
    } else if (Enemigo1.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
