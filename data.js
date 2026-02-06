const dataMap = {
    brig: {
        health: 200,
        armor : 50,
        maxhp : 250,
        speed : 5.5,
        regen : 22.5
    },

    flail: {
        name  : "Rocket Flail",
        desc  : "Melee weapon with extended range.",
        damage: 45,
        range : 6
    },

    pack: {
        name    : "Repair Pack",
        desc    : "Heals an ally for a short duration.",
        cooldown: 5,
        burst   : 25,
        healing : 100,
        range   : 25,
        duration: 2,
        charges : 3
    },

    whipshot: {
        name    : "Whip Shot",
        desc    : "Launch your flail forward to knock an enemy away from you.",
        cooldown: 4,
        damage  : 70,
        range   : 20,
        knockback: 25
    },

    shield: {
        name    : "Barrier Shield",
        desc    : "Hold secondary fire to deploy a frontal energy barrier.",
        cooldown: 5,
        health  : 250,
        regen   : 85,
        penalty : 30
    },

    bash: {
        name    : "Shield Bash",
        desc    : "Available when Barrier Shield is deployed. Dash forward to knock back an enemy.",
        cooldown: 5,
        damage  : 70,
        speed   : 400,
        knockback: 6
    },

    inspire: {
        name    : "Inspire",
        desc    : "Dealing damage heals nearby allies.",
        range   : 20,
        healing : 15,
        duration: 4,
        maxhealing: 60
    },

    rally: {
        name    : "Rally",
        desc    : "Gain armor, empower Barrier Shield, and provide extra health to nearby allies."
    },

    minor_perk_1: {
        name  : "Combat Medic",
        desc  : "Melee attacks reduce the cooldown of Repair Pack by 0.5 seconds."
    },

    minor_perk_2: {
        name  : "Morale Boost",
        desc  : "Inspire lasts 3 seconds longer when activated by Whip Shot."
    },

    major_perk_1: {
        name  : "Inspiring Strike",
        desc  : "Shield Bash grants 30% increased movement speed for 2 seconds. Inspire's healing is instant when activated by Shield Bash."
    },

    major_perk_2: {
        name  : "Whiplash",
        desc  : "Whip Shot's knockback can slam enemies into walls, dealing 50 extra damage."
    }
};