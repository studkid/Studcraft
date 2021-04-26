//priority 6

events.listen('recipes', event => {
	event.shapeless(Item.of('minecraft:chest', 1), '#forge:chests/wooden');
	event.shapeless(Item.of('minecraft:crafting_table', 1), '#forge:workbenches');
})