enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Up,
    Right,
    Left,
    Down
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SNAKEHEAD.vy <= 0) {
        set_x_val = Math.round(SNAKEHEAD.x / 5) * 5
        if (set_x_val % 10 == 0) {
            if (SNAKEHEAD.vx > 0) {
                pause(166)
                set_x_val += 5
            } else {
                pause(166)
                set_x_val += -5
            }
        }
        SNAKEHEAD.setVelocity(0, -30)
        SNAKEHEAD.x = set_x_val
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    SNAKEHEAD.changeScale(1, ScaleAnchor.BottomLeft)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SNAKEHEAD.vx <= 0) {
        set_y_val = Math.round(SNAKEHEAD.y / 5) * 5
        if (set_y_val % 10 == 0) {
            if (SNAKEHEAD.vy > 0) {
                pause(166)
                set_y_val += 5
            } else {
                pause(166)
                set_y_val += -5
            }
        }
        SNAKEHEAD.setVelocity(-30, 0)
        SNAKEHEAD.y = set_y_val
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SNAKEHEAD.vx >= 0) {
        set_y_val = Math.round(SNAKEHEAD.y / 5) * 5
        if (set_y_val % 10 == 0) {
            if (SNAKEHEAD.vy > 0) {
                pause(166)
                set_y_val += 5
            } else {
                pause(166)
                set_y_val += -5
            }
        }
        SNAKEHEAD.setVelocity(30, 0)
        SNAKEHEAD.y = set_y_val
        animation.setAction(SNAKEHEAD, ActionKind.Right)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SNAKEHEAD.vy >= 0) {
        set_x_val = Math.round(SNAKEHEAD.x / 5) * 5
        if (set_x_val % 10 == 0) {
            if (SNAKEHEAD.vx > 0) {
                pause(166)
                set_x_val += 5
            } else {
                pause(166)
                set_x_val += -5
            }
        }
        SNAKEHEAD.setVelocity(0, 30)
        SNAKEHEAD.x = set_x_val
    }
})
let legalTurn = 0
let set_y_val = 0
let set_x_val = 0
let SNAKEHEAD: Sprite = null
let Up = animation.createAnimation(ActionKind.Up, 100000000000)
let Right = animation.createAnimation(ActionKind.Right, 100000000)
let Left = animation.createAnimation(ActionKind.Left, 1000000000)
let Down = animation.createAnimation(ActionKind.Down, 100000000)
scene.setBackgroundImage(assets.image`myImage`)
let SNAKEBODY = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Projectile)
let SnakeheadRIGHT = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 
    8 1 1 1 8 8 8 8 8 8 
    8 1 f 1 8 8 8 8 8 8 
    8 1 1 1 8 8 8 8 8 6 
    8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    8 1 1 1 8 8 8 8 8 6 
    8 1 f 1 8 8 8 8 8 8 
    8 1 1 1 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player)
SnakeheadRIGHT.setPosition(45, 65)
SNAKEBODY.setPosition(35, 65)
SNAKEHEAD.setVelocity(50, 0)
forever(function () {
    if (Math.round(SNAKEHEAD.x) % 5 == 0 && Math.round(SNAKEHEAD.y % 5) == 0) {
        legalTurn = 1
    } else {
        legalTurn = 0
    }
})
