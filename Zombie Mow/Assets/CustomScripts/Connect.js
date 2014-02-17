var ipAddress : String = "127.0.0.1";
var port : int = 25167;
var maxConnections : int = 10;
var playerGO : GameObject;
var log: String = "";
var myMessage : String = "";
var chatting : boolean = false;



function OnGUI () {
	
	if(Network.peerType == NetworkPeerType.Disconnected) {
		 GUILayout.BeginHorizontal();
		 ipAddress=GUILayout.TextField(ipAddress);
		 GUILayout.Label("IP ADDRESS");
		 GUILayout.EndHorizontal();
		 
		 GUILayout.BeginHorizontal();
		 var tempPort : String; 
		 tempPort = GUILayout.TextField(port.ToString());
		 port = parseInt (tempPort);
		 GUILayout.Label ("PORT");
		 GUILayout.EndHorizontal();
		 
		 if (GUILayout.Button ("CONNECT")) {
		 
		 	print ("connecting...");
		  	Network.Instantiate (playerGO, transform.position, transform.rotation, 0);
		 	Network.Connect (ipAddress, port);
		 	for (var i : GameObject in FindObjectsOfType(GameObject)){
	 			i.BroadcastMessage("OnLoadNetworkLevel", SendMessageOptions.DontRequireReceiver);
	 		}
		 	
		 }
		 
		 if(GUILayout.Button ("START SERVER")){
		 for (var i : GameObject in FindObjectsOfType(GameObject)){
	 			i.BroadcastMessage("OnLoadNetworkLevel", SendMessageOptions.DontRequireReceiver);
	 		}
		 print ("starting server on " + ipAddress + ":" + port.ToString());
		 Network.InitializeServer (maxConnections, port);
		 
	 	}
	 	if(GUILayout.Button("MAIN MENU")){
	 		Application.LoadLevel("Opening");
	 	}
	 }
	 	else {
	 		if(GUILayout.Button("DISCONNECT")){ 		
	 		Network.Disconnect(200);
	 		}
	 		if (Input.GetKeyDown (KeyCode.T)){
	 		chatting = true;
	 }
	 }
	 		if (Input.GetKeyDown (KeyCode.Escape)){
	 		chatting = false;
	 }
	 if (chatting){
	 GUILayout.Label(log);
	 myMessage = GUILayout.TextField(myMessage);
	 
	 if(GUILayout.Button("SEND MESSAGE")){
	 	networkView.RPC("Chat", RPCMode.All, myMessage);
	 	}
	 }
	 
	 
 }


function OnConnectedToServer (){
print("Connected");
OnLoadNetworkLevel();
}

function OnPlayerDisconnected (player : NetworkPlayer){
Network.RemoveRPCs(player);
Network.DestroyPlayerObjects(player);
}
function OnDisconnectedFromServer(){
Application.LoadLevel(Application.loadedLevel);
}

function OnLoadNetworkLevel(){
yield 25;
GetComponent(GUILayer).enabled = false;
if(Network.peerType != NetworkPeerType.Disconnected){

Network.Instantiate(playerGO, transform.position, transform.rotation, 0);
}



}
@RPC
function Chat (input : String){
 log += "\n";
 log += input;
}