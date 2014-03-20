var damage : float = 10;

function OnTriggerEnter (otherCollider)
{
	BroadcastMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
}