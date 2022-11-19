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

        this.#runtime = runtime;

        this.#modName = "MinecraftMenu"
        this.#addListener(runtime)
        this.#ButtonManager(runtime)
        
        this.#updateGameVersion();
		
        

    }

    #addListener(runtime) {

        const MiniRuntim = new Miniruntime(runtime)
        const layout = runtime.getLayout("S Menu");

        //MiniRuntim.addTick(runtime, this.#tick, layout, true)
        runtime.addEventListener("tick", () => this.#tick());

    }

    #ButtonManager(runtime) {
        const button_Generateworld = runtime.objects.button_Generateworld.getFirstPickedInstance();
        if (button_Generateworld) {
            button_Generateworld.addEventListener("click", () => {
                runtime.goToLayout("S GameWorld")
            })
        }
    }

    #updateGameVersion() {
        const text_version = this.#runtime.objects.text_Versiton.getFirstPickedInstance();
        text_version.text = this.#Gameversion;


    }

    #tick() {
        //console.log("MM tick test")
        //this.#updateGameVersion();
    }

}