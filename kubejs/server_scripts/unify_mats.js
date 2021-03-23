//priority 2

events.listen('recipes', event => {
	function unify(material, ingot, dust, block, nugget, plate) {
		event.replaceOutput({}, '#forge:ingots/' + material, ingot)
		event.replaceOutput({}, '#forge:dusts/' + material, dust)
		event.replaceOutput({}, '#forge:nuggets/' + material, nugget)
		event.replaceOutput({}, '#forge:storage_blocks/' + material, block)
		event.replaceOutput({}, '#forge:plates/' + material, plate)
	}

	function unify(material, gem, block) {
		event.replaceOutput({}, '#forge:gems/' + material, gem)
		event.replaceOutput({}, '#forge:blocks/' + material, block)
	}
})