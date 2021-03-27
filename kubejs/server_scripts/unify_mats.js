//priority 2

events.listen('recipes', event => {
	function unify(material, ingot, dust, block, nugget) {
		event.replaceOutput('#forge:ingots/${material}', ingot)
		event.replaceOutput('#forge:dusts/${material}', dust)
		event.replaceOutput('#forge:nuggets/${material}', nugget)
		event.replaceOutput('#forge:storage_blocks/${material}', block)

		event.remove({
			input: ['#forge:ores/${material}', '#forge:dusts/${materal}'],
			output: "#forge:ingots/#{material}",
			type: 'minecraft:smelting'
		});

		event.remove({
		input: ['#forge:ores/${material}', '#forge:dusts/${materal}'],
		output: "#forge:ingots/#{material}",	
		type: 'minecraft:smelting'
		});

        e.recipes.minecraft.smelting(ingot, `#forge:ores/${material}`).xp(1);
        e.recipes.minecraft.blasting(ingot, `#forge:ores/${material}`).xp(1);

        e.recipes.minecraft.smelting(ingot, `#forge:dusts/${material}`).xp(0.5);
        e.recipes.minecraft.blasting(ingot, `#forge:dusts/${material}`).xp(0.5);
	}

	// function unify(material, gem, block) {
	// 	event.replaceOutput({}, '#forge:gems/' + material, gem)
	// 	event.replaceOutput({}, '#forge:blocks/' + material, block)
	// }

	function unifyPlate(material, plate) {
		event.replaceOutput('#forge:plates/${material}', plate)
	}

	unify('iron', 'minecraft:iron_ingot', 'thermal:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget')
	unify('gold', 'minecraft:gold_ingot', 'thermal:gold_dust', 'minecraft:gold_block', 'minecraft:gold_ugget')
	unify('aluminum', 'janeo:aluminum_ingot', 'immersiveengineering:aluminum_dust', 'immersiveengineering:aluminum_block', 'janeo:aluminum_nugget')
	unify('copper', 'thermal:copper_ingot', 'thermal:copper_dust', 'thermal:copper_block', 'thermal:copper_nugget')
	unify('zinc', 'janeo:zinc_ingot', 'janeo:zinc_dust', 'janeo:zinc_block', 'create:zinc_nugget')
	unify('silver', 'thermal:silver_ingot', 'thermal:silver_dust', 'thermal:silver_block', 'thermal:silver_nugget')
	unify('copper', 'thermal:copper_ingot', 'thermal:copper_dust', 'thermal:copper_block', 'thermal:copper_nugget')
	unify('nickel', 'thermal:nickel_ingot', 'thermal:nickel_dust', 'thermal:nickel_block', 'thermal:nickel_nugget')
	unify('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget')
	unify('copper', 'thermal:copper_ingot', 'thermal:copper_dust', 'thermal:copper_block', 'thermal:copper_nugget')
	unify('uranium', 'immersiveengineering:uranium_ingot', 'immersiveengineering:uranium_dust', 'immersiveengineering:uranium_block', 'immersiveengineering:uranium_nugget')
	unify('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget')
	unify('steel', 'immersiveengineering:steel_ingot', 'immersiveengineering:steel_dust', 'immersiveengineering:steel_block', 'immersiveengineering:steel_nugget')
	unify('tin', 'thermal:tin_ingot', 'thermal:tin_dust', 'thermal:tin_block', 'thermal:tin_nugget')
	unify('lead', 'thermal:lead_ingot', 'thermal:lead_dust', 'thermal:lead_block', 'thermal:lead_nugget')
	unify('osmium', 'mekanism:ingot_osmium', 'mekanism:dust_osmium', 'mekanism:block_osmium', 'mekanism:nugget_osmium')
	unify('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget')
	unify('invar', 'thermal:invar_ingot', 'thermal:invar_dust', 'thermal:invar_block', 'thermal:invar_nugget')
	unify('signalum', 'thermal:signalum_ingot', 'thermal:signalum_dust', 'thermal:signalum_block', 'thermal:signalum_nugget')
	unify('lumium', 'thermal:lumium_ingot', 'thermal:lumium_dust', 'thermal:lumium_block', 'thermal:lumium_nugget')
	unify('enderium', 'thermal:enderium_ingot', 'thermal:enderium_dust', 'thermal:enderium_block', 'thermal:enderium_nugget')
	unify('brass', 'create:brass_ingot', 'silents_mechanisms:brass_dust', 'create:brass_block', 'create:brass_nugget')

	unifyPlate('iron', 'thermal:iron_plate')
	unifyPlate('gold', 'thermal:gold_plate')
	unifyPlate('copper', 'thermal:copper_plate')
	unifyPlate('tin', 'thermal:tin_plate')
	unifyPlate('lead', 'thermal:lead_plate')
	unifyPlate('silver', 'thermal:silver_plate')
	unifyPlate('nickel', 'thermal:nickel_plate')
	unifyPlate('bronze', 'thermal:bronze_plate')
	unifyPlate('electrum', 'thermal:electrum_plate')
	unifyPlate('invar', 'thermal:invar_plate')
	unifyPlate('constantan', 'thermal:constantan_plate')
	unifyPlate('signalum', 'thermal:signalum_plate')
	unifyPlate('lumium', 'thermal:lumium_plate')
	unifyPlate('enderium', 'thermal:enderium:plate')
})