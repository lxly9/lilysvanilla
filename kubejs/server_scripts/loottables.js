LootJS.modifiers((event) => {

    event.addBlockLootModifier("betterend:pythadendron_chest")
        .replaceLoot("betterend:pythadendron_chest", "minecraft:chest");

    event.addBlockLootModifier("betterend:end_lotus_chest")
        .replaceLoot("betterend:end_lotus_chest", "minecraft:chest");

    event.addBlockLootModifier("betterend:mossy_glowshroom_chest")
        .replaceLoot("betterend:mossy_glowshroom_chest", "minecraft:chest");

    event.addBlockLootModifier("betterend:lacugrove_chest")
        .replaceLoot("betterend:lacugrove_chest", "minecraft:chest");

    event.addBlockLootModifier("betterend:tenanea_chest")
        .replaceLoot("betterend:tenanea_chest", "minecraft:chest");

    event.addBlockLootModifier("betterend:helix_tree_chest")
        .replaceLoot("betterend:helix_tree_chest", "minecraft:chest");

    event.addBlockLootModifier("betterend:umbrella_tree_chest")
        .replaceLoot("betterend:umbrella_tree_chest", "minecraft:chest");

    event.addBlockLootModifier("betterend:jellyshroom_chest")
        .replaceLoot("betterend:jellyshroom_chest", "minecraft:chest");

    event.addBlockLootModifier("betterend:lucernia_chest")
        .replaceLoot("betterend:lucernia_chest", "minecraft:chest");

    event.addBlockLootModifier("betterend:dragon_tree_chest")
        .replaceLoot("betterend:dragon_tree_chest", "minecraft:chest");

    event.addBlockLootModifier("betternether:stalagnate_chest")
        .replaceLoot("betternether:stalagnate_chest", "minecraft:chest");

    event.addBlockLootModifier("betternether:nether_reed_chest")
        .replaceLoot("betternether:nether_reed_chest", "minecraft:chest");

    event.addBlockLootModifier("betternether:nether_sakura_chest")
        .replaceLoot("betternether:nether_sakura_chest", "minecraft:chest");

    event.addBlockLootModifier("betternether:willow_chest")
        .replaceLoot("betternether:willow_chest", "minecraft:chest");

    event.addBlockLootModifier("betternether:rubeus_chest")
        .replaceLoot("betternether:rubeus_chest", "minecraft:chest");

    event.addBlockLootModifier("betternether:wart_chest")
        .replaceLoot("betternether:wart_chest", "minecraft:chest");

    event.addBlockLootModifier("betternether:mushroom_fir_chest")
        .replaceLoot("betternether:mushroom_fir_chest", "minecraft:chest");

    event.addBlockLootModifier("betternether:nether_mushroom_chest")
        .replaceLoot("betternether:nether_mushroom_chest", "minecraft:chest");

    event.addBlockLootModifier("betternether:anchor_tree_chest")
        .replaceLoot("betternether:anchor_tree_chest", "minecraft:chest");

    //nether
    event.addLootTableModifier("minecraft:chests/bastion_treasure", "minecraft:chests/ruined_portal", "betternether:chests/city_common", "minecraft:chests/bastion_other", "betternether:chests/city", "minecraft:chests/nether_bridge", "betternether:chests/library", "betternether:chests/wither_tower_bonus", "minecraft:chests/bastion_hoglin_stable", "betternether:chests/wither_tower", "minecraft:chests/bastion_hoglin_bridge")
        .removeLoot("betternether:bowl_upgrade_smithing_template")
        .removeLoot("additionaladditions:gilded_netherite_upgrade")
        .removeLoot("betternether:cincinnasite_diamond_upgrade_smithing_template")
        .removeLoot("betternether:flaming_ruby_upgrade_smithing_template")
        .removeLoot(/betternether:flaming_ruby_(pickaxe|sword|axe|shovel|hoe|helmet|chestplate|leggings|boots)/);

    //end
    event.addLootTableModifier("betterend:chests/biome", "betterend:chests/end_village_loot", "betterend:chests/end_village_template_loot", "minecraft:chests/end_city_treasure", "betterend:chests/shadow_forest", "betterend:chests/umbrella_jungle", "betterend:chests/lantern_woods", "betterend:chests/chorus_forest", "betterend:chests/end_village_bonus_loot")
        .removeLoot("betterend:handle_attachment_smithing_template")
        .removeLoot("betterend:plate_upgrade_smithing_template")
        .removeLoot("betterend:leather_handle_attachment_smithing_template")
        .removeLoot("betterend:leather_wrapped_stick")
        .removeLoot("betterend:tool_assembly_smithing_template")
        .removeLoot(/betterend:(thallasium_|terminite_|aeternium)(shovel|hoe|pickaxe|sword|axe|upgrade_smithing_template|shovel_head|sword_blade|forged_blade|ingot|raw)/)
})