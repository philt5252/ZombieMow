using UnityEngine;
using System.Collections;

public class RandSpawnScript : MonoBehaviour {

	public GameObject spawnObject;

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

		if (elapsedTime > spawnSeconds) 
		{
			elapsedTime = 0;
			int i = 0;
			Network.Instantiate(spawnObject, new Vector3(105, 25, 132), Quaternion.identity, 0);
		}
		if (Network.connections.Length > 0) 
		{

		}
	}
}
