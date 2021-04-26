//priority 7

events.listen('player.logged_in', function (event) {
  	// Check if player doesn't have "starting_items" gamestage yet
  	if (!event.hasGameStage('starting_items')) {
		// Add the gamestage
		event.addGameStage('starting_items')

		event.player.give(Item.of('akashictome:tome', {"akashictome:data":{industrialforegoing:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},tconstruct:{id:"tconstruct:materials_and_you",Count:1},integratedtunnels:{id:"integrateddynamics:on_the_dynamics_of_integration",Count:1},powah:{id:"powah:book",Count:1},astralsorcery:{id:"astralsorcery:tome",Count:1},ftbquests:{id:"ftbquests:book",Count:1},psi:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"psi:encyclopaedia_psionica"}},immersiveengineering:{id:"immersiveengineering:manual",Count:1},woot:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"woot:wootguide"}},fd_cookbook:{id:"fd_cookbook:cook_book",Count:1},eidolon:{id:"eidolon:codex",Count:1},rftools:{id:"rftoolsbase:manual",Count:1},bigreactors:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"bigreactors:erguide"}},productivebees:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"productivebees:guide"}},modularrouters:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"modularrouters:book"}},botania:{id:"botania:lexicon",Count:1,tag:{}},ars_nouveau:{id:"ars_nouveau:worn_notebook",Count:1},tmechworks:{id:"tmechworks:book",Count:1},dimdungeons:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"dimdungeons:guide_book"}},bloodmagic:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"bloodmagic:guide"}},thermal:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"thermal:guidebook"}}}}))
    	event.player.give('tconstruct:puny_smelting');
    	event.player.give('tconstruct:mighty_smelting');
    	event.player.give('tconstruct:tinkers_gadgetry');
	}
})
