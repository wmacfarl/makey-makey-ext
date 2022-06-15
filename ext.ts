namespace MakeyMakey {
    //% blockId=set_makeymakey_controls
    //% block="Remap simulator keys to Makey Makey defaults"
    export function setMakeyMakeyInputs() {
        // Configure input for player 1
        keymap.setPlayerKeys(
            1,
            keymap.KeyCode.UpArrow,
            keymap.KeyCode.DownArrow,
            keymap.KeyCode.LeftArrow,
            keymap.KeyCode.RightArrow,
            keymap.KeyCode.MouseLeftButton,
            keymap.KeyCode.Space);
        // Configure input for player 2
        keymap.setPlayerKeys(
            2,
            keymap.KeyCode.W,
            keymap.KeyCode.S,
            keymap.KeyCode.A,
            keymap.KeyCode.D,
            keymap.KeyCode.F,
            keymap.KeyCode.G);
    }

    //% blockId=set_key_to_button
    //% block="Set key to button"
    export function setMakeyMakeyInputs(key, button) {
        // Configure input for player 1
        console.log("keymap", keymap)
        keymap.setPlayerKeys(
            1,
            keymap.KeyCode.UpArrow,
            keymap.KeyCode.DownArrow,
            keymap.KeyCode.LeftArrow,
            keymap.KeyCode.RightArrow,
            keymap.KeyCode.MouseLeftButton,
            keymap.KeyCode.Space);
        // Configure input for player 2
        keymap.setPlayerKeys(
            2,
            keymap.KeyCode.W,
            keymap.KeyCode.S,
            keymap.KeyCode.A,
            keymap.KeyCode.D,
            keymap.KeyCode.F,
            keymap.KeyCode.G);
    }
}