let modInfo = {
	name: "The-Periodic-Incremental-Tree",
	id: "yrrightbutthisisliustree",
	author: "liu",
	pointsName: "基本粒子",
	modFiles: ["layers.js", "tree.js","someUsefulFunctions_QwQe308.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal(0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.2.alpha",
	name: "第二周期更新开发版",
}

let changelog = `<h1>更新日志:</h1><br>
	<h3>v0.1.3</h3><br>
		- 修复了购买项有时能买却不能买的bug<br>
		- 增加更多游戏内容<br>
	<h3>v0.1</h3><br>
		- 增加氢层一些东西<br>
		- 增加氦层<br>
	<h3>v0.0</h3><br>
		- 增加基本粒子层与2buyable与9upgrade<br>
		- 增加氢层`

let winText = `恭喜！你 >暂时< 通关了！`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	if(!hasUpgrade("p",11))
		return false
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = zero
	if(hasUpgrade("p",11)) gain = gain.add(upgradeEffect("p",11))
	if(hasUpgrade("p",12)) gain = gain.add(upgradeEffect("p",12))
	if(hasUpgrade("p",13)) gain = gain.mul(upgradeEffect("p",13))
	if(hasUpgrade("p",14)) gain = gain.mul(upgradeEffect("p",14))
	if(hasUpgrade("p",23)) gain = gain.mul(upgradeEffect("p",23))
	if(hasUpgrade("p",24)) gain = gain.mul(upgradeEffect("p",24))
	if(hasUpgrade("p",32)) gain = gain.mul(upgradeEffect("p",32))
	if(hasUpgrade("p",34)) gain = gain.mul(10)
	if(hasUpgrade("h",11)) gain = gain.mul(upgradeEffect("h",11))
	if(hasUpgrade("h",12)) gain = gain.mul(upgradeEffect("h",12))
	if(hasUpgrade("h",21)) gain = gain.mul(upgradeEffect("h",21))
	if(hasUpgrade("he",12)) gain = gain.mul(upgradeEffect("he",12))
	if(hasUpgrade("he",22)) gain = gain.mul(upgradeEffect("he",22))
	if(hasUpgrade("li",11)) gain = gain.mul(upgradeEffect("li",11))
	if(hasUpgrade("he",23)) gain = gain.mul(buyableEffect("he",11))
	if(hasUpgrade("he",24)) gain = gain.mul(buyableEffect("he",12))
	if(getBuyableAmount("p",11).gte(1)) gain = gain.mul(buyableEffect("p",11))
	if(hasMilestone("h",3)) gain = gain.mul(layers.he.balloonBoostPoints())
	if(player.he.upTime.gt(0)) gain = gain.mul(layers.he.boomedBalloonBoostPoints())
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.he.points.gte(56) 
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}