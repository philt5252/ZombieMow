using UnityEngine;
using System.Collections;

public class FireArrow : MonoBehaviour
{
	public Rigidbody arrowPrefab;
	public Rigidbody firePrefab;
	public AudioClip arrowShot;
	public AudioClip fireShot;
	public Transform barrelEnd;

	private bool powerUp = false;
	

	void Update ()
	{
		if(Input.GetButtonDown("Fire1"))
		{
			CreateArrow();
		
		}
	}
	[RPC]
	void CreateArrow()
	{
		Rigidbody arrowInstance;
		arrowInstance = Instantiate(arrowPrefab, barrelEnd.position, barrelEnd.rotation) as Rigidbody;
		arrowInstance.AddForce(barrelEnd.forward * 5000);
		audio.PlayOneShot(arrowShot);
	}
}