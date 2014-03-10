/*Health Script*/
 
var healthBG : Texture2D; //health background
var healthFG : Texture2D; //health foreground
var bulletShot : GameObject; //the object that would cause the hp to decrease
var healthFGMaxWidth : float; //the starting width of the foreground bar
var currentHealth:float; //the current health status
var scale : float = 0.25;
var scalex : float;
var scaley : float;
var baseScreenX : float = 1024;
var baseScreenY : float = 768;
function Start()

{
    startTime = 10.0;
    healthFGMaxWidth = healthFG.width;
    currentHealth = 100;
    scalex = Screen.width / baseScreenX * scale;
    scaley = Screen.height / baseScreenY * scale;
//   scalex = scale;
//   scaley = scale;
    
}
 
function Update () 
{
    if (Input.GetButtonDown("Fire1"))
       currentHealth -= 1;
}
//the collision test of the bulletShot
//function OnCollisionEnter(otherCollider)
//{
//	if(collision.gameObject.name == "ShorSphere")
//	{
//		currentHealth -= 1;
//		//return currentHealth;
//	}

//}
//creating the healthbars
function OnGUI()
{
    //this is the width that the foreground bar should be
    var newBarWidth:float = (currentHealth/100) * healthFGMaxWidth;
 
    Debug.Log("current health " + currentHealth);
 
    //a spacing variable to help us position the health
    var gap:int = 20;
    
    GUI.BeginGroup(new Rect (gap, Screen.height - healthBG.height*scaley - gap, healthBG.width*scalex, healthBG.height*scaley));
		GUI.DrawTexture(Rect (0,0, healthBG.width*scalex, healthBG.height*scaley), healthBG);
	 	
		//GUI.BeginGroup(new Rect(0,0,healthBG.width*scalex,healthBorder.height*scaley)); 
			//GUI.DrawTexture(Rect(0,0,healthBorder.width,healthBorder.height), healthBorder);
       
	       	GUI.BeginGroup(new Rect(0,0, newBarWidth*scalex, healthFG.height*scaley));
	         	GUI.DrawTexture(Rect(0,0, healthFG.width*scalex, healthFG.height*scaley), healthFG);
	        	
	        	//GUI.BeginGroup(new Rect(0,0,healthBG.width*scale,healthBorder.height*scale)); 
					//GUI.DrawTexture(Rect(0,0,healthBorder.width*scale,healthBorder.height*scale), healthBorder);
	         
		       	GUI.EndGroup();
		 	 //GUI.EndGroup();
		GUI.EndGroup();
	//GUI.EndGroup();
//GUI.BeginGroup(new Rect (gap, Screen.height - scaley - gap, scalex, scaley));
//		GUI.DrawTexture(Rect (0,0, scalex, scaley), healthBG);
//	 	
//		//GUI.BeginGroup(new Rect(0,0,healthBG.width*scale,healthBorder.height*scale)); 
//			//GUI.DrawTexture(Rect(0,0,healthBorder.width,healthBorder.height), healthBorder);
//       
//	       	GUI.BeginGroup(new Rect(0,0, newBarWidth*scale, healthFG.height*scale));
//	         	GUI.DrawTexture(Rect(0,0, healthFG.width*scale, healthFG.height*scale), healthFG);
//	        	
//	        	//GUI.BeginGroup(new Rect(0,0,healthBG.width*scale,healthBorder.height*scale)); 
//					//GUI.DrawTexture(Rect(0,0,healthBorder.width*scale,healthBorder.height*scale), healthBorder);
//	         
//		       	GUI.EndGroup();
//		 	 //GUI.EndGroup();
//		GUI.EndGroup();
//	//GUI.EndGroup();
}