#pragma strict
@script AddComponentMenu ("CarPhys/Scripts/CarControleNitro")
private var nitro = false;
private var currentTorque = 0.0f;
var maxNitroAccelaration = 50;
var maxTorque = 20;
var nitroVolume = 80f;
var maxNitrovolume = 100;
var carTorque = 0;
var particleEffectLeft : GameObject;
var particleEffectRight : GameObject;
var guiSkin : GUISkin;

function Start(){
particleEffectLeft.GetComponent(ParticleEmitter).emit = false;
particleEffectRight.GetComponent(ParticleEmitter).emit = false;
particleEffectLeft.GetComponent(LensFlare).enabled = false;
particleEffectRight.GetComponent(LensFlare).enabled = false;
}

function Update () {
carTorque = gameObject.GetComponent(CarControleScript).maxTorque = currentTorque;

Nitro();

if(nitroVolume<=0){
nitro = false;
nitroVolume = 0;
currentTorque = maxTorque;
particleEffectLeft.GetComponent(ParticleEmitter).emit = false;
particleEffectRight.GetComponent(ParticleEmitter).emit = false;
particleEffectLeft.GetComponent(LensFlare).enabled = false;
particleEffectRight.GetComponent(LensFlare).enabled = false;
}
if(nitroVolume> maxNitrovolume){
nitroVolume = maxNitrovolume;
}


if(Input.GetKey(KeyCode.Z)){
nitro = true;
}else{
nitro = false;
}
}

function Nitro(){
if(nitro){
currentTorque = maxNitroAccelaration;
nitroVolume -= 1;
particleEffectLeft.GetComponent(ParticleEmitter).emit = true;
particleEffectRight.GetComponent(ParticleEmitter).emit = true;
particleEffectRight.GetComponent(LensFlare).enabled = true;
particleEffectLeft.GetComponent(LensFlare).enabled = true;
}
if(!nitro){
currentTorque = maxTorque;
nitroVolume += 1;
particleEffectLeft.GetComponent(ParticleEmitter).emit = false;
particleEffectRight.GetComponent(ParticleEmitter).emit = false;
particleEffectLeft.GetComponent(LensFlare).enabled = false;
particleEffectRight.GetComponent(LensFlare).enabled = false;
}
}


function OnGUI(){
GUI.skin = guiSkin;

GUI.Label(Rect (100,50,300,100),"Current torque : " + currentTorque );
GUI.Label(Rect (100,80,300,100),"Nitro Volume : " + nitroVolume);
}




