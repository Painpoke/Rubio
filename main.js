const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")
ctx.imageSmoothingEnabled = false 
canvas.width = window.innerWidth
canvas.height = window.innerHeight
console.log(canvas.width + "px, " + canvas.height + "px")
const spaceW = canvas.width / 10
const spaceH = canvas.height / 10


//Images, Audios, and Fonts. 
let img = new Image()
// Upscales 650% in PixeloRama
img.src = "https://codehs.com/uploads/2970252206dcfa556e41e8c3a9bb8856"

let backgroundImg = new Image()
backgroundImg.src = "https://codehs.com/uploads/eb327be447dbf32510428c6d56ef6f6a"
const background = {
    x:0,
    y:0,
}
let logoImg = new Image()
logoImg.src = "https://codehs.com/uploads/2e785e2e5f5530ad05f1ae41424d594b"

//Audio
const audio = new Audio('https://codehs.com/uploads/6995eb9ca36fbb57235da472ac155def');
console.log(audio)
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
const titleAudio = new Audio('https://codehs.com/uploads/590a75f041341d0f33bdc9ef974c85b1')
const gameoverAudio = new Audio('https://codehs.com/uploads/26df1cf312cf2fd22ced0e050a361853')

//Fonts
let fontReady = false
const font = new FontFace('Press Start 2P', 'url(https://codehs.com/uploads/8e9d52e58bfd04ae709f34b5b7c2ae7c)')
font.load().then( (font)=>{
    document.fonts.add(font)
    console.log("Font Ready")
    fontReady = true
})
const spriteSize = 103
//Levels 
const Test = {
    name: "Test",
    winCondition: "NoEnemies",
    grid: ["0      ",
           "          ",
           "          ",
           "          ",
           " @     e  ",
           "          ",
           "          ",
           "          ",
           "          ",
           "          "]
}
const LevelOne = {
    name: "Level 1",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "         0",
           "        0 ",
           " @        ",
           "          ",
           "          ",
           "        0 ",
           "         0",
           "          "]
}
const LevelTwo = {
    name: "Level 2",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "         0",
           "          ",
           "        1 ",
           "          ",
           "        1 ",
           "          ",
           "         0",
           "          "]
}
const LevelThree = {
    name: "Level 3",
    winCondition: "NoEnemies",
    grid:  ["          ",
            "       0  ",
            "          ",
            "         1",
            "          ",
            "         2",
            "          ",
            "         1",
            "       0  ",
            "          "]
}
const LevelFour = {
    name: "Level 4",
    winCondition: "GetSun",
    grid:  ["          ",
            "          ",
            "          ",
            "         2",
            "      1   ",
            "        2*",
            "      1   ",
            "         2",
            "          ",
            "          "]
    
}
const LevelFive = {
    name: "Level 5",
    winCondition: "NoEnemies",
    grid:  ["          ",
            "          ",
            "          ",
            "         1",
            "      0   ",
            "       1  2",
            "      0   ",
            "         1",
            "          ",
            "          "]
}
const BossLevelOne = {
    name: "Boss Level 1",
    winCondition: "NoEnemies",
    grid:  ["          ",
            "          ",
            "          ",
            "          ",
            " @       a",
            "          ",
            "          ",
            "          ",
            "          ",
            "          "]
}
const LevelSix = {
    name: "Level 6",
    winCondition: "NoEnemies",
    grid:  ["          ",
            "          ",
            "       3  ",
            "         0",
            "      1   ",
            " @    1   ",
            "         0",
            "          ",
            "       3  ",
            "          "]
}
const LevelSeven = {
    name: "Level 7",
    winCondition: "NoEnemies",
    grid:  ["          ",
            "          ",
            "        1 ",
            "         0",
            "       3 3",
            "      3 3 ",
            "         0",
            "        1 ",
            "          ",
            "          "]
}
const LevelEight = {
    name: "Level 8",
    winCondition: "NoEnemies",
    grid:  ["          ",
            "          ",
            "       4  ",
            "    0     ",
            "     1    ",
            "     1    ",
            "       4  ",
            "    0     ",
            "          ",
            "          "]
}
const LevelNine = {
    name: "Level 9",
    winCondition: "NoEnemies",
    grid:  ["          ",
            "          ",
            "         0",
            "        1 ",
            "       3  ",
            "       3  ",
            "        1 ",
            "         0",
            "          ",
            "          "]
}
const LevelTen = {
    name: "Level 10",
    winCondition: "NoEnemies",
    grid:  ["          ",
            "       3  ",
            "          ",
            "        2 ",
            "      2   ",
            "      2   ",
            "        2",
            "          ",
            "       3  ",
            "          "]
}
const BossLevelTwo = {
    name: "Boss Level 2",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "          ",
           "       1  ",
           " @     1b ",
           "       1  ",
           "          ",
           "          ",
           "          ",
           "          "]
}
const LevelEleven = {
    name: "Level 11",
    winCondition: "NoEnemies",
    grid: ["          ",
           "        3  ",
           "       0  ",
           "      1   ",
           " @    1   ",
           "       0  ",
           "        3 ",
           "          ",
           "          ",
           "          "]
}
const LevelTwelve = {
    name: "Level 12",
    winCondition: "NoEnemies",
    grid: ["          ",
           "        1 ",
           "          ",
           "       1  ",
           "      5   ",
           "      5   ",
           "       1  ",
           "          ",
           "        1 ",
           "          "]
}
const LevelThirteen = {
    name: "Level 13",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "          ",
           "        5 ",
           "      1  5",
           "      1  5",
           "        5 ",
           "          ",
           "          ",
           "          "]
}
const LevelFourteen = {
    name: "Level 14",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "       3  ",
           "        3 ",
           "      5  0",
           "      5  0",
           "        3 ",
           "       3  ",
           "          ",
           "          "]
}
const LevelFifthteen = {
    name: "Level 15",
    winCondition: "NoEnemies",
    grid: ["          ",
           "      a   ",
           "          ",
           "       5  ",
           "    2 2 4 ",
           "    2!2 4 ",
           "       5  ",
           "          ",
           "      a   ",
           "          "]
}
const BossLevelThree = {
    name: "Boss Level 3",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "          ",
           "         2",
           " @   c   2",
           "         2",
           "          ",
           "          ",
           "          ",
           "          "]
}
const LevelSixteen = {
    name: "Level 16",
    winCondition: "NoEnemies",
    grid: ["          ",
           "       0  ",
           "        2 ",
           "          ",
           " @     5 1",
           "       5 1",
           "          ",
           "        2 ",
           "       0  ",
           "          "]
}
const LevelSeventeen = {
    name: "Level 17",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "          ",
           "        2 ",
           "       6  6",
           "         2 ",
           "          ",
           "          ",
           "          ",
           "          "]
}
const LevelEighteen = {
    name: "Level 18",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "       7  ",
           "    6     ",
           "@   6     ",
           "       7  ",
           "          ",
           "          ",
           "          ",
           "          "]
}
const LevelNineteen = {
    name: "Level 19",
    winCondition: "NoEnemies",
    grid: ["          ",
           "      3  3",
           "          ",
           "        7 ",
           " @        ",
           "      3  3",
           "          ",
           "        7 ",
           "          ",
           "          ",
           "          "]
}
const LevelTwenty = {
    name: "Level 20",
    winCondition: "NoEnemies",
    grid: ["          ",
           "     7    ",
           "       3  ",
           "          ",
           "     6  1 ",
           "     6  1 ",
           "       3  ",
           "          ",
           "     7    ",
           "          ",
           "          "]
}
const BossLevelFour = {
    name: "Boss Level 4",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "     01   ",
           "        2 ",
           " @      2 ",
           "          ",
           "     01 d ",
           "          ",
           "          ",
           "          "]
}
const LevelTwentyOne = {
    name: "Level 21",
    winCondition: "NoEnemies",
    grid: ["          ",
           "       A  ",
           "      0   ",
           "       1 ",
           " @     1  ",
           "       1  ",
           "      0   ",
           "       A  ",
           "          ",
           "          "]
}
const LevelTwentyTwo = {
    name: "Level 22",
    winCondition: "NoEnemies",
    grid: ["          ",
           "        8 ",
           "       1  ",
           "      2 2 ",
           "      2 2 ",
           "      2 2 ",
           "       1  ",
           "        8  ",
           "          ",
           "          "]
}
const LevelTwentyThree = {
    name: "Level 23",
    winCondition: "NoEnemies",
    grid: ["          ",
           "        70",
           "          ",
           "      6 6 ",
           "     6 6 6",
           "          ",
           "        7  ",
           "         B",
           "          ",
           "          "]
}
const LevelTwentyFour = {
    name: "Level 24",
    winCondition: "NoEnemies",
    grid: ["          ",
           "     0 2 2",
           "    0     ",
           "    1 5  6",
           " @  1 5  6",
           "    0     ",
           "     0 2 2",
           "          ",
           "          ",
           "          "]
}
const BossLevelFive = {
    name: "Final Boss",
    winCondition: "NoEnemies",
    grid: ["          ",
           "          ",
           "       2  ",
           "      1   ",
           " @     e  ",
           "      1  ",
           "       2  ",
           "          ",
           "          ",
           "          "]
}
let currentLevel = undefined
// const levels = [
// LevelOne,LevelTwo,LevelThree,LevelFour,LevelFive,BossLevelOne,
// LevelSix,LevelSeven,LevelEight,LevelNine,LevelTen,BossLevelTwo,
// LevelEleven,LevelTwelve,LevelThirteen,LevelFourteen,LevelFifthteen,BossLevelThree,
// LevelSixteen,LevelSeventeen,LevelEighteen,LevelNineteen,LevelTwenty,BossLevelFour,
// LevelTwentyOne,LevelTwentyTwo,LevelTwentyThree,LevelTwentyFour,BossLevelFive
// ]
// const levels = [Test]
const levels = [LevelOne,LevelTwo]
// Setups
const player = {
    x: 10,
    y: 10,
    vx:0,
    vy:0,
    s:0,
    w: 96,
    h: 52,
    hp: 100,
    maxhp:100,
    inventory: [],
    shootCoolDown:0,
    boostCoolDown:0,
    dmgCoolDown: 0,
    charge:0,
    shoot: function() {
        if (this.shootCoolDown == 0 ) {
            bullets.push(new bullet(player.x,player.y + 20,10,player.vy))
            player.shootCoolDown += 15
    }},
    chargedShoot: function() {
        if (this.shootCoolDown == 0 ) {
            bullets.push(new bullet(player.x,player.y + 20,10,player.vy,"charged"))
            player.charge = 0
            player.shootCoolDown += 15
    }},
    boost: function(){
        if (this.boostCoolDown == 0){
            player.s += 3
            player.dmgCoolDown += 10
            player.boostCoolDown += 60
        }
    },
    split: function(){
        if(this.shootCoolDown == 0){
            bullets.push(new bullet(player.x,player.y + 20,10,2,"split"))
            bullets.push(new bullet(player.x,player.y + 20,10,-2,"split"))
            bullets.push(new bullet(player.x,player.y + 20,10,0,"split"))
            player.shootCoolDown += 15
        }
    }
}
const enemies = []
class enemy {
    constructor(x,y,type) {
        this.x = x
        this.y = y
        this.startX = x
        this.startY = y
        this.type = type
        this.w = 103
        this.h = 97.5
        this.vx = 0
        this.vy = 0
        this.driftX = 0
        this.s = 0
        this.oscillate = 0
        this.hp = 5
        this.dmgCoolDown = 0
        this.shootCoolDown = 5
        this.frame = 0
        if (this.type == "red"){
            this.hp =  10
        }
        if (this.type == "yellow"){
            this.hp = 15
        }
        if (this.type == "orange"){
            this.hp = 15
        }
        if (this.type == "zigzag"){
            this.hp = 15
        }
        if (this.type == "plane"){
            this.hp = 25
        }
        if(this.type == "bomber"){
            this.hp = 20
        }
        if(this.type=="Q"){
            this.hp = 35
            this.phase = 0
        }
        if(this.type=="V"){
            this.hp = 35
            this.phase = 0
        }
        if(this.type=="U"){
            this.hp = 40
            this.phase = 0
            this.pointX = this.startX
            this.pointY = this.startY
        }
        if (this.type == "BossOne"){
            this.hp = 50
            this.w = 150
            this.h = 150
            this.phase = 0
        }
        if (this.type == "BossTwo"){
            this.hp = 100
            this.w = 300
            this.h = 150
            this.phase = 0
        }
        if (this.type == "BossThree"){
            this.hp = 200
            this.w = 150 * 2
            this.h = 150
            this.phase = 0
            this.frame = 0
        }
        if(this.type == "BossFour"){
            this.hp = 250
            this.w = 150
            this.h = 150
            this.phase = 0
        }
        if(this.type == "BossFive"){
            this.hp = 400
            this.hpTrigger1 = 300
            this.hpTrigger2 = 200
            this.hpTrigger3 = 100
            this.w = 150 * 2
            this.h = 150
            this.moveX = this.startX
            this.phase = 3
        }
    }
    movement() {
        //Red Enemies
        if (this.type == "red"){
            if (this.shootCoolDown == 0){
                this.shootCoolDown = (60 * 4) / this.s
                this.shoot()
            }
            this.vx = -2
            this.s = 1
        }
        // Yellow Enemies
        if (this.type == "yellow"){
            this.vx = -2
            this.s = 1.5
            if (this.shootCoolDown == 0){
                this.shootCoolDown = (60 * 4) / this.s
                this.shoot()
            }
            //oscillate
            //Claude helped me. 
            this.oscillate += 0.04
            this.y = this.startY + (Math.sin(this.oscillate)) * 50
        }
        //Orange Enemies
        if (this.type == "orange"){
            this.s = 2.5
            this.vx = -1.5
            if (this.shootCoolDown == 0){
                this.shootCoolDown = (60 * 4) / this.s
                this.shoot()
            }
            if (this.x < 0){
                this.startX = canvas.width
                this.oscillate = 0
                this.driftX = 0
            }
            this.driftX += this.vx * this.s
            this.oscillate += 0.04
            this.y = this.startY + (Math.sin(this.oscillate)) * 50
            this.x =  (this.startX + (Math.cos(this.oscillate)) * 50) + this.driftX  
        }
        //Ziggies 
        if (this.type == "zigzag"){
            this.s = 2
            this.vx = -2
            if (this.shootCoolDown == 0){
                this.shootCoolDown = (60 * 4) / this.s
                this.shoot()
            }
            this.oscillate += 0.20
            this.y = this.startY + (Math.sin(this.oscillate)) * 100
        }
        //Planes?
        if (this.type == "plane"){
            this.s = 1.5
            this.vx = -1
            this.oscillate += 0.06
            // console.log(this.oscillate)
            // debugger
            if (this.shootCoolDown == 0){
                this.shootCoolDown = (60 * 4) / this.s
                this.shoot()
            }
            this.x = this.startX + (200 * Math.cos(this.oscillate)) / 1 + Math.sin(this.oscillate) ** 2;
            this.y = this.startY +  (100 * Math.sin(this.oscillate)) * Math.cos(this.oscillate / 1 + Math.sin(this.oscillate) ** 2)
            
        }
        //Bombers
        if (this.type == "bomber"){
            this.vx = -2
            this.s = 1.5
            if (this.shootCoolDown == 0){
                this.shootCoolDown = (60 * 4) / this.s
                this.bomb()
            }
            //oscillate
            //Claude helped me. 
            this.oscillate += 0.04
            this.y = this.startY + (Math.sin(this.oscillate)) * 50
        }
        //Q enemies
        if (this.type == "Q"){
            this.vx = -1
            if(this.phase == 0){
                this.s = 2
                this.oscillate += 0.1
                if(this.oscillate < (2*Math.PI)){
                    this.y = this.startY + (Math.sin(this.oscillate)) * 50
                    this.x =  (this.startX + (Math.cos(this.oscillate)) * 50)  
                }
                else{this.bomb();this.phase += 1}
            }
            if(this.phase == 1){
                this.s += 5
                if (this.s >= 50){
                    this.oscillate = 0
                    this.startX = this.x
                    this.startY = this.y
                    this.phase -= 1}
            }
        }
        // V enemies
        if (this.type == "V"){
            this.vx = -0.5
            if(this.phase == 0){
                this.s = 2
                this.oscillate += 0.1
                if(this.oscillate < (2 * Math.PI)){
                    this.y = this.startY + (Math.sin(this.oscillate)) * 100
                    this.x -= 5
                }
                else{this.bomb();this.phase += 1}
            }
            if (this.phase == 1){
                this.s += 2
                if(this.s >= 50){
                    this.oscillate = 0 
                    this.phase -=1
                }
            }
        }
        //U enemies
        if (this.type=="U"){
            this.vx = -3
            this.s = 2
            let maxHeight = this.startY - 50
            let lowHeight = this.startY + 50
            if(this.phase == 0){
                this.oscillate = 0 
                this.vy = -3
                if(this.y < maxHeight){this.bomb();this.phase = 1}
            }
            if(this.phase == 1){
                this.vy = 3
                if(this.y >= lowHeight){
                    this.pointX = this.x
                    this.pointY = this.y
                    this.bomb();this.phase = 2}
            }
            if(this.phase == 2){
                this.oscillate += 0.1
                this.y = this.pointY + (Math.sin(this.oscillate)) * 50
                this.x =  (this.pointX + (Math.cos(this.oscillate)) * 50) - 40
                if(this.oscillate >= Math.PI){
                    this.pointX = this.x
                    this.pointY = this.y
                    this.phase = 0
                }
            }
        }
        //Boss One
        if (this.type == "BossOne"){
            this.s = 2.5
            this.vx = -2
            // console.log(this.phase)
            if (this.shootCoolDown == 0){
                this.shootCoolDown = (60 * 4) / this.s
                this.shoot()
            }
            // Phase 1
            if (this.phase == 0){
                this.driftX += this.vx * this.s
                this.oscillate += 0.04
                this.y = this.startY + (Math.sin(this.oscillate)) * 200
                this.x =  (this.startX + (Math.cos(this.oscillate)) * 50) + this.driftX
                if ((this.x) < 0) {this.driftX = 0;this.phase += 1}
            }
            //Phase 2
            if (this.phase == 1){
                this.driftX -= this.vx * this.s
                this.oscillate += 0.04
                this.y = this.startY + (Math.sin(this.oscillate)) * 200
                this.x =  (10 + (Math.cos(this.oscillate)) * 50) + this.driftX
                if ((this.x+this.w) > canvas.width) {this.x = (canvas.width-this.w);this.startX = this.x;this.driftX = 0;this.phase -= 1}
            }
         
        }
        //Boss Two
         if(this.type == "BossTwo"){
            this.s = 1
            console.log(this.phase)
            let furthestLength = this.w 
            let lowestHeight = canvas.height - (this.h + 50)
            let highestHeight = this.h
            if (this.phase%2 == 0){
                this.s = 5
                 //Sets Vx to 0 in order to prevent horizontal movement
                 this.vx = 0
                 
                 
            
                 //Direction based on the X coordinate
                 if(this.y > lowestHeight && (this.x <= furthestLength) ){
                    this.vy = -5
                 }
                 else if((this.y <= lowestHeight) && this.x == this.startX){
                    this.vy = 5
                 }
                 //Checks for being too high/lpw
                 else if(this.x >= this.startX){
                    if (this.y >= lowestHeight || this.y <= highestHeight){this.phase += 1}
                 }
                 else if(this.x <= furthestLength){
                    if (this.y <= highestHeight){this.phase += 1}}
                 }
            else{
                this.s = 10
                this.vy = 0
                
                if (this.shootCoolDown == 0){
                    this.shootCoolDown = (60 * 2) / this.s
                    this.shoot()
                }
                if (this.x == this.startX && this.y >= lowestHeight){
                    this.vx = -5
                }
                else if (this.x <= furthestLength && this.y <= highestHeight){
                    this.vx = 5
                }
                //Checks for being too far
                else if (this.x <= furthestLength) {
                    if(this.y >= lowestHeight){this.phase -= 1}
                }
                else if (this.x >= this.startX) {
                    if(this.y <= highestHeight){this.x = this.startX;this.phase -= 1}
                }
                
                
            }
             
         }
         //Boss Three
         if (this.type == "BossThree"){
            this.s = 2.5
            this.vx = -1.5
            let max = 500
            let maxh = 300
            
            //Enemy Spawner
            if (this.hp < 100 && this.phase == 0){
                enemies.push(new enemy(this.startX,this.startY - 50,"orange"))
                enemies.push(new enemy(this.startX,this.startY,"orange"))
                enemies.push(new enemy(this.startX,this.startY + 50,"orange"))
                this.phase = 1
            }
            if (this.hp < 50 && this.phase == 1){
                enemies.push(new enemy(this.x,this.y,"orange"))
                this.phase = 2
            }
            //BombCoolDown
            if (this.shootCoolDown == 0){
                this.shootCoolDown = (60 / 4) / this.s
                if( player.x > max && player.x < this.startX ){this.bomb("move")}
                else{
                    this.bomb()
                }
            }
            //Prevents the enemy from going off screen
            if (this.x < 0){
                this.startX = canvas.width
                this.oscillate = 0
            }
            this.oscillate += 0.04
            this.y = this.startY + (Math.sin(this.oscillate)) * maxh
            this.x =  (this.startX + (Math.cos(this.oscillate)) * max)
            
         }
         //Boss Four
         if(this.type == "BossFour"){
             console.log(this.phase)
             let min = 40
             let max = (canvas.height - 300)
             if(this.phase == 0){
                 this.s = 2
                 this.vx = -1.5
                 this.vy = -(this.vx ** 2)
                 if (this.y <= min && this.x < this.w){
                     this.vx = 0
                     this.vy = 0
                     this.phase = 2
                 }
                 else if (this.y <= 10){this.phase = 1}
             }
             if(this.phase == 1){
                 this.vx = 0
                 this.vy += 1
                 if(this.y >= max ){this.bomb();this.phase = 0}
             }
             if(this.phase == 2){
                 this.s = 2
                 this.vx = 1.5
                 this.vy = (this.vx ** 2)
                 if (this.x >= this.startX){
                     this.vx = 0
                     this.vy = 0
                     this.phase = 0
                 }
                 if (this.y >= max ){this.phase = 3}
             }
             if(this.phase == 3){
                 this.vx = 0
                 this.vy -= 1
                 if(this.y <= min ){this.bomb();this.phase = 2}
             }
         }
         if(this.type == "BossFive"){
             this.s = 2
             //Phases 0 - 1.5 is all one phase.
             if(this.phase == 0){
                if (this.shootCoolDown == 0){
                    this.shootCoolDown = 60 / this.s
                    this.shoot()
                }
            
                this.vx = -2
                this.vy = 0
                this.oscillate += 0.04
                this.y = this.startY + (Math.sin(this.oscillate)) * (canvas.height / 2)
                if(this.x <= (this.w / 2)){this.oscillate = 0; this.phase = 0.5;}
             }
             if(this.phase == 0.5){
                 this.vx = 0
                 this.vy = -2
                 if(this.y <= this.startY){this.y = this.startY;this.phase = 1}
             }
             if(this.phase == 1.5){
                 this.vx = 0
                 this.vy = 2
                 if(this.y >= this.startY){this.y = this.startY;this.phase = 0}
             }
             if(this.phase == 1){
                if (this.shootCoolDown == 0){
                    this.shootCoolDown = 60 / this.s
                    this.bomb()
                }
                 
                 this.vx = 2
                 this.vy = 0
                 this.oscillate += 0.04
                this.y = this.startY + (Math.sin(this.oscillate)) * (canvas.height / 2)
                if(this.x >= this.startX){this.oscillate = 0; this.phase = 1.5}
             }
             //Phase two reset
             if((this.phase == 0 || this.phase == 1)&&this.hp <= this.hpTrigger1){
                this.oscillate = 0;this.vx = 0;this.vy = 0;this.phase = -1}
             if(this.phase == -1){
                this.s = 10
                let endX = this.startX-this.x
                let endY = this.startY-this.y 
                let dist = Math.sqrt(endX * endX + endY * endY)
                if(dist > this.s){
                     this.x += (endX/dist) * this.s
                     this.y += (endY/dist) * this.s
                }
                else{
                    this.x = this.startX
                    this.y = this.startY
                }
                
                if(this.x == this.startX && this.startY == this.startY){
                    enemies.push(new enemy(this.startX ,this.startY - 50,"zigzag"))
                    enemies.push(new enemy(this.startX ,this.startY + 50,"zigzag"))
                    enemies.push(new enemy(this.startX - 200,this.startY - 50,"zigzag"))
                    enemies.push(new enemy(this.startX - 200,this.startY + 50,"zigzag"))
                    this.oscillate = 0;this.vx = 0;this.vy = 0;
                    this.moveX = this.startX - 450;this.moveY = this.startY;
                    this.phase = 2}
             }   
            //Phase two 
             if(this.phase == 2){
                this.s = 2.5
                this.vx = -1.5
                let max = 500
                let maxh = 300
                this.oscillate += 0.04
                this.y = this.moveY + (Math.sin(this.oscillate)) * maxh
                this.x =  (this.moveX + (Math.cos(this.oscillate)) * max) + (this.vx * this.s)
                if (this.shootCoolDown == 0){
                this.shootCoolDown = (60) / this.s
                this.bomb("big")
                }
                //Switches to phase three
                if(this.hp <= this.hpTrigger2){
                    this.oscillate = 0
                    this.vx = 0 
                    this.vy = 0
                    this.phase = -2
                }
            }
            //Phase three reset
             if(this.phase == -2){
                this.s = 10
                this.moveX = this.startX
                this.moveY = this.startY
                let endX = this.startX-this.x
                let endY = this.startY-this.y 
                let dist = Math.sqrt(endX * endX + endY * endY)
                if(dist > this.s){
                     this.x += (endX/dist) * this.s
                     this.y += (endY/dist) * this.s
                }
                else{
                    this.x = this.startX
                    this.y = this.startY
                }
                
                if(this.x == this.startX && this.startY == this.startY){
                    enemies.push(new enemy(this.startX ,this.startY - 80,"Q"))
                    enemies.push(new enemy(this.startX ,this.startY + 80,"Q"))
                    enemies.push(new enemy(this.startX - 200,this.startY - 80,"Q"))
                    enemies.push(new enemy(this.startX - 200,this.startY + 80,"Q"))
                    this.oscillate = 0;this.vx = 0;this.vy = 0;
                    this.moveX = this.startX - 450;this.moveY = this.startY;
                    this.phase = 3}
             }
            if(this.phase == 3){
                this.oscillate = 0
                this.s = 10
                this.vx = -1.5
                let pointX = this.moveX - 150
                if(this.x <= pointX){this.bomb();this.moveX = this.x;this.phase = 3.5}
            }
            if(this.phase ==3.5){
                this.s = 2
                this.oscillate += 0.04
                this.x = this.moveX + Math.tan(this.oscillate) * 5
                this.y = this.startY + Math.tan(this.oscillate) * 5
            }
         }
    }

    shoot() {
        bullets.push(new bullet(this.x - 10,this.y + (this.h/2),this.vx,this.vy,"basic","enemy"))
    }
    bomb(type){
        let bombType = type
        let vo = player.x - this.x
        let vi = player.y - this.y
        let hyp = Math.sqrt(vo*vo + vi * vi)
        vo /= hyp
        vi /= hyp
        // constructor(x,y,vx = 0,vy = 0,pow = "basic", type = "player") {
        if(bombType == "move"){bullets.push(new bullet(this.x - 10,this.y + (this.h/2),vo,vi,"basic","movingBomb"))}
        else if(bombType == "big"){
            bullets.push(new bullet(this.x - 10,this.y + (this.h/2) + 80,this.vx,this.vy,"basic","bomb"))
            bullets.push(new bullet(this.x - 10,this.y + (this.h/2) - 80,this.vx,this.vy,"basic","bomb"))
            bullets.push(new bullet(this.x - 90,this.y + (this.h/2),this.vx,this.vy,"basic","bomb"))
            bullets.push(new bullet(this.x + 70,this.y + (this.h/2),this.vx,this.vy,"basic","bomb"))
            bullets.push(new bullet(this.x - 10,this.y + (this.h/2),this.vx,this.vy,"basic","bomb"))
            
        }
        else{bullets.push(new bullet(this.x - 10,this.y + (this.h/2),this.vx,this.vy,"basic","bomb"))}
        
    }
    restrict(){
        if ((this.x + this.w) < 0) {this.x = canvas.width - this.w}
    }
    animate(){
        this.frame += 1
        // 117  is the total space to move to the next space
        //Animation for the worms
        //Animation for Orange Enemies.
        if (this.type == "orange"){
            if (this.dmgCoolDown > 0){
                if (this.frame < 10){ctx.drawImage(img,591,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 20){ctx.drawImage(img,708,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 30){ctx.drawImage(img,825,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 40){ctx.drawImage(img,6.5,357.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 50){ctx.drawImage(img,123.5,357.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else {this.frame = 0}
            }
            else{
              if (this.frame < 10){ctx.drawImage(img,6.5,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 20){ctx.drawImage(img,123.5,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 30){ctx.drawImage(img,240,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 40){ctx.drawImage(img,357,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 50){ctx.drawImage(img,474,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else {this.frame = 0}  
            }
        }
        //Animation for P enemies
        if (this.type == "plane"){
            if (this.dmgCoolDown > 0){
                if (this.frame < 10){ctx.drawImage(img,591,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 20){ctx.drawImage(img,708,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 30){ctx.drawImage(img,825,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 40){ctx.drawImage(img,6.5,357.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 50){ctx.drawImage(img,123.5,357.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else {this.frame = 0}
            }
            else{
                if (this.frame < 10){ctx.drawImage(img,474,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 20){ctx.drawImage(img,357,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                //Second Half
                else if (this.frame < 30){ctx.drawImage(img,123.5+117+117,357.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                //First Half
                else if (this.frame < 40){ctx.drawImage(img,6.5,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 50){ctx.drawImage(img,123.5,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 60){ctx.drawImage(img,240,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 70){ctx.drawImage(img,123.5+117,357.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 80){ctx.drawImage(img,123.5,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}
                else if (this.frame < 90){ctx.drawImage(img,474,240.5,spriteSize,spriteSize,this.x,this.y,104,104);}

                
                else {this.frame = 0}  
            }
        }
        
        //Boss Three
        if (this.type == "BossThree"){
            if (this.dmgCoolDown > 0){
                if(this.frame < 8){ctx.drawImage(img,240.5,591.5,spriteSize,spriteSize,this.x,this.y,117,117)}
                else if(this.frame < 16){ctx.drawImage(img,357.5,591.5,spriteSize,spriteSize,this.x,this.y,117,117)}
                else if(this.frame < 24){ctx.drawImage(img,474.5,591.5,spriteSize,spriteSize,this.x,this.y,117,117)}
                else if(this.frame < 32){ctx.drawImage(img,591.5,591.5,spriteSize,spriteSize,this.x,this.y,117,117)}
                else(this.frame = 0)
                
            }
            else{
                if(this.frame < 8){ctx.drawImage(img,708.5,474.5,spriteSize,spriteSize,this.x,this.y,117,117)}
                else if(this.frame < 16){ctx.drawImage(img,825.5,474.5,spriteSize,spriteSize,this.x,this.y,117,117)}
                else if(this.frame < 24){ctx.drawImage(img,6.5,591.5,spriteSize,spriteSize,this.x,this.y,117,117)}
                else if(this.frame < 32){ctx.drawImage(img,123.5,591.5,spriteSize,spriteSize,this.x,this.y,117,117)}
                else(this.frame = 0)
            }
                
        }
    }
}
const bullets = []
class bullet {
    constructor(x,y,vx = 0,vy = 0,pow = "basic", type = "player") {
        this.x = x
        this.y = y
        this.w = 30
        this.h = 30
        this.vx = vx
        this.vy = 0
        this.s = 3
        this.pow = pow
        this.type = type
        if (pow == "basic"){
            this.dmg = 5
        }
        if (pow == "charged"){
            this.dmg = player.charge * 10
            if(this.dmg < 5){
                this.dmg = 5
            }
            if (player.charge < 1){
                this.w = 30
                this.h = 30
            }
            else{
                this.w = player.charge * 10
            this.h = player.charge * 10
            }
            
        }
        if(pow == "split"){
            this.dmg = 3
        }
        if(this.type == "enemy"){
            this.h = 20
            this.w = 20
        }
        if(this.type == "bomb"){
            this.x -= this.w / 2
            this.y -= this.h / 2
            this.w = 100
            this.h = 100
            this.vx = 0
            this.vx = 0
            this.s = 0
            this.timer = 60 * 1.5
        }
        if(this.type == "movingBomb"){
            this.x -= this.w / 2
            this.y -= this.h / 2
            this.w = 100
            this.h = 100
            this.timer = 60 * 1.5
            this.s = 2
        }
    }
}
const items = []
class item {
    constructor(x,y,type){
        this.x = x
        this.y = y
        this.w = 20
        this.h = 20
        this.type = type
        if(this.type == "energy"){
            this.w = 40
            this.h = 40
        }
        if(this.type == "restore"){
            this.w = 91
            this.h = 91
        }
        else if(this.type == "sun"){
            this.w = 91 
            this.h = 91
        }
        else if(this.type == "case"){
            this.w = 117 - 13.5
            this.h = 117 - 13.5
        }
    }
    collect(){
        if(this.type == "sun"){
            player.inventory.push(this)
        }
        if(this.type == "case"){
            if(this.timer == undefined){
                this.currentHP = player.hp
              this.timer = 60 * 4  
            }
        }
        if(this.type == "charge"){
            player.inventory.push(this)
        }
        if(this.type == "energy"){
            if (player.hp + 5 >= player.maxhp){player.hp = player.maxhp}
            else if (player.hp < player.maxhp){player.hp += 5}
            
        }
        if(this.type == "restore"){
            if (player.hp + 50 >= player.maxhp){player.hp = player.maxhp}
            else if (player.hp < player.maxhp){player.hp += 50}
            
        }
    }
}
const keys = []
document.addEventListener("keydown" , function(e){keys[e.keyCode] = true})
document.addEventListener("keyup" , function(e){keys[e.keyCode] = false})

//Game Loop
let gameFrame = 0
function gameLoop(){
    clearCanvas()
    checkGameConditions()
    inputDetect()
    entityChange()
    drawPlayer()
    drawHPBar()
    drawText()
    drawBullets()
    drawEnemies()
    drawItems()
    levelLoads()
    if(titleAudio.currentTime > 0){
        titleAudio.currentTime = 0
        titleAudio.pause()
    }
    if(selectCoolDown > 0){selectCoolDown -= 1}
    
    if (gameRunning){
        console.log("gameRunning: "+ gameRunning)
      gameFrame += 1
      requestAnimationFrame(gameLoop,60)  
    }
}
function clearCanvas(){
    ctx.beginPath()
    ctx.fillStyle = "#004058"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(backgroundImg,background.x,0)
    ctx.drawImage(backgroundImg,background.x-canvas.width,0)
    ctx.drawImage(backgroundImg,background.x+backgroundImg.width,0)
    //console.log(backgroundImg.width)
    if(background.x < (0-backgroundImg.width)){
        background.x = canvas.width
    }
    background.x -= 1
}
// Drawing
function drawHPBar(){
    ctx.beginPath()
    if(player.dmgCoolDown > 0){ctx.fillStyle = "red"}
    else{ctx.fillStyle = "green"}
    let theHp = (player.hp / player.maxhp) * 100
    ctx.fillRect(player.x,player.y - 10,theHp,8)
    
    if(player.maxhp > 100 && player.hp > 100){
        ctx.fillStyle = "Cyan"
        ctx.fillRect(player.x,player.y - 10,theHp,8)
    
    }
    
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.font = "bold 10px 'Press Start 2P"
    ctx.fillText(player.hp, player.x + theHp + 5,player.y)
    
    
}

function drawPlayer(){
    //If the player has Shield Activated
    if(player.maxhp > 100 && player.hp > 100){
            ctx.drawImage(img,819+6.5,6.5,spriteSize,spriteSize,player.x-10,player.y-(player.h/2 + 10),117,117)
        }
    //If the player's coolDown is 0
    if (player.dmgCoolDown > 0) {
        ctx.drawImage(img,123.5,32.5,spriteSize,58.5,player.x,player.y,player.w,player.h);
    }
    //If the player's coolDown is more than Zero
    else {
        //Each indivdual pixel is 6.5. 1,1 == 6.5,6.5. 104 is not a concidence, it is 16 (the orginal sprite size) multipled by 6.5
        ctx.drawImage(img,6.5,32.5,spriteSize,58.5,player.x,player.y,player.w,player.h);
    }
    
    //If the players is charged up
    if (player.charge > 0){
        let size = player.charge * 12
        ctx.drawImage(img,708.5+32.5,591.5+32.5,39,39,player.x + player.w,player.y+(player.h-size+6.5),size,size);
    }
    //If the player is moving quickly. Intended to only be drawn when boosting
    if (player.boostCoolDown> 0){
        ctx.drawImage(img,825.5+26,591.5+26,45.5,58.5,player.x-50,player.y,50,50)
        
    }
        
    
    
}

function drawText() {
    if (currentLevel != undefined){
        ctx.beginPath()
        ctx.fillStyle = "White"
        ctx.font = "30px 'Press Start 2P'"
        ctx.fillText(currentLevel.name, 20,40)
    }
    //Draw Inventory 
    let uiWall = canvas.width - 100
    let uiLine = 20
    if(searchPlayerInventory("charge")){
        ctx.drawImage(img,708.5+32.5,591.5+32.5,39,39,uiWall - 30,uiLine + 10,30,30);
    }
    if(searchPlayerInventory("booster")){
                ctx.drawImage(img,825.5+26,591.5+26,45.5,58.5,uiWall - 100,uiLine+5,40,40)
    }
    
    if(searchPlayerInventory("shield")){
        ctx.beginPath()
        ctx.drawImage(img,819+6.5,6.5,spriteSize,spriteSize,uiWall - 175,uiLine,50,50)
    }
    if(searchPlayerInventory("split")){
        ctx.drawImage(img,240.5,6.5,spriteSize,spriteSize,uiWall - 240,uiLine,20,20)
        ctx.drawImage(img,240.5,6.5,spriteSize,spriteSize,uiWall - 245,uiLine + 10,20,20)
        ctx.drawImage(img,240.5,6.5,spriteSize,spriteSize,uiWall - 250,uiLine + 20,20,20)
    }
    
}
function drawEnemies(){
    enemies.forEach(drawEnemy);
    function drawEnemy(enemy){
        //Damaged Enemies
        if(enemy.dmgCoolDown > 0){
            //Red,Yellow,ZigZag,Bomber Beetles
            if (enemy.type == "yellow" || enemy.type == "red" || enemy.type == "zigzag" || enemy.type == "bomber") {
                ctx.drawImage(img,357.5 + 117,123.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h);
            }
            if (enemy.type == "orange" || enemy.type == "plane"){
                enemy.animate()
            }
            if(enemy.type == "Q"){
                ctx.drawImage(img,6.5,474,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h)
                ctx.drawImage(img,6.5+117,474,spriteSize,spriteSize,enemy.x+enemy.w,enemy.y,enemy.w,enemy.h)}
            if(enemy.type == "V"){
                ctx.drawImage(img,357.5,474.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h)
            }
            if (enemy.type == "U"){
                ctx.drawImage(img,591.5,474.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h)
            }
            //Bosses
            if (enemy.type == "BossOne"){
                if(enemy.phase == 0){ctx.drawImage(img,240.5,708.5+23,spriteSize,spriteSize-29.5,enemy.x,enemy.y,enemy.w,enemy.h);}
                if (enemy.phase == 1){ctx.drawImage(img,357.5,708.5+25,spriteSize,spriteSize-29.5,enemy.x,enemy.y,enemy.w,enemy.h);}
            }
            if(enemy.type == "BossTwo"){
                ctx.drawImage(img,708.5,708.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w/2,enemy.h);
                ctx.drawImage(img,825.5,708.5,spriteSize,spriteSize,enemy.x + enemy.w/2,enemy.y,enemy.w/2,enemy.h);
            }
            if(enemy.type == "BossThree"){enemy.animate()}
            if(enemy.type == "BossFour"){
                ctx.drawImage(img,123.5,708.5+23+117,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h);
            }
            if(enemy.type == "BossFive"){
                ctx.drawImage(img,708.5,825.5,spriteSize,spriteSize-6.5,enemy.x,enemy.y,enemy.w/2,enemy.h);
                ctx.drawImage(img,825.5,825.5,spriteSize,spriteSize-6.5,enemy.x+(enemy.w/2),enemy.y,enemy.w/2,enemy.h);
            }
        }
        //Normal Sprites
        else {
            if(enemy.type == "yellow"){ctx.drawImage(img,123.5,123.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h);}
            else if(enemy.type == "orange" || enemy.type == "plane"){enemy.animate()}
            else if(enemy.type == "zigzag"){ctx.drawImage(img,240.5,123.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h);}
            else if(enemy.type == "bomber"){ctx.drawImage(img,357.5,123.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h);}
            else if(enemy.type == "Q"){
                ctx.drawImage(img,708.5,357.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h)
                ctx.drawImage(img,825.5,357.5,spriteSize,spriteSize,enemy.x+enemy.w,enemy.y,enemy.w,enemy.h)}
            else if(enemy.type == "V"){ctx.drawImage(img,240.5,474.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h)}
            else if (enemy.type == "U"){
                ctx.drawImage(img,474.5,474.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h)
            }
            //Bosses
            //Boss 1
            else if(enemy.type == "BossOne"){
                if(enemy.phase == 0){ctx.drawImage(img,6.5,708.5+23,spriteSize,spriteSize-29.5,enemy.x,enemy.y,enemy.w,enemy.h);}
                if (enemy.phase == 1){ctx.drawImage(img,123.5,708.5+25,spriteSize,spriteSize-29.5,enemy.x,enemy.y,enemy.w,enemy.h);}
            }
            //Boss Two
            else if(enemy.type == "BossTwo"){
                ctx.drawImage(img,474.5,708.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w/2,enemy.h);
                ctx.drawImage(img,591.5,708.5,spriteSize,spriteSize,enemy.x + enemy.w/2,enemy.y,enemy.w/2,enemy.h);
            }
            else if(enemy.type == "BossThree"){
                enemy.animate()
            }
            else if(enemy.type == "BossFour"){
                ctx.drawImage(img,6.5,708.5+23+117,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h);
            }
            else if(enemy.type == "BossFive"){
                ctx.fillText(enemy.hp,800,100)
                ctx.drawImage(img,240.5,825.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w/2,enemy.h);
                if(enemy.hp > enemy.hpTrigger1 ){ctx.drawImage(img,240.5+117,825.5,spriteSize,spriteSize,enemy.x+(enemy.w/2),enemy.y,enemy.w/2,enemy.h);}
                if(enemy.hp <= enemy.hpTrigger1 && enemy.hp >= enemy.hpTrigger2 ){ctx.drawImage(img,240.5+117+117,825.5,spriteSize,spriteSize,enemy.x+(enemy.w/2),enemy.y,enemy.w/2,enemy.h);}
                if(enemy.hp < enemy.hpTrigger2){ctx.drawImage(img,240.5+117+117+117,825.5,spriteSize,spriteSize,enemy.x+(enemy.w/2),enemy.y,enemy.w/2,enemy.h);}
            }
            //Basic Enemy
            else{ctx.drawImage(img,6.5,123.5,spriteSize,spriteSize,enemy.x,enemy.y,enemy.w,enemy.h);}
            
        
        }
        
    }

}
function drawBullets(){
    bullets.forEach(drawBullet);
    function drawBullet(bullet){
        if (bullet.type == "bomb" || bullet.type == "movingBomb"){
            if (bullet.timer <= 60 && bullet.timer > 30){
                ctx.drawImage(img,591.5+117,123.5,spriteSize,spriteSize,bullet.x,bullet.y,bullet.w,bullet.h);}
            else if (bullet.timer <= 30){ctx.drawImage(img,825.5,123.5,spriteSize,spriteSize,bullet.x,bullet.y,bullet.w,bullet.h);}
            else{ctx.drawImage(img,591.5,123.5,spriteSize,spriteSize,bullet.x,bullet.y,bullet.w,bullet.h);}
            
        }
        else{ctx.drawImage(img,240.5,6.5,spriteSize,spriteSize,bullet.x,bullet.y,bullet.w,bullet.h);}
    }

}
function drawItems(){
    items.forEach(drawItem);
    function drawItem(item){
        //console.log(item)
        if (item.type == "energy"){
            ctx.drawImage(img,357+32.5,32.5+6.5,item.w,item.h,item.x,item.y,item.w,item.h);}
        else if (item.type == "restore"){
            ctx.drawImage(img,480.5,13,item.w,item.h,item.x,item.y,item.w,item.h);}
        else if (item.type == "sun"){
            ctx.drawImage(img,597.5,13,item.w,item.h,item.x,item.y,item.w,item.h);}
        else if (item.type == "case"){
            ctx.drawImage(img,702.5+6.5,6.5,item.w,item.h,item.x,item.y,item.w,item.h);}
            
        else{
            ctx.beginPath()
            ctx.fillRect(item.x,item.y,50,50)
        }
    }
}


// General Functions
//Returns true or false

function entityChange() {
    // Player Change\
    player.x += player.vx * player.s;
    player.y += player.vy * player.s;
    if (player.vx > 0) {player.vx -= 1}
    if (player.vx < 0) {player.vx += 1}
    if (player.vy > 0) {player.vy -= 1}
    if (player.vy < 0) {player.vy += 1}
    if (player.shootCoolDown > 0) {player.shootCoolDown -= 1}
    if (player.s > 0) {player.s -= 0.2}
    if (player.s < 0) {player.s = 0}
    //Makes sure the player stays on screen
    if (player.x < 0) {player.x = 0}
    if ((player.x + player.w )> canvas.width) {player.x = (canvas.width - player.w)}
    if (player.y < 0) {player.y = 0; player.hp -= 1}
    if ((player.y + player.h )> canvas.height) {player.y = (canvas.height - player.h);player.hp -= 1}
    if (player.shootCoolDown == 0 ) {player.color = "grey"}
    if (player.dmgCoolDown > 0 ) {player.dmgCoolDown -= 1}
    if (player.boostCoolDown > 0 ) {player.boostCoolDown -= 1}
    //Bullet Change
    bullets.forEach( (bullet, index)=>{
           bullet.x += bullet.vx * bullet.s
           bullet.y += bullet.vy * bullet.s
           if (bullet.type == "bomb" || bullet.type == "movingBomb"){
               bullet.timer -= 1
               if (bullet.timer <= 60){
                   if(collision(bullet,player)){player.hp -= 1;player.dmgCoolDown = 10}
                   
                   if (bullet.timer <= -10){bullets.splice(index, 1) }
                   
               }
           }
            enemies.forEach( (enemy)=>{
            if (collision(bullet, enemy) && bullet.type == "player"){
                enemy.hp -= bullet.dmg
                enemy.dmgCoolDown = 10
                bullets.splice(index, 1)
            }})
            if (collision(bullet, player) && bullet.type == "enemy"){
                player.hp -= bullet.dmg
                player.dmgCoolDown = 10
                bullets.splice(index, 1)
            }
           if (bullet.x > canvas.width) {bullets.splice(index,1)}
           if (bullet.y > canvas.height || bullet.y < (0 - bullet.h) ) {bullets.splice(index,1)}
    })
    
    //Enemy Change
    for (let i = enemies.length - 1; i >= 0; i--){
        const enemy = enemies[i]
        if (enemy.shootCoolDown > 0) {enemy.shootCoolDown -= 1}
        enemy.x += enemy.vx * enemy.s
        enemy.y += enemy.vy * enemy.s
        enemy.restrict()
        if (enemy.dmgCoolDown > 0) {enemy.dmgCoolDown -= 1}
        enemy.movement()
            if (enemy.hp <= 0){
                //Drops
                if((Math.random()*10)>8){
                    items.push(new item(enemy.x,enemy.y,"energy"))
                }
                if(enemy.type == "BossOne"){
                    if (searchPlayerInventory("charge") != true)  {
                        player.inventory.push(new item(enemy.x,enemy.y,"charge"))
                        player.charge = 0  
                        console.log(player.inventory)
                    }
                    enemy.bomb()
                    items.push(new item(enemy.x,enemy.y,"restore"))
                }
                if(enemy.type == "BossTwo"){
                    enemy.bomb()
                    player.inventory.push(new item(enemy.x,enemy.y,"booster"))
                    items.push(new item(enemy.x,enemy.y,"restore"))
                }
                if(enemy.type == "BossThree"){
                    enemy.bomb()
                    player.inventory.push(new item(enemy.x,enemy.y,"shield"))
                    player.maxhp = 200
                    items.push(new item(enemy.x,enemy.y,"restore"))
                }
                if(enemy.type == "BossFour"){
                    enemy.bomb()
                    player.inventory.push(new item(enemy.x,enemy.y,"split"))
                    items.push(new item(enemy.x,enemy.y,"restore"))
                }
                //Deletes Enemy
                enemies.splice(i,1)
            }
            if (collision(player, enemy)){
                if (player.dmgCoolDown == 0){
                    player.hp -= 5
                }
                player.dmgCoolDown = 5
                
        }
    }
    //Item Check 
    for (let i = 0; i < items.length; i++){
        //console.log(i)
        const currentItem = items[i]
        // console.log(items)
        if (currentItem.type == "case"){
            console.log(currentItem.timer)
            if (currentItem.currentHP > player.hp){
                currentItem.x += currentItem.w
                if (currentItem.x > canvas.width){currentItem.x = canvas.width - currentItem.w}
                currentItem.timer = undefined
                currentItem.currentHP = undefined
            }
            if(currentItem.timer > 0){
                currentItem.x = player.x
                currentItem.y = player.y
                currentItem.timer -= 1
            }
            if (currentItem.timer <= 0){
                items.push(new item(currentItem.x+200,currentItem.y,"sun"))
                items.splice(i,1)
            }
        }
        if (collision(player,currentItem)){
            currentItem.collect()
            if (currentItem.type == "case"){break}
            else{items.splice(i,1)}
        }
    }
}
// Detect Keyboard Input
let select = 0
let selectCoolDown = 0

const controller = {
    UP:0,
    DOWN:0,
    LEFT:0,
    RIGHT:0,
    ENTER:0,
    SHOOT:0,
    POWER1:0,
    POWER2:0,
}
function WASDcontrols(){
    controller.UP = 87
    controller.DOWN = 83
    controller.LEFT = 65
    controller.RIGHT = 68
    controller.ENTER = 13
    controller.SHOOT = 79
    controller.POWER1 = 80
    controller.POWER2 = 73
}
function ARROWcontrols(){
    controller.UP = 38
    controller.DOWN = 40
    controller.LEFT = 37
    controller.RIGHT = 39
    controller.ENTER = 13
    controller.SHOOT = 88
    controller.POWER1 = 67
    controller.POWER2 = 90
}
function inputDetect() {
        // RIGHT
        if (keys[controller.RIGHT]) {
            if(gameRunning){
                player.x += 10
                player.vx = 5;
                player.s += 0.1
            }
        }
        //LEFT
        if (keys[controller.LEFT]) {
            
            if(gameRunning){
                player.x -= 10;
                player.vx = -5;
                player.s += 0.1;
            }
        }
        //DOWN
        if (keys[controller.DOWN]) {
            
            if(gameRunning){
                player.y += 10;
                player.vy = 5;
                player.s += 0.1;
            }
            if(menu != undefined && selectCoolDown == 0){
                if(select < (Object.keys(selectOpt).length - 1)){
                    resetSelect()
                    select += 1
                    selectCoolDown += 10
                    selectItem()
                }
                else{
                    resetSelect()
                    select = 0
                    selectCoolDown += 10
                    selectItem()
                }
            }
        }
        //UP
        if (keys[controller.UP]) {
            
            if(gameRunning){
               player.y -= 10;
                player.vy = -5;
                player.s += 0.1;
            }
            if(menu != undefined && selectCoolDown == 0){
                if(select > 0){
                    resetSelect()
                    select -= 1
                    selectCoolDown += 10
                    selectItem()
                }
                else{
                    resetSelect()
                    select = (Object.keys(selectOpt).length - 1)
                    selectCoolDown += 10
                    selectItem()
                }
            }
        }
        //SHOOT
        if (keys[controller.SHOOT]){
            if(gameRunning){
               if (searchPlayerInventory("charge")){
                player.charge += 1/20
                if (player.charge > 3){player.charge = 3}
                //console.log(player.charge)
            }
            else{player.shoot()} 
            }
        }
        if (keys[controller.SHOOT] == false){
            if(gameRunning){
              if(player.charge > 0){
                player.chargedShoot()
                }  
            }
        }
        //Power1
        if (keys[controller.POWER1]){
            if(gameRunning){
               if(searchPlayerInventory("booster")){player.boost()} 
            }
        }
        //Power2
        if (keys[controller.POWER2]){
            if(gameRunning){
                if(searchPlayerInventory("split")){ player.split()}
                
            }
        }
        //Enter
        if (keys[controller.ENTER] && menu != undefined && selectCoolDown == 0){
                for (let i = 0; i < Object.keys(selectOpt).length;i++){
                    let theKey = Object.keys(selectOpt)[i]
                    //console.log("The current Key is: " + theKey)
                    if (selectOpt[theKey] == true){
                        //Searches  btns for an equialvant value
                        btns.forEach( (btn)=>{
                            if(btn.type == theKey){
                                btn.pressed()
                            }
                        })
                    }
                }
        }
        if (keys[controller.ENTER ] && menu == undefined && gameRunning == true && currentLevel != undefined && gameFrame >= 20 && selectCoolDown == 0){
            selectCoolDown = 20
            pauseGame()
        }
        if (keys[controller.ENTER ] && menu == "PAUSE" && gameRunning == false && menuFrame >= 20 && selectCoolDown == 0){
            resetSelect()
            unpauseGame()
        }
        if (keys[controller.ENTER ] && menu == "GAMEOVER" && selectCoolDown == 0){
            startGame("New Start")
        }
        if(keys[controller.ENTER ]){keys[controller.ENTER ] = false}
        
}
function searchPlayerInventory(it){
    for (let i = 0; i < player.inventory.length; i++){
        let thisItem = player.inventory[i]
        if (thisItem.type == it){
            return true
        }
    }
}
function collision(obj1,obj2){
  // Right,Left,Up,Down
    if ( (obj1.x + obj1.w) > obj2.x && obj1.x < (obj2.x + obj2.w) && (obj1.y + obj1.h) > obj2.y && obj1.y < (obj2.y + obj2.h)){
        return true
    }
    else {return false}
} 
function levelLoads(){
    if (currentLevel != undefined) {
        if (currentLevel.winCondition == "NoEnemies"){if(enemies.length == 0){nextLevel()}}
        if (currentLevel.winCondition == "GetSun"){if (items.length == 0 && enemies.length == 0){nextLevel()}}
        }
}
function nextLevel(){
    for (let i = 0; i < levels.length; i++){
            if (currentLevel.name == levels[i].name){
                i += 1
                if(i >= levels.length){
                    save.completedSave = true
                    menu = "START"
                    menuLoop()
                    break
                }
                levelInterpret(levels[i])
                saveGame()
                break
            }
        
    }
}
function levelInterpret(level) {
    console.log(level)
    currentLevel = level
    let name = level.name
    let width = level.grid[0].length
    let height = level.grid.length
    let condition = level.winCondition
    console.log("Level name: " + name + " Level Width: " + width)
    //Finds each line
    for (let i = 0; i < level.grid.length; i++){
        let line = level.grid[i]
        //Consults each line
        // S is space, basically for each space...
        for (let s = 0; s < line.length; s++){
            let block = line[s]
            //Enemies (0,1,2,3,4,5)
            if (block == "0") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"red"))
            }
            if (block == "1") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"yellow"))}
            if (block == "2") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"orange"))}
            if (block == "3") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"zigzag"))}
            if (block == "4") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"plane"))}
            if (block == "5") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"bomber"))}
            if (block == "6") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"Q"))}
            if (block == "7") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"V"))}
            if (block == "8") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"U"))}
            //Bosses
            if (block == "a") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"BossOne"))}
            if (block == "b") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"BossTwo"))}
            if (block == "c") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"BossThree"))}
            if (block == "d") {
                enemies.push(new enemy(s*spaceW,i*spaceH,"BossFour"))}
            if (block == "e"){
                enemies.push(new enemy(s*spaceW,i*spaceH,"BossFive"))
            }
            //Items 
            if (block == "*"){
                items.push(new item(s*spaceW,i*spaceH,"sun"))
            }
            if (block == "!"){
                items.push(new item(s*spaceW,i*spaceH,"case"))
            }
            //Player
            if (block == "@"){
                player.x = s * spaceW
                player.y = (i * spaceH)
            }
        }
    }
}



//Game
function startGame(typeOfStart){
    // console.log("Start Log: SelectOpt keys: " + Object.keys(selectOpt))
    // console.log("SelectCoolDown: " + selectCoolDown)
    console.log(titleAudio.currentTime)
    if(titleAudio.currentTime > 0){
        titleAudio.currentTime = 0
        titleAudio.pause()
    }
    if(gameoverAudio.currentTime > 0){
        gameoverAudio.pause()
        gameoverAudio.currentTime = 0
        
    }
    //gameoverAudio.stop()
    selectCoolDown = 30
    menu = undefined
    menuFrame = 0
    player.hp = 100
    player.maxhp = 100
    player.inventory.length = 0
    enemies.length = 0
    bullets.length = 0
    items.length = 0
    audio.currentTime = 0
    audio.play();
    if (window.localStorage.length == 0 || typeOfStart == "newStart"){
        console.log(localStorage)
        localStorage.clear()
        currentLevel = levels[0]
        levelInterpret(levels[0])
    }
    else{
        ctx.beginPath()
        ctx.fillStyle = "Green"
        ctx.fillRect(0,0,canvas.width,canvas.height)
    
        loadSave()
    }
    gameRunning = true
    gameLoop()
    
    // player.inventory.push(new item(0,0,"charge"))
    // player.inventory.push(new item(0,0,"booster"))
    // player.inventory.push(new item(0,0,"shield"))
    
}
function checkGameConditions(){
    if(player.hp <= 0){
        gameRunning = false
        gameOverScreen() 
    }
    else{
        gameRunning = true
    }
}
function gameOverScreen(){
    if(titleAudio.currentTime > 0){
        titleAudio.currentTime = 0
        titleAudio.pause()
    }
    if(gameoverAudio.currentTime > 0){
        gameoverAudio.pause()
        gameoverAudio.currentTime = 0
        
    }
    selectCoolDown = 60
    menu = "GAMEOVER"
    menuFrame = 0
    audio.pause()
    audio.currentTime = 0
    gameoverAudio.play()
    let complete = checkIfCompleted()
    localStorage.clear()
    save.completedSave = complete
    saveGame()
    menuLoop()
    select = 0
    selectOpt = {}
    resetSelect()
    selectItem()
}
//Selection must always be made after the menu loop has been triggered

//Pause, Unpause, and StartMenu Functions. 
function pauseGame(){
    audio.pause()
    selectOpt = {}
    // console.log("Pause fnc: SelectOpt keys: " + Object.keys(selectOpt))
    gameRunning = false
    menu = "PAUSE"
    menuFrame = 0
    menuLoop()
    resetSelect()
    selectItem()
}
function unpauseGame(){
  audio.play()
  gameRunning = true
  menu = undefined  
  gameFrame = 0
  gameLoop()
}
function startMenu(){
    if(audio.currentTime > 0){
        audio.currentTime = 0
        audio.pause()
    }
    if(gameoverAudio.currentTime > 0){
        gameoverAudio.pause()
        gameoverAudio.currentTime = 0
        
    }
    saveGame()
    gameRunning = false
    menu = "START"
    btns.length = 0
    select = 0
    selectCoolDown = 60
    menuLoop()
    selectOpt = {}
    selectLoop()
    selectItem()
}
//Save managament
let save = {
    level: null,
    playerInventory:[],
    playerMaxHealth: player.maxhp,
    completedSave: false,
}
function saveGame(){
    save.level = currentLevel
    save.playerInventory = player.inventory
    save.MaxHealth = player.maxhp
    let JSONSave = JSON.stringify(save)
    // console.log("Save:" + save)
    window.localStorage.setItem("save",JSONSave)
}
function loadSave(){
    let localSave = localStorage.getItem("save");
    localSave = JSON.parse(localSave);
    save = localSave
    //console.log("Save:" + save)
    player.y = canvas.height / 2
    player.x = 10
    player.inventory = save.playerInventory
    player.maxhp = save.playerMaxHealth
    levelInterpret(save.level);
}
function checkIfCompleted(){
    let localSave = localStorage.getItem("save");
    localSave = JSON.parse(localSave);
    return localSave.saveCompleted
}
//Select Management
let selectOpt = {}
function selectLoop(){
    for (let i = 0; i < btns.length;i++){
        let currentBtn = btns[i]
        //console.log("Current Button select is " + currentBtn.type +". I is " + i)
        if(currentBtn.show == true && !(currentBtn.type in selectOpt) ){
            //console.log(currentBtn.type + " is added to selectOpt")
            selectOpt[currentBtn.type] = false  
        }
    }
    selectItem()
}
function resetSelect(){
    //console.log(btns)
    for (let i = 0; i < btns.length;i++){
        let currentBtn = btns[i]
        if(currentBtn.show){
            selectOpt[currentBtn.type] = false  
        } 
    }
}
function selectItem(){
    console.log(select)
    let theKey = Object.keys(selectOpt)[select] 
    selectOpt[theKey] = true
    console.log("KEY " + Object.keys(selectOpt))
}

//UI and Buttons
let gameRunning = false
let menu = "START"
let menuFrame = 0
let alertCoolDown = 0
const mouse = {
    x:0,
    y:0,
    w:0,
    h:0,
}
const btns = []
class btn {
    constructor(x,y,w,h,show,text){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.show = show
        this.text = text
        this.type = text
    }
    draw(){
        if (this.show){
            ctx.beginPath()
            ctx.fillStyle = "#220072"
            ctx.fillRect(this.x,this.y,this.w,this.h)
        
            if(fontReady){
                ctx.beginPath()
                ctx.fillStyle = "White"
                ctx.font = '25px "Press Start 2P"'
                ctx.fillText(this.text,this.x + 25 + (this.w * 0.05) ,this.y+10+(this.h / 2))
            }
            else{
                ctx.beginPath()
                ctx.fillStyle = "White"
                ctx.font = '25px Arial'
                ctx.fillText(this.text,this.x + 25 + (this.w * 0.05) ,this.y+10+(this.h / 2))
            }
            
            if(selectOpt[this.type] == true){
                ctx.drawImage(img,6.5,32.5,spriteSize,58.5,this.x - 20,this.y+20,player.w/2,player.h/2);
            }
    }
    }
    clicked(){
        if (this.type == "Start"){
           if(menu == "START" && collision(mouse, this)){
            startGame()
            } 
        }
        if (this.type == "New Start"){
            
            if(window.localStorage.length != 0){
                if(alertCoolDown == 0){
                    if (window.confirm("This will delete your save. Are you sure?") == false){
                    alertCoolDown = 60
                    return
                    }
                    else{
                        if((menu == "START" || menu == "GAMEOVER") && collision(mouse, this)){
                            startGame("newStart")
                        }
                        if(menu == "PAUSE" && collision(mouse, this)){
                            startGame("newStart")
                        }
                    }
                    
                }
                else{return}
            }
            else{
                if((menu == "START" || menu == "GAMEOVER") && collision(mouse, this)){
                    startGame("newStart")
                }
                if(menu == "PAUSE" && collision(mouse, this)){
                    startGame("newStart")
                }
            }
        }
        if (this.type == "Continue"){
            if(menu == "PAUSE" && collision(mouse, this)){
                unpauseGame()
            }
        }
        if (this.type == "Start Menu"){
            if ((menu == "PAUSE" || menu == "GAMEOVER" )&& collision(mouse, this)){
                startMenu()
                
            }
        }
    }
    pressed(){
        selectCoolDown =  10
        console.log(this.type + " Pressed")
        if (this.type == "Start"){
           if(menu == "START"){
                startGame()
                
            } 
        }
        if (this.type == "New Start"){
            //Prevents spammers from deleting a save
            if(window.localStorage.length != 0){
                if(alertCoolDown == 0){
                    if (window.confirm("This will delete your save. Are you sure?") == false){
                    alertCoolDown = 160
                    return
                }else{
                    if(menu == "START" || menu == "GAMEOVER") {
                        startGame("newStart")
                    }
                    if(menu == "PAUSE"){
                        startGame("newStart")
                    }}}
                else{return}
            }  
            else {
                if(menu == "START" || menu == "GAMEOVER") {
                    startGame("newStart")
                }
                if(menu == "PAUSE"){
                    startGame("newStart")
                }
            }
        }
        if (this.type == "Continue"){
            if(menu == "PAUSE"){
            unpauseGame()
            }
        }
        if (this.type == "Start Menu"){
            if ((menu == "PAUSE" || menu == "GAMEOVER" )){
                startMenu()
            }
        }
        if (this.type == "Options"){
            if(menu == "START" || menu == "CONTROLS"){menu = "OPTIONS"}
        }
    }
}
document.addEventListener("mousedown", ()=>{
    btns.forEach((btn)=>{btn.clicked()})
})
document.addEventListener("mousemove", (e)=>{
    mouse.x = e.clientX
    mouse.y = e.clientY
})
function addBtn(type){
    if(type == "Start"){btns.push(new btn(0,0,200,80,true,"Start"))}
    if(type == "New Start"){btns.push(new btn(0,0,300,80,true,"New Start"))}
    if(type == "Continue"){btns.push(new btn(0,0,300,80,true,"Continue"))}
    if(type == "Pause"){btns.push(new btn(0,0,200,80,true,"Pause"))}
    if(type == "Start Menu"){btns.push(new btn(0,0,300,80,true,"Start Menu"))}
    if(type == "Options"){btns.push(new btn(0,300,80,true,"Options"))}
    if(type == "Controls"){btns.push(new btn(0,300,80,true,"Controls"))}
    if(type == "WASD"){btns.push(new btn(0,300,80,true,"WASD controls"))}
    if(type == "ARROWS"){btns.push(new btn(0,400,80,true,"Arrow Controls"))}
}

function drawBtns(){
    btns.forEach( (btn)=>{
        btn.draw()
    })
}
function showBtns(choiceTypes){
    btns.forEach( (btn)=>{
        if (choiceTypes.includes(btn.type)){
            btn.show = true
            }
        else{btn.show = false}
        }) 
}
function btnCoords(choiceType,x,y){
    btns.forEach( (btn)=>{
        if(btn.type == choiceType){
            btn.x = x
            btn.y = y
        }
    })
}
function menuLoop(){
    if(menu == "START"){
        clearCanvas()
        btns.length = 0
        addBtn("New Start")
        addBtn("Start")
        addBtn("Options")
        showBtns(["New Start","Start","Options"])
        btnCoords("Options",(canvas.width / 2) - 100,canvas.height - 100)
        btnCoords("Start",(canvas.width / 2) - 100,canvas.height - 150)
        btnCoords("New Start",(canvas.width / 2) - 150,canvas.height - 250)
        
        ctx.drawImage(logoImg,(canvas.width / 2) - (logoImg.width /2), canvas.height/2 - logoImg.height)
        // console.log("StartMenu: SelectOpt: " + Object.keys(selectOpt))
        // console.log("StartMenu: SelectOpt values: " + Object.values(selectOpt))
        inputDetect()
        drawBtns()
        if(titleAudio.currentTime <= 0){titleAudio.play()}
    }
    if(menu == "GAMEOVER"){
        btns.length = 0
        addBtn("New Start")
        addBtn("Start Menu")
        clearCanvas()
        showBtns(["New Start","Start Menu"])
        btnCoords("New Start",(canvas.width / 2) - 150,canvas.height - 250)
        btnCoords("Start Menu", (canvas.width/2)-150,canvas.height - 150)
        
        ctx.beginPath()
        ctx.fillStyle = "White"
        ctx.font = '40px "Press Start 2P"'
        ctx.fillText("GAME OVER",(canvas.width/2)-175,canvas.height - 350)
                
        inputDetect()
        drawBtns()
    }
    if(menu == "PAUSE"){
        clearCanvas()
        btns.length = 0
        addBtn("Continue")
        addBtn("New Start")
        addBtn("Start Menu")
        showBtns(["Continue","New Start", "Start Menu"])
        btnCoords("Continue", (canvas.width / 2) - 150,canvas.height - 600)
        btnCoords("New Start",(canvas.width / 2) - 150,canvas.height - 400)
        btnCoords("Start Menu", (canvas.width / 2) - 150,canvas.height - 200)
        inputDetect()
        drawBtns()
    }
    if(menu == "OPTIONS"){
        clearCanvas()
        btns.length = 0
        addBtn("Controls")
        addBtn("Start Menu")
        showBtns(["Controls","Start Menu"])
        btnCoords("Controls", (canvas.width / 2) - 150,canvas.height - 500)
        btnCoords("Start Menu", (canvas.width / 2) - 150,canvas.height - 200)
        inputDetect()
        drawBtns()
    }
    if(menu == "CONTROLS"){
        clearCanvas()
        btns.length = 0
        addBtn("WASD")
        addBtn("ARROWS")
        addBtn("Start Menu")
        showBtns(["WASD" , "ARROWS","Options"])
        btnCoords("WASD",300,canvas.height / 2)
        btnCoords("ARROWS",canvas.width - 300,canvas/height/2)
        inputDetect()
        drawBtns()
    }
    if(menu != undefined){
        if(selectCoolDown > 0){selectCoolDown -= 1}
        if(alertCoolDown > 0){alertCoolDown -= 1}
        menuFrame += 1
        requestAnimationFrame(menuLoop)  
    }
}
menuLoop()
WASDcontrols()
selectLoop()