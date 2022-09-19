const classSelector = document.querySelector('select');

class Spell {
    constructor(name = '', index = '', url = '') {
        this.name = name;
        this.index = index;
        this.url = url;        
    }
}

function showInformation() {
    const commonInfo = document.getElementById('common-info');
    commonInfo.style.display = 'block';

}

// Print The Data
function showClassInfo(className, hitDie, proficienciesString, proficiencyChoicesString, savingThrowsString, startingEquipmentString, startingEquipmentChoicesString, subclassString) {
    const classNameElement = document.getElementById('name');
    classNameElement.innerHTML = `<span class="text-danger">${className}</span>`;
    const hitDieElement = document.getElementById('hit-die');
    hitDieElement.innerText = `1d${hitDie}`;
    const proficienciesElement = document.getElementById('proficiencies');
    proficienciesElement.innerHTML = proficienciesString;
    const proficiencyChoicesElement = document.getElementById('proficiency-choices');
    proficiencyChoicesElement.innerHTML = proficiencyChoicesString;
    const savingThrowsElement = document.getElementById('saving-throws');
    savingThrowsElement.innerHTML = savingThrowsString;
    const startingEquipmentElement = document.getElementById('starting-equipment');
    startingEquipmentElement.innerHTML = startingEquipmentString;
    const startingEquipmentChoicesElement = document.getElementById('starting-equipment-choices');
    startingEquipmentChoicesElement.innerHTML = startingEquipmentChoicesString;
    const subclassElement = document.getElementById('subclasses');
    subclassElement.innerHTML = `${subclassString}`;
}

function showMagicInfo(spellcastingInfoString, spellAbilityString) {
    const spellInformationElement = document.getElementById('spell-information');
    spellInformationElement.innerHTML = spellcastingInfoString;
    const spellcastingAbilityElement = document.getElementById('spellcasting-ability');
    spellcastingAbilityElement.innerHTML = spellAbilityString;
}

function displaySpells(spellList) {
    const spellListElement = document.getElementById("spell-list");
    let index = 0;
    for (let x = 0; x < spellList.length;x++) {
        let spellMsg = "";
        if (index === 0) {
            spellMsg = `<a data-index="${index}" class="list-group-item col-3" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}">${spellList[x].name}</a>`;
            index++;
        }
        else if (index === 1) {
            spellMsg = `<a data-index="${index}" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}" data-api-url="${spellList[x].url}" class="list-group-item list-group-item-primary col-3">${spellList[x].name}</a>`;
            index++;
        }
        else if (index === 2) {
            spellMsg = `<a data-index="${index}" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}" class="list-group-item list-group-item-secondary col-3">${spellList[x].name}</a>`;
            index++;
        }
        else if (index === 3) {
            spellMsg = `<a data-index="${index}" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}" class="list-group-item list-group-item-success col-3">${spellList[x].name}</a>`;
            index++;
        }
        else if (index === 4) {
            spellMsg = `<a data-index="${index}" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}" class="list-group-item list-group-item-danger col-3">${spellList[x].name}</a>`;
            index++;
        }
        else if (index === 5) {
            spellMsg = `<a data-index="${index}" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}" class="list-group-item list-group-item-warning col-3">${spellList[x].name}</a>`;
            index++;
        }
        else if (index === 6) {
            spellMsg = `<a data-index="${index}" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}" class="list-group-item list-group-item-info col-3">${spellList[x].name}</a>`;
            index++;
        }
        else if (index === 7) {
            spellMsg = `<a data-index="${index}" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}" class="list-group-item list-group-item-light col-3">${spellList[x].name}</a>`;
            index++;
        }
        else if (index === 8) {
            spellMsg = `<a data-index="${index}" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}" class="list-group-item list-group-item-dark col-3">${spellList[x].name}</a>`;
            index++;
        }
        else if (index === 9) {
            spellMsg = `<a data-index="${index}" data-bs-toggle="modal" href="#spell-modal" data-api-url="https://www.dnd5eapi.co${spellList[x].url}" class="list-group-item col-3">${spellList[x].name}</a>`;
            index = 1;
        }
        spellListElement.innerHTML += spellMsg;
    }
    spellListElement.addEventListener('click', (e) => {
        processSpellClick(e);
    })
}

function processSpellClick(e) {
    const spell = e.target;
    getSpellInformation(spell.dataset.apiUrl, spell.dataset.index);
    console.log(spell.dataset.apiUrl);
}

function getSpellInformation(url, index) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => {
            createSpellModal(data, index);
        })
        .catch(err => console.log('Looks like there was a problem.', err));
}

function createSpellModal(spellData, index) {
    console.log(spellData)
    const spellIndex = index;

    const spellLevelElement = document.getElementById('spell-level');
    const spellLevel = spellData.level;
    spellLevelElement.innerHTML = `<p>Spell Level: ${spellLevel}</p>`;

    const spellSchoolElement = document.getElementById('spell-school');
    const spellSchool = spellData.school.name;
    spellSchoolElement.innerHTML = `<p>Spell School: ${spellSchool}</p>`

    const spellNameElement = document.getElementById('spell-label');
    const spellName = spellData.name;
    spellNameElement.innerText = spellName;

    const spellDescElement = document.getElementById('spell-desc');
    const spellDesc = [];
    for (let x = 0; x < spellData.desc.length; x++) {
        spellDesc.push(spellData.desc[x]);
    }
    const spellDescString = spellDesc.join(`<br><br>`);
    spellDescElement.innerHTML = `<p>${spellDescString}`;

    if (spellData.attack_type) {
        const spellAttackTypeElement = document.getElementById('attack-type');
        const spellAttackType = spellData.attack_type;
        spellAttackTypeElement.innerHTML = `<p>${spellName} requires a ${spellAttackType} attack roll to hit.</p>`
    }

    if (spellData.area_of_effect) {
        const areaOfEffectElement = document.getElementById('area-of-effect');
        const areaOfEffectType = spellData.area_of_effect.type;
        const areaOfEffectSize = spellData.area_of_effect.size;
        areaOfEffectElement.innerHTML = `<p>${spellName}'s area of effect is a ${areaOfEffectSize} foot ${areaOfEffectType}</p>`;
    }

    if (spellData.dc) {
        const saveDCElement = document.getElementById('save-dc');
        const saveDCSuccess = spellData.dc.dc_success;
        const saveDCType = spellData.dc.dc_type.name;
        saveDCElement.innerHTML = `<p>DC Save Ability: ${saveDCType}<br>Effects of spell upon successful save: ${saveDCSuccess}</p>`
    }

    if (spellData.damage) {
        const spellDamageElement = document.getElementById('spell-dmg');
        const spellDamageType = spellData.damage.damage_type.name;
        let spellDamage = [];
        let spellDamageMsg;
        let spellDamageArray = [];
        let spellDamageString;
        if (spellData.damage.damage_at_slot_level) {
            spellDamage = spellData.damage.damage_at_slot_level;
            for (const [key, value] of Object.entries(spellDamage)) {
                spellDamageArray.push(`${key}: ${value}`);
            }
            spellDamageString = spellDamageArray.join(`<br>`);
            spellDamageMsg = `Spell damage by spell slot level<br>${spellDamageString}`
        }
        if (spellData.damage.damage_at_character_level) {
            spellDamage = spellData.damage.damage_at_character_level;
            for (const [key, value] of Object.entries(spellDamage)) {
                spellDamageArray.push(`${key}: ${value}`);
            }
            spellDamageString = spellDamageArray.join(`<br>`);
            spellDamageMsg = `Spell damage by character level<br>${spellDamageString}`;
        }
        spellDamageElement.innerHTML = `<p>Damage Type: ${spellDamageType}<br>${spellDamageMsg}</p>`;            
    }

    const castingTimeElement = document.getElementById('casting-time');
    const castingTime = spellData.casting_time;
    castingTimeElement.innerHTML = `<p>Casting time: ${castingTime}</p>`

    const spellComponentsElement = document.getElementById('spell-components');
    const spellComponents = spellData.components.join(`, `);
    spellComponentsElement.innerHTML = `<p>Spell Components: ${spellComponents}.`;

    if (spellData.material) {
        const spellMaterialElement = document.getElementById('material-components')
        const spellMaterial = spellData.material;
        spellMaterialElement.innerHTML = `<p>Spell Materials: ${spellMaterial}`;
    }

    const spellRangeElement = document.getElementById('spell-range');
    const spellRange = spellData.range;
    spellRangeElement.innerHTML = `<p>Range: ${spellRange}`;
    
    const spellDurationElement = document.getElementById('spell-duration');
    const spellDuration = spellData.duration;
    spellDurationElement.innerHTML = `<p>Spell Duration: ${spellDuration}`;

    const spellRitualElement = document.getElementById('spell-ritual');
    const spellRitual = spellData.ritual;
    let ritualMsg;
    if (spellRitual) {
        ritualMsg = `<p>This spell can be used as a ritual.</p>`
    }
    else {
        ritualMsg = `<p>This spell cannot be used as a ritual.</p>`
    }
    spellRitualElement.innerHTML = ritualMsg;


}

function addSpells(spells) {
    spellList = [];
    for (let x = 0; x < spells.length; x++) {
        const spell = new Spell();
        spell.name = spells[x].name;
        spell.index = spells[x].index;
        spell.url = spells[x].url;
        spellList.push(spell);
    }
    displaySpells(spellList);
}

// Connect to the API URL at https://www.dnd5eapi.co/api/
function getInformation(chosenClass) {
    return fetch(`https://www.dnd5eapi.co/api/classes/${chosenClass}`)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => {
            parseData(data);
        })
        .catch(err => console.log('Looks like there was a problem.', err));
}

function parseData(data) {
    const className = data.name;

    const hitDie = data.hit_die;

    const proficiencies = [];
    for (let x = 0; x < data.proficiencies.length; x++) {
        proficiencies.push(data.proficiencies[x].name)
    }
    const proficienciesString = proficiencies.join(`<br>`);

    const proficiencyChoices = [];
    for (let x = 0; x < data.proficiency_choices.length; x++) {
        proficiencyChoices.push(data.proficiency_choices[x].desc)
    }
    const proficiencyChoicesString = proficiencyChoices.join(`<br>`);

    const savingThrows = [];
    for (let x = 0; x < data.saving_throws.length; x++) {
        savingThrows.push(data.saving_throws[x].name)
    }
    const savingThrowsString = savingThrows.join(`<br>`);

    const startingEquipment = [];
    for (let x = 0; x < data.starting_equipment.length; x++) {
        startingEquipment.push(`${data.starting_equipment[x].quantity} x ${data.starting_equipment[x].equipment.name}`);
    }
    const startingEquipmentString = startingEquipment.join(`<br>`);

    const startingEquipmentChoices = [];
    for (let x = 0; x < data.starting_equipment_options.length; x++) {
        const index = x + 1;
        startingEquipmentChoices.push(`${index}): ${data.starting_equipment_options[x].desc}`);
    }
    const startingEquipmentChoicesString = startingEquipmentChoices.join(`<br>`);

    const subclasses = [];
    for (let x = 0; x < data.subclasses.length; x++) {
        subclasses.push(data.subclasses[x].name);
    }
    const subclassString = subclasses.join(`<br>`);

    const magicElement = document.getElementById('magic-info');
    if (!data.spellcasting) {
        magicElement.style.display = 'none';
    }
    else if (data.spellcasting) {
        magicElement.style.display = 'block';
        parseMagicData(data);
    }
    
    showClassInfo(className, hitDie, proficienciesString, proficiencyChoicesString, savingThrowsString, startingEquipmentString, startingEquipmentChoicesString, subclassString);
    setBackgroundImage(className);
}

function parseMagicData(data) {
    const spellcastingInfo = [];
    for (let x = 0; x < data.spellcasting.info.length; x++) {
        let name = `${data.spellcasting.info[x].name}`;
        let desc = [];
        for (let i = 0; i < data.spellcasting.info[x].desc.length; i++) {
            desc.push(data.spellcasting.info[x].desc[i]);
        }
        let descString = desc.join(`<br><br>`);
        let msg = `<h4>${name}</h4><p>${descString}<br>`;
        spellcastingInfo.push(msg);
    }
    spellcastingInfoString = spellcastingInfo.join(`<br>`);

    const name = data.name.toLowerCase();
    const spellAbility = data.spellcasting.spellcasting_ability.name;
    const spellAbilityString = `A ${name} uses their ${spellAbility} score to strengthen their magical abilities.`
    clearSpells();
    getSpells(name);
    showMagicInfo(spellcastingInfoString, spellAbilityString);
}

function clearSpells() {
    const spellListElement = document.getElementById('spell-list');
    spellListElement.replaceChildren();
}

function getSpells(name) {
    return fetch(`https://www.dnd5eapi.co/api/classes/${name}/spells`)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => {
            addSpells(data.results);
        })
        .catch(err => console.log('Looks like there was a problem.', err));
}

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function setBackgroundImage(className) {
    const img = document.querySelector('img');
    img.src = `imgs/${className}.png`;
}

classSelector.addEventListener('change', (e) => {
    showInformation();
    getInformation(e.target.value.toLowerCase(0));
})