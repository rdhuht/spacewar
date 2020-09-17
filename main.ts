input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
        if (enemy.isTouching(shoot)) {
            shoot.delete()
            enemy.delete()
            basic.pause(500)
            enemy = game.createSprite(0, 0)
        }
    }
    shoot.delete()
})
let enemy_shoot: game.LedSprite = null
let shoot: game.LedSprite = null
let enemy: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
enemy = game.createSprite(0, 0)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        player.change(LedSpriteProperty.X, -1)
    } else if (input.isGesture(Gesture.TiltRight)) {
        player.change(LedSpriteProperty.X, 1)
    }
    basic.pause(500)
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        enemy.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        enemy.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
})
basic.forever(function () {
    enemy_shoot = game.createSprite(enemy.get(LedSpriteProperty.X), enemy.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        enemy_shoot.change(LedSpriteProperty.Y, 1)
        basic.pause(700)
        if (player.isTouching(enemy_shoot)) {
            player.delete()
            enemy_shoot.delete()
            basic.pause(200)
            game.gameOver()
        }
    }
    enemy_shoot.delete()
})
