using UnityEngine;
using System.Collections;

public class ArrowScript : MonoBehaviour
{
	[RPC]
	void Start()
	{
		Destroy (gameObject, 1.5f);
	}
}