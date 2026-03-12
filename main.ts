namespace SpriteKind {
    export const text = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
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
        `, SpriteKind.Player)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
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
        `, SpriteKind.Player)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
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
        `, SpriteKind.Player)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
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
        `, SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        pause(2000)
        mySprite2.setPosition(200, 0)
        mySprite3.sayText("Right...")
        pause(2000)
        mySprite3.sayText("Is it your birth day today?")
    } else if (controller.B.isPressed()) {
        mySprite2 = sprites.create(img`
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            `, SpriteKind.text)
        mySprite3.sayText("")
        sprites.destroy(mySprite2)
        mySprite3.sayText("That's a schame.")
        pause(2000)
        mySprite3.sayText("")
        pause(5000)
        mySprite3.sayText("Are you by any chance under 12")
    }
})
let mySprite: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
info.setScore(0)
scene.setBackgroundColor(15)
mySprite3 = sprites.create(img`
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
animation.runImageAnimation(
mySprite3,
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
mySprite2 = sprites.create(img`
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
    `, SpriteKind.text)
mySprite2.setPosition(80, 92)
pause(2000)
mySprite3.sayText("Hello")
pause(2000)
mySprite3.sayText("would you like to talk to me?")
pause(2000)
mySprite2 = sprites.create(img`
    fff111fffffffff1fffff1f1111111fff11111fffffffffffffffff1111111fffffff11fffffff1fffff11111111ffff
    ff1fff1ffffffff1fffff1f1ffffffff1fffff1ffffffffffffffff1ffffff1ffffff111ffffff1ffff1111111111fff
    ff1fff1ffffffff1fffff1f1fffffff1fffffff1fffffffffffffff1ffffff1ffffff1f1ffffff1fff11ffffffff11ff
    ff1fff1ffff111ff1fff1ff1fffffff1fffffffffffffffffffffff1ffffff1ff111f1f11fffff1ff11ffffffffff11f
    ff1fff1ffff111ff1fff1ff1fffffff1fffffffffffffffffffffff1ffffff1ff111f1ff1fffff1f11ffffffffffff11
    f1fffff1fff111fff1f1fff1fffffff1fffffffffffffffffffffff1ffffff1ff111f1ff11ffff1f11ffffffffffff11
    f1fffff1fffffffff1f1fff1ffffffff1ffffffffffffffffffffff1ffffff1ffffff1fff1ffff1f11ffffffffffff11
    111111111fffffffff1ffff1111ffffff11111fffffffffffffffff1111111fffffff1fff11fff1f11ffffffffffff11
    1fffffff1fffffffff1ffff1ffffffffffffff1ffffffffffffffff1111111fffffff1ffff1fff1f11ffffffffffff11
    1fffffff1fffffffff1ffff1fffffffffffffff1fffffffffffffff1ffffff1ffffff1ffff11ff1f11ffffffffffff11
    1fffffff1ff111ffff1ffff1fffffffffffffff1fffffffffffffff1ffffff1ff111f1fffff1ff1f11ffffffffffff11
    1fffffff1ff111ffff1ffff1fffffffffffffff1fffffffffffffff1ffffff1ff111f1fffff11f1f11ffffffffffff11
    1fffffff1ff111ffff1ffff1fffffffffffffff1fffffffffffffff1ffffff1ff111f1ffffff1f1ff11ffffffffff11f
    1fffffff1fffffffff1ffff1fffffff1fffffff1fffffffffffffff1ffffff1ffffff1ffffff111fff11ffffffff11ff
    1fffffff1fffffffff1ffff1ffffffff1fffff1ffffffffffffffff1ffffff1ffffff1fffffff11ffff1111111111fff
    1fffffff1fffffffff1ffff1111111fff11111fffffffffffffffff1111111fffffff1fffffff11fffff11111111ffff
    `, SpriteKind.text)
mySprite2.setPosition(80, 92)
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
controller.moveSprite(mySprite, 100, 100)
