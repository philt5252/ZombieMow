function Update () {

	if(!networkView.isMine) {
	gameObject.GetComponent(ThirdPersonController).enabled = false;
	gameObject.GetComponent(ThirdPersonCamera).enabled = false;
//	GetComponent(MouseLook).enabled = false;
	
//	this.gameObject.BroadcastMessage("DisableCamera");

}

}