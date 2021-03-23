//priority 0

events.listen('item.tags', event => {
	//add tag to item
	function add(tag, item) {
		event.get(tag).add(item)
	}

	//remove tag from item
	function remove(tag, item) {
		event.get(tag).remove(item)
	}
})

events.listen('block.tags', event => {
	//add tag to item
	function add(tag, block) {
		event.get(tag).add(block)
	}

	//remove tag from item
	function remove(tag, block) {
		event.get(tag).remove(block)
	}
})