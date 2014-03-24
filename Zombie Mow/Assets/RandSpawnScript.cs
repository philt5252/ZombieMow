using UnityEngine;
using System.Collections;

public class RandSpawnScript : MonoBehaviour {

	public GameObject spawnObject;
	public float spawnSeconds = 5;
	public Vector3 spawnMinRange;
	public Vector3 spawnMaxRange;
	private float elapsedTime = 0;

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

			float x = Random.Range(spawnMinRange.x, spawnMaxRange.x);
			float z = Random.Range (spawnMinRange.z, spawnMaxRange.z);

			Network.Instantiate(spawnObject, new Vector3(x, 17, z), Quaternion.identity, 0);
		}
		if (Network.connections.Length > 0) 
		{

		}
	}
}
