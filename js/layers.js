addLayer("p", {
    name: "p", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: zero
    }},
    what(){
        player.p.points = player.points
    },    
    resource: "基本粒子", // Name of prestige currency
    color: "white",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades:{
        11:{
            title:"元素树,启动!",
            description:"开始生产基本粒子",
            effect(){
                let effect = one
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "+"+this.effect()},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            unlocked: true,
        },
        12:{
            title:"加速生产",
            description:"粒子获取+2",
            effect(){
                let effect = two
                if(hasUpgrade("p",33)&&hasUpgrade("p",13)) effect = effect.mul(upgradeEffect("p",13))
                if(hasUpgrade("p",33)&&hasUpgrade("p",14)) effect = effect.mul(upgradeEffect("p",14))
                if(hasUpgrade("p",33)&&hasUpgrade("p",41)) effect = effect.mul(upgradeEffect("p",41))
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "+"+this.effect()},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(5),
            unlocked(){return hasUpgrade("p",11)},
        },
        13:{
            title:"加速生产+",
            description:"粒子获取x2",
            effect(){
                let effect = two
                if(hasUpgrade("p",33)&&hasUpgrade("p",14)) effect = effect.mul(upgradeEffect("p",14))
                if(hasUpgrade("p",33)&&hasUpgrade("p",41)) effect = effect.mul(upgradeEffect("p",41))
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "x"+this.effect()},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(10),
            unlocked(){return hasUpgrade("p",12)},
        },
        14:{
            title:"加速生产++",
            description:"粒子获取x1.5",
            effect(){
                let effect = new Decimal(1.5)
                if(hasUpgrade("p",33)&&hasUpgrade("p",41)) effect = effect.mul(upgradeEffect("p",41))
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "x"+this.effect()},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(130),
            unlocked(){return hasUpgrade("p",13)},
        },
        15:{
            title:"加速粒子加速器",
            description:"粒子加速器1效果改进",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(200),
            unlocked(){return hasUpgrade("p",14)},
        },
        21:{
            title:"粒子加速器",
            description:"解锁一个可购买",
            effect(){
                let effect = one
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "+"+this.effect()},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(30),
            unlocked(){return hasUpgrade("p",13)},
        },
        22:{
            title:"更多粒子加速器",
            description:"粒子加速器1上限加10",
            effect(){
                let effect = ten
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                if(hasUpgrade("p",42)) effect = effect.mul(upgradeEffect("p",42))
                effect = effect.floor()
                return effect
            },
            effectDisplay(){return "+"+this.effect()},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(300),
            unlocked(){return hasUpgrade("p",21)},
        },
        23:{
            title:"粒子粒子",
            description:"粒子增加粒子获取",
            effect(){
                let effect = player.points.add(1.1).log(10)
                if(hasUpgrade("h",23)) effect = player.points.add(10).log(6)
                if(hasUpgrade("he",22)) effect = player.points.add(10).log(2)
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(50000),
            unlocked(){return hasUpgrade("p",22)},
        },
        24:{
            title:"氢加速器",
            description:"氢增加粒子获取",
            effect(){
                let effect = player.h.points.add(1.8).log(3)
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(50000),
            unlocked(){return hasUpgrade("p",23)&&hasUpgrade("h",12)},
        },
        25:{
            title:"扩充粒子加速器",
            description:"粒子加速器2上限+10",
            effect(){
                let effect = n(10)
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(5.24e19),
            unlocked(){return hasUpgrade("he",21)},
        },
        31:{
            title:"翻倍效果",
            description:"前两行所有升级效果x2",
            effect(){
                let effect = two
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(1500),
            unlocked(){return hasUpgrade("p",22)},
        },
        32:{
            title:"这是加速生产+++?",
            description:"粒子获取x1.5",
            effect(){
                let effect = n(1.5)
                
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(5000000),
            unlocked(){return hasUpgrade("p",31)&&hasUpgrade("h",12)},
        },
        33:{
            title:"这才是加速生产+++!",
            description:"带有“加速生产”且其他字符为“+”或数字的升级效果受到比它更多“+”同时数字相同的升级效果",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(15000000),
            unlocked(){return hasUpgrade("p",32)&&hasUpgrade("h",13)},
        },
        34:{
            title:"啊对对对,这是加速生产++++",
            description:"基本粒子获取x10(不变)",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(2.6e21),
            unlocked(){return hasUpgrade("p",25)},
        },
        35:{
            title:"改进粒子加速器",
            description:"改进升级粒子加速器改进的公式(这不是粒子加速器改进)",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(1e24),
            unlocked(){return hasUpgrade("p",34)},
        },
        41:{
            title:"加速生产+++",
            description:"粒子获取x2(这是真的)",
            effect(){
                let effect = n(2)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(7200000),
            unlocked(){return hasUpgrade("p",32)&&hasUpgrade("h",12)},
        },
        42:{
            title:"更多粒子加速器+",
            description:"基于粒子数量增幅升级“更多粒子加速器”效果",
            effect(){
                let effect = player.points.add(1.01).log(100).root(3)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(2.4e12),
            unlocked(){return hasUpgrade("p",33)&&hasUpgrade("h",13)},
        },
        51:{
            title:"粒子加速器改进",
            description:"基于氢数量增加粒子加速器2效果基础",
            effect(){
                let effect = player.h.points.add(10).log(10).root(2).sub(1).div(2)
                if(hasUpgrade("p",35)) effect = player.h.points.add(10).log(8).root(1.8).sub(0.8).div(1.8)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(7.2e12),
            unlocked(){return hasUpgrade("p",42)&&hasUpgrade("h",13)},
        },
    },
    buyables:{
        11: {
            title: "粒子加速器1",
            cost(x) {
                let a = x.add(1).mul(x.div(5).add(1).mul(10))
                if(x.gte(30)) a = x.pow(x.root(2))
                return a
            },
            display() { return "增加基本粒子获取<br>价格：" + format(this.cost()) + "基本粒子<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：" + format(this.effect()) + "x<br>上限数量：" + format(this.purchaseLimit())},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x){
                let a = x.mul(0.16666).add(1)
                if(hasUpgrade("p",15)) a = x.mul(0.6666).add(1)
                if(getBuyableAmount("p",12).gte(1)) a = x.mul(buyableEffect("p",12).add(0.6666))
                return a
            },
            purchaseLimit(){
                let a = ten
                if(hasUpgrade("p",22)) a = a.add(upgradeEffect("p",22))
                if(hasUpgrade("he",21)) a = a.add(upgradeEffect("he",21))
                return a
            },
            unlocked(){return hasUpgrade("p",21)},
        },
        12: {
            title: "粒子加速器2",
            cost(x) {
                let a = x.add(1).mul(x.add(1).mul(1e4))
                if(x.gte(8)) a = x.pow(x)
                return a
            },
            display() { return "增加粒子加速器1基础<br>价格：" + format(this.cost()) + "基本粒子<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：+" + format(this.effect()) + "<br>上限数量：" + format(this.purchaseLimit())},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x){
                let a = x.mul(0.16666)
                if(hasUpgrade("p",51)) a = x.mul(n(0.16666).add(upgradeEffect("p",51)))
                return a
            },
            purchaseLimit(){
                let a = eight
                if(hasUpgrade("p",25)) a = a.add(upgradeEffect("p",25))
                return a
            },
            unlocked(){return hasUpgrade("p",21)&&hasUpgrade("p",31)},
        },
    },
})
/*
/////
/hhh/
/hhh/
/hhh/
/hhhhhhhhhh/
/hhhhhhhhhhh/
/hhh/   /hhh/
/hhh/   /hhh/
/hhh/   /hhh/
/hhh/   /hhh/
*/
addLayer("h", {
    name: "h", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "H", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        balloon: new Decimal(0),
        power: new Decimal(0),
		points: new Decimal(0),
        balloonMax: new Decimal(0),
        upTime: new Decimal(0),
        keepUpTime: true,
        upgradeAutobuy: true,
    }},
    color: "#7CDCF0",
    requires: new Decimal(2e6), // Can be a function that takes requirement increases into account
    resource: "氢", // Name of prestige currency
    baseResource: "基本粒子", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = one
        if(hasUpgrade("h",22)) mult = mult.mul(upgradeEffect("h",22))
        if(hasUpgrade("h",13)) mult = mult.mul(upgradeEffect("h",13))
        if(hasUpgrade("h",14)) mult = mult.mul(upgradeEffect("h",14))
        if(hasUpgrade("h",31)) mult = mult.mul(upgradeEffect("h",31))
        if(hasUpgrade("he",11)) mult = mult.mul(upgradeEffect("he",11))
        if(hasMilestone("h",0)) mult = mult.mul(layers.h.balloonBoostH())
        if(player.li.unlocked) mult = mult.mul(layers.li.LiboostH())
        if(player.h.upTime.gt(0)) mult = mult.mul(layers.h.boomedBalloonBoostH())
        if(getBuyableAmount("he",12).gte(1)) mult = mult.mul(buyableEffect("he",12))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = one
        return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "h", description: "H: 进行氢重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    passiveGeneration() { 
        let a = new Decimal(0)
        if(hasUpgrade("h",44)) a = upgradeEffect("h",44).div(100)
        if(hasMilestone("li",2)&&player.h.upgradeAutobuy) a = a.max(0.01)
        return a
     },
    upgrades:{
        11:{
            title:"氢原子",
            description:"基本粒子获取基于氢提升(为0有效)",
            effect(){
                let effect = one.add(player.h.points.add(1).mul(10).log(10))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(1),
            unlocked(){return player.h.unlocked},
        },
        12:{
            title:"氢原子核",
            description:"解锁更多基本粒子升级与另一类氢升级，基本粒子获取x1.1",
            effect(){
                let effect = n(1.1)
                if(hasUpgrade("h",24)) effect = effect.mul(1.1)
                if(hasUpgrade("h",43)) effect = effect.mul(10)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(2),
            unlocked(){return (hasUpgrade("h",11))},
        },   
        13:{
            title:"氘原子",
            description:"解锁更多基本粒子升级，氢获取x1.1",
            effect(){
                let effect = n(1.1)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(10),
            unlocked(){return (hasUpgrade("h",12))&&hasUpgrade("h",23)},
        },     
        14:{
            title:"氚原子",
            description:"氢数量增幅氢获取",
            effect(){
                let effect = player.h.points.add(10).log(10).root(1.4)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(3000),
            unlocked(){return (hasUpgrade("h",13))&&hasUpgrade("h",23)},
        },     
        21:{
            title:"氢核外电子#1",
            description:"基本粒子获取x1.1",//懒得想升级效果是这样的←
            effect(){
                let effect = n(1.1)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(5),
            unlocked(){return (hasUpgrade("h",12))},
        },
        22:{
            title:"氢质子#1",
            description:"氢获取x1.1",
            effect(){
                let effect = n(1.1)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(5),
            unlocked(){return (hasUpgrade("h",21))},
        },
        23:{
            title:"氢中子#1,2",
            description:"在第一行解锁更多氢升级，升级“粒子粒子”公式改进",//uwu
            cost: new Decimal(10),
            unlocked(){return (hasUpgrade("h",22))},
        },
        24:{
            title:"氢气球",
            description:"解锁氢气球，“氢原子核”效果x1.1(不变)",
            cost: new Decimal(1e5),
            unlocked(){return (hasUpgrade("h",14))&&hasUpgrade("p",51)},
        },       
        31:{
            title:"H₂(氢气分子)",
            description:"氢获取基于氢能提升",
            effect(){
                let effect = player.h.power.add(1).root(4)
                if(effect.gte(10)) effect = effect.div(9).log(4).add(9)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(2),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasMilestone("h",0))},
        },       
        32:{
            title:"H+(氢离子)",
            description:"氢能获取基于气球提升",
            effect(){
                let effect = player.h.balloon.add(1)
                if(effect.gte(10)) effect = effect.div(10).log(2).add(10)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(3),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasUpgrade("h",31))},
        }, 
        33:{
            title:"H-(氢负离子)",
            description:"氢能获取基于氢能提升",
            effect(){
                let effect = player.h.power.add(1).root(5)
                if(effect.gte(10)) effect = effect.div(9).log(5).add(9)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(4),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasUpgrade("h",32))},
        },
        34:{
            title:"H up(氢提升)",
            description:"气球提升氢获取公式改进",
            cost: new Decimal(5),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasUpgrade("h",33))},
        },
        41:{
            title:"爆炸!",
            description:"解锁气球爆炸",
            cost: new Decimal(5e9),
            unlocked(){return player.he.unlocked},
        },
        42:{
            title:"更强的爆炸!",
            description:"爆炸提升的持续时间加强爆炸提升的效果,爆炸效果持续时间+20s",
            effect(){
                let effect = n(20)
                return effect
            },
            effectDisplay(){return "+"+formatTime(this.effect())},
            cost: new Decimal(7),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasUpgrade("h",41))},
        },
        43:{
            title:"新的气球",
            description:"解锁氦气球，“氢原子核”效果x10(不变)",
            cost: new Decimal(11),
            unlocked(){return (hasUpgrade("h",42))},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
        },    
        44:{
            title:"转移中心",
            description:"解锁氦层更多升级，每秒自动获取重置时的1%氢",
            effect(){
                let effect = one
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())+"%"},
            cost: new Decimal(14),
            unlocked(){return (hasUpgrade("h",43))},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
        },    
    },
    milestones:{
        0:{
            requirementDescription: "1个气球",
            effectDescription: "氢能获取x5,氢获取基于气球而增加,解锁新的氢升级",
            done(){return player.h.balloon.gte(1)},
            unlocked: true,
        },
        1:{
            requirementDescription: "6个气球",
            effectDescription: "解锁新层级",
            done(){return player.h.balloon.gte(6)},
            unlocked(){return player.h.balloonMax.gte(4)||hasMilestone("h",1)},
        },
        2:{
            requirementDescription: "9个气球&1.5e9氢能",
            effectDescription: "解锁氦层可购买",
            done(){return player.h.balloon.gte(9)&&player.h.power.gte(1.5e9)},
            unlocked(){return player.he.unlocked},
        },
        3:{
            requirementDescription: "10个氦气球",
            effectDescription: "基本粒子获取基于氦气球而增加",
            done(){return player.he.balloon.gte(10)},
            unlocked(){return hasUpgrade("h",43)},
        },
        4:{
            requirementDescription: "14个氦气球&15氦",
            effectDescription: "解锁爆炸氦气球",
            done(){return player.he.balloon.gte(14)&&player.he.points.gte(15)},
            unlocked(){return hasMilestone("h",3)},
        },
    },
    clickables:{
        11:{
            title:"将氢转化成氢能",
            display() {return "将你50%的氢转化成氢能<br>当前转化获取量:" + format(layers.h.HpowerGet()) + "<br>(下限转化12500氢)"},
            unlocked() {return true},
            canClick() {return player.h.points.gte(25000)},
            onClick() {
                player.h.power = player.h.power.add(layers.h.HpowerGet())
                player.h.points = player.h.points.div(2)
            },
        },
        12:{
            title:"将氢能输入进气球",
            display() {return "将你100%的氢能转化成气球(批量)<br>转化后气球数量:" + format(player.h.power.add(1).log(10).sub(2).floor().max(0)) + "下一个气球:" + format(ten.pow(player.h.power.add(1).log(10).sub(2).floor().add(3))) + "氢能<br>(购买项制)"},
            unlocked() {return true},
            canClick() {return player.h.power.gte(ten.pow(player.h.balloon.add(3)))},
            onClick() {
                player.h.balloon = player.h.power.add(1).log(10).sub(2).floor()
                if(player.h.balloonMax.lt(player.h.power.add(1).log(10).sub(2).floor())) player.h.balloonMax = player.h.power.add(1).log(10).sub(2).floor()
                player.h.power = zero
            },
        },
        13:{
            title:"将氦输入进气球",
            display() {return "将你100%的氦转化成氦气球(批量)<br>转化后氦气球数量:" + format(player.he.points) + "下一个氦气球:" + format(player.he.points.add(1)) + "氦<br>(购买项制)"},
            unlocked() {return hasUpgrade("h",43)},
            canClick() {return player.he.points.gte(player.he.balloon.add(1))},
            style() { return { 'background-color': this.canClick()?"#DDDDDD":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#000000",'border-radius': "30px", height: "120px", width: "120px" } },
            onClick() {
                player.he.balloon = player.he.points
                if(!hasUpgrade("he",31)) player.he.points = zero
            },
        },
        21:{
            title:"爆炸气球!",
            display() {return "将你50%(向下取整)的气球爆炸!<br>爆炸带来的影响:氢能获取x" + format(layers.h.boomedBalloonBoostHpower()) + ",氢获取x" + format(layers.h.boomedBalloonBoostH()) + ",<br>持续时间:" + formatTime(player.h.upTime) + "<br>爆炸后增加持续时间:<br>" + formatTime(layers.h.addUpTime()) + "<br>上限持续时间:" + formatTime(layers.h.boomedBalloonBoostLimitTime())},            
            canClick() {return player.h.balloon.gte(2)},
            onClick() {
                player.h.upTime = player.h.upTime.add(layers.h.addUpTime())
                player.h.balloon = player.h.balloon.sub(player.h.balloon.div(2).floor())               
            },
            unlocked() {return hasUpgrade("h",41)},
        },
        22:{
            title:"爆炸氦气球!",
            display() {return "将你50%(向下取整)的气球爆炸!<br>爆炸带来的影响:氢能获取x" + format(layers.he.boomedBalloonBoostHpower()) + ",基本粒子获取x" + format(layers.he.boomedBalloonBoostPoints()) + ",<br>持续时间:" + formatTime(player.he.upTime) + "<br>爆炸后增加持续时间:<br>" + formatTime(layers.he.addUpTime()) + "<br>上限持续时间:" + formatTime(layers.he.boomedBalloonBoostLimitTime())},            
            canClick() {return player.he.balloon.gte(2)},
            style() { return { 'background-color': this.canClick()?"#EEEEEE":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#000000",'border-radius': "30px", height: "130px", width: "120px" } },
            onClick() {
                player.he.upTime = player.he.upTime.add(layers.he.addUpTime())
                 player.he.balloon = player.he.balloon.sub(player.he.balloon.div(2).floor())               
            },
            unlocked() {return hasMilestone("h",4)},
        },
    },
    update(diff){
        if(player.h.upTime.gt(0)) player.h.upTime = player.h.upTime.sub(diff)
        if(player.h.upTime.lt(0)) player.h.upTime = zero
        if(player.h.upTime.gt(layers.h.boomedBalloonBoostLimitTime())) player.h.upTime = layers.h.boomedBalloonBoostLimitTime()
        if(player.he.upTime.gt(0)) player.he.upTime = player.he.upTime.sub(diff)
        if(player.he.upTime.lt(0)) player.he.upTime = zero
        if(player.he.upTime.gt(layers.he.boomedBalloonBoostLimitTime())) player.he.upTime = layers.he.boomedBalloonBoostLimitTime()
        if(player.h.keepUpTime&&hasMilestone("li",1)) player.h.upTime = layers.h.boomedBalloonBoostLimitTime()
        if(player.he.keepUpTime&&hasMilestone("li",4)) player.he.upTime = layers.he.boomedBalloonBoostLimitTime()
        if(player.h.upgradeAutobuy&&hasMilestone("li",2)){
            buyUpgrade("h",11);buyUpgrade("h",12);buyUpgrade("h",13);buyUpgrade("h",14);buyUpgrade("h",21);buyUpgrade("h",22);buyUpgrade("h",23);buyUpgrade("h",24);buyUpgrade("h",31);buyUpgrade("h",32);buyUpgrade("h",33);buyUpgrade("h",34);buyUpgrade("h",41);buyUpgrade("h",42);buyUpgrade("h",43);buyUpgrade("h",44)
        }
        if(player.he.upgradeAutobuy&&hasMilestone("li",3)){
            buyUpgrade("he",11);buyUpgrade("he",12);buyUpgrade("he",21);buyUpgrade("he",22);buyUpgrade("he",23);buyUpgrade("he",24);buyUpgrade("he",31);buyUpgrade("he",32);buyUpgrade("he",33);buyUpgrade("he",34);
        } 
    },
    balloonBoostH(){
        let mult = player.h.balloon.add(1).pow(2)
        if(hasUpgrade("h",34)) mult = player.h.balloon.add(1).pow(3)        
        return mult
    },
    HpowerGet(){
        let get = player.h.points.div(2).root(2)
        if(hasMilestone("h",0)) get = get.mul(5)
        if(hasUpgrade("h",32)) get = get.mul(upgradeEffect("h",32))
        if(hasUpgrade("h",33)) get = get.mul(upgradeEffect("h",33))
        if(getBuyableAmount("he",11).gte(1)) get = get.mul(buyableEffect("he",11))
        if(player.h.upTime.gt(0)) get = get.mul(layers.h.boomedBalloonBoostHpower())
        if(player.he.upTime.gt(0)) get = get.mul(layers.he.boomedBalloonBoostHpower())
        if(player.li.unlocked) get = get.mul(layers.li.LiboostHpower())
        return get
    },
    addUpTime(){
        let t = player.h.balloon.div(2).floor().mul(10)
        return t
    },
    boomedBalloonBoostH(){
        let mult = four
        if(hasUpgrade("h",42)) mult = mult.mul(player.h.upTime.root(2).add(1))
        return mult
    },  
    boomedBalloonBoostHpower(){
        let mult = five
        if(hasUpgrade("h",42)) mult = mult.mul(player.h.upTime.root(3).add(1))
        return mult
    }, 
    boomedBalloonBoostLimitTime(){
        let t = n(30)
        if(hasUpgrade("h",42)) t = t.add(upgradeEffect("h",42))
        return t
    },
    tabFormat: { 
        "homepage": {   
            content: [
                "main-display",
                "prestige-button",                
                ["display-text",
                    function(){return "你有 "+format(player.points)+" 基本粒子"}],
                "blank",["upgrades",[1,2,3,4]]
            ],
            unlocked(){return hasUpgrade("h",24)||player.li.unlocked}
        },
        "balloon":{
            content: [
                "main-display",
                "prestige-button",                
                ["display-text",
                    function(){return "你有 "+format(player.points)+" 基本粒子"}],
                "blank",["clickables",[1]],
                ["display-text",function(){return "你有 "+format(player.h.power)+" 氢能"}],
                ["display-text",function(){
                    let a = "你有 "+format(player.h.balloon)+" 气球"
                    let b = "" 
                    if(hasMilestone("h",0)) b = ",气球增幅氢获取" + format(layers.h.balloonBoostH()) + "x"
                    return a + b}],["display-text",function(){
                        let a = ""
                        let b = ""
                        if(hasUpgrade("h",43)) a = "你有 "+format(player.he.balloon)+" 氦气球"
                        if(hasMilestone("h",3)) b = ",氦气球增幅基本粒子获取" + format(layers.he.balloonBoostPoints()) + "x"
                        return a + b}],
                    ["clickables",[2]],
                "milestones",
            ],
            unlocked(){return hasUpgrade("h",24)}
        },
    }, 
})
/*
/////
/hhh/
/hhh/
/hhh/
/hhhhhhhhhh/      eeeeee
/hhhhhhhhhhh/    e      e
/hhh/   /hhh/    Celeste    uwu
/hhh/   /hhh/    e           去玩Celeste!
/hhh/   /hhh/    e      e
/hhh/   /hhh/     eeeeee
*/
addLayer("he", {
    name: "he",
    symbol: "He",
    position: 1,
    branches: ["h"],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        balloon: new Decimal(0),
        upTime: new Decimal(0),
        autoReset: true,
        upgradeAutobuy: true,
        keepUpTime: true,
    }},
    color: "#EEEEEE",
    requires: new Decimal("e14"),
    resource: "氦",
    baseResource: "基本粒子",
    baseAmount() {return player.points},
    type: "static",
    exponent: 1,
    gainMult() {
        mult = one
        if(player.li.unlocked) mult = mult.div(layers.li.LidivHecost())
        return mult
    },
    gainExp() {
        exp = one
        return exp
    },
    row: 0,
    hotkeys: [
        {key: "e", description: "E: 进行氦重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone("h",1)||player.he.unlocked},
    canBuyMax(){return hasUpgrade("he",31)||hasMilestone("li",3)},
    autoPrestige() {return hasMilestone("li",0)&&player.he.autoReset},
    resetsNothing() {return hasMilestone("li",0)},
    upgrades:{
        11:{
            title:"氦原子",
            description:"氢获取基于氦而提升",
            effect(){
                let effect = player.he.points.add(1).pow(2)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(1),
            unlocked(){return player.he.unlocked},
        },
        12:{
            title:"氦原子核",
            description:"基本粒子获取基于氦而提升",
            effect(){
                let effect = player.he.points.add(1)
                if(effect.gt(10)) effect = effect.div(10).root(2).add(10)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(3),
            unlocked(){return player.he.unlocked},
        },
        21:{
            title:"氦电子#1",
            description:"增加更多基本粒子升级,购买项粒子加速器1上限+50",
            effect(){
                let effect = n(50)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(19),
            unlocked(){return hasUpgrade("h",44)},
        },
        22:{
            title:"氦电子#2",
            description:"基本粒子获取x8,升级粒子粒子公式再次改进",
            effect(){
                let effect = n(8)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(21),
            unlocked(){return hasUpgrade("he",21)},
        },
        23:{
            title:"氦质子#1",
            description:"基本粒子获取同时受到可购买氦-3的效果",
            cost: new Decimal(30),
            unlocked(){return hasUpgrade("he",22)},
        },
        24:{
            title:"氦质子#2",
            description:"基本粒子获取也同时受到可购买氦-4的效果",
            cost: new Decimal(35),
            unlocked(){return hasUpgrade("he",23)},
        },
        31:{
            title:"氦中子#1",
            description:"氦气球转化不消耗氦,最大重置氦",
            cost: new Decimal(46),
            unlocked(){return hasUpgrade("he",24)},
        },
        32:{
            title:"氦中子#2",
            description:"爆炸氦气球效果的持续时间越高,效果越强,上限持续时间+1m",
            effect(){
                let effect = n(60)
                return effect
            },
            effectDisplay(){return "+"+formatTime(this.effect())},
            cost: new Decimal(47),
            unlocked(){return hasUpgrade("he",31)},
        },
        33:{
            title:"氦-3 +",
            description:"氦-3效果公式改进",
            cost: new Decimal(51),
            unlocked(){return hasUpgrade("he",32)},
        },
        34:{
            title:"氦-4 +",
            description:"氦-4效果公式改进",
            cost: new Decimal(54),
            unlocked(){return hasUpgrade("he",33)},
        },
    },
    buyables:{
        11:{
            title: "氦-3",
            cost(x) {
                let a = x.pow(2).add(1).floor()
                return a
            },
            display() { return "增加氢能获取<br>价格：" + format(this.cost()) + "氦(不消耗)<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：" + format(this.effect()) + "x<br>上限数量：" + format(this.purchaseLimit())},
            canAfford() { return player.he.points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x){
                let a = x.add(1)
                if(hasUpgrade("he",33)) a = a.pow(1.5)
                return a
            },
            purchaseLimit(){
                let a = n(100)
                return a
            },
            unlocked(){return hasMilestone("h",2)},
        },
        12:{
            title: "氦-4",
            cost(x) {
                let a = x.add(1)
                if(x.gte(35)) a = x.pow(1.03).add(1).floor()
                return a
            },
            display() { return "增加氢获取<br>价格：" + format(this.cost()) + "氦(不消耗)<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：" + format(this.effect()) + "x<br>上限数量：" + format(this.purchaseLimit())},
            canAfford() { return player.he.points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x){
                let a = x.pow(2).add(1)
                if(hasUpgrade("he",34)) a = x.pow(2).add(x.mul(50).add(1))
                return a
            },
            purchaseLimit(){
                let a = n(100)
                return a
            },
            unlocked(){return hasMilestone("h",2)},
        },
    },
    balloonBoostPoints(){
        let mult = player.he.balloon.add(1)
        return mult
    },
    addUpTime(){
        let t = player.he.balloon.div(2).floor().mul(10)
        return t
    },
    boomedBalloonBoostPoints(){
        let mult = ten
        if(hasUpgrade("he",32)) mult = mult.mul(player.he.upTime.root(2).add(1))
        return mult
    },  
    boomedBalloonBoostHpower(){
        let mult = n(15)
        if(hasUpgrade("he",32)) mult = mult.mul(player.he.upTime.root(3).add(1))
        return mult
    }, 
    boomedBalloonBoostLimitTime(){
        let t = n(70)
        if(hasUpgrade("he",32)) t = t.add(upgradeEffect("he",32))
        return t
    },
    tabFormat: { 
        "homepage": {   
            content: [
                "main-display",
                "prestige-button",   
                ["display-text",
                    function(){return "你有 "+format(player.points)+" 基本粒子"}],
                "blank","buyables",["upgrades",[1,2,3]]
            ],
            unlocked(){return false}
        },
    }, 
})
/*
ll
ll
ll               i1
ll
ll               ii           锂P锂E锂I锂T锂
ll               ii
lllllllllll      ii
*/
addLayer("li", {
    name: "li",
    symbol: "Li",
    position: 1,
    branches: ["h"],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#DDDDDD",
    requires: new Decimal("e27"),
    resource: "锂",
    baseResource: "氢",
    baseAmount() {return player.h.points},
    type: "static",
    exponent: 1.8,
    gainMult() {
        mult = one
        return mult
    },
    gainExp() {
        exp = one
        return exp
    },
    row: 1,
    hotkeys: [
        {key: "l", description: "L: 进行锂重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("he",34)||player.li.unlocked},
    upgrades:{
        11:{
            title:"锂原子",
            description:"基本粒子获取x100",
            effect(){
                let effect = n(100)
                if(hasUpgrade("li",12)) effect = effect.mul(upgradeEffect("li",12))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(1),
            unlocked(){return player.li.unlocked},
        },
        12:{
            title:"锂原子核",
            description:"锂原子效果x5",
            effect(){
                let effect = n(5)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(3),
            unlocked(){return player.li.unlocked},
        },
    },
    milestones:{
        0:{
            requirementDescription: "1锂&锂原子",
            effectDescription: "自动重置氦,氦不再重置任何东西",
            done(){return player.li.points.gte(1)&&hasUpgrade("li",11)},
            unlocked(){return player.li.unlocked},
            toggles: [["he", "autoReset"]],
        },
        1:{
            requirementDescription: "2锂",
            effectDescription: "爆炸氢气球的时间一直为最大值",
            done(){return player.li.points.gte(2)&&this.unlocked()},
            unlocked(){return hasMilestone("li",0)},
            toggles: [["h", "keepUpTime"]],
        },
        2:{
            requirementDescription: "3锂",
            effectDescription: "自动购买现阶段解锁的氢升级,初始状态下每秒自动获取1%的氢",
            done(){return player.li.points.gte(3)},
            unlocked(){return hasMilestone("li",1)},
            toggles: [["h", "upgradeAutobuy"]],
        },
        3:{
            requirementDescription: "4锂",
            effectDescription: "初始状态下最大重置氦,自动购买现阶段解锁的氦升级",
            done(){return player.li.points.gte(4)},
            unlocked(){return hasMilestone("li",2)},
            toggles: [["he", "upgradeAutobuy"]],
        },
        4:{
            requirementDescription: "5锂",
            effectDescription: "爆炸氦气球的时间一直为最大值,在氦层添加新的东西(会被锂重置)",
            done(){return player.li.points.gte(5)},
            unlocked(){return hasMilestone("li",3)},
            toggles: [["he", "keepUpTime"]],
        },
    },
    LiboostH(){
        let mult = player.li.points.pow(2).add(1)
        return mult
    }, 
    LiboostHpower(){
        let mult = player.li.points.add(1)
        return mult
    }, 
    LidivHecost(){
        let divt = player.li.points.pow(1.5).add(1)
        return divt
    },
    tabFormat:{
        "homepage": {   
            content: [
                "main-display",
                "prestige-button",   
                ["display-text",function(){return "你有 "+format(player.h.points)+" 氢"}],
                ["display-text",function(){return "你的锂加成氢获取"+format(layers.li.LiboostH())+"x;加成氢能获取"+format(layers.li.LiboostHpower())+"x;降低氦的价格/"+format(layers.li.LidivHecost())}],
                "blank",["upgrades",[1]]
            ],
            unlocked(){return player.li.unlocked}
        },
        "milestones": {
            content: [
                "main-display",
                "prestige-button",
                "blank","milestones"
            ],
            unlocked(){return player.li.unlocked}
        },
    },
})
addLayer("a", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "11",
            image: "成就图标/成就_11.png",
            done() {return player.points.gte(1e5)}, 
            doneTooltip: "获得100000基本粒子", 
            style() { return { 'background-color': hasAchievement("a",11)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "100px", width: "100px" } },
            unlocked: true
        },
        12: {
            name: "12",
            image: "成就图标/成就_12.png",
            done() {return player.h.points.gte(1e5)}, 
            doneTooltip: "获得100000氢", 
            style() { return { 'background-color': hasAchievement("a",12)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "100px", width: "100px" } },
            unlocked: true
        },
        13: {
            name: "13",
            image: "成就图标/成就_13.png",
            done() {return player.h.balloon.gte(6)}, 
            doneTooltip: "获得6气球", 
            style() { return { 'background-color': hasAchievement("a",13)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "100px", width: "100px" } },
            unlocked: true
        },
        14: {
            name: "14",
            image: "成就图标/成就_14.png",
            done() {return player.he.points.gte(56)}, 
            doneTooltip: "获得56氦", 
            style() { return { 'background-color': hasAchievement("a",14)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "100px", width: "100px" } },
            unlocked: true
        },
    },
    tabFormat: ["achievements",["display-text",function(){
        return "成就实际上不需要完成,成就没有任何提示文本,但你可以通过图片提示来完成!<br>在完成该成就后,提示文本将给出!<br>其实,有些成就会给出奖励,但与游戏主体没有太大关系"
    }]],
},
)


  

