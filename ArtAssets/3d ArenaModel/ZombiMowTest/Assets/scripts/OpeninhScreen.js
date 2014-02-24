var mainmenuSkin : GUISkin;
var areaWidth : float;
var areaHeight: float;

function OnGUI()
{
	GUI.skin = mainmenuSkin;
	var ScreenX = ((Screen.width *0.5) - (areaWidth *0.5));
	var ScreenY = ((Screen.height * 0.5)-(areaHeight * 0.5));
	
	GUILayout.BeginArea(Rect(ScreenX, ScreenY, areaWidth, areaHeight));
	
	if(GUILayout.Button("START GAME"))
	{
		Application.LoadLevel("GameTest");
	}
	if(GUILayout.Button("SERVER TEST"))
	{
		Application.LoadLevel("NetworkTest");	
	}
	if(GUILayout.Button("QUIT"))
	{
		Application.Quit();
	}
	GUILayout.EndArea();
}
