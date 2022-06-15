namespace MakeyMakey {
    export enum PlayerNumber {
        //% block="Player 1"
        ONE,
        //% block="Player 2"
        TWO,
        //% block="Player 3"
        THREE,
        //% block="Player 4"
        FOUR
    }
    //% blockId=set_simulator_keymap_for_player
    //% block="Set simulator keymap for player $playerNumber \n UP $buttonUp \n DOWN $buttonDown \n LEFT $buttonLeft \n RIGHT $buttonRight \n A $buttonA \n B $buttonB"    
    export function setSimulatorKeymap(
        playerNumber: PlayerNumber,
        buttonUp: keymap.KeyCode,
        buttonDown: keymap.KeyCode,
        buttonLeft: keymap.KeyCode,
        buttonRight: keymap.KeyCode,
        buttonA: keymap.KeyCode,
        buttonB: keymap.KeyCode) {
        keymap.setPlayerKeys(
            playerNumber,
            buttonUp,
            buttonDown,
            buttonLeft,
            buttonRight,
            buttonA,
            buttonB
        )
    }

    //% blockId=set_simulator_keymap_to_makey_makey_defaults
    //% block="Use Makey Makey Keys"    
    export function setMakeyMakeyDefaults() {
        setSimulatorKeymap(1,
            keymap.KeyCode.UpArrow,
            keymap.KeyCode.DownArrow,
            keymap.KeyCode.LeftArrow,
            keymap.KeyCode.RightArrow,
            keymap.KeyCode.MouseLeftButton,
            keymap.KeyCode.Space,
        )
        setSimulatorKeymap(2,
            keymap.KeyCode.W,
            keymap.KeyCode.S,
            keymap.KeyCode.A,
            keymap.KeyCode.D,
            keymap.KeyCode.F,
            keymap.KeyCode.G,
        )
    }
}