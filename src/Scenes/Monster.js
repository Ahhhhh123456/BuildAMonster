let sKey;
let fKey;
let aKey;
let dKey;

class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 50;

        this.eyesX = this.bodyX - 35;
        this.eyesY = this.bodyY - 30 ; 

        this.eyesX2 = this.bodyX + 40; 
        this.eyesY2 = this.bodyY - 15;

        this.leftHandX = this.bodyX - 100;
        this.leftHandY = this.bodyY - 50;

        this.rightHandX = this.bodyX + 100;
        this.rightHandY = this.bodyY - 50;

        this.leftLegX = this.bodyX - 50;
        this.leftLegY = this.bodyY + 145;

        this.rightLegX = this.bodyX + 50;
        this.rightLegY = this.bodyY + 145;

        this.leftHeadX = this.bodyX - 40;
        this.leftHeadY = this.bodyY - 100;

        this.rightHeadX = this.bodyX + 40
        this.rightHeadY = this.bodyY - 100;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");


        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'

    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redD.png");
        
        // faces
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");

        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.smile.visible = false;

        my.sprite.fang = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false;

        my.sprite.eyes = this.add.sprite(this.eyesX, this.eyesY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.eyes2 = this.add.sprite(this.eyesX2, this.eyesY2, "monsterParts", "eye_psycho_light.png");

        //body parts
        my.sprite.leftHand = this.add.sprite(this.leftHandX, this.leftHandY, "monsterParts", "arm_yellowB.png");
        my.sprite.leftHand.flipY = true;
        my.sprite.leftHand.flipX = true;

        my.sprite.rightHand = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_whiteB.png");
        my.sprite.rightHand.flipY = true;
    
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_whiteB.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_yellowB.png");

        my.sprite.leftHead = this.add.sprite(this.leftHeadX, this.leftHeadY, "monsterParts", "detail_green_antenna_large.png");
        my.sprite.leftHead.flipX = true;

        my.sprite.rightHead = this.add.sprite(this.rightHeadX, this.rightHeadY, "monsterParts", "detail_green_antenna_large.png");

        // Keys

        sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        if (Phaser.Input.Keyboard.JustDown(sKey))
        {
            //console.log("S is pressed.");
            my.sprite.mouth.visible = false;
            my.sprite.fang.visible = false;
            my.sprite.smile.visible = true;
        }
        if (Phaser.Input.Keyboard.JustDown(fKey))
        {
            //console.log("F is pressed.");
            my.sprite.mouth.visible = false;
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        }
        if (Phaser.Input.Keyboard.JustDown(aKey))
        {
            //console.log("A is pressed.");
            for(let i in my.sprite)
            {
                console.log(i);
                my.sprite[i].x -= 10;
            }
        }
        if (Phaser.Input.Keyboard.JustDown(dKey))
        {
            //console.log("D is pressed.");
            for(let i in my.sprite)
            {
                console.log(i);
                my.sprite[i].x += 10;
            }
        }
       
    }

}