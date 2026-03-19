namespace SpriteKind {
    export const text = SpriteKind.create()
    export const NO_alternative = SpriteKind.create()
    export const YES_alternative = SpriteKind.create()
    export const Bonnie_alternative = SpriteKind.create()
    export const Freddy_alternative = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        .......111.......
        .111..1fff1..111.
        1eee111fff111eee1
        1e44eefffffee44e1
        1e4eeeeeeeeeee4e1
        .1eefffeeefffee1.
        ..1f181fef181f1..
        .1ef111fef111fe1.
        .1ef111fef111fe1.
        .14444fffff44441.
        144f444fff444f441
        14f44444444444f41
        1444f4444444f4441
        .1f11f11f11f11f1.
        .1fffffffffffff1.
        .1f11f11f11f11f1.
        .1eeeeeeeeeeeee1.
        ..1eeeeeeeeeee1..
        ...11111111111...
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NO_alternative, function (sprite, otherSprite) {
    sprites.destroy(mySprite3)
    sprites.destroy(mySprite4)
    mySprite2.sayText("That's a schame.")
    pause(2000)
    mySprite2.sayText("")
    pause(5000)
    mySprite2.sayText("Are you by any chance under 12")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.YES_alternative, function (sprite, otherSprite) {
    sprites.destroy(mySprite3)
    sprites.destroy(mySprite4)
    mySprite2.sayText("Right...")
    pause(2000)
    mySprite2.sayText("So ho is you favorit?")
    pause(2000)
    mySprite3 = sprites.create(img`
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f 1 1 f f f f f 
        f 1 1 1 1 f f 1 1 1 1 f 
        1 e e e 1 f f 1 e e e 1 
        1 e e e f f f f e e e 1 
        1 e e e e e e e e e e 1 
        f 1 e e e e e e e e 1 f 
        1 e e e e e e e e e e 1 
        1 e e e f f e e f f e 1 
        1 e e e f f e e f f e 1 
        1 e e e e e e e e e e 1 
        1 e e e e e f f f e e 1 
        1 e e e e e e f e e e 1 
        1 e e e e e e e e e e 1 
        f 1 e e e f f e f f 1 f 
        f f 1 e e e f f f 1 f f 
        f f f 1 1 1 f f f 1 f f 
        f f f f 1 f f 1 f f 1 f 
        f f f f f 1 1 f 1 1 f f 
        `, SpriteKind.Freddy_alternative)
    mySprite4 = sprites.create(img`
        f f f f f f f 1 1 f f f 
        f 1 1 1 f f 1 6 6 1 f f 
        1 6 6 6 1 f 1 6 6 1 f f 
        1 6 6 6 6 1 1 6 6 1 f f 
        f 1 6 6 6 1 1 6 6 1 f f 
        f f 1 6 6 1 1 6 6 1 f f 
        f f 1 6 6 6 6 6 6 1 f f 
        f 1 6 6 6 6 6 6 6 6 1 f 
        1 6 6 6 6 6 6 6 6 6 6 1 
        1 6 6 6 f f 6 6 f f 6 1 
        1 6 6 6 f f 6 6 f f 6 1 
        1 6 6 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 f f f 6 6 1 
        1 6 6 6 6 6 6 f 6 6 6 1 
        1 6 6 6 6 6 6 6 6 6 6 1 
        f 1 6 6 6 2 2 6 2 2 1 f 
        f f 1 6 6 6 2 2 2 1 f f 
        f f f 1 1 1 2 2 2 1 f f 
        f f f f 1 2 2 1 2 2 1 f 
        f f f f f 1 1 f 1 1 f f 
        `, SpriteKind.Bonnie_alternative)
    mySprite5 = sprites.create(img`
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f 1 1 1 1 1 1 f f f 
        f f 1 5 5 5 5 5 5 1 f f 
        f 1 5 5 5 5 5 5 5 5 1 f 
        1 5 5 5 5 5 5 5 5 5 5 1 
        1 5 5 5 f f 5 5 f f 5 1 
        1 5 5 5 f f 5 5 f f 5 1 
        1 5 5 5 5 5 5 5 5 5 5 1 
        1 5 5 5 5 4 4 4 4 4 4 1 
        1 5 5 5 4 4 4 4 4 4 4 4 
        1 5 5 5 5 4 4 4 4 4 4 4 
        f 1 5 5 5 1 5 1 5 1 5 1 
        f f 1 5 5 5 5 5 5 1 1 1 
        f f f 1 1 1 1 1 1 f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        `, SpriteKind.Player)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite3.setPosition(30, 110)
    mySprite4.setPosition(60, 110)
    mySprite5.setPosition(90, 110)
    mySprite6.setPosition(120, 110)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        .......111.......
        .111..1fff1..111.
        1eee111fff111eee1
        1e44eefffffee44e1
        1e4eeeeeeeeeee4e1
        .1eefffeeefffee1.
        ..1f111fef111f1..
        .1ef181fef181fe1.
        .1ef111fef111fe1.
        .14444fffff44441.
        144f444fff444f441
        14f44444444444f41
        1444f4444444f4441
        .1f11f11f11f11f1.
        .1fffffffffffff1.
        .1f11f11f11f11f1.
        .1eeeeeeeeeeeee1.
        ..1eeeeeeeeeee1..
        ...11111111111...
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        .......111.......
        .111..1fff1..111.
        1eee111fff111eee1
        1e44eefffffee44e1
        1e4eeeeeeeeeee4e1
        .1eefffeeefffee1.
        ..1f111fef111f1..
        .1ef811fef811fe1.
        .1ef111fef111fe1.
        .14444fffff44441.
        144f444fff444f441
        14f44444444444f41
        1444f4444444f4441
        .1f11f11f11f11f1.
        .1fffffffffffff1.
        .1f11f11f11f11f1.
        .1eeeeeeeeeeeee1.
        ..1eeeeeeeeeee1..
        ...11111111111...
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        .......111.......
        .111..1fff1..111.
        1eee111fff111eee1
        1e44eefffffee44e1
        1e4eeeeeeeeeee4e1
        .1eefffeeefffee1.
        ..1f111fef111f1..
        .1ef181fef181fe1.
        .1ef111fef111fe1.
        .14444fffff44441.
        144f444fff444f441
        14f44444444444f41
        1444f4444444f4441
        .1f11f11f11f11f1.
        .1fffffffffffff1.
        .1f11f11f11f11f1.
        .1eeeeeeeeeeeee1.
        ..1eeeeeeeeeee1..
        ...11111111111...
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        .......111.......
        .111..1fff1..111.
        1eee111fff111eee1
        1e44eefffffee44e1
        1e4eeeeeeeeeee4e1
        .1eefffeeefffee1.
        ..1f111fef111f1..
        .1ef181fef181fe1.
        .1ef111fef111fe1.
        .14444fffff44441.
        144f444fff444f441
        14f44444444444f41
        1444f4444444f4441
        .1f11f11f11f11f1.
        .1fffffffffffff1.
        .1f11f11f11f11f1.
        .1eeeeeeeeeeeee1.
        ..1eeeeeeeeeee1..
        ...11111111111...
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        .......111.......
        .111..1fff1..111.
        1eee111fff111eee1
        1e44eefffffee44e1
        1e4eeeeeeeeeee4e1
        .1eefffeeefffee1.
        ..1f111fef111f1..
        .1ef118fef118fe1.
        .1ef111fef111fe1.
        .14444fffff44441.
        144f444fff444f441
        14f44444444444f41
        1444f4444444f4441
        .1f11f11f11f11f1.
        .1fffffffffffff1.
        .1f11f11f11f11f1.
        .1eeeeeeeeeeeee1.
        ..1eeeeeeeeeee1..
        ...11111111111...
        `)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        .......111.......
        .111..1fff1..111.
        1eee111fff111eee1
        1e44eefffffee44e1
        1e4eeeeeeeeeee4e1
        .1eefffeeefffee1.
        ..1f111fef111f1..
        .1ef181fef181fe1.
        .1ef111fef111fe1.
        .14444fffff44441.
        144f444fff444f441
        14f44444444444f41
        1444f4444444f4441
        .1f11f11f11f11f1.
        .1fffffffffffff1.
        .1f11f11f11f11f1.
        .1eeeeeeeeeeeee1.
        ..1eeeeeeeeeee1..
        ...11111111111...
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        .......111.......
        .111..1fff1..111.
        1eee111fff111eee1
        1e44eefffffee44e1
        1e4eeeeeeeeeee4e1
        .1eefffeeefffee1.
        ..1f111fef111f1..
        .1ef111fef111fe1.
        .1ef181fef181fe1.
        .14444fffff44441.
        144f444fff444f441
        14f44444444444f41
        1444f4444444f4441
        .1f11f11f11f11f1.
        .1fffffffffffff1.
        .1f11f11f11f11f1.
        .1eeeeeeeeeeeee1.
        ..1eeeeeeeeeee1..
        ...11111111111...
        `)
})
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
info.setScore(0)
scene.setBackgroundColor(15)
mySprite2 = sprites.create(img`
    fffffffffffffffffffffffffffccccccccccffffffffffffffffffffffffff
    fffffffffffffffffffffffffcccaaaaaaaacccffffffffffffffffffffffff
    ffffffffffffffffffffffffccaaaaaaaaaaaaccfffffffffffffffffffffff
    fffffffffffffffffffffffccaaaaaaaaaaaaaaccffffffffffffffffffffff
    ffffffffffffffffffffffccaaaaaaaaaaaaaaaaccfffffffffffffffffffff
    ffffffffffffffffffffffcaaaaaaaaaaaaaaaaaacfffffffffffffffffffff
    fffffffffffffffffffffccaaaaaaaaaaaaaaaaaaccffffffffffffffffffff
    fffffffffffffffffffffccaaaaaaaaaaaaaaaaaaacffffffffffffffffffff
    fffffffffffffffffffffcaaaaaaaaaaaaaaaaaaaacffffffffffffffffffff
    ffffffffffffffffffffccaaaaaaaaaaaaaaaaaaaaccfffffffffffffffffff
    ffffffffffffffffffffccaaaffffaaaaaffffaaaaccfffffffffffffffffff
    ffffffffffffffffffffccaaaff1faaaaaff1faaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaf1ffaaaaaf1ffaaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaffffaaaaaffffaaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaaaaaaaaaaaaaaaaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaaaaaaaaaaaaaaaaaaacfffffffffffffffffff
    fffffffffffffffffffffcaaaaaaaaaaaaaaaaaaaaacfffffffffffffffffff
    fffffffffffffffffffffcfaafffffffffffffaaaaccfffffffffffffffffff
    fffffffffffffffffffffcfaafffffffffffffaaaaccfffffffffffffffffff
    fffffffffffffffffffffcfaafffffffffffffaacccccffffffffffffffffff
    ffffffffffffffffffffccffaaafffffffffaaaccaaaccfffffffffffffffff
    ffffffffffffffffffffcaaffaaaaaaaaaaaaaacfaacccccfffffffffffffff
    fffffffffffffffffffccaaaffaaaaaaaaaaaaffaaaccccccffffffffffffff
    fffffffffffffffffffacaaaafffaaaaaaaaffaaaaaccccccffffffffffffff
    ffffffffffffffffffcaccaaaaafffffffffffaaaaaacccccafffffffffffff
    ffffffffffffffffffcaacaaaaaaaa55555555aaaaaacccccafffffffffffff
    fffffffffffffffffccaacaaaaaaaa55555555aaaaaacccccafffffffffffff
    ffffffffffffffffccaaacaaaaaaaaaa5555aaaaaaaacccccafffffffffffff
    fffffffffffffffccaaaacaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    fffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    ffffffffffffffccaaaccaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccccafffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccccafffffffff
    ffffffffffffffcaccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaaaaccccccccafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    fffffffffffffffcaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    fffffffffffffffcaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    fffffffffffffffcaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    ffffffffffffffffccccaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    `, SpriteKind.Enemy)
mySprite2.setPosition(80, 80)
animation.runImageAnimation(
mySprite2,
[img`
    fffffffffffffffffffffffffffccccccccccffffffffffffffffffffffffff
    fffffffffffffffffffffffffcccaaaaaaaacccffffffffffffffffffffffff
    ffffffffffffffffffffffffccaaaaaaaaaaaaccfffffffffffffffffffffff
    fffffffffffffffffffffffccaaaaaaaaaaaaaaccffffffffffffffffffffff
    ffffffffffffffffffffffccaaaaaaaaaaaaaaaaccfffffffffffffffffffff
    ffffffffffffffffffffffcaaaaaaaaaaaaaaaaaacfffffffffffffffffffff
    fffffffffffffffffffffccaaaaaaaaaaaaaaaaaaccffffffffffffffffffff
    fffffffffffffffffffffccaaaaaaaaaaaaaaaaaaacffffffffffffffffffff
    fffffffffffffffffffffcaaaaaaaaaaaaaaaaaaaacffffffffffffffffffff
    ffffffffffffffffffffccaaaaaaaaaaaaaaaaaaaaccfffffffffffffffffff
    ffffffffffffffffffffccaaaffffaaaaaffffaaaaccfffffffffffffffffff
    ffffffffffffffffffffccaaaff1faaaaaff1faaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaf1ffaaaaaf1ffaaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaffffaaaaaffffaaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaaaaaaaaaaaaaaaaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaaaaaaaaaaaaaaaaaaacfffffffffffffffffff
    fffffffffffffffffffffcaaaaaaaaaaaaaaaaaaaaacfffffffffffffffffff
    fffffffffffffffffffffcfaafffffffffffffaaaaccfffffffffffffffffff
    fffffffffffffffffffffcfaafffffffffffffaaaaccfffffffffffffffffff
    fffffffffffffffffffffcfaafffffffffffffaacccccffffffffffffffffff
    ffffffffffffffffffffccffaaafffffffffaaaccaaaccfffffffffffffffff
    ffffffffffffffffffffcaaffaaaaaaaaaaaaaacfaacccccfffffffffffffff
    fffffffffffffffffffccaaaffaaaaaaaaaaaaffaaaccccccffffffffffffff
    fffffffffffffffffffacaaaafffaaaaaaaaffaaaaaccccccffffffffffffff
    ffffffffffffffffffcaccaaaaafffffffffffaaaaaacccccafffffffffffff
    ffffffffffffffffffcaacaaaaaaaa55555555aaaaaacccccafffffffffffff
    fffffffffffffffffccaacaaaaaaaa55555555aaaaaacccccafffffffffffff
    ffffffffffffffffccaaacaaaaaaaaaa5555aaaaaaaacccccafffffffffffff
    fffffffffffffffccaaaacaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    fffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    ffffffffffffffccaaaccaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccccafffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccccafffffffff
    ffffffffffffffcaccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaaaaccccccccafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    fffffffffffffffcaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    fffffffffffffffcaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    fffffffffffffffcaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    ffffffffffffffffccccaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    `,img`
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffccccccccccffffffffffffffffffffffffff
    fffffffffffffffffffffffffcccaaaaaaaacccffffffffffffffffffffffff
    ffffffffffffffffffffffffccaaaaaaaaaaaaccfffffffffffffffffffffff
    fffffffffffffffffffffffccaaaaaaaaaaaaaaccffffffffffffffffffffff
    ffffffffffffffffffffffccaaaaaaaaaaaaaaaaccfffffffffffffffffffff
    ffffffffffffffffffffffcaaaaaaaaaaaaaaaaaacfffffffffffffffffffff
    fffffffffffffffffffffccaaaaaaaaaaaaaaaaaaccffffffffffffffffffff
    fffffffffffffffffffffccaaaaaaaaaaaaaaaaaaacffffffffffffffffffff
    fffffffffffffffffffffcaaaaaaaaaaaaaaaaaaaacffffffffffffffffffff
    ffffffffffffffffffffccaaaaaaaaaaaaaaaaaaaaccfffffffffffffffffff
    ffffffffffffffffffffccaaaffffaaaaaffffaaaaccfffffffffffffffffff
    ffffffffffffffffffffccaaaff1faaaaaff1faaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaf1ffaaaaaf1ffaaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaffffaaaaaffffaaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaaaaaaaaaaaaaaaaaaacfffffffffffffffffff
    ffffffffffffffffffffccaaaaaaaaaaaaaaaaaaaaacfffffffffffffffffff
    fffffffffffffffffffffcaaaaaaaaaaaaaaaaaaaaacfffffffffffffffffff
    fffffffffffffffffffffcfaafffffffffffffaaaaccfffffffffffffffffff
    fffffffffffffffffffffcfaafffffffffffffaaaaccfffffffffffffffffff
    fffffffffffffffffffffcfaafffffffffffffaacccccffffffffffffffffff
    fffffffffffffffffffffcffaaafffffffffaaaccaacccfffffffffffffffff
    ffffffffffffffffffffcaaffaaaaaaaaaaaaaacfaacccccfffffffffffffff
    fffffffffffffffffffccaaaffaaaaaaaaaaaaffaaaccccccffffffffffffff
    fffffffffffffffffffaccaaafffaaaaaaaaffaaaaaacccccffffffffffffff
    ffffffffffffffffffcaacaaaaafffffffffffaaaaaacccccafffffffffffff
    ffffffffffffffffffcaacaaaaaaaa55555555aaaaaacccccafffffffffffff
    fffffffffffffffffccaacaaaaaaaaaa5555aaaaaaaacccccafffffffffffff
    ffffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaacccccafffffffffffff
    fffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    fffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccaffffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccafffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaaccccccccaffffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccccafffffffff
    ffffffffffffffcaaaacaaaaaaaaaaaaaaaaaaaaaaaacccccccccafffffffff
    ffffffffffffffcaccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    ffffffffffffffccaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    fffffffffffffffcaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    fffffffffffffffcaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    fffffffffffffffcaaacaaaaaaaaaaaaaaaaaaaaaaacaccccccccafffffffff
    ffffffffffffffffccccaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    ffffffffffffffffffffaaaaaaaaaaffffffffaaaaaccccccffffffffffffff
    `],
1000,
true
)
mySprite = sprites.create(img`
    .......111.......
    .111..1fff1..111.
    1eee111fff111eee1
    1e44eefffffee44e1
    1e4eeeeeeeeeee4e1
    .1eefffeeefffee1.
    ..1f111fef111f1..
    .1ef181fef181fe1.
    .1ef111fef111fe1.
    .14444fffff44441.
    144f444fff444f441
    14f44444444444f41
    1444f4444444f4441
    .1f11f11f11f11f1.
    .1fffffffffffff1.
    .1f11f11f11f11f1.
    .1eeeeeeeeeeeee1.
    ..1eeeeeeeeeee1..
    ...11111111111...
    `, SpriteKind.Player)
mySprite.setPosition(80, 10)
controller.moveSprite(mySprite, 50, 50)
mySprite.setStayInScreen(true)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
pause(2000)
mySprite2.sayText("Hello")
pause(2000)
mySprite2.sayText("would you like to talk to me?")
pause(2000)
mySprite3 = sprites.create(img`
    1fffff1f1111111fff11111ff
    1fffff1f1ffffffff1fffff1f
    1fffff1f1fffffff1fffffff1
    f1fff1ff1fffffff1ffffffff
    f1fff1ff1fffffff1ffffffff
    ff1f1fff1fffffff1ffffffff
    ff1f1fff1ffffffff1fffffff
    fff1ffff1111ffffff11111ff
    fff1ffff1ffffffffffffff1f
    fff1ffff1fffffffffffffff1
    fff1ffff1fffffffffffffff1
    fff1ffff1fffffffffffffff1
    fff1ffff1fffffffffffffff1
    fff1ffff1fffffff1fffffff1
    fff1ffff1ffffffff1fffff1f
    fff1ffff1111111fff11111ff
    `, SpriteKind.YES_alternative)
mySprite4 = sprites.create(img`
    11fffffff1fffff11111111ffff
    111ffffff1ffff1111111111fff
    1f1ffffff1fff11ffffffff11ff
    1f11fffff1ff11ffffffffff11f
    1ff1fffff1f11ffffffffffff11
    1ff11ffff1f11ffffffffffff11
    1fff1ffff1f11ffffffffffff11
    1fff11fff1f11ffffffffffff11
    1ffff1fff1f11ffffffffffff11
    1ffff11ff1f11ffffffffffff11
    1fffff1ff1f11ffffffffffff11
    1fffff11f1f11ffffffffffff11
    1ffffff1f1ff11ffffffffff11f
    1ffffff111fff11ffffffff11ff
    1fffffff11ffff1111111111fff
    1fffffff11fffff11111111ffff
    `, SpriteKind.NO_alternative)
mySprite3.setPosition(60, 110)
mySprite4.setPosition(106, 110)
