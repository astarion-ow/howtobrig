let activeDiv = null;
let index = 0;
var data;

function getTooltip(a){
    if (a == "flail"){
        return `
            <span class="tooltip-name">${data.name}</span>
            <span class="tooltip-desc">${data.desc}</span>
            <hr>
            <div class="tooltip-data-tbl">
            <span class="tooltip-property">Damage: </span>${data.damage}
            <span class="tooltip-property">Range: </span>${data.range}
            </div>
            `
    } else if (a == "pack") {
        return `
            <span class="tooltip-name">${data.name}</span>
            <span class="tooltip-desc">${data.desc}</span>
            <hr>
            <div class="tooltip-data-tbl">
            <span class="tooltip-property">Instant Healing: </span>${data.burst}
            <span class="tooltip-property">Total Healing Over Time: </span>${data.healing}
            <span class="tooltip-property">Duration: </span>${data.duration} seconds
            <span class="tooltip-property">Range: </span>${data.range} meters
            <span class="tooltip-property">Cooldown: </span>${data.cooldown} seconds
            <span class="tooltip-property">Charges: </span>${data.charges}
            </div>
            `
    } else if (a == "whipshot") {
        return `
            <span class="tooltip-name">${data.name}</span>
            <span class="tooltip-desc">${data.desc}</span>
            <hr>
            <div class="tooltip-data-tbl">
            <span class="tooltip-property">Damage: </span>${data.damage}
            <span class="tooltip-property">Range: </span>${data.range}
            <span class="tooltip-property">Knockback: </span>${data.knockback} meters per second
            <span class="tooltip-property">Cooldown: </span>${data.cooldown} seconds
            </div>
            `
    } else if (a == "shield") {
        return `
            <span class="tooltip-name">${data.name}</span>
            <span class="tooltip-desc">${data.desc}</span>
            <hr>
            <div class="tooltip-data-tbl">
            <span class="tooltip-property">Barrier Health: </span>${data.health}
            <span class="tooltip-property">Barrier Recharge Rate: </span>${data.regen} per second
            <span class="tooltip-property">Movement Speed Penalty: </span>-${data.penalty}% movement speed
            <span class="tooltip-property">Cooldown: </span>${data.cooldown} seconds
            </div>
            `
    } else if (a == "bash") {
        return `
            <span class="tooltip-name">${data.name}</span>
            <span class="tooltip-desc">${data.desc}</span>
            <hr>
            <div class="tooltip-data-tbl">
            <span class="tooltip-property">Damage: </span>${data.damage}
            <span class="tooltip-property">Knockback: </span>${data.knockback} meters per second
            <span class="tooltip-property">Movement Speed: </span>${data.damage}% movement speed
            <span class="tooltip-property">Cooldown: </span>${data.cooldown} seconds
            </div>
            `
    } else if (a == "inspire") {
        return `
            <span class="tooltip-name">${data.name}</span>
            <span class="tooltip-desc">${data.desc}</span>
            <hr>
            <div class="tooltip-data-tbl">
            <span class="tooltip-property">Radius: </span>${data.range}
            <span class="tooltip-property">Total Healing Over Time: </span>${data.maxhealing}
            <span class="tooltip-property">Duration: </span>${data.duration}
            </div>
            `
    }
};

function createTooltipAtCursor(event, ability){
    // destroy existing tooltip if able
    destroyTooltip();

    data = dataMap[ability];
    
    // create correct tooltip
    const div = document.createElement('div');
    div.className = 'ability-tooltip';
    div.innerHTML = getTooltip(ability);

    // position at cursor
    div.style.left = `${event.pageX}px`;
    div.style.top  = `${event.pageY}px`;

    document.body.appendChild(div);
    activeDiv = div;
}

function destroyTooltip(){
    if (activeDiv){
        activeDiv.remove();
        activeDiv = null;
        return;
    }
}

document.querySelectorAll('.ability-icon').forEach(div => {
    div.addEventListener('click', e => {
        e.stopPropagation(); // prevent immediate placement
        const ability = div.dataset.ability;
        createTooltipAtCursor(event, ability);
    });
});

document.addEventListener('click', destroyTooltip);