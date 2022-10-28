//mod is MinecraftMenu 
// creat by chunchun 


import {Miniruntime} from "../../Runtime/Runtime.js";

export class MinecraftMenu {

    #runtime;
    #CurrentSence;
    #Gameversion;
    #modVersion;
    #modName;

    constructor() {

    }

    Init(runtime) {

        this.#modName = "MinecraftMenu"
        this.#addListener(runtime)
        this.#ButtonManager(runtime)

    }

    #addListener(runtime) {

        const MiniRuntim = new Miniruntime(runtime)
        const layout = runtime.getLayout("S Menus");

        MiniRuntim.addTick(runtime, this.#tick, layout, true)

    }

    #ButtonManager(runtime) {
        const button_Generateworld = runtime.objects.button_Generateworld.getFirstPickedInstance();
        if (button_Generateworld) {
            button_Generateworld.addEventListener("click", () => {
                console.log("jump layout")
            })
        }
    }

    #tick() {
        console.log("MM tick test")
    }

}