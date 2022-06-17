namespace MakeyMakey {
    export enum MakeyMakeyKey {
        //% block="UP ARROW"
        UP = keymap.KeyCode.UpArrow,
        //% block="DOWN ARROW"
        DOWN = keymap.KeyCode.DownArrow,
        //% block="LEFT ARROW"
        LEFT = keymap.KeyCode.LeftArrow,
        //% block="RIGHT ARROW"
        RIGHT = keymap.KeyCode.RightArrow,
        //% block="SPACE"
        SPACE = keymap.KeyCode.SPACE,
        //% block="LEFT CLICK"
        LEFT_CLICK = keymap.KeyCode.MouseLeftButton,
        //% block="RIGHT CLICK"
        RIGHT_CLICK = keymap.KeyCode.MouseRightButton,
        //% block="W"
        W = keymap.KeyCode.W,
        //% block="A"
        A = keymap.KeyCode.A,
        //% block="S"
        S = keymap.KeyCode.S,
        //% block="D"
        D = keymap.KeyCode.D,
        //% block="F"
        F = keymap.KeyCode.F,
        //% block="G"
        G = keymap.KeyCode.G
    }

    export enum PlayerNumber {
        //% block="Player 1"
        ONE = 1,
        //% block="Player 2"
        TWO = 2,
        //% block="Player 3"
        THREE = 3,
        //% block="Player 4"
        FOUR = 4
    }
    //% blockId=set_simulator_keymap_for_player
    //% block="Set simulator keymap for $playerNumber \n UP $buttonUp \n DOWN $buttonDown \n LEFT $buttonLeft \n RIGHT $buttonRight \n A $buttonA \n B $buttonB"    
    export function setSimulatorKeymap(
        playerNumber: PlayerNumber,
        buttonUp: MakeyMakeyKey,
        buttonDown: MakeyMakeyKey,
        buttonLeft: MakeyMakeyKey,
        buttonRight: MakeyMakeyKey,
        buttonA: MakeyMakeyKey,
        buttonB: MakeyMakeyKey) {
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
            MakeyMakeyKey.UP,
            MakeyMakeyKey.DOWN,
            MakeyMakeyKey.LEFT,
            MakeyMakeyKey.RIGHT,
            MakeyMakeyKey.LEFT_CLICK,
            MakeyMakeyKey.SPACE
        )
        setSimulatorKeymap(2,
            MakeyMakeyKey.W,
            MakeyMakeyKey.A,
            MakeyMakeyKey.S,
            MakeyMakeyKey.D,
            MakeyMakeyKey.F,
            MakeyMakeyKey.G
        )
    }
}