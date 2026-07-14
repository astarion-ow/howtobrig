const dataMap = {
    brig: {
        health      : 200,
        armor       : 50,
        maxhp       : 250,
        speed       : 5.5,
        regen       : 22.5
    },

    flail: {
        name        : "Rocket Flail",
        desc        : "Melee weapon with extended range.",
        damage      : 45,
        range       : 6/*meters*/
    },

    pack: {
        name        : "Repair Pack",
        desc        : "Heals an ally for a short duration.",
        cooldown    : 5,/*seconds*/
        burst       : 25,
        healing     : 100,
        range       : 25,/*meters*/
        duration    : 2,
        charges     : 3
    },

    whipshot: {
        name        : "Whip Shot",
        desc        : "Launch your flail forward to knock an enemy away from you.",
        cooldown    : 4,/*seconds*/
        damage      : 70,
        range       : 20,/*meters*/
        knockback   : 25,/*meters/second*/
        casttime    : 0.19,/*seconds*/
        recovery    : 0.18,/*seconds*/
        punishpoint : 6,/*meters*/
        recovery2   : 0.3/*seconds*/,
        speedpunish : 50,/*percent reduction*/
        burst       : 12
    },

    shield: {
        name        : "Barrier Shield",
        desc        : "Hold secondary fire to deploy a frontal energy barrier.",
        cooldown    : 5,/*seconds*/
        health      : 300,
        regen       : 85,/*health/second*/
        penalty     : 30
    },

    bash: {
        name        : "Shield Bash",
        desc        : "Available when Barrier Shield is deployed. Dash forward to knock back an enemy.",
        cooldown    : 5,/*seconds*/
        damage      : 70,
        speed       : 400,/*percent*/
        knockback   : 6,/*meters/second*/
        duration    : 0.3/*seconds*/
    },

    inspire: {
        name        : "Inspire",
        desc        : "Dealing damage heals nearby allies.",
        range       : 20,/*meters*/
        burst       : 12,
        healing     : 15,
        duration    : 3,/*seconds*/
        maxhealing  : 45
    },

    rally: {
        name        : "Rally",
        desc        : "Gain armor, empower Barrier Shield, and provide extra health to nearby allies.",
        cost        : 2700,
        speed       : 15,/*percent*/
        armor       : 100,/*self*/
        overhealth  : 15,/*allies*/
        overtick    : 0.5,/*seconds*/
        overmax     : 100,
        overduration: 30,/*seconds*/
        duration    : 10,/*seconds*/
        stunduration: 0.75,/*seconds*/
        radius      : 8/*meters*/
    },

    minor_perk_1: {
        name        : "Combat Medic",
        reduction   : 0.5,
        get desc(){
            return `Melee attacks reduce the cooldown of Repair Pack by ${this.reduction} seconds.`;
        }
    },

    minor_perk_2: {
        name        : "Morale Boost",
        duration    : 3,/*seconds*/
        get desc(){
            return `Inspire lasts ${this.duration} seconds longer when activated by Whip Shot.`;
        }
    },

    major_perk_1: {
        name        : "Inspiring Strike",
        speed       : 30,
        duration    : 2,/*seconds*/
        get desc(){
            return `Shield Bash grants ${this.speed}% increased movement speed for ${this.duration} seconds. Inspire's healing is instant when activated by Shield Bash.`;
        }
    },

    major_perk_2: {
        name        : "Whiplash",
        damage      : 60,
        get desc(){
            return `Whip Shot's knockback can slam enemies into walls, dealing ${this.damage} extra damage.`;
        }
    }
};