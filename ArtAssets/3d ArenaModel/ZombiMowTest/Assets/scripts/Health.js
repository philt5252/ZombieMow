/*Health Script*/
 
var healthBG : Texture2D;
var healthFG : Texture2D;
var healthBorder : Texture2D;
var bulletShot : GameObject;
var healthFGMaxWidth : float; //the starting width of the foreground bar
var currentHealth:float;
 
function Start()
{
    startTime = 10.0;
    healthFGMaxWidth = healthFG.width;
    currentHealth = 100;
}
 
//function Update () 
//{
//    if (Collision == bulletShot.collider)
//       currentHealth -= 1;
//}
function OnCollisionEnter(collision : Collision)
{
	if(collision.gameObject.tag == "Respawn")
	{
		currentHealth -= 1;
		return currentHealth;
	}
}

function OnGUI()
{
    //this is the width that the foreground bar should be
    var newBarWidth:float = (currentHealth/100) * healthFGMaxWidth;
 
    Debug.Log("current health " + currentHealth);
 
    //a spacing variable to help us position the health
    var gap:int = 20;
    
  GUI.BeginGroup(new Rect (Screen.width - healthBG.width - gap, 
	       gap, healthBG.width, healthBG.height));
	       GUI.DrawTexture(Rect (0,0, healthBG.width, healthBG.height), healthBG);
	 	
	       GUI.BeginGroup(new Rect(0,0,healthBG.width,healthBorder.height)); 
					GUI.DrawTexture(Rect(0,0,healthBorder.width,healthBorder.height), healthBorder);
	       
	       GUI.BeginGroup(new Rect(0,0, newBarWidth, healthFG.height));
	         GUI.DrawTexture(Rect(0,0, healthFG.width, healthFG.height), healthFG);
	        	
	        	  GUI.BeginGroup(new Rect(0,0,healthBG.width,healthBorder.height)); 
					GUI.DrawTexture(Rect(0,0,healthBorder.width,healthBorder.height), healthBorder);
	         
	       GUI.EndGroup();
	 	 GUI.EndGroup();
	GUI.EndGroup();
}