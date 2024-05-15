//% color="#85d8ff" weight=120 icon="\uf091"
//% groups=['Edit Guide','Examples']
//% block="Custom"
namespace custom {
    //% blockId=custom_1
    //% block="Javascript -> Explorer -> guide.ts"
    //% group="Guide"
    export function guide() { };

    /**
     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.
     * @param text the text to scroll on the screen, eg: "Hello!"
     */
    //% blockId=custom_2
    //% block="Show Text $text"
    //% group="Examples"
    export function showText(text: string = "Hello") {
        basic.showString(text)
    };
}

// This file is deleted when imported as extension
// Meant to be used as a guide only