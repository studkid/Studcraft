//priority 7

events.listen('player.logged_in', function (event) {
  // Check if player doesn't have "starting_items" gamestage yet
  if (!event.hasGameStage('starting_items')) {
    // Add the gamestage
    event.addGameStage('starting_items')

    event.player.give(Item.of('Item.of('silentgear:guide_book', {"akashictome:displayName":{text:"Silent Gear Guide"},"akashictome:is_morphing":1,display:{Name:"{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Silent Gear Guide"}]}"},"akashictome:data":{industrialforegoing:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},integratedtunnels:{id:"integrateddynamics:on_the_dynamics_of_integration",Count:1},powah:{id:"powah:book",Count:1},resourcefulbees:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"resourcefulbees:fifty_shades_of_bees"}},astralsorcery:{id:"astralsorcery:tome",Count:1},ftbquests:{id:"ftbquests:book",Count:1},psi:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"psi:encyclopaedia_psionica"}},immersiveengineering:{id:"immersiveengineering:manual",Count:1},fd_cookbook:{id:"fd_cookbook:cook_book",Count:1},woot:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"woot:wootguide"}},eidolon:{id:"eidolon:codex",Count:1},bigreactors:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"bigreactors:erguide"}},botania:{id:"botania:lexicon",Count:1,tag:{}},bloodmagic:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"bloodmagic:guide"}},thermal:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"thermal:guidebook"}},rftoolsbase:{id:"rftoolsbase:manual",Count:1}}})'))
  }
})