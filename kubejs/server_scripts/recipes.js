console.info('Improving your world one recipe at a time!')
ServerEvents.recipes(event => {

  //remove recipes
 
  event.remove({ id: "wardenloot:sculk_chestplate_smithing"}) 
  event.remove({ id: "wardenloot:sculk_axe_smithing"}) 
  event.remove({ id: "wardenloot:sculk_sword_smithing"})
  event.remove({ id: "wardenloot:sculk_shovel_smithing"})
  event.remove({ id: "wardenloot:sculk_pickaxe_smithing"})
  event.remove({ id: "wardenloot:sculk_hoe_smithing"})
  event.remove({ id: "wardenloot:sculk_helmet_smithing"})
  event.remove({ id: "wardenloot:sculk_leggings_smithing"})
  event.remove({ id: "wardenloot:sculk_boots_smithing"})
  event.remove({ id: "wardentools:warden_axe_smithing" })
  event.remove({ id: "wardentools:warden_sword_smithing" })
  event.remove({ id: "wardentools:warden_shovel_smithing"})
  event.remove({ id: "wardentools:warden_pickaxe_smithing"})
  event.remove({ id: "wardentools:warden_hoe_smithing"})
  event.remove({ id: "wardentools:warden_helmet_smithing"})
  event.remove({ id: "wardentools:warden_chestplate_smithing"})
  event.remove({ id: "wardentools:warden_leggings_smithing"})
  event.remove({ id: "wardentools:warden_boots_smithing"})
  event.remove({ id: "deeperdarker:warden_axe_smithing"})
  event.remove({ id: "deeperdarker:warden_sword_smithing"})
  event.remove({ id: "deeperdarker:warden_shovel_smithing"})
  event.remove({ id: "deeperdarker:warden_pickaxe_smithing"})
  event.remove({ id: "deeperdarker:warden_hoe_smithing"})
  event.remove({ id: "deeperdarker:warden_helmet_smithing"})
  event.remove({ id: "deeperdarker:warden_chestplate_smithing"})
  event.remove({ id: "deeperdarker:warden_leggings_smithing"})
  event.remove({ id: "deeperdarker:warden_boots_smithing"})
  event.remove({ id: "additionaladditions:depth_meter"})
  event.remove({ id: "supplementaries:rope"})
  event.remove({ id: "supplementaries:rope_2"})
  event.remove({ id: "farmersdelight:rope"})
  event.remove({ id: "minecraft:jack_o_lantern"})
  event.remove({ id: "minecraft:enchanting_table"})
  event.remove({ id: "oxidized:copper_nugget"})
  event.remove({ id: "oxidized:copper_lantern"})
  event.remove({ id: "oxidized:copper_ingot_from_nugget"})
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
  event.remove({ id: "charm:extra_recipes/bread"})
  event.remove({ id: "oxidized:copper_kiln"})
  event.remove({ id: "oxidized:rose_gold_sword"})
  event.remove({ id: "charm:kiln"})
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
  event.remove({ id: "toms_storage:adv_wireless_terminal"})
  event.remove({ id: "toms_storage:wireless_terminal"})

  //replace input

  event.replaceInput({type: 'minecraft:smithing'}, 'additionaladditions:gold_ring', 'adventurez:gilded_netherite_fragment')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'vinery:tomato', 'farmersdelight:tomato')

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
  event.blasting('charm:smooth_glowstone', 'minecraft:glowstone') .xp(0.1)
  event.blasting('deeperdarker:sculk_stone', 'deeperdarker:cobbled_sculk_stone') .xp(0.1)
  event.blasting('deeperdarker:sculk_stone_slab', 'deeperdarker:cobbled_sculk_stone_slab') .xp(0.1)
  event.blasting('deeperdarker:sculk_stone_stairs', 'deeperdarker:cobbled_sculk_stone_stairs') .xp(0.1)
  event.blasting('deeperdarker:sculk_stone_wall', 'deeperdarker:cobbled_sculk_stone_wall') .xp(0.1)
  event.blasting('deeperdarker:gloomslate', 'deeperdarker:cobbled_gloomslate') .xp(0.1)
  event.blasting('deeperdarker:gloomslate_slab', 'deeperdarker:cobbled_gloomslate_slab') .xp(0.1)
  event.blasting('deeperdarker:gloomslate_stairs', 'deeperdarker:cobbled_gloomslate_stairs') .xp(0.1)
  event.blasting('deeperdarker:gloomslate_wall', 'deeperdarker:cobbled_gloomslate_wall') .xp(0.1)
  event.blasting('deeperdarker:smooth_gloomslate', 'deeperdarker:gloomslate') .xp(0.1)
  event.blasting('deeperdarker:smooth_gloomslate_slab', 'deeperdarker:gloomslate_slab') .xp(0.1)
  event.blasting('deeperdarker:smooth_gloomslate_stairs', 'deeperdarker:gloomslate_stairs') .xp(0.1)
  event.blasting('deeperdarker:smooth_gloomslate_wall', 'deeperdarker:gloomslate_wall') .xp(0.1)
  event.blasting('twigs:cracked_polished_calcite_bricks', 'twigs:polished_calcite_bricks') .xp(0.1)
  event.blasting('twigs:cracked_polished_schist_bricks', 'twigs:polished_schist_bricks') .xp(0.1)
  event.blasting('twigs:cracked_cobblestone_bricks', 'twigs:cobblestone_bricks') .xp(0.1)
  event.blasting('twigs:cracked_polished_tuff_bricks', 'twigs:polished_tuff_bricks') .xp(0.1)
  event.blasting('twigs:cracked_polished_bloodstone_bricks', 'twigs:polished_bloodstone_bricks') .xp(0.1)
  event.blasting('twigs:cracked_polished_rhyolite_bricks', 'twigs:polished_rhyolite_bricks') .xp(0.1)
  //event.blasting('twigs:cracked_polished_amethyst_bricks', 'twigs:polished_amethyst_bricks') .xp(0.1)
  event.blasting('immersive_weathering:cracked_bricks', 'minecraft:bricks') .xp(0.1)
  event.blasting('immersive_weathering:cracked_brick_stairs', 'minecraft:brick_stairs') .xp(0.1)
  event.blasting('immersive_weathering:cracked_brick_slab', 'minecraft:brick_slab') .xp(0.1)
  event.blasting('immersive_weathering:cracked_brick_wall', 'minecraft:brick_wall') .xp(0.1)
  event.blasting('immersive_weathering:cracked_stone_brick_stairs', 'minecraft:stone_brick_stairs') .xp(0.1)
  event.blasting('immersive_weathering:cracked_stone_brick_slab', 'minecraft:stone_brick_slab') .xp(0.1)
  event.blasting('immersive_weathering:cracked_stone_brick_wall', 'minecraft:stone_brick_wall') .xp(0.1)
  event.blasting('immersive_weathering:cracked_polished_blackstone_brick_stairs', 'minecraft:polished_blackstone_brick_stairs') .xp(0.1)
  event.blasting('immersive_weathering:cracked_polished_blackstone_brick_slab', 'minecraft:polished_blackstone_brick_slab') .xp(0.1)
  event.blasting('immersive_weathering:cracked_polished_blackstone_brick_wall', 'minecraft:polished_blackstone_brick_wall') .xp(0.1)
  event.blasting('immersive_weathering:cracked_nether_brick_stairs', 'minecraft:nether_brick_stairs') .xp(0.1)
  event.blasting('immersive_weathering:cracked_nether_brick_slab', 'minecraft:nether_brick_slab') .xp(0.1)
  event.blasting('immersive_weathering:cracked_nether_brick_wall', 'minecraft:nether_brick_wall') .xp(0.1)
  event.blasting('immersive_weathering:cracked_deepslate_brick_stairs', 'minecraft:deepslate_brick_stairs') .xp(0.1)
  event.blasting('immersive_weathering:cracked_deepslate_brick_slab', 'minecraft:deepslate_brick_slab') .xp(0.1)
  event.blasting('immersive_weathering:cracked_deepslate_brick_wall', 'minecraft:deepslate_brick_wall') .xp(0.1)
  event.blasting('immersive_weathering:cracked_deepslate_tile_stairs', 'minecraft:deepslate_tile_stairs') .xp(0.1)
  event.blasting('immersive_weathering:cracked_deepslate_tile_slab', 'minecraft:deepslate_tile_slab') .xp(0.1)
  event.blasting('immersive_weathering:cracked_deepslate_tile_wall', 'minecraft:deepslate_tile_wall') .xp(0.1)
  event.blasting('immersive_weathering:cracked_end_stone_brick_stairs', 'minecraft:end_stone_brick_stairs') .xp(0.1)
  event.blasting('immersive_weathering:cracked_end_stone_brick_slab', 'minecraft:end_stone_brick_slab') .xp(0.1)
  event.blasting('immersive_weathering:cracked_end_stone_brick_wall', 'minecraft:end_stone_brick_wall') .xp(0.1)
  event.blasting('immersive_weathering:cracked_end_stone_bricks', 'minecraft:end_stone_bricks') .xp(0.1)
  event.blasting('immersive_weathering:cracked_prismarine_brick_stairs', 'minecraft:prismarine_brick_stairs') .xp(0.1)
  event.blasting('immersive_weathering:cracked_prismarine_brick_slab', 'minecraft:prismarine_brick_slab') .xp(0.1)
  event.blasting('immersive_weathering:cracked_prismarine_brick_wall', 'immersive_weathering:prismarine_brick_wall') .xp(0.1)
  event.blasting('immersive_weathering:cracked_prismarine_bricks', 'minecraft:prismarine_bricks') .xp(0.1)
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

  //campfire

  event.campfireCooking('biomemakeover:dried_peat', 'biomemakeover:peat')
  event.campfireCooking('immersive_weathering:charred_planks', '#minecraft:planks')
  event.campfireCooking('immersive_weathering:charred_slab', '#minecraft:wooden_slabs')
  event.campfireCooking('immersive_weathering:charred_stairs', '#minecraft:wooden_stairs')
  event.campfireCooking('immersive_weathering:charred_fence', '#minecraft:wooden_fences')
  event.campfireCooking('immersive_weathering:charred_fence_gate', '#minecraft:wooden_fence_gates')
  event.campfireCooking('minecraft:charcoal', '#minecraft:logs_that_burn')
  event.campfireCooking('minecraft:green_dye', ['minecraft:cactus', 'biomemakeover:saguaro_cactus', 'biomemakeover:barrel_cactus', 'biomemakeover:barrel_cactus_flowered', 'creeperoverhaul:tiny_cactus'])
  event.campfireCooking('minecraft:lime_dye', ['minecraft:sea_pickle', 'culturaldelights:pickle'])

  //smithing

  event.smithing('wardenloot:sculk_helmet', 'wardentools:sculkified_netherite_helmet', 'deeperdarker:reinforced_echo_shard')
  event.smithing('wardenloot:sculk_chestplate', 'wardentools:sculkified_netherite_chestplate', 'deeperdarker:heart_of_the_deep')
  event.smithing('wardenloot:sculk_leggings', 'wardentools:sculkified_netherite_leggings', 'deeperdarker:reinforced_echo_shard')
  event.smithing('wardenloot:sculk_boots', 'wardentools:sculkified_netherite_boots', 'deeperdarker:reinforced_echo_shard')
  event.smithing('wardenloot:sculk_sword', 'wardentools:sculkified_netherite_sword', 'deeperdarker:reinforced_echo_shard')
  event.smithing('wardenloot:sculk_axe', 'wardentools:sculkified_netherite_axe', 'deeperdarker:reinforced_echo_shard')
  event.smithing('wardenloot:sculk_shovel', 'wardentools:sculkified_netherite_shovel', 'deeperdarker:reinforced_echo_shard')
  event.smithing('wardenloot:sculk_pickaxe', 'wardentools:sculkified_netherite_pickaxe', 'deeperdarker:reinforced_echo_shard')
  event.smithing('wardenloot:sculk_hoe', 'wardentools:sculkified_netherite_hoe', 'deeperdarker:reinforced_echo_shard')
  event.shapeless('2x adventurez:gilded_netherite_fragment', ['minecraft:netherite_ingot', 'minecraft:raw_gold_block'])
  event.smithing('additionaladditions:rose_gold_sword', 'minecraft:golden_sword', 'minecraft:copper_ingot')
  event.smithing('additionaladditions:rose_gold_axe', 'minecraft:golden_axe', 'minecraft:copper_ingot')
  event.smithing('additionaladditions:rose_gold_shovel', 'minecraft:golden_shovel', 'minecraft:copper_ingot')
  event.smithing('additionaladditions:rose_gold_hoe', 'minecraft:golden_hoe', 'minecraft:copper_ingot')
  event.smithing('additionaladditions:rose_gold_pickaxe', 'minecraft:golden_pickaxe', 'minecraft:copper_ingot')
  event.smithing('farmersknives:rose_gold_knife', 'farmersdelight:golden_knife', 'minecraft:copper_ingot')
  event.smithing('betternether:cincinnasite_sword_diamond', 'betternether:cincinnasite_sword', 'minecraft:diamond')
  event.smithing('betternether:cincinnasite_pickaxe_diamond', 'betternether:cincinnasite_pickaxe', 'minecraft:diamond')
  event.smithing('betternether:cincinnasite_shovel_diamond', 'betternether:cincinnasite_shovel', 'minecraft:diamond')
  event.smithing('betternether:cincinnasite_axe_diamond', 'betternether:cincinnasite_axe', 'minecraft:diamond')
  event.smithing('betternether:cincinnasite_hoe_diamond', 'betternether:cincinnasite_hoe', 'minecraft:diamond')

  //furnace

  event.smoking('vinery:donut', 'kubejs:donut_dough').xp(0.35)
  event.smoking('vinery:crusty_bread', 'kubejs:crusty_bread_dough').xp(0.35)
  event.smoking('vinery:chocolate_bread', 'kubejs:chocolate_dough').xp(0.35)
  event.smoking('vinery:milk_bread', 'kubejs:milk_bread_dough').xp(0.35)
  event.smoking('vinery:toast', 'kubejs:toast_dough').xp(0.35)

  //shapeless

  event.shapeless('3x farmersdelight:rope', ['3x supplementaries:flax'])
  event.shapeless('3x farmersdelight:rope', ['3x minecraft:string'])
  event.shapeless('3x farmersdelight:rope', ['3x farmersdelight:straw'])
  event.shapeless('minecraft:paper', ['3x #immersive_weathering:bark'])
  event.shapeless('farmersdelight:organic_compost', ['4x #immersive_weathering:bark','2x farmersdelight:straw','minecraft:dirt','2x minecraft:bone_meal'])
  event.shapeless('farmersdelight:organic_compost', ['2x #immersive_weathering:bark','farmersdelight:straw','minecraft:dirt','minecraft:bone_meal','overweight_farming:vegetable_compost'])
  event.shapeless('minecraft:jack_o_lantern', ['minecraft:carved_pumpkin','minecraft:torch'])
  event.shapeless('kubejs:milk_bread_dough', ['minecraft:sugar','farmersdelight:milk_bottle','farmersdelight:wheat_dough'])
  event.shapeless('kubejs:toast_dough', ['minecraft:sugar','farmersdelight:wheat_dough'])
  event.shapeless('kubejs:crusty_bread_dough', ['farmersdelight:wheat_dough','farmersdelight:wheat_dough','minecraft:water_bucket'])
  event.shapeless('kubejs:chocolate_dough', ['minecraft:sugar','minecraft:cocoa_beans','farmersdelight:wheat_dough'])
  event.shapeless('kubejs:donut_dough', ['minecraft:sugar','farmersdelight:milk_bottle','minecraft:sweet_berries','farmersdelight:wheat_dough','candlelight:chocolate'])
  
  //shaped

  event.shaped('3x betternether:stalagnate_bowl', [
    '   ',
    'S S',
    ' S '
  ], {
    S: 'betternether:stalagnate_planks'
  })

  event.shaped('candlelight:broccoli_beef', [
    '   ',
    'BSB',
    ' T '
  ], {
    S: 'minecraft:cooked_beef',
    B: 'candlelight:broccoli',
    T: 'candlelight:tray'
  })

  event.shaped("candlelight:broccoli_tomato", [
    '   ',
    'BSM',
    'CTP'
  ], {
    S: 'candlelight:vinegar',
    T: 'candlelight:tray',
    B: 'candlelight:broccoli',
    M: 'farmersdelight:tomato',
    C: 'minecraft:carrot',  
    P: 'minecraft:potato'
  })

  event.shaped("candlelight:bundt_cake", [
    '   ',
    'SES',
    'WWW'
  ], {
    S: 'minecraft:sugar',
    E: '#c:eggs',
    W: 'minecraft:wheat'
  })

  event.shaped("candlelight:croissant", [
    '   ',
    'WSW',
    'BWB'
  ], {
    B: 'candlelight:butter',
    S: 'minecraft:sugar',
    W: 'minecraft:wheat'
  })

  event.shaped("supplementaries:silver_lantern", [
    'NNN',
    'NTN',
    'NNN'
  ], {
    N: 'galosphere:silver_nugget',
    T: 'minecraft:torch'
  })

  //cooking

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:brown_mushroom"
    },
    {
      "item": "minecraft:red_mushroom"
    },
    {
      "tag": "minecraft:flowers"
    }
  ],
  "result": {
    "item": "minecraft:suspicious_stew"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "cookingtime": 200
  })
  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "biomemakeover:purple_glowshroom"
    },
    {
      "item": "biomemakeover:green_glowshroom"
    },
    {
      "item": "biomemakeover:orange_glowshroom"
    }
  ],
  "result": {
    "item": "biomemakeover:glowshroom_stew"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "cookingtime": 200
  })
  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "ecologics:coconut_slice"
    },
    {
      "item": "ecologics:crab_meat"
    }
  ],
  "result": {
    "item": "ecologics:tropical_stew"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:nether_wart"
    },
    {
      "item": "minecraft:nether_wart"
    },
    {
      "item": "minecraft:nether_wart"
    }
  ],
  "result": {
    "item": "betternether:stalagnate_bowl_wart"
  },
  "container": {
    "item": "betternether:stalagnate_bowl"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
     "item": "betternether:agave_leaf"
    },
    {
      "item": "betternether:black_apple"
    },
    {
      "item": "betternether:hook_mushroom"
    },
    {
      "item": "minecraft:nether_wart"
    }
  ],
  "result": {
    "item": "betternether:herbal_medicine"
  },
  "container": {
    "item": "betternether:stalagnate_bowl"
  },
  "cookingtime": 200
  })
  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
     "item": "betternether:agave_leaf"
    },
    {
      "item": "betternether:agave_leaf"
    },
    {
      "item": "betternether:agave_leaf"
    }
  ],
  "result": {
    "item": "betternether:agave_medicine"
  },
  "container": {
    "item": "betternether:stalagnate_bowl"
  },
  "cookingtime": 200
  })
  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
     "item": "betterend:gelatine"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:water_bucket"
    },
    {
      "item": "minecraft:sweet_berries"
    }
  ],
  "result": {
    "item": "betterend:sweet_berry_jelly"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
     "tag": "c:milk"
    },
    {
      "item": "expandeddelight:cheese_slice"
    },
    {
      "item": "farmersdelight:raw_pasta"
    },
    {
      "item": "spelunkery:salt"
    }
  ],
  "result": {
    "item": "expandeddelight:mac_and_cheese"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "vinery:cherry"
    }
  ],
  "result": {
    "item": "vinery:cherry_jam",
    "count": 4
  },
  "container": {
    "item": "vinery:cherry_jar"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "vinery:apple_mash"
    }
  ],
  "result": {
    "item": "vinery:apple_jam",
    "count": 4
  },
  "container": {
    "item": "vinery:cherry_jar"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:sweet_berries"
    }
  ],
  "result": {
    "item": "vinery:sweetberry_jam",
    "count": 4
  },
  "container": {
    "item": "vinery:cherry_jar"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:sugar"
    },
    {
      "tag": "vinery:grape"
    }
  ],
  "result": {
    "item": "vinery:grape_jam",
    "count": 4
  },
  "container": {
    "item": "vinery:cherry_jar"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "farmersdelight:tomato"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "tag": "vinery:wine"
    }
  ],
  "result": {
    "item": "candlelight:tomato_soup"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:brown_mushroom"
    },
    {
      "tag": "vinery:wine"
    },
    {
      "item": "candlelight:butter"
    },
    {
      "item": "farmersdelight:milk_bottle"
    }
  ],
  "result": {
    "item": "candlelight:mushroom_soup"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "farmersdelight:raw_pasta"
    },
    {
      "item": "candlelight:butter"
    },
    {
      "item": "farmersdelight:tomato"
    },
    {
      "item": "minecraft:sugar"
    }
  ],
  "result": {
    "item": "candlelight:pasta"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "farmersdelight:minced_beef"
    },
    {
      "item": "candlelight:butter"
    },
    {
      "item": "farmersdelight:tomato"
    },
    {
      "item": "farmersdelight:onion"
    }
  ],
  "result": {
    "item": "candlelight:bolognese"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "farmersdelight:milk_bottle"
    },
    {
      "item": "candlelight:butter"
    },
    {
      "item": "spelunkery:salt"
    }
  ],
  "result": {
    "item": "candlelight:mashed_potatoes"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "candlelight:strawberry"
    }
  ],
  "result": {
    "item": "candlelight:strawberry_jam",
    "count": 4
  },
  "container": {
    "item": "vinery:cherry_jar"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:cocoa_beans"
    },
    {
      "item": "farmersdelight:milk_bottle"
    },
    {
      "item": "candlelight:butter"
    }
  ],
  "result": {
    "item": "candlelight:chocolate"
  },
  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:salmon"
    },
    {
      "tag": "vinery:white_wine"
    },
    {
      "item": "candlelight:butter"
    }
  ],
  "result": {
    "item": "candlelight:salmon_wine"
  },
  "container": {
    "item": "minecraft:bowl"
  },

  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "candlelight:bolognese"
    },
    {
      "item": "farmersdelight:raw_pasta"
    },
    {
      "item": "candlelight:mozzarella"
    }
  ],
  "result": {
    "item": "candlelight:lasagne",
    "count": 6
  },
  "container": {
    "item": "minecraft:bowl"
  },

  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "farmersdelight:chicken_cuts"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "farmersdelight:milk_bottle"
    },
    {
      "item": "minecraft:brown_mushroom"
    },
    {
      "item": "minecraft:potato"
    }
  ],
  "result": {
    "item": "candlelight:fricasse"
  },
  "container": {
    "item": "minecraft:bowl"
  },

  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "candlelight:veggie_plate"
    },
    {
      "item": "minecraft:chicken"
    },
    {
      "tag": "vinery:white_wine"
    }
  ],
  "result": {
    "item": "candlelight:chicken"
  },
  "container": {
    "item": "minecraft:bowl"
  },

  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:cooked_beef"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    }
  ],
  "result": {
    "item": "candlelight:roastbeef_carrots"
  },
  "container": {
    "item": "minecraft:bowl"
  },

  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "farmersdelight:wheat_dough"
    },
    {
      "tag": "c:mushrooms"
    },
    {
      "item": "minecraft:beef"
    },
    {
      "item": "candlelight:butter"
    }
  ],
  "result": {
    "item": "candlelight:beef_wellington"
  },
  "container": {
    "item": "minecraft:bowl"
  },

  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:porkchop"
    },
    {
      "item": "minecraft:honey_bottle"
    },
    {
      "tag": "vinery:red_wine"
    }
  ],
  "result": {
    "item": "candlelight:pork_ribs",
    "count": 4
  },
  "container": {
    "item": "minecraft:bowl"
  },

  "cookingtime": 200
  })

  event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "vinery:apple_mash"
    }
  ],
  "result": {
    "item": "vinery:applesauce",
    "count": 4
  },
  "container": {
    "item": "minecraft:bowl"
  },

  "cookingtime": 200
  })
 
})