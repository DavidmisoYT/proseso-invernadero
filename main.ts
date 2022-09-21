if (input.lightLevel() < 100 && input.temperature() >= 25) {
    basic.showString("Encender luces y abrir ventanas")
} else {
    if (input.lightLevel() < 100) {
        basic.showString("Encender luces")
    } else {
        if (input.temperature() >= 25) {
            basic.showString("Encender ventilación  ")
        } else {
            basic.showString("Luz y temperatura OK")
        }
    }
}
basic.forever(function () {
	
})
