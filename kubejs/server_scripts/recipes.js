console.info('Improving your world one recipe at a time!')
ServerEvents.recipes(event => {

  //remove recipes

  event.remove({ id: "supplementaries:rope"})
  event.remove({ id: "supplementaries:rope_2"})
  event.remove({ id: "farmersdelight:rope"})
  event.remove({ id: "minecraft:jack_o_lantern"})
  event.remove({ id: "minecraft:enchanting_table"})
  event.remove({ id: "oxidized:copper_nugget"})
  event.remove({ id: "oxidized:copper_lantern"})
  event.remove({ id: "oxidized:copper_ingot_from_nuggets"})
  event.remove({ id: "supplementaries:copper_lantern"})
  event.remove({ id: "minecraft:mushroom_stew"})
  event.remove({ id: "ecologics:mushroom_stew_from_coconut_husk"})
  event.remove({ id: "wilderwild:mushroom_stew_from_shelf_fungi"})
  event.remove({ id: "minecraft:rabbit_stew_from_brown_mushroom"})
  event.remove({ id: "minecraft:rabbit_stew_from_red_mushroom"})
  event.remove({ id: "ecologics:rabbit_stew_from_brown_mushroom_and_coconut_husk"})
  event.remove({ id: "ecologics:rabbit_stew_from_red_mushroom_and_coconut_husk"})
  event.remove({ id: "minecraft:suspicious_stew"})
  event.remove({ id: "biomemakeover:glowshroom_stew"})
  event.remove({ id: "ecologics:tropical_stew"})
  event.remove({ id: "minecraft:beetroot_soup"})
  event.remove({ id: "ecologics:beetroot_soup_from_coconut_husk"})
  event.remove({ id: "wardenloot:warden_heart"})
  event.remove({ id: "farmersknives:rose_gold_knife"})
  event.remove({ id: "minecraft:bread"})
  event.remove({ id: "oxidized:copper_kiln"})
  event.remove({ id: "oxidized:rose_gold_sword"})
  event.remove({ id: "minecraft:furnace_minecart"})
  event.remove({ id: "nethersdelight:blackstone_blast_furnace"})
  event.remove({ id: "nethersdelight:blackstone_smoker"})
  event.remove({ id: "candlelight:broccoli_tomato"})
  event.remove({ id: "betternether:stalagnate_bowl_wart"})
  event.remove({ id: "betternether:stalagnate_bowl_mushroom"})
  event.remove({ id: "betternether:stalagnate_bowl_apple"})
  event.remove({ id: "betternether:herbal_medicine"})
  event.remove({ id: "betternether:agave_medicine"})
  event.remove({ id: "betternether:cincinnasite_axe_diamond"})
  event.remove({ id: "betternether:cincinnasite_sword_diamond"})
  event.remove({ id: "betternether:cincinnasite_hoe_diamond"})
  event.remove({ id: "betternether:cincinnasite_shovel_diamond"})
  event.remove({ id: "betternether:cincinnasite_pickaxe_diamond"})
  event.remove({ id: "farmersdelight:organic_compost_from_tree_bark"})
  event.remove({ id: "overweight_farming:compost_recipe_1"})
  event.remove({ id: "betternether:stalagnate_bowl"})
  event.remove({ id: "wilderwild:spruce_planks_from_hollowed"})
  event.remove({ id: "bclib:tag_shulker_box"})
  event.remove({ id: "bclib:tag_piston"})
  event.remove({ id: "betternether_piston"})
  event.remove({ id: "bclib:tag_hopper"})
  event.remove({ id: "minecraft:hopper"})
  event.remove({ id: "minecraft:lectern"})
  event.remove({ id: "betternether:detector_rail"})
  event.remove({ id: "bclib:tag_rail"})
  event.remove({ id: "betternether:rail"})
  event.remove({ id: "betternether:activator_rail"})
  event.remove({ id: "bclib:tag_minecart"})
  event.remove({ id: "minecraft:chest_minecart"})
  event.remove({ id: "betternether:glowstone_pile_to_dust"})
  event.remove({ id: "bclib:tag_bucket"})
  event.remove({ id: "bclib:tag_compass"})
  event.remove({ id: "charm:extra_recipes/bundle"})
  event.remove({ id: "bclib:tag_cauldron"})
  event.remove({ id: "naturalist:pumpkin_pie"})
  event.remove({ id: "bclib:shield"})
  event.remove({ id: "betternether:shield"})
  event.remove({ id: "betternether:whispering_gourd_lantern"})
  event.remove({ id: "vinery:seed_from_red_grape"})
  event.remove({ id: "vinery:seed_from_white_grape"})
  event.remove({ id: "biomemakeover:crab_chowder"})
  event.remove({ id: "expandeddelight:minecraft/smelting/salt_rock_blasting"})
  event.remove({ id: "expandeddelight:minecraft/smelting/salt_rock_from_deepslate_blasting"})
  event.remove({ output: "#c:hidden_from_recipe_viewers"})
  event.remove({ input: "#c:hidden_from_recipe_viewers"})
  event.remove({ id: "supplementaries:rope_arrow_create_display"})
  event.remove({ id: "supplementaries:rope_arrow_add_display"})
  event.remove({ id: "farmersrespite:coffee_cake" })
  event.remove({ id: "farmersdelight:cake_from_milk_bottle" })
  event.remove({ id: "minecraft:cake" })
  event.remove({ id: "farmersdelight:sweet_berry_cheesecake" })
  event.remove({ id: "farmersrespite:rose_hip_pie" })
  event.remove({ id: "farmersdelight:apple_pie" })
  event.remove({ id: "minecraft:pumpkin_pie" })
  event.remove({ id: "farmersdelight:chocolate_pie" })
  event.remove({ id: "betterend:cave_pumpkin_pie" })
  event.remove({ id: "ends_delight:food/chorus_fruit_pie" })
  event.remove({ id: "culturaldelights:cooking/wheat_dough" })
  event.remove({ id: "culturaldelights:cooking/raw_pasta" })
  event.remove({ id: "minecraft:cookie" })
  event.remove({ id: "farmersrespite:green_tea_cookie" })
  event.remove({ id: "farmersdelight:sweet_berry_cookie" })
  event.remove({ id: "farmersdelight:honey_cookie" })
  event.remove({ id: "ends_delight:food/chorus_cookie" })
  event.remove({ id: "expandeddelight:minecraft/crafting/chocolate_cookie" })
  event.remove({ id: "expandeddelight:minecraft/crafting/sugar_cookie" })
  event.remove({ id: "expandeddelight:minecraft/crafting/snickerdoodle" })
  event.remove({ id: "supplementaries:pancake" })
  event.remove({ id: "farmersdelight:raw_pasta_from_water" })
  event.remove({ id: "farmersdelight:raw_pasta_from_eggs" })
  event.remove({ id: "farmersdelight:pie_crust" })
  event.remove({ id: "brewinandchewin:pizza" })
  event.remove({ id: "bakery:sweet_dough" })
  event.remove({ id: "bakery:dough" })
  event.remove({ id: "candlelight:dough" })
  event.remove({ id: "farmersdelight:wheat_dough_from_water" })
  event.remove({ id: "farmersdelight:wheat_dough_from_eggs" })
  event.remove({ id: "farmersdelight:wheat_dough" })
  event.remove({ id: "bakery:stove/linzer_tart" })
  event.remove({ id: "bakery:stove/glowberry_tart" })

  //replace input

  event.replaceInput({type: 'minecraft:smithing'}, 'additionaladditions:gold_ring', 'adventurez:gilded_netherite_fragment')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'vinery:tomato', 'farmersdelight:tomato')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:leather', '#c:leather')
  event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:leather', '#c:leather')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:rabbit_hide', '#c:leather')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:egg', '#c:eggs')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'betternether:nether_reed_stem', 'minecraft:stick')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, '#c:crops/tomato', 'farmersdelight:tomato')
  event.replaceInput({type: 'minecraft:crafting_shapeless'}, '#c:crops/tomato', 'farmersdelight:tomato')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'ecologics:seashell', '#twigs:seashells')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, '#c:barrels', 'minecraft:barrel')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, '#c:furnaces', 'minecraft:furnace')
  //replace output


  //blasting
  
  event.blasting('minecraft:stone', 'minecraft:cobblestone') .xp(0.1)
  event.blasting('minecraft:deepslate', 'minecraft:cobbled_deepslate') .xp(0.1)
  event.blasting('minecraft:sponge', 'minecraft:wet_sponge') .xp(0.15)
  event.blasting('minecraft:glass', '#minecraft:sand') .xp(0.1)
  event.blasting('minecraft:smooth_quartz', 'minecraft:quartz_block') .xp(0.1)
  event.blasting('minecraft:smooth_red_sandstone', 'minecraft:red_sandstone') .xp(0.1)
  event.blasting('minecraft:smooth_sandstone', 'minecraft:sandstone') .xp(0.1)
  event.blasting('minecraft:smooth_stone', 'minecraft:stone') .xp(0.1)
  event.blasting('minecraft:smooth_basalt', 'minecraft:basalt') .xp(0.1)
  event.blasting('minecraft:cracked_stone_bricks', 'minecraft:stone_bricks') .xp(0.1)
  event.blasting('minecraft:cracked_deepslate_bricks', 'minecraft:deepslate_bricks') .xp(0.1)
  event.blasting('minecraft:cracked_deepslate_tiles', 'minecraft:deepslate_tiles') .xp(0.1)
  event.blasting('minecraft:cracked_nether_bricks', 'minecraft:nether_bricks') .xp(0.1)
  event.blasting('minecraft:cracked_polished_blackstone_bricks', 'minecraft:polished_blackstone_bricks') .xp(0.1)
  event.blasting('minecraft:terracotta', 'minecraft:clay') .xp(0.35)
  event.blasting('minecraft:white_glazed_terracotta', 'minecraft:white_terracotta') .xp(0.1)
  event.blasting('minecraft:orange_glazed_terracotta', 'minecraft:orange_terracotta') .xp(0.1)
  event.blasting('minecraft:magenta_glazed_terracotta', 'minecraft:magenta_terracotta') .xp(0.1)
  event.blasting('minecraft:light_blue_glazed_terracotta', 'minecraft:light_blue_terracotta') .xp(0.1)
  event.blasting('minecraft:yellow_glazed_terracotta', 'minecraft:yellow_terracotta') .xp(0.1)
  event.blasting('minecraft:lime_glazed_terracotta', 'minecraft:lime_terracotta') .xp(0.1)
  event.blasting('minecraft:pink_glazed_terracotta', 'minecraft:pink_terracotta') .xp(0.1)
  event.blasting('minecraft:gray_glazed_terracotta', 'minecraft:gray_terracotta') .xp(0.1)
  event.blasting('minecraft:light_gray_glazed_terracotta', 'minecraft:light_gray_terracotta') .xp(0.1)
  event.blasting('minecraft:cyan_glazed_terracotta', 'minecraft:cyan_terracotta') .xp(0.1)
  event.blasting('minecraft:purple_glazed_terracotta', 'minecraft:purple_terracotta') .xp(0.1)
  event.blasting('minecraft:blue_glazed_terracotta', 'minecraft:blue_terracotta') .xp(0.1)
  event.blasting('minecraft:brown_glazed_terracotta', 'minecraft:brown_terracotta') .xp(0.1)
  event.blasting('minecraft:green_glazed_terracotta', 'minecraft:green_terracotta') .xp(0.1)
  event.blasting('minecraft:red_glazed_terracotta', 'minecraft:red_terracotta') .xp(0.1)
  event.blasting('minecraft:black_glazed_terracotta', 'minecraft:black_terracotta') .xp(0.1)
  event.blasting('minecraft:brick', 'minecraft:clay') .xp(0.3)
  event.blasting('minecraft:nether_brick', 'minecraft:netherrack') .xp(0.1)
  event.blasting('minecraft:popped_chorus_fruit', 'minecraft:chorus_fruit') .xp(0.1)
  event.blasting('biomemakeover:cracked_dried_peat_bricks', 'biomemakeover:dried_peat_bricks') .xp(0.1)
  event.blasting('twigs:cracked_polished_calcite_bricks', 'twigs:polished_calcite_bricks') .xp(0.1)
  event.blasting('twigs:cracked_polished_schist_bricks', 'twigs:polished_schist_bricks') .xp(0.1)
  event.blasting('twigs:cracked_cobblestone_bricks', 'twigs:cobblestone_bricks') .xp(0.1)
  event.blasting('twigs:cracked_polished_tuff_bricks', 'twigs:polished_tuff_bricks') .xp(0.1)
  event.blasting('twigs:cracked_polished_bloodstone_bricks', 'twigs:polished_bloodstone_bricks') .xp(0.1)
  event.blasting('twigs:cracked_polished_rhyolite_bricks', 'twigs:polished_rhyolite_bricks') .xp(0.1)
  event.blasting('betternether:soul_sandstone_smooth', 'betternether:soul_sandstone') .xp(0.1)
  event.blasting('betternether:soul_sandstone_smooth_slab', 'betternether:soul_sandstone_slab') .xp(0.1)
  event.blasting('betternether:soul_sandstone_smooth_stairs', 'betternether:soul_sandstone_stairs') .xp(0.1)
  event.blasting('betternether:nether_ruby', 'betternether:nether_ruby_ore') .xp(0.1)
  event.blasting('betternether:cincinnasite', 'betternether:cincinnasite_ore') .xp(0.1)
  event.blasting('minecraft:lapis_lazuli', 'betternether:nether_lapis_ore') .xp(0.1)
  event.blasting('minecraft:redstone', 'betternether:nether_redstone_ore') .xp(0.1)
  event.blasting('betterend:ender_shard', 'betterend:ender_ore') .xp(0.1)
  event.blasting('betterend:amber_gem', 'betterend:amber_ore') .xp(0.1)
  event.blasting('betterend:thallasium_ingot', 'betterend:thallasium_ore') .xp(0.1)
  event.blasting('supplementaries:ash_bricks', 'supplementaries:ash') .xp(0.1)

  //campfire

  event.campfireCooking('biomemakeover:dried_peat', 'biomemakeover:peat')
  event.campfireCooking('minecraft:green_dye', ['minecraft:cactus', 'biomemakeover:saguaro_cactus', 'biomemakeover:barrel_cactus', 'biomemakeover:barrel_cactus_flowered', 'creeperoverhaul:tiny_cactus'])
  event.campfireCooking('minecraft:lime_dye', ['minecraft:sea_pickle', 'culturaldelights:pickle'])
  event.campfireCooking('supplementaries:pancake', ['bakery:sweet_dough'])

  //shapeless

  event.shapeless('3x farmersdelight:rope', ['3x supplementaries:flax'])
  event.shapeless('3x farmersdelight:rope', ['3x minecraft:string'])
  event.shapeless('3x farmersdelight:rope', ['3x farmersdelight:straw'])
  event.shapeless('minecraft:paper', ['3x #immersive_weathering:bark'])
  event.shapeless('betternether:whispering_gourd_lantern', ['betternether:whispering_gourd','minecraft:soul_torch'])
  event.shapeless('farmersdelight:organic_compost', ['4x #immersive_weathering:bark','2x farmersdelight:straw','minecraft:dirt','2x minecraft:bone_meal'])
  event.shapeless('farmersdelight:organic_compost', ['2x #immersive_weathering:bark','farmersdelight:straw','minecraft:dirt','minecraft:bone_meal','overweight_farming:vegetable_compost'])
  event.shapeless('minecraft:jack_o_lantern', ['minecraft:carved_pumpkin','minecraft:torch'])
  event.shapeless('3x minecraft:cookie', ['kubejs:wheat_flour','minecraft:cocoa_beans','minecraft:egg'])
  event.shapeless('3x farmersrespite:green_tea_cookie', ['kubejs:wheat_flour','farmersrespite:green_tea_leaves','minecraft:egg'])
  event.shapeless('3x farmersdelight:sweet_berry_cookie', ['kubejs:wheat_flour','minecraft:sweet_berries','minecraft:egg'])
  event.shapeless('3x farmersdelight:honey_cookie', ['kubejs:wheat_flour','minecraft:honey_bottle','minecraft:egg'])
  event.shapeless('3x ends_delight:chorus_cookie', ['kubejs:wheat_flour','ends_delight:chorus_fruit_grain','minecraft:egg'])
  event.shapeless('3x expandeddelight:chocolate_cookie', ['kubejs:wheat_flour','kubejs:chocolate_bar','minecraft:egg'])
  event.shapeless('3x expandeddelight:sugar_cookie', ['kubejs:wheat_flour','minecraft:sugar','minecraft:egg'])
  event.shapeless('3x expandeddelight:snickerdoodle', ['kubejs:wheat_flour','expandeddelight:ground_cinnamon','minecraft:egg'])
  event.shapeless('4x bakery:sweet_dough', ['kubejs:wheat_flour','2x minecraft:sugar','minecraft:water_bucket'])
  event.shapeless('4x farmersdelight:wheat_dough', ['3x kubejs:wheat_flour','bakery:yeast'])
  event.shapeless('4x kubejs:dough', ['3x kubejs:wheat_flour','bakery:yeast'])
  event.shapeless('farmersdelight:pie_crust', ['3x bakery:sweet_dough','#c:milk'])
  event.shapeless('3x kubejs:wheat_flour', ['minecraft:wheat'])


  //shaped

  event.shaped("3x betternether:stalagnate_bowl", [
    '   ',
    'S S',
    ' S '
  ], {
    S: 'betternether:stalagnate_planks'
  })

  event.shaped("candlelight:broccoli_beef", [
    '   ',
    'BSB',
    ' T '
  ], {
    S: 'minecraft:cooked_beef',
    B: 'candlelight:broccoli',
    T: 'minecraft:bowl'
  })

  event.shaped("candlelight:broccoli_tomato", [
    ' C ',
    'BPM',
    ' T '
  ], {
    T: 'minecraft:bowl',
    B: 'candlelight:broccoli',
    M: 'farmersdelight:tomato',
    C: 'minecraft:carrot',  
    P: 'minecraft:potato'
  })

  event.shaped("candlelight:veggie_plate", [
    ' C ',
    'BPM',
    ' T '
  ], {
    T: 'minecraft:bowl',
    B: 'minecraft:beetroot',
    M: 'farmersdelight:tomato',
    C: 'minecraft:carrot',  
    P: 'minecraft:potato'
  })

  event.shaped("brewinandchewin:pizza", [
    'CCC',
    'BTP',
    'DDD'
  ], {
    C: 'brewinandchewin:flaxen_cheese_wedge',
    B: 'minecraft:brown_mushroom',
    T: 'farmersdelight:tomato_sauce',
    P: 'farmersdelight:beef_patty',
    D: 'farmersdelight:wheat_dough'
  })
})