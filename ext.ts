namespace MakeyMakey {
    enum SimButton {
        UP = 0,
        DOWN = 1,
        LEFT = 2,
        RIGHT = 3,
        A = 4,
        B = 5
    } 
    let defaultKeymaps: any[]
    defaultKeymaps = []
    defaultKeymaps[1] = [
        keymap.KeyCode.UpArrow,
        keymap.KeyCode.DownArrow,
        keymap.KeyCode.LeftArrow,
        keymap.KeyCode.RightArrow,
        keymap.KeyCode.Space,
        keymap.KeyCode.Enter
    ]
    defaultKeymaps[2] = [
        keymap.KeyCode.I,
        keymap.KeyCode.K,
        keymap.KeyCode.J,
        keymap.KeyCode.L,
        keymap.KeyCode.U,
        keymap.KeyCode.O
    ]

    let makeyKeymaps: any[] = []
    makeyKeymaps[1] = [
        keymap.KeyCode.UpArrow,
        keymap.KeyCode.DownArrow,
        keymap.KeyCode.LeftArrow,
        keymap.KeyCode.RightArrow,
        keymap.KeyCode.MouseLeftButton,
        keymap.KeyCode.Space
    ];

    makeyKeymaps[2] = [
        keymap.KeyCode.W,
        keymap.KeyCode.S,
        keymap.KeyCode.A,
        keymap.KeyCode.D,
        keymap.KeyCode.F,
        keymap.KeyCode.G
    ]
    let currentKeymaps: any[]
    currentKeymaps = defaultKeymaps;

    function setKeymap(playerNum: number, keymapArray: any[]) {
        keymap.setPlayerKeys(
            playerNum,
            keymapArray[0],
            keymapArray[1],
            keymapArray[2],
            keymapArray[3],
            keymapArray[4],
            keymapArray[5],
        )
        currentKeymaps[playerNum] = keymapArray
    }
    
    //% blockId=set_button_to_key
    //% block="Set $button to $keyCode for $playerNumber"    
    export function setKey(playerNumber: number, button: SimButton, keyCode: keymap.KeyCode) {
        const newKeymap = []
        for (let i = 0; i < currentKeymaps[playerNumber].length; i++) {
            newKeymap[i] = currentKeymaps[i]
        }
        newKeymap[button] = keyCode
        setKeymap(playerNumber, newKeymap)
    }

    //% blockId=set_makeymakey_controls
    //% block="Use Makey Makey keys"
    export function setMakeyMakeyInputs() {
        // Configure input for player 1
        setKeymap(1, makeyKeymaps[1])
        setKeymap(2, makeyKeymaps[1])
    }
}