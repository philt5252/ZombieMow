function Update () {

	if(!networkView.isMine) {
	GetComponent(CharacterMotor).enabled = false;
	GetComponent(FPSInputController).enabled = false;
	GetComponent(MouseLook).enabled = false;
	
	
	this.gameObject.BroadcastMessage("DisableCamera");

}

}