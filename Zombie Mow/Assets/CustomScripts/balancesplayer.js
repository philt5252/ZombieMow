function Update () {

	if(!networkView.isMine) {
	GetComponent(ThirdPersonController).enabled = false;
	GetComponent(ThirdPersonCamera).enabled = false;
//	GetComponent(MouseLook).enabled = false;
	
//	this.gameObject.BroadcastMessage("DisableCamera");

}

}