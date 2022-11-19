//mod  is role fps controller
// creat by cc

export class Role_c3_FpsRoleController {


    #role_dz;
    #role_move_speed;
    #role_jump_strength;
    #role_gravity;
    #role_bool_playeronGround

    #rt;


    #role_instance_player;
    #role_instance_playerCam;

    constructor() {
    }


    Init(runtime) {

        console.log("role mod is loadded")

        runtime.addEventListener("tick", () => this.#Tick());

        this.#rt = runtime;

        if (runtime.layout.name != "S GameWorld") return

        const player = runtime.objects.Player.getFirstPickedInstance();
        const playerCam = runtime.objects.PlayerCam.getFirstPickedInstance();

        this.#role_instance_player = player;
        this.#role_instance_playerCam = playerCam;

        this.#SetPlayerMoveSpeed(1500);
        this.#SetPlayerHeight(16);
			


    }

    #Tick() {
        var CurrentGameLayout = this.#rt.getLayout.name;
        if (!CurrentGameLayout == "S GameWorld") return;
		
			this.#debugFunction();
			
		
		


    }


    #SetPlayerHeight(height) {
        this.#rt.globalVars.PLAYER_HEIGHT = height;
    }

    #SetPlayerMoveSpeed(speed) {
        this.#rt.globalVars.MOVE_SPEED = speed;

    }


    #SetGravity(gravity) {
        this.#rt.globalVars.GRAVITY = gravity;
    }


    #debugFunction() {
        // reback SpwanPoint
        var SpwanPoint = {
            x: 2019,
            y: 5982,
            z: 30,

        }

        var key_rebackpoint = "KeyR";
        if (this.#rt.keyboard.isKeyDown(key_rebackpoint)) {
				console.log("keybo")
            this.#role_instance_player.x = SpwanPoint.x;
            this.#role_instance_player.y = SpwanPoint.y;
            this.#role_instance_player.zElevation = SpwanPoint.z;

        }


    }

}