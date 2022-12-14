// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";
import {MinecraftMenu} from "../Mod/MinecraftMenu/MinecraftMenu.js"
import {Miniruntime} from "../Runtime/Runtime.js";
import {Role_c3_FpsRoleController} from "../Mod/Role/Role.js";
import {MineWorldEnvironment} from "../Mod/MinecraftWorldBuild/MinWorldEnvironment.js";
import {MinWorldBuilder} from "../Mod/MinecraftWorldBuild/MinWorldBuild.js";


function Tick(runtime) {

}

runOnStartup(async runtime => {
    // Code to run on the loading screen.
    // Note layouts, objects etc. are not yet available.

    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime) {
    // Code to run just before 'On start of layout' on
    // the first layout. Loading has finished and initial
    // instances are created and available to use here.

    runtime.addEventListener("tick", () => Tick(runtime));

    //MinecraftMenu
    InitModMinecraftMenu(runtime);
    InitRoleMod(runtime);
    InitMineWorldEnvironment(runtime);
    InitMinBuilder(runtime);
    

}



//#region  MinecraftMenu 



function InitModMinecraftMenu(runtime) {
    const gameLayout = runtime.getLayout("S Menu");
    const miniruntim = new Miniruntime(runtime);

    //miniruntim.addLayoutInit(runtime, gameLayout,OnMenuStart(runtime));
    //miniruntim.addLayoutEnd(runtime, gameLayout, OnMenuEnd());
    gameLayout.addEventListener("beforelayoutstart", () => OnMenuStart(runtime));
    gameLayout.addEventListener("beforelayoutend", () => OnMenuEnd());
}

function OnMenuStart(runtime) {

    const MinecraftMenu_ = new MinecraftMenu(runtime);
    MinecraftMenu_.Init(runtime);

}

function OnMenuEnd() {

}

//#endregion 


//#region Role 

function InitRoleMod(runtime) {

    const gameLayout = runtime.getLayout("S GameWorld");
    gameLayout.addEventListener("beforelayoutstart", () => OnRoleStart(runtime));
    gameLayout.addEventListener("beforelayoutend", () => OnRoleEnd());

}

function OnRoleStart(runtime) {

    const RoleMod = new Role_c3_FpsRoleController();
    RoleMod.Init(runtime);

}


function OnRoleEnd() {

}
//#endregion 


//#region MineWorldEnvironment 
function InitMineWorldEnvironment (runtime){

    const gameLayout = runtime.getLayout("S GameWorld");
    
    gameLayout.addEventListener("beforelayoutstart", () => OnMentStart(runtime));
    gameLayout.addEventListener("beforelayoutend", () => OnMentEnd());
}

function  OnMentStart(runtime){

    const MineWorldEnvironment_ = new  MineWorldEnvironment(runtime);
    MineWorldEnvironment_.Init(runtime);
    
}


//#endregion


//#region MineBuilder

function InitMinBuilder(runtime)
{
    const gameLayout = runtime.getLayout("S GameWorld");

    gameLayout.addEventListener("beforelayoutstart", () => OnMieBuilderStart(runtime));
    gameLayout.addEventListener("beforelayoutend", () =>OnMieBuilderEnd());
}


function OnMieBuilderStart(runtime){
    const  MineBuilder =new  MinWorldBuilder();
    MineBuilder.Init(runtime)
    
}

function OnMieBuilderEnd(){

}

//#endregion



