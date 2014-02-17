var PlayerTalksToShopOwner : boolean = false;
var OpenShopGUI : boolean = false;
var Player : GameObject;
var CashAmount : int = 0;
var BackGroundPos : Vector2 = new Vector2(10,10);
var BackGroundSize : Vector2 = new Vector2(10,10);
var ShopContentPos : Vector2 = new Vector2(10,10);
var ShopContentSize : Vector2 = new Vector2(10,10);
var ButtonSize : Vector2 = new Vector2(10,10);
var Button1Pos : Vector2 = new Vector2(10,10);
var Button2Pos : Vector2 = new Vector2(10,10);
var Price1 : int = 100;
var Price2 : int = 200;
var Price3 : int = 300;
var Price4 : int = 400;
function Awake()
{
    if (Player == null)
    {
        //use find with tag or any method you prefere to locate your player
    }
}
 
function Update ()
{
    if (PlayerTalksToShopOwner == true)
    {
        CheckPlayersLevel ();
        OpenShopGUI = true;
    }
}
 
function CheckPlayersMoney()
{
    CashAmount = LVcheck.Money;
}
 
function OnGUI ()
{
    if (OpenShopGUI == true);
    {
        //Draw shop interface, start with the background
        GUI.BeginGroup (new Rect (BackGroundPos.x,BackGroundPos.y,BackGroundSize.x,BackGroundSize.y));
 
        GUI.BeginGroup(new Rect (ShopContentPos.x,ShopContentPos.y,ShopContentSize.x,ShopContentSize.y));
        
            //Draw buttons so that you can buy something
            if (GUI.Button (new Rect (Button1Pos.x,Button1Pos.y,ButtonSize.x,ButtonSize.y)) && CashAmount >= Price1)
            {
                //add item you just bought to inventory
                CheckMoney.Money = CheckMoney.Money - Price1;
            }
            if (GUI.Button (new Rect (Button2Pos.x,Button2Pos.y,ButtonSize.x,ButtonSize.y)) && CashAmount >= Price2)
            {
                //add item you just bought to inventory
                CheckMoney.Money = CheckMoney.Money - Price2;
            }
        
            //Draw buttons so that you can buy something
            if (GUI.Button (new Rect (Button1Pos.x,Button1Pos.y,ButtonSize.x,ButtonSize.y)) && CashAmount >= Price3)
            {
                //add item you just bought to inventory
                CheckMoney.Money = CheckMoney.Money - Price3;
            }
            if (GUI.Button (new Rect (Button2Pos.x,Button2Pos.y,ButtonSize.x,ButtonSize.y)) && CashAmount >= Price4)
            {
                //add item you just bought to inventory
                CheckMoney.Money = CheckMoney.Money - Price4;
            }
        
    }
}