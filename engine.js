const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//===================================== global variables =====================================
const canvasX = canvas.width = 1600;
const canvasY = canvas.height = 900;

let debug = false;
let pointerpos = [];
pointerpos[0] = canvasX / 2;
pointerpos[1] = canvasY / 2;
const pointersize = 20;
const pointerspeed = 10;

let renderSpeed = 10;
let ubdateSpeed = 100;

let mousePosition = [0, 0];
window.addEventListener("mousemove", (event) => {
    
    // problémy s velikostí oken a "responzobilitou"
    if (window.innerWidth * 9 > window.innerHeight * 16) { // "vytknutí" poměrů
        // horizontální
        mousePosition[0] = (event.clientX - (window.innerWidth - canvasX * (window.innerHeight / canvasY)) / 2) / (window.innerHeight / canvasY);
        mousePosition[1] = event.clientY / (window.innerHeight / canvasY);
    } else {
        // vertikální
        mousePosition[0] = event.clientX / (window.innerWidth / canvasX);
        mousePosition[1] = (event.clientY - (window.innerHeight - canvasY * (window.innerWidth / canvasX)) / 2) / (window.innerWidth / canvasX);
    }
})

window.addEventListener("click", (event) => {
    tabletMouse = lightMouse = false;
    doors();
    mainMenuSelect();
    if (debug == true) {
        console.log("Mouse position:    " + mousePosition[0] + ", " + mousePosition[1]);
        pointerpos = [mousePosition[0], mousePosition[1]];
    }

})
//=========================================== menu ============================================
const buttonsMM = [
    //  [x, y, y1,barva] boužel nekonzistentí arraye
    [200,300,410,"#f31","Start","100px Arial"],
    [150,450,550,"#f50","Tutorial","70px Arial"],
    [120,600,670,"#0f0","Settings","51px Arial"],
    [120,700,770,"#0ff","Custom","51px Arial"],
];
let settingB =[
[
    ["Hevy",0,10,1,5],
    ["Solidger",0,10,1,3],
    ["Demo",0,10,1,3],
    ["Scout",0,10,1,2],
],[
    ["Light Loss",0,100,0.1,1],
    ["Door Loss",0,100,0.1,5],
    ["Tablet Loss",0,100,0.1,20],
    ["Constant",0,100,0.05,0],
],[
    ["Power",0,100,10,10],
    ["Update speed [ms]",1,100,100,3],
    ["Render speed [ms]",1,100,1,10],
    ["Time [S]",0,100,10,12],
],[
    ["Batery show",0,1,1,1],
    ["God mode",0,1,1,0],
    ["GUI",0,1,1,1],
    ["Time show",0,1,1,1],    
]
];
function mainMenuSelect(){
function variablerefresh(){
    fredy.info.anger =  settingB[0][0][4]*settingB[0][0][3];
    chicka.info.anger = settingB[0][1][4]*settingB[0][1][3];
    bonny.info.anger =  settingB[0][2][4]*settingB[0][2][3];
    foxy.info.anger =   settingB[0][3][4]*settingB[0][3][3];

    lightLoss =         settingB[1][0][4]*settingB[1][0][3];
    doorLoss =          settingB[1][1][4]*settingB[1][1][3];
    tabletPullupLoss =  settingB[1][2][4]*settingB[1][2][3];
    powerloss =         settingB[1][3][4]*settingB[1][3][3];

    power =             settingB[2][0][4]*settingB[2][0][3];
    ubdateSpeed =       settingB[2][1][4]*settingB[2][1][3];
    renderSpeed =       settingB[2][2][4]*settingB[2][2][3];
    time[1] =           settingB[2][3][4]*settingB[2][3][3];

    godmode =           settingB[3][1][4]*settingB[3][1][3];    
}
    switch(mM[0]){
        case 0: if(mM[1]!=undefined){mM[0] = 1+mM[1]; variablerefresh()}break;
        case 3: if( mousePosition[1] > 75 && mousePosition[1] < 125 && mousePosition[0] > canvasX-(camSize*canvasX/2.5+25)+50 && mousePosition[0] < canvasX-(camSize*canvasX/2.5-25)+50 ){
            settingS[0] = !settingS[0];
        }else{
            settingS[1][2] = !settingS[1][2];
            settingS[1][0] = mousePosition[0]+cameraOffset[0];
            settingS[1][1] = mousePosition[1]+cameraOffset[1];
        }
        if(mousePosition[0]<300 && mousePosition[1] > canvasY - 100){mM[0]=0;settingS[1][2] = settingS[0]= false; }
        ;break;
        case 4:
            if(mousePosition[0] < 300 && mousePosition[1] > canvasY-100)mM[0]=0;
            for(let i = 0;i<settingB.length;i++){
                if(mousePosition[1] > 50+200*i && mousePosition[1] < 150+200*i){
                for(let y = 0;y<settingB[i].length;y++){
                    if(mousePosition[0] > (canvasX/(settingB[i].length*2-1))*2*y && mousePosition[0] < (canvasX/(settingB[i].length*2-1))*2*y+canvasX/(settingB[i].length*2-1)){
                        if(mousePosition[0] < (canvasX/(settingB[i].length*2-1))*2*y+(canvasX/(settingB[i].length*2-1))/2){
                            if(settingB[i][y][1] < settingB[i][y][4]) settingB[i][y][4]--;
                        }else{
                            if( settingB[i][y][4] < settingB[i][y][2]) settingB[i][y][4]++;
                        }
                    }  
                }}
            }
            break;
        default:
    }
}

let settingS = [false,[0,0,false]]
let mM = [0,0];
function mainMenu(){
    ctx.clearRect(0, 0, canvasX, canvasY);
    switch(mM[0]){
        case 0:
        mM[1] = undefined;
        ctx.drawImage(menuBacground,0,0,canvasX,canvasY);
        for(let i = 0;i<buttonsMM.length;i++){
            ctx.fillStyle = buttonsMM[i][3];
            ctx.fillRect(canvasX/2-buttonsMM[i][0],buttonsMM[i][1],buttonsMM[i][0]*2,buttonsMM[i][2]-buttonsMM[i][1]);
            if(canvasX/2-buttonsMM[i][0] < mousePosition[0] && mousePosition[0] < canvasX/2+buttonsMM[i][0] && mousePosition[1] < buttonsMM[i][2] && buttonsMM[i][1] < mousePosition[1]){
                ctx.fillStyle = "#000";
                ctx.globalAlpha = 0.5;
                ctx.fillRect(canvasX/2-buttonsMM[i][0],buttonsMM[i][1],buttonsMM[i][0]*2,buttonsMM[i][2]-buttonsMM[i][1]);  
                ctx.globalAlpha = 1;
                mM[1] = i;
            }
            ctx.font = buttonsMM[i][5];
            ctx.fillStyle="#000";
            ctx.fillText(buttonsMM[i][4],canvasX/2-buttonsMM[i][0]+10,buttonsMM[i][2]-20);
            
        };
        break;
        case 1:
        setInterval(ubdate, ubdateSpeed);
        setInterval(render, renderSpeed);
        setInterval(timer, 1000);
        clearInterval(mainMenuId);
        break;
        case 2:break;
        case 3:
            tablet(true);
            ctx.fillStyle = "#f00";
            ctx.fillRect(50,95,canvasX-100,10);
            ctx.fillRect(canvasX-(camSize*canvasX/2.5-25),75,50,50);
            ctx.fillRect(0,canvasY,300,-100);
            ctx.fillStyle = "#000";
            ctx.font = "80px Arial";
            ctx.fillText("Back",10,canvasY-10);
            if(settingS[0]){
                camSize = (canvasX-mousePosition[0]+50)/canvasX*2.5;
            }
            if(settingS[1][2]){
                cameraOffset[0] = settingS[1][0]-mousePosition[0];
                cameraOffset[1] = settingS[1][1]-mousePosition[1];
            }
            camPositionRefresh();
        break;
        case 4:
            ctx.fillStyle = "#f00";
            ctx.fillRect(0,canvasY,300,-100);
            
            for(let i = 0;i<settingB.length;i++){
                for(let y = 0;y<settingB[i].length;y++){
                    ctx.fillStyle = "#f00";
                    ctx.fillRect((canvasX/(settingB[i].length*2-1))*2*y,50+200*i,canvasX/(settingB[i].length*2-1),100);   
                    ctx.fillStyle = "#fff";
                    ctx.font = "40px Arial";
                    ctx.fillText(settingB[i][y][0],(canvasX/(settingB[i].length*2-1))*2*y,200*i+50);
                    ctx.fillStyle = "#000";
                    ctx.font = "60px Arial";
                    ctx.fillText("<" + (settingB[i][y][4]*settingB[i][y][3]) + ">",(canvasX/(settingB[i].length*2-1))*2*y+50,130+200*i)
                }
            }
            ctx.fillStyle = "#000";
            ctx.font = "80px Arial";
            ctx.fillText("Back",10,canvasY-10);
        break;
        default:
    }
}
const mainMenuId = setInterval(mainMenu, renderSpeed);
//================================== global game variables ===================================
let time = [0,120];
let godmode = 0;
let blackoutVar = false;
// power
let power = 100;
let tabletPullupLoss = 20;
let light = false;
let lightMouse = false;
let doorButons = [75,130,canvasY/3,110];
let doorlock = [false,false,false];

let doorLoss = 10;
let lightLoss = 5;
let powerloss = 0;

// tablet
let cameraOffset = [-50,69,[300,75],[canvasX-260,canvasY+25]];
let cameraSelect = 5;
const tabletUpTriger = 10;
let tabletMouse = false;
const tabletTriger = 4;
let cameras = false;
const talbetCorners = 50;
const talbetEdges = 30;
let camSize = 2;
let room0camAngle = -(canvasX / 2);

// imgs
const nill = "./assets/null.png";
const EnemakDB = [
    ["./assets/fredy/fredy.png","./assets/fredy/fredy01.png","./assets/fredy/fredy02.png","./assets/fredy/fredy03.png","./assets/fredy/fredy04.png","./assets/fredy/fredy05.png","./assets/fredy/fredy06.png","./assets/fredy/fredy07.png","./assets/fredy/fredy08.png","./assets/fredy/fredy09.png","./assets/fredy/fredy10.png","./assets/fredy/fredy11.png","./assets/fredy/fredy12.png","./assets/fredy/fredy12.png","./assets/fredy/fredy14.png","./assets/fredy/fredy15.png"],
    ["./assets/bonny/bonny.png","./assets/bonny/bonny01.png","./assets/bonny/bonny02.png","./assets/bonny/bonny03.png","./assets/bonny/bonny04.png","./assets/bonny/bonny05.png","./assets/bonny/bonny06.png","./assets/bonny/bonny07.png","./assets/bonny/bonny08.png","./assets/bonny/bonny09.png","./assets/bonny/bonny10.png","./assets/bonny/bonny11.png","./assets/bonny/bonny12.png","./assets/bonny/bonny12.png","./assets/bonny/bonny14.png","./assets/bonny/bonny15.png"],
    ["./assets/chicka/chicka.png","./assets/chicka/chicka01.png","./assets/chicka/chicka02.png","./assets/chicka/chicka03.png","./assets/chicka/chicka04.png","./assets/chicka/chicka05.png","./assets/chicka/chicka06.png","./assets/chicka/chicka07.png","./assets/chicka/chicka08.png","./assets/chicka/chicka09.png","./assets/chicka/chicka10.png","./assets/chicka/chicka11.png","./assets/chicka/chicka12.png","./assets/chicka/chicka12.png","./assets/chicka/chicka14.png","./assets/chicka/chicka15.png"],
    ["./assets/foxy/foxy.png","./assets/foxy/foxy01.png","./assets/foxy/foxy02.png","./assets/foxy/foxy03.png","./assets/foxy/foxy04.png","./assets/foxy/foxy05.png","./assets/foxy/foxy06.png","./assets/foxy/foxy07.png","./assets/foxy/foxy08.png","./assets/foxy/foxy09.png","./assets/foxy/foxy10.png","./assets/foxy/foxy11.png","./assets/foxy/foxy12.png","./assets/foxy/foxy12.png","./assets/foxy/foxy14.png","./assets/foxy/foxy15.png"],
];
const guiTablet= new Image();guiTablet.src = "./assets/gui/triggers.png";
const guiJitter= new Image();guiJitter.src = "./assets/gui/jitter.png";
const testImg= new Image();testImg.src = "./assets/test.png";
const fredyRoom0 = new Image();fredyRoom0.src = nill;
const bonnyRoom0 = new Image();bonnyRoom0.src = nill;
const chickaRoom0 = new Image();chickaRoom0.src = nill;
const foxyRoom0 = new Image();foxyRoom0.src = nill;
let room0Img = new Image();room0Img.src = "./assets/map/room0dark.png";
let cameraImg = new Image();cameraImg.src = "./assets/map/rooms/room7.png";
// po tom co vím jaká blbost byla přepisovat .src v půběhu hry tak ty dveře vytvořím 6-tery
const door0 = new Image();door0.src = "./assets/map/room0door0.png";
const door1 = new Image();door1.src = "./assets/map/room0door1.png";
const door2 = new Image();door2.src = "./assets/map/room0door2.png";
const door0dark = new Image();door0dark.src = "./assets/map/room0door0dark.png";
const door1dark = new Image();door1dark.src = "./assets/map/room0door1dark.png";
const door2dark = new Image();door2dark.src = "./assets/map/room0door2dark.png";
const fredyCamera = new Image();fredyCamera.src = nill;
const bonnyCamera = new Image();bonnyCamera.src = nill;
const chickaCamera = new Image();chickaCamera.src = nill;
const foxyCamera = new Image();foxyCamera.src = nill;

const menuBacground = new Image(); menuBacground.src = "./assets/mainMenu.gif";
menuBacground.autoplay = true;
menuBacground.loop = true;

// =============================== enemies =============================
class enemak {
    constructor(info) {
        this.info = info;
        this.ubdate = { now: 0, max: 10 + (Math.random() * 10) };
        this.camerastun = 0;
    }
    
    attack(x){
        const rand = Math.random() * 100;
if(rand < 30 && !doorlock[x]){
    this.info.position = 0;
    dies(this.info.id);
}else{
    switch(Math.floor(Math.random() * 7)){
        case 0:  this.info.position = 7;break;
        case 1:  this.info.position = 8;break;
        case 2:  this.info.position = 9;break;
        case 3:  this.info.position = 10;
        default:
    }
}}

    movmentOpportunityFoxy() {
        this.ubdate.now += 1;
        if(this.camerastun > 0)this.camerastun--;
        const movopprand = Math.floor(Math.random() * 20);
        if (movopprand < this.info.anger && this.ubdate.now >= this.ubdate.max && this.camerastun <= 0) {

                switch (this.info.position) {
                    case 10: this.info.position = 8;
                        break;
                    case 8: this.info.position = 7;
                        break;
                    case 7: this.info.position = 12;
                        break;
                    case 12: this.info.position = 3;
                        break;
                    case 3: this.info.position = 15;
                        break;
                    case 15: 
                        if(!doorlock[0]){
                            this.info.position = 0;
                            dies(this.info.id);
                        }else{
                            this.info.position = 10;
                        };break;
                    default:
            }
        }
        if (this.ubdate.now >= this.ubdate.max) this.ubdate.now = 0
    }
    movmentOpportunityFredy() {
        this.ubdate.now += 1;
        if (this.ubdate.now >= this.ubdate.max) {
            this.ubdate.now = 0;
            const movopprand = Math.floor(Math.random() * 20);
            if (this.info.anger > movopprand) {
                const rand = Math.floor(Math.random() * 16);
                const aaa = this.info.position;
                if (aaa != 0 && aaa != 1 && aaa != 2 && aaa != 15) {
                    if (15 == rand) {
                        switch (Math.floor(Math.random() * 2)) {
                            case 0: this.info.position = 15;
                            case 1: this.info.position = 1;
                            case 2: this.info.position = 2;
                        }
                    } else
                        if (2 < rand) {
                            this.info.position = rand;
                        }
                } else {
                    if(Math.floor(Math.random() * 2)==0)this.attack(this.info.position);
                }
            }
        }
    }
    movmentOpportunity() {
        this.ubdate.now += 1;
        if (this.ubdate.now >= this.ubdate.max) {
            this.ubdate.now = 0;
            const movopprand = Math.floor(Math.random() * 20);
            if (this.info.anger > movopprand) {

                const rand = Math.random() * 100;
                switch (this.info.position) {
                    case 1:this.attack(this.info.position) ; break;//
                    case 2:this.attack(this.info.position) ; break;//
                    case 3:
                        if (rand < 70) this.info.position = 15;
                        else this.info.position = 12;
                        ; break;
                    case 4:
                        if (rand < 15) this.info.position = 11;
                        else if (rand < 30) this.info.position = 5;
                        else if (rand < 40) this.info.position = 6;
                        else if (rand < 45) this.info.position = 14;
                        else this.info.position = 1;
                        ; break;
                    case 5:
                        if (rand < 33) this.info.position = 13;
                        else if (rand < 66) this.info.position = 14;
                        else this.info.position = 4;
                        ; break;
                    case 6:
                        if (rand < 66) this.info.position = 14;
                        else this.info.position = 8;
                        ; break;
                    case 7:
                        if (rand < 40) this.info.position = 8;
                        else if (rand < 80) this.info.position = 9;
                        else this.info.position = 12;
                        ; break;
                    case 8:
                        if (rand < 40) this.info.position = 7;
                        else if (rand < 80) this.info.position = 6;
                        else this.info.position = 10;
                        ; break;
                    case 9:
                        if (rand < 66) this.info.position = 11;
                        else this.info.position = 7;
                        ; break;
                    case 10: this.info.position = 8; break;
                    case 11:
                        if (rand < 60) this.info.position = 4;
                        else if (rand < 80) this.info.position = 12;
                        else this.info.position = 9;
                        ; break;
                    case 12:
                        if (rand < 60) this.info.position = 3;
                        else if (rand < 80) this.info.position = 11;
                        else this.info.position = 7;
                        ; break;
                    case 13:
                        if (rand < 60) this.info.position = 2;
                        else if (rand < 80) this.info.position = 5;
                        else this.info.position = 14;
                        ; break;
                    case 14:
                        if (rand < 25) this.info.position = 6;
                        else if (rand < 50) this.info.position = 4;
                        else if (rand < 75) this.info.position = 5;
                        else this.info.position = 13;
                        ; break;
                    case 15: this.attack(0); break;//
                    default:
                }
            }
        }
    }

}

let fredy = new enemak(
    {
        id: 0,
        position: 5,
        anger: settingB[0][0][4]
    }
)
let bonny = new enemak(
    {
        id: 1,
        position: 8,
        anger: settingB[0][1][4]
    }
)
let chicka = new enemak(
    {
        id: 2,
        position: 6,
        anger: settingB[0][2][4]
    }
)

let foxy = new enemak(
    {
        id: 3,
        position: 10,
        anger: settingB[0][3][4]
    }
)
//========================================== Ticks ===========================================
let camPosition;
function camPositionRefresh(){
camPosition = [
    (canvasX / camSize) * (camSize - 1) + talbetEdges - cameraOffset[0],    // x
    (canvasY / camSize) * (camSize - 1) + talbetEdges - cameraOffset[1],    // y
    (canvasX / camSize) - 2 * talbetEdges,      // xs
    (canvasY / camSize) - 2 * talbetEdges      // ys
];
}
camPositionRefresh();
function butonDraw() {
    if(doorlock[0] == true){ctx.fillStyle = "#0f0";}else{ctx.fillStyle = "#f00";};
    ctx.fillRect(doorButons[1]+room0camAngle,doorButons[2],doorButons[0],doorButons[0]);
    if(doorlock[1] == true){ctx.fillStyle = "#0f0";}else{ctx.fillStyle = "#f00";};
    ctx.fillRect(canvasX+doorButons[3]+room0camAngle,doorButons[2],doorButons[0],doorButons[0]);
    if(doorlock[2] == true){ctx.fillStyle = "#0f0";}else{ctx.fillStyle = "#f00";};
    ctx.fillRect(canvasX*2-doorButons[0]-doorButons[1]+room0camAngle,doorButons[2],doorButons[0],doorButons[0]);
}
function doorlocking(x){ //doorlock[x] *= false;
if(doorlock[x]){
    doorlock[x] = false;
}else{
    doorlock[x] = true;
}
if(debug){console.log(doorlock[0] + " " + doorlock[1] + " " + doorlock[2])}
}
function doors() {
    if(mousePosition[1] < doorButons[2]+doorButons[0] && mousePosition[1] > doorButons[2]){
        if(mousePosition[0]-room0camAngle > doorButons[1] && mousePosition[0]-room0camAngle < doorButons[1] + doorButons[0]) doorlocking(0);
        if(mousePosition[0]-room0camAngle > canvasX+doorButons[3] && mousePosition[0]-room0camAngle < canvasX+doorButons[3] + doorButons[0]) doorlocking(1);
        if(mousePosition[0]-room0camAngle > canvasX*2-doorButons[1]-doorButons[0] && mousePosition[0]-room0camAngle < canvasX*2-doorButons[1]) doorlocking(2);
    }
}
function lights() {
    if(!cameras && !blackoutVar){
        if(light)power -= lightLoss*renderSpeed/1000;
        if (mousePosition[1] > (canvasY / tabletUpTriger)) lightMouse = false;
        if (!lightMouse && (mousePosition[1] < (canvasY / tabletUpTriger))){
            lightMouse = true;
            if (light) {
                light = false;
                room0Img.src = "./assets/map/room0dark.png";
            } else {
                light = true;
                room0Img.src = "./assets/map/room0light.png";
            }
        }
}else{
    lightMouse = false;
    light = false;
    room0Img.src = "./assets/map/room0dark.png";
}
}
function tabletPullup() {
    if (mousePosition[1] < canvasY - (canvasY / tabletUpTriger)) tabletMouse = false;
    if (!tabletMouse && (mousePosition[1] > canvasY - (canvasY / tabletUpTriger )) && !blackoutVar)
    {
        tabletMouse = true;
        if (cameras) {
            if ((camPosition[0]-cameraOffset[0] < mousePosition[0] &&
                camPosition[0] + camPosition[2]-cameraOffset[0] > mousePosition[0] &&
                camPosition[1] < mousePosition[1] &&
                camPosition[1] + camPosition[3] > mousePosition[1])) {
            } else {
                cameras = false;
            }
        } else {
            cameras = true;
            power -= tabletPullupLoss;
        }
    }
}
// seznam souřadnicí roomek na displayi
const chodbyThicc = 10;
const roomPosition = [
    [700, 770, 1030, canvasY], // 0
    [330, 700, 700, canvasY], //3
    [880, 600, 1150, 800], // 5
    [1100, 360, 1300,625+talbetCorners/2], // 6
    [1100, 624-talbetCorners/2, 1300, canvasY], // 14
    [330, 120, 825+talbetCorners/2+1, 360], //7
    [825-talbetCorners*1.5, 120, 1300, 360], //8
    [550, 330, 900, 480], // 9
    [880, 350, 1150, 550], // 10
    [500, 480, 850, 680], // 11
    [330, 350, 550, 730],// 12
    // chodby |
    [390 - chodbyThicc, 120, 2 * talbetCorners + 390 + chodbyThicc, canvasY], // 0 - 3
    [600 - chodbyThicc, 120, 2 * talbetCorners + 600 + chodbyThicc, 680],
    [950 - chodbyThicc, 120, 2 * talbetCorners + 950 + chodbyThicc, 550],
    [1000 - chodbyThicc, 550, 2 * talbetCorners + 1000 + chodbyThicc, canvasY - 20],
    [1150 - chodbyThicc, 120, 2 * talbetCorners + 1150 + chodbyThicc, 550],
    [canvasX / 2 - chodbyThicc, 550, 2 * talbetCorners + canvasX / 2 + chodbyThicc, canvasY],
    // chodby <--->
    [330, 550 - chodbyThicc, 1300, 550 + chodbyThicc + talbetCorners],
    [330, canvasY - 70 - chodbyThicc, 1300, canvasY - 70 + chodbyThicc + talbetCorners]
];
function enemyCamRender(z){
    if(z == fredy.info.position){fredyCamera.src = EnemakDB[0][fredy.info.position]}else{fredyCamera.src = nill};
    if(z == chicka.info.position){chickaCamera.src = EnemakDB[1][chicka.info.position]}else{chickaCamera.src = nill};
    if(z == bonny.info.position){bonnyCamera.src = EnemakDB[2][bonny.info.position]}else{bonnyCamera.src = nill};
    if(z == foxy.info.position){foxyCamera.src = EnemakDB[3][foxy.info.position];foxy.camerastun = 20}else{foxyCamera.src = nill};
    
    ctx.drawImage(chickaCamera,talbetEdges + talbetCorners, talbetEdges + talbetCorners, canvasX - (talbetEdges + talbetCorners) * 2, canvasY - (talbetEdges + talbetCorners) * 2);
    ctx.drawImage(bonnyCamera,talbetEdges + talbetCorners, talbetEdges + talbetCorners, canvasX - (talbetEdges + talbetCorners) * 2, canvasY - (talbetEdges + talbetCorners) * 2);
    ctx.drawImage(fredyCamera,talbetEdges + talbetCorners, talbetEdges + talbetCorners, canvasX - (talbetEdges + talbetCorners) * 2, canvasY - (talbetEdges + talbetCorners) * 2);
    ctx.drawImage(foxyCamera,talbetEdges + talbetCorners, talbetEdges + talbetCorners, canvasX - (talbetEdges + talbetCorners) * 2, canvasY - (talbetEdges + talbetCorners) * 2);
}
let roomSඞlection = 7;
function roomsDraw(y) {
    const x = [
        (roomPosition[y][0]) / camSize + camPosition[0],
        (roomPosition[y][1] - talbetCorners * 2) / camSize + camPosition[1],
        (roomPosition[y][2] - roomPosition[y][0] - talbetCorners * 2) / camSize,
        (roomPosition[y][3] - roomPosition[y][1] - talbetCorners) / camSize
    ];
    if (mousePosition[0] > camPosition[0] && mousePosition[1] > camPosition[1]) {
        if (mousePosition[0] > x[0] && mousePosition[0] < x[0] + x[2] &&
            mousePosition[1] > x[1] && mousePosition[1] < x[1] + x[3]) {
                if (y < 11 && y != 0) { ctx.fillStyle = "#353"; cameraSelect = y;
                jittering[2]=true;
        switch(y){
            case 1:  cameraImg.src = "./assets/map/rooms/room3.png"  ;roomSඞlection = 3;break;
            case 2:  cameraImg.src = "./assets/map/rooms/room5.png"  ;roomSඞlection = 5;break;
            case 3:  cameraImg.src = "./assets/map/rooms/room6.png"  ;roomSඞlection = 6;break; 
            case 4:  cameraImg.src = "./assets/map/rooms/room14.png" ;roomSඞlection = 14;break;
            case 5:  cameraImg.src = "./assets/map/rooms/room7.png"  ;roomSඞlection = 7;break; 
            case 6:  cameraImg.src = "./assets/map/rooms/room8.png"  ;roomSඞlection = 8;break; 
            case 7:  cameraImg.src = "./assets/map/rooms/room9.png"  ;roomSඞlection = 9;break;
            case 8:  cameraImg.src = "./assets/map/rooms/room10.png" ;roomSඞlection = 10;break;
            case 9:  cameraImg.src = "./assets/map/rooms/room11.png" ;roomSඞlection = 11;break;
            case 10: cameraImg.src = "./assets/map/rooms/room12.png" ;roomSඞlection = 12;break;
            default:
        }}}
    }
    ctx.fillStyle = "#000";
    if (cameraSelect == y) ctx.fillStyle = "#353"
    if(debug){
        function enemyDebug(l){
            if(fredy.info.position == l)    ctx.fillStyle = "#f50";
            if(chicka.info.position == l)   ctx.fillStyle = "#0ff";
            if(bonny.info.position == l)    ctx.fillStyle = "#55f";
            if(foxy.info.position == l)     ctx.fillStyle = "#0f0";
        }
        switch(y){
            case 0:     enemyDebug(0);break;
            case 1:     enemyDebug(3);break;
            case 2:     enemyDebug(5);break;
            case 3:     enemyDebug(6);break;
            case 4:     enemyDebug(14);break;
            case 5:     enemyDebug(7);break;
            case 6:     enemyDebug(8);break;
            case 7:     enemyDebug(9);break;
            case 8:     enemyDebug(10);break;
            case 9:     enemyDebug(11);break;
            case 10:    enemyDebug(12);break;
            default:
        }
    }
    if(y==0)ctx.fillStyle="#444";
    ctx.fillRect(x[0], x[1], x[2], x[3]);
}
jittering = [0,20,false,false];
function jitter(){
    if(jittering[2] && !jittering[3])jittering[3]=true;
    if(!jittering[2] && jittering[3])jittering[3]=false;
    if(jittering[3]){
    if(jittering[0] < jittering[1]){
        jittering[0]++;
            if(jittering[0]%2 == 0){
                ctx.drawImage(guiJitter,talbetEdges+talbetCorners,talbetEdges+talbetCorners,canvasX - (talbetCorners+talbetEdges) * 2, canvasY - (talbetEdges+talbetCorners) * 2);
            }else{
                ctx.drawImage(guiJitter,canvasX-(talbetEdges+talbetCorners),canvasY-(talbetEdges+talbetCorners),-1*(canvasX - (talbetCorners+talbetEdges) * 2), -1*(canvasY - (talbetEdges+talbetCorners) * 2));
            }}
        }else{
            jittering[0] = 0 ;
        }
}
function tablet(x) {
    if (x == true) {
        ctx.fillStyle = "#111";
        ctx.fillRect(talbetEdges, talbetEdges, canvasX - talbetEdges * 2, canvasY - talbetEdges * 2);   
        ctx.drawImage(cameraImg,talbetEdges+talbetCorners, talbetEdges+talbetCorners, canvasX - (talbetCorners+talbetEdges) * 2, canvasY - (talbetEdges+talbetCorners) * 2);
        enemyCamRender(roomSඞlection);
        ctx.fillStyle = "#fff";
        ctx.font = "40px Arial"
        if(settingB[3][0][4] == 1)ctx.fillText(Math.round(power) + "%", talbetEdges+10,talbetEdges+talbetCorners-10);
        if( 0 < time[1] && settingB[3][3][4] == 1)ctx.fillText(timeclock, talbetEdges+canvasX/10,talbetEdges+talbetCorners-10);
        ctx.globalAlpha = 0.05; 
        ctx.fillRect((cameraOffset[2][0]) / camSize + camPosition[0],(cameraOffset[2][1] - talbetCorners * 2) / camSize + camPosition[1],(cameraOffset[3][0] - cameraOffset[2][0] - talbetCorners * 2) / camSize,(cameraOffset[3][1] - cameraOffset[2][1] - talbetCorners) / camSize);
        ctx.globalAlpha = 1;
        
        jitter();
        jittering[2]=false;
        for (let i = roomPosition.length; i > 0; i--)roomsDraw(i - 1);

        if (room0camAngle < -(canvasX / 2) + 10 && room0camAngle > -(canvasX / 2) - 10) { }
        else if (room0camAngle < -(canvasX / 2)) { room0camAngle++; } else { room0camAngle-- }
    } else {
        // room0
        if (mousePosition[0] < canvasX / tabletTriger) {
            if (room0camAngle < -10) room0camAngle += 10;
        } else if (mousePosition[0] < (canvasX - canvasX / tabletTriger)) {
            if (room0camAngle < -(canvasX / 2) + 10 && room0camAngle > -(canvasX / 2) - 10) { }
            else if (room0camAngle < -(canvasX / 2)) { room0camAngle++; } else { room0camAngle--}
        } else {
            if (room0camAngle > -canvasX + 10) room0camAngle -= 10;
        }
    }
}
// key detect
let pause = false;
window.addEventListener("keydown", (event) => {
    //debug
    if (debug == true) {
        switch (event.which) {
            case 38: pointerpos[1] -= pointerspeed; console.log("Pointer position:    " + pointerpos[0] + ", " + pointerpos[1]); break;
            case 37: pointerpos[0] -= pointerspeed; console.log("Pointer position:    " + pointerpos[0] + ", " + pointerpos[1]); break;
            case 40: pointerpos[1] += pointerspeed; console.log("Pointer position:    " + pointerpos[0] + ", " + pointerpos[1]); break;
            case 39: pointerpos[0] += pointerspeed; console.log("Pointer position:    " + pointerpos[0] + ", " + pointerpos[1]); break;
            default:
        }
    }
    switch (event.which) {
        case 32:
            if (cameras) {
                cameras = false;
            }else{
                cameras = true;
                power-=tabletPullupLoss;
            }
            ; break;
        case 80:
                pause == true ? pause = false :pause =  true;
            ;break;
        default: break;
    }
})
// debug
function debugging() {
    ctx.fillStyle = "#f00";
    ctx.fillRect(pointerpos[0] - pointersize / 2, pointerpos[1] - pointersize / 2, pointersize, pointersize);

}
function powerC(){
    power -= powerloss;
    if(doorlock[0]||doorlock[1]||doorlock[2]){
        power -= (doorlock[0]+doorlock[1]+doorlock[2])*doorLoss*ubdateSpeed/1000;
    }

}
function drawEnemyRoom0(){
    if(light){
        switch(fredy.info.position){
                case (15 * !doorlock[0]):case (1 * !doorlock[1]):case (2 * !doorlock[2]):  fredyRoom0.src = EnemakDB[0][fredy.info.position]; 
                    ;break;case 0: fredyRoom0.src = EnemakDB[0][fredy.info.position];break;default:fredyRoom0.src = nill;
        }
        switch(chicka.info.position){
                    case (15 * !doorlock[0]):case (1 * !doorlock[1]):case (2 * !doorlock[2]):  chickaRoom0.src = EnemakDB[1][chicka.info.position]; 
                ;break;case 0: chickaRoom0.src = EnemakDB[1][chicka.info.position];break;default:chickaRoom0.src = nill;
        }
        switch(bonny.info.position){
                case (15 * !doorlock[0]):case (1 * !doorlock[1]):case (2 * !doorlock[2]):  bonnyRoom0.src = EnemakDB[2][bonny.info.position]; 
                    ;break;case 0: bonnyRoom0.src = EnemakDB[2][bonny.info.position];break;default:bonnyRoom0.src = nill;
        }
        switch(foxy.info.position){
                case (15 * !doorlock[0]):case (1 * !doorlock[1]):case (2 * !doorlock[2]):  foxyRoom0.src = EnemakDB[3][foxy.info.position]; 
                    ;break;case 0: foxyRoom0.src = EnemakDB[3][foxy.info.position];break;default:foxyRoom0.src = nill;
        }
        ctx.drawImage(fredyRoom0,   room0camAngle, 0, canvasX * 2, canvasY);
        ctx.drawImage(chickaRoom0,  room0camAngle, 0, canvasX * 2, canvasY);
        ctx.drawImage(bonnyRoom0,   room0camAngle, 0, canvasX * 2, canvasY);
        ctx.drawImage(foxyRoom0,    room0camAngle, 0, canvasX * 2, canvasY);
    }
}
let k = 0;
function endScr(){
    k++;
    if(k>5)location.reload(true);
    
}
function win(){
    ctx.clearRect(0, 0, canvasX, canvasY);
    let winText = "You win       Power status: ";
    if(power < 0){ winText += "0%";}else{winText += Math.round(power) + "%"}
    
    ctx.fillStyle = "#fff";
    ctx.fillText(winText,canvasX/3,canvasY/2)
    pause = true;
    setInterval(endScr,1000);
}
function dies(id){
    pause = true;
    if(!godmode){
        ctx.clearRect(0, 0, canvasX, canvasY);
        const jumpscare = new Image();
        jumpscare.src = EnemakDB[id][0];
        jumpscare.onload = function(){
            ctx.drawImage(jumpscare,0,0,canvasX,canvasY);
            ctx.fillStyle = "#111"
            ctx.fillRect(0,canvasY-canvasY/11,canvasX,-canvasY/10);
            ctx.fillStyle = "#fff"
            let dieText = "You died ";
            if(time[1] != 0){dieText += Math.round(time[0]/time[1]*100) + "% in";}else{
                dieText += time[0] + " seconds in"
            }
            
            dieText += "        Power status: "; 
            if(power < 0){ dieText += "0%";}else{dieText += Math.round(power) + "%"}
            
            ctx.fillText(dieText,canvasX/5,canvasY-canvasY/10)
            setInterval(endScr,1000);
        }}}
function blackout(){if(power <= 0 && godmode != 1){
    
    blackoutVar = true;
    power = 0;
    cameras = false;
    for(let i = 0;i<doorlock.length;i++)doorlock[i]=false;
    
}}
let timeclock = "20:00";
function timer(){
    time[0]++;
    if(0 < time[1]){
        if (time[0] == time[1]){
            win();
        }else if(time[0]/time[1]*10 < 3){
            timeclock = Math.round(time[0]/time[1]*10+20) + ":00 ";
        }else{
            timeclock = Math.round(time[0]/time[1]*10-3) + ":00 "
        }
        
        
}}
function room0(){
    const upScale = 200;
    function drawDoorRoom0(x,y,z){
        if(doorlock[x]){
        if(light){
            ctx.drawImage(y, room0camAngle, -upScale, canvasX * 2, canvasY+upScale)
        }else{
            ctx.drawImage(z, room0camAngle, -upScale, canvasX * 2, canvasY+upScale)
        }
        }
    }
    ctx.drawImage(room0Img, room0camAngle, -upScale, canvasX * 2, canvasY+upScale);
    drawEnemyRoom0();
    drawDoorRoom0(0,door0,door0dark);
    drawDoorRoom0(1,door1,door1dark);
    drawDoorRoom0(2,door2,door2dark);
    butonDraw();
}

function render() {
    if(!pause){
    ctx.clearRect(0, 0, canvasX, canvasY);
    room0();

    
    if(settingB[3][2][4] == 1)ctx.drawImage(guiTablet, 0, 0, canvasX, canvasY);
    tabletPullup();
    lights();
    tablet(cameras);
    
    
    
    if (debug == true) {
        debugging();
    }
    
}}

function ubdate() {
    if(!pause){
    blackout();
    powerC();
    fredy.movmentOpportunityFredy();
    chicka.movmentOpportunity();
    bonny.movmentOpportunity();
    foxy.movmentOpportunityFoxy();
}}
