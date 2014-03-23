var location : Vector3;
var newGameObject : GameObject;

function Update () {

	if(!networkView.isMine) 
	{
	
		GetComponent(CarControleScript).enabled = false;
		GetComponent(CarControlNitro).enabled = false;
	
		this.gameObject.BroadcastMessage("DisableCamera");
	}
	else
	{
		if(this.gameObject.rigidbody.position.y < 10)
		{
			//Destroy(gameObject);
			//GetComponent(Camera).rect = Rect ( 0.7, 0.7, 0.25, 0.25);
			//GetComponent(GUILayer).enabled = false;
			//Instantiate(newGameObject, location, Quaternion.identity);
			
			this.transform.position = location;
			this.transform.rotation = Quaternion.identity;
			this.rigidbody.velocity = Vector3.zero;
			this.rigidbody.angularVelocity = Vector3.zero;
			//Network.Instantiate(newGameObject, location, Quaternion.identity, 0);
		}
	}
}