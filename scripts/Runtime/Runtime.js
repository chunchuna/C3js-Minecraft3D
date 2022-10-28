export class Miniruntime {

    #version;
    #activeRuntime = true;

    constructor(runtime) {
    }

    addTick(runtime, func, layout, limit) {

        if (limit) {
            if (runtime.layout == layout) {
                runtime.addEventListener("tick", () => func())
            }
        }

        runtime.addEventListener("tick", () => func())

    }

    addLayoutInit(runtime, layout, func) {
        if (layout) {
            layout.addEventListener("beforelayoutstart", () => func())
        }

    }

    addLayoutEnd(runtime, layout, func) {
        if (layout) {
            layout.addEventListener("beforelayoutend", () => func())
        }


    }
} 