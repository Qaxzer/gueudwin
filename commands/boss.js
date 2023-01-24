const { SlashCommandBuilder } = require('discord.js');

//TODO Add random value for HP (between 100 and 500)
// TODO Add random value for Attack (between 10 and 20)
// TODO add randome value for luck
const boss= {
    name: 'Boss',
    hp: 100,
    attack: 10,
    luck: 5
}

//TODO Add random value for HP (between 50 and 100)
// TODO Add random value for Attack (HP should impact this value (less hp = more attack))
// TODO add random value for luck
const player= {
    name: 'Joueur',
    hp: 50,
    attack: 10,
    luck: 5
}

/**
 * Function that should took one string as param and set that string as player name
 * @param {String} name : desired name for the player
 */
function setPlayerName(name) { 
    player.name = name
}

// TODO add js doc to this functions
function customizeBoss() { 
    /**
     *  TODO: Implement this command that should allow boss customization
     * 
     * We should be able to set every value with this command as well as just one
     */
}

/**
 * Function that will handle the damage dealing calculation.
 * 
 * @param {*} Attacker : the offensive player
 * @param {*} Defender : the defensive player
 */
function attack(Attacker, Defender) { 
    let attackValue = (Math.random() *10) + attacker.chance;
    defender.hp = defender.hp - attackValue
    if(defender.hp <= 0) {
        return defender.name + ' is dead'
    }else{
        return defender.name +' now has ' + defender.hp+' hp'
    }
}

module.exports = {

	data: new SlashCommandBuilder()
		.setName('boss')
        .setDescription('Attack the boss'),

	// une fois que notre command est défini en terme d'option, nous avons besoin de définir son implémentaiton réel.
    async execute(interaction) {
        await interaction.reply(attack(player, boss));
        //TODO : Add a boss attack in one minute
		await interaction.reply(attack(boss,player));
	},
};
