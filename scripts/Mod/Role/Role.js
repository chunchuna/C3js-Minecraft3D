//mod  is role fps controller
// creat by cc

export class Role_c3_FpsRoleController {
    #role_dz;
    #role_move_speed;
    #role_jump_strength;
    #role_gravity;
    #role_bool_playeronGround
    
    
    #role_instance_player;
    #role_instance_playerCam;
    
    

    Init() {
        
        if(runtime.layout.name!="S GameWorld")return
        
			const player =runtime.objects.Player.getFirstPickedInstance();
			const playerCam = runtime.objects.PlayerCam.getFirstPickedInstance();
			
			this.#role_instance_player=player;
			this.#role_instance_playerCam=playerCam;
			
			
		
		s
         
    }
    
   


}