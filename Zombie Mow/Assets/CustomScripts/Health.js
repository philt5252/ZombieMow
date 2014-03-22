﻿/*Health Script*/
 

var healthBG : Texture2D; //health background
var healthFG : Texture2D; //health foreground
var ammoFG : Texture2D; //ammo foreground
var healthFGMaxWidth : float;//the starting width of the foreground bar
var ammoFGMaxWidth : float; //the starting width of the ammo foreground bar
var currentHealth:float; //the current health status
var scale : float = 0.25;
var scaleX : float;
var scaleY : float;
var baseScreenX : float = 1024;
var baseScreenY : float = 768;
var currentAmmo : float;//starting ammo amount
function Start()

{
    startTime = 10.0;
    healthFGMaxWidth = healthFG.width;
    ammoFGMaxWidth = ammoFG.width;
    currentHealth = 100;
    currentAmmo = 100;
    scaleX = Screen.width / baseScreenX * scale;
    scaleY = Screen.height / baseScreenY * scale;

    
}
 //health update
function Update () 
{
    if (Input.GetButtonDown("Fire1"))
    {   
       currentAmmo = currentAmmo - 1;
       
//		if(currentAmmo <= 0)
//		{
//			Application.LoadLevel(Application.loadedLevel);
//		}		
    } 
    
}

//creating the healthbars
function OnGUI()
{
    //this is the width that the foreground bar should be
    var newBarWidth:float = (currentHealth/100) * healthFGMaxWidth;
    var ammoBarWidth:float = (currentAmmo/100)* ammoFGMaxWidth;
 
    Debug.Log("ammo left " + currentAmmo);
    Debug.Log("health left " + currentHealth);
 
    //a spacing variable to help us position the health
    var gap:int = 20;
    
    GUI.BeginGroup(new Rect (gap, Screen.height - healthBG.height*scaleY - gap, healthBG.width*scaleX, healthBG.height*scaleY));
		GUI.DrawTexture(Rect (0,0, healthBG.width*scaleX, healthBG.height*scaleY), healthBG);
       
	       	GUI.BeginGroup(new Rect(0,0, newBarWidth*scaleX, healthFG.height*scaleY));
	         	GUI.DrawTexture(Rect(0,0, healthFG.width*scaleX, healthFG.height*scaleY), healthFG);
	        		
	        		GUI.BeginGroup(new Rect(0,0, ammoBarWidth*scaleX, ammoFG.height*scaleY));
	         			GUI.DrawTexture(Rect(0,0, ammoFG.width*scaleX, ammoFG.height*scaleY), ammoFG);
	        	
		       		GUI.EndGroup();
		       		
		       	GUI.EndGroup();
		 	 
		GUI.EndGroup();
	
}

//function ApplyDamage(damage:float)
//{
//	currentHealth -= damage;
//	return;
//
//}