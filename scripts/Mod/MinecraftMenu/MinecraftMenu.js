export class MinecraftMenu {

	#runtime;
	#CurrentSence;
	#Gameversion;
	#modVersion;
	#modName;
	
	
	constructor(){
		
	
	}
	
	
	 Init(runtime){
		
		this.#modName="MinecraftMenu"
		console.log("init mod"+this.#modName)
		 this.#ButtonManager(runtime)
	}
	
	
	#ButtonManager(runtime){
		const button_Generateworld = runtime.objects.button_Generateworld.getFirstPickedInstance();
		if(button_Generateworld){
			button_Generateworld.addEventListener("click",()=>{
												  
				alert("click button")									  
												  })
		}
	}
	
	
}