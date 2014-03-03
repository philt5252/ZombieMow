var damage = 10;

function OnCollisionEnter (collisionInfo)
{
	collisionInfo.other.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
}