// Automate the generation of scenarios
// creat by cc

export class MinWorldBuilder {


    #enable = true;
    #modname;
    #rt;

    #worldSize; // 世界大小
    #worldType; // 世界类型

    #instance_grassGround; //标准模型_草地面
    #instance_drtGround;   //标准模型_泥土地面

    #instance_drt;
    #instance_grass;


    #instance_rebuildtype1; //预设地形1
    #instance_rebuildtype2; //预设地形2

    constructor() {
    }

    Init(runtime) {
        if (!this.#enable) return

       
        
        this.#log("MineBuilder is loaded")
        this.#initMod(runtime);


        //this.#ClearDefaultGround(runtime)
    }


    #initMod(runtime) {
        this.#modname = "MineBuilder";
        this.#rt = runtime
    }

    #log(content) {
        console.log(this.#modname + "out: " + content);
    }

    #ClearDefaultGround(runtime) {
        for (let allground of runtime.objects.f_3dground.instances()) {
            allground.destroy();
            this.#log("all ground is clear!");
        }
    }


}