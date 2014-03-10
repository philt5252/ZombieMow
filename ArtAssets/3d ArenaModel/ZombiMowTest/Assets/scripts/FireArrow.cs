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
	
	[RPC]
	void Update ()
	{
		if(Input.GetButtonDown("Fire1"))
		{
			if(powerUp)
			{
				Rigidbody fireInstance;
				fireInstance = Instantiate(firePrefab, barrelEnd.position, barrelEnd.rotation) as Rigidbody;
				fireInstance.AddForce(barrelEnd.forward * 5000);
				audio.PlayOneShot(fireShot);
			}

			else
			{
				Rigidbody arrowInstance;
				arrowInstance = Instantiate(arrowPrefab, barrelEnd.position, barrelEnd.rotation) as Rigidbody;
				arrowInstance.AddForce(barrelEnd.forward * 5000);
				audio.PlayOneShot(arrowShot);
			}
		}
	}
}