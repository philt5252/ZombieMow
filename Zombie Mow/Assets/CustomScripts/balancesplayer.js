function Update () {

	if(!networkView.isMine) {
	GetComponent(CarControleScript).enabled = false;
	GetComponent(CarControlNitro).enabled = false;
	//GetComponent(MouseLook).enabled = false;
	
	
	this.gameObject.BroadcastMessage("DisableCamera");

}

}