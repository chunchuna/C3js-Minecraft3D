//mod is MinecraftMenu 
// creat by chunchun 


import {Miniruntime} from "../../Runtime/Runtime.js";

export class MinecraftMenu {

    #runtime;
    #CurrentSence;
    #Gameversion = "V1.0.1";
    #modVersion;
    #modName;
    

    constructor() {


    }

    Init(runtime) {
        this.#runtime=runtime;
        
        this.#modName = "MinecraftMenu"
        this.#addListener(runtime)
        this.#ButtonManager(runtime)

    }

    #addListener(runtime) {

        const MiniRuntim = new Miniruntime(runtime)
        const layout = runtime.getLayout("S Menu");

        MiniRuntim.addTick(runtime, this.#tick(), layout, true)

    }

    #ButtonManager(runtime) {
        const button_Generateworld = runtime.objects.button_Generateworld.getFirstPickedInstance();
        if (button_Generateworld) {
            button_Generateworld.addEventListener("click", () => {
                console.log("jump layout")
            })
        }
    }

    #gameVersionUpdate() {
        const text_Version =this.#runtime.objects.Text_VersionInfo.getFirstPickedInstance();
        text_Version.text = "Version" + this.#Gameversion;
    }

    #tick() {
        this.#gameVersionUpdate()
        console.log("MM tick test")
    }

}