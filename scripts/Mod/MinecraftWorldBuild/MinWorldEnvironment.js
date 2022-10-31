// Environment of whole wrold
// creat by cc
export class MineWorldEnvironment {

    #runtime;
    #EnvironmentLayer;

    constructor() {
    }

    Init(runtime) {


        this.#runtime = runtime;
        console.log("envi mod is loaded");
        this.#EnvironmentLayer = "envi";

        this.#SetFogState(true); // open fog effects


    }

    #SetFogState(state) {
        const layer = this.#runtime.layout.getLayer(this.#EnvironmentLayer);
        if (layer == null) return;

        layer.effects[0].isActive = state;


    }
    

    #SetFogPam(color, density, distance) {

        const layer = this.#runtime.layout.getLayer(this.#EnvironmentLayer);
        
        layer.effects[0].setParameter(1, color);
        layer.effects[0].setParameter(2, density);
        layer.effects[0].setParameter(1, distance);


    }


}