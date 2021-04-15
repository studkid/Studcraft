//priority 6

events.listen('recipes', event => {
	event.shapeless(Item.of('minecraft:chest', 1), '#forge:chests/wooden');

	event.remove(Item.of('refinedpipes:basic_energy_pipe'));
	event.remove(Item.of('refinedpipes:improved_energy_pipe'));
	event.remove(Item.of('refinedpipes:advanced_energy_pipe'));
	event.remove(Item.of('refinedpipes:elite_energy_pipe'));
	event.shaped(Item.of('refinedpipes:ultimate_energy_pipe', 6), [
		'RRR',
		'LGL',
		'RRR'
	], {
		R: 'minecraft:redstone',
		L: '#forge/ingots/lead',
		G: '#forge/glass'
	});

	event.shapeless(Item.of('refinedpipes:improved_energy_pipe', 3), Item.of('refinedpipes:basic_energy_pipe', 3), Item.of('minecraft:redstone', 3), '$forge/ingots/invar');
	event.shapeless(Item.of('refinedpipes:improved_energy_pipe', 1), 'refinedpipes:basic_energy_pipe', 3, 'minecraft:redstone', Item.of('$forge/nuggets/invar', 3));

	event.recipes.mekanism.metallurgic_infusing('refinedpipes:advanced_energy_pipe', 'refinedpipes:improved_energy_pipe', 'mekanism:redstone', 1600);
	event.recipes.thermal.smelter('refinedpipes:advanced_energy_pipe', 'refinedpipes:improved_energy_pipe', 'minecraft:redstone');
})