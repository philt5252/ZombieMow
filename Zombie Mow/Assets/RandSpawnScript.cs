using UnityEngine;
using System.Collections;

public class RandSpawnScript : MonoBehaviour {

	private float elapsedTime = 0;
	private float spawnSeconds = 5;
	// Use this for initialization
	void Start () 
	{
	
	}
	
	// Update is called once per frame
	void Update () 
	{
		elapsedTime += Time.deltaTime;

		if (elapsedTime > spawnSeconds*1000) 
		{

		}
		if (Network.connections.Length > 0) 
		{

		}
	}
}
