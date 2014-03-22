function DisableCamera() {
		GetComponent (Camera).enabled = false;
		GetComponent (AudioListener).enabled = false;
		GetComponent (CarCameraScript).enabled = false;
}