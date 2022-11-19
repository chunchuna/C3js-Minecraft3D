export class Miniruntime {

    #version;
    #activeRuntime = true;

    constructor(runtime) {
    }

    addTick(runtime, func, layout, limit) {

        if (limit) {
            if (runtime.layout == layout) {
                runtime.addEventListener("tick", () => func)
            }
        }

        runtime.addEventListener("tick", () => func)

    }

    addLayoutInit(runtime, layout, func) {
        if (layout) {
            layout.addEventListener("beforelayoutstart", () => func)
        }

    }

    addLayoutEnd(runtime, layout, func) {
        if (layout) {
            layout.addEventListener("beforelayoutend", () => func)
        }


    }
    
    RegisterCall = (eventname, p1, p2, p3, p4, p5) => {
        var event = new CustomEvent(eventname, {
            detail: {
                a: p1, b: p2, c: p3, d: p4, e: p5,
            }
        })
        window.dispatchEvent(event)
    }

    GetCall = function (str, func_) {
        window.addEventListener(str, (e) => {
            func_(e)
            window.removeEventListener(str, func_)
        })
    }
} 