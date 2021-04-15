//priority 1000

/*
	Taken from ATM6's scripts
	While I *probably* could write something similar myself,
	this pack is literally more or less made to play together with some friends.

	If I were trying to design the pack for the sole purpose of making a serious
	pack for the public to play, then yeah I'd probably do it myself but honestly?
	I'm at the point now that I just don't even want to bother anymorevent.
*/

onEvent('recipes', event => {
    function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
        event.replaceOutput(`#forge:ingots/${name}`, ingotItem);
        event.replaceOutput(`#forge:dusts/${name}`, dustItem);
        event.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
        event.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);
        event.remove({
            input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
            output: `#forge:ingots/${name}`,
            type: 'minecraft:smelting'
        });
        event.remove({
            input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
            output: `#forge:ingots/${name}`,
            type: 'minecraft:blasting'
        });
        if (name !== 'iron' && name !== 'gold' && name !== 'azure_silver' && name !== 'crimson_iron') {
            //console.log(`Removing enriching recipes for #forge:ores/${name} to mekanism:dust_${name}`);
            event.remove({
                input: `#forge:ores/${name}`,
                output: `mekanism:dust_${name}`,
                type: 'mekanism:enriching'
            });
            //console.log(`Removing enriching recipes for mekanism:dirty_dust_${name} to mekanism:dust_${name}`);
            event.remove({
                input: `mekanism:dirty_dust_${name}`,
                output: `mekanism:dust_${name}`,
                type: 'mekanism:enriching'
            });
            //console.log(`Removing purifying recipes for #mekanism:clumps/${name} to mekanism:dirty_dust_${name}`);
            event.remove({
                input: `#mekanism:clumps/${name}`,
                output: `mekanism:dirty_dust_${name}`,
                type: 'mekanism:crushing'
            });
            //console.log(`Removing purifying recipes for #forge:ores/${name} to mekanism:clump_${name}`);
            event.remove({
                input: `#forge:ores/${name}`,
                output: `mekanism:clump_${name}`,
                type: 'mekanism:purifying'
            });
            //console.log(`Removing purifying recipes for mekanism:shard_${name} to mekanism:clump_${name}`);
            event.remove({
                input: `mekanism:shard_${name}`,
                output: `mekanism:clump_${name}`,
                type: 'mekanism:purifying'
            });
            //console.log(`Removing injecting recipes for #forge:ores/${name} to mekanism:shard_${name}`);
            event.remove({
                input: `#forge:ores/${name}`,
                output: `mekanism:shard_${name}`,
                type: 'mekanism:injecting'
            });
            //console.log("Removing injecting recipes for mekanism:crystals_" + name + " to mekanism:shard_" + name);
            event.remove({
                input: `#mekanism:crystals/${name}`,
                output: `mekanism:shard_${name}`,
                type: 'mekanism:injecting'
            });
            /* Not working prior to KubeJS kubejs-1604.3.4.137-forgevent.jar, unnecessary currently.
                        console.log(`Removing injecting recipes for mekanism:crystals/${name} to mekanism:shard_${name}`);
                        event.remove({
                            input: `#mekanism:crystals/${name}`,
                            output: `mekanism:shard_${name}`,
                            type: 'mekanism:injecting'
                        });
                        console.log(`Removing crystallizing recipes for mekanism:clean_${name} to mekanism:shard_${name}`);
                        event.remove({
                            input: {
                                "slurry": `mekanism:clean_${name}`,
                                "amount": 200
                            },
                            output: `mekanism:crystal_${name}`,
                            type: 'mekanism:crystallizing'
                        });
                        console.log(`Removing washing recipes for mekanism:dirty_${name} to mekanism:clean_${name}`);
                        event.remove({
                            input: {
                                "slurry": `mekanism:dirty_${name}`,
                                "amount": 1
                            },
                            output: {
                                "slurry": `mekanism:clean_${name}`,
                                "amount": 1
                            },
                            type: 'mekanism:washing'
                        });
                        console.log(`Removing dissolution recipes for #forge:ores/${name} to mekanism:dirty_${name}`);
                        event.remove({
                            input: `#forge:ores/${name}`,
                            output: {
                                "slurry": `mekanism:dirty_${name}`,
                                "amount": 1000
                            },
                            type: 'mekanism:dissolution'
                        });
            */
            //Uncomment and use this to see if your criteria will match a recipe, and if the recipe is what you want them to match. Useful for updating script, do not leave uncommented for pack releasevent.
            //event.forEachRecipe({}, recipe => console.info('Recipe matched! ' + recipe));
        }
        event.remove({
            input: `#forge:ores/${name}`,
            type: 'immersiveengineering:crusher'
        });
        event.remove({
            input: `#forge:ingots/${name}`,
            type: 'immersiveengineering:crusher'
        });
        event.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5);
        event.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5);
        // event.recipes.pedestals.pedestal_crushing({
        //     ingredient: {
        //         tag: `forge:ingots/${name}`
        //     },
        //     result: {
        //         item: dustItem,
        //         count: 1
        //     }
        // });
        // event.remove({
        //     id: `appliedenergistics2:grinder/${name}_dust_ingot`
        // });
        // event.recipes.appliedenergistics2.grinder({
        //     input: {
        //         tag: `forge:ingots/${name}`
        //     },
        //     result: {
        //         primary: {
        //             item: dustItem,
        //             count: 1
        //         }
        //     },
        //     turns: 8
        // });
        event.recipes.immersiveengineering.crusher({
            secondaries: [],
            result: {
                base_ingredient: {
                    item: dustItem
                }
            },
            input: {
                tag: `forge:ingots/${name}`
            },
            energy: 3000
        });

        if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
            event.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1);
            event.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1);
            event.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`);
            event.recipes.immersiveengineering.crusher({
                secondaries: [],
                result: {
                    count: 2,
                    base_ingredient: {
                        item: dustItem
                    }
                },
                input: {
                    tag: `forge:ores/${name}`
                },
                energy: 3000
            });
            // event.remove({
            //     id: `appliedenergistics2:grinder/${name}_dust_ore`
            // });
            // event.recipes.appliedenergistics2.grinder({
            //     input: {
            //         tag: `forge:ores/${name}`
            //     },
            //     result: {
            //         primary: {
            //             item: dustItem,
            //             count: 2
            //         }
            //     },
            //     turns: 8
            // });
        }
        event.replaceInput(nuggetItem, (`#forge:nuggets/${name}`));
        event.replaceInput(dustItem, (`#forge:dusts/${name}`));
        event.replaceInput(ingotItem, (`#forge:ingots/${name}`));
        event.replaceInput(blockItem, (`#forge:storage_blocks/${name}`));
    }

    function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
        event.replaceInput(nuggetItem, (`#forge:nuggets/${name}`));
        event.replaceInput(dustItem, (`#forge:dusts/${name}`));
        event.replaceInput(ingotItem, (`#forge:ingots/${name}`));
        event.replaceInput(blockItem, (`#forge:storage_blocks/${name}`));
        event.replaceOutput(`#forge:ingots/${name}`, ingotItem);
        event.replaceOutput(`#forge:dusts/${name}`, dustItem);
        event.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
        event.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);
    }

//-------------------------------------------------------------------------------------------------------------------------------
    //Vanilla
	unifyMetal('iron', 'minecraft:iron_ingot', 'thermal:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget');
	unifyMetal('gold', 'minecraft:gold_ingot', 'thermal:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget');
	
	//Shared Mods
	unifyMetal('aluminum', 'immersiveengineering:ingot_aluminum', 'immersiveengineering:dust_aluminum', 'immersiveengineering:storage_aluminum', 'janeo:nugget_aluminum');
	unifyMetal('copper', 'thermal:copper_ingot', 'thermal:copper_dust', 'thermal:copper_block', 'thermal:copper_nugget');
	unifyMetal('tin', 'thermal:tin_ingot', 'thermal:tin_dust', 'thermal:tin_block', 'thermal:tin_nugget');
	unifyMetal('lead', 'thermal:lead_ingot', 'thermal:lead_dust', 'thermal:lead_block', 'thermal:lead_nugget');
	unifyMetal('silver', 'thermal:silver_ingot', 'thermal:silver_dust', 'thermal:silver_block', 'thermal:silver_nugget');
	unifyMetal('copper', 'thermal:copper_ingot', 'thermal:copper_dust', 'thermal:copper_block', 'thermal:copper_nugget');
	unifyMetal('nickel', 'thermal:nickel_ingot', 'thermal:nickel_dust', 'thermal:nickel_block', 'thermal:nickel_nugget');
	unifyMetal('uranium', 'immersiveengineering:ingot_uranium', 'immersiveengineering:dust_uranium', 'immersiveengineering:storage_uranium', 'immersiveengineering:nugget_uranium');

	//Create
	//Idk why I decided to use janeo for this but whatever, consistency.
	//Also not a huge fan of how different Create's ingots look (and lack storage blocks)
	unifyMetal('zinc', 'create:zinc_ingot', 'jaopca:dusts.zinc', 'create:zinc_block', 'create:zinc_nugget');

	//Mekanism
	unifyMetal('osmium', 'mekanism:ingot_osmium', 'mekanism:dust_osmium', 'mekanism:block_osmium', 'mekanism:nugget_osmium');

//-------------------------------------------------------------------------------------------------------------------------------
	//Non Ores
	unifyCraftMetal('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget');
	unifyCraftMetal('invar', 'thermal:invar_ingot', 'thermal:invar_dust', 'thermal:invar_block', 'thermal:invar_nugget');
	unifyCraftMetal('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget');
	unifyCraftMetal('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget');
	unifyCraftMetal('steel', 'immersiveengineering:ingot_steel', 'immersiveengineering:dust_steel', 'immersiveengineering:storage_steel_', 'immersiveengineering:nugget_steel_');

	
	//Thermal
	unifyCraftMetal('signalum', 'thermal:signalum_ingot', 'thermal:signalum_dust', 'thermal:signalum_block', 'thermal:signalum_nugget');
	unifyCraftMetal('lumium', 'thermal:lumium_ingot', 'thermal:lumium_dust', 'thermal:lumium_block', 'thermal:lumium_nugget');
	unifyCraftMetal('enderium', 'thermal:enderium_ingot', 'thermal:enderium_dust', 'thermal:enderium_block', 'thermal:enderium_nugget');
	
	//Create
	unifyCraftMetal('brass', 'create:brass_ingot', 'create:crushed_brass', 'create:brass_block', 'create:brass_nugget');
})