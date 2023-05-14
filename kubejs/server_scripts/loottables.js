LootJS.modifiers((event) => {
    event.enableLogging()
        event.addEntityLootModifier("minecraft:warden")
        .removeLoot("wardenloot:warden_heart")
        .removeLoot("wardentools:heart_of_the_warden")
        .removeLoot("wardentools:sculk_crystal_block")
        .removeLoot("wardentools:soul_of_the_warden")
		.addLoot("deeperdarker:heart_of_the_deep");

    event.addBlockLootModifier("betterend:pythadendron_chest")
        .removeLoot("betterend:pythadendron_chest")
        .addLoot("minecraft:chest");

    event.addBlockLootModifier("betterend:end_lotus_chest")
        .removeLoot("betterend:end_lotus_chest")
        .addLoot("minecraft:chest");

    event.addBlockLootModifier("betterend:mossy_glowshroom_chest")
        .removeLoot("betterend:mossy_glowshroom_chest")
        .addLoot("minecraft:chest");

    event.addBlockLootModifier("betterend:lacugrove_chest")
        .removeLoot("betterend:lacugrove_chest")
        .addLoot("minecraft:chest");

    event.addBlockLootModifier("betterend:tenanea_chest")
        .removeLoot("betterend:tenanea_chest")
        .addLoot("minecraft:chest");

    event.addBlockLootModifier("betterend:helix_tree_chest")
        .removeLoot("betterend:helix_tree_chest")
        .addLoot("minecraft:chest");

    event.addBlockLootModifier("betterend:umbrella_tree_chest")
        .removeLoot("betterend:umbrella_tree_chest")
        .addLoot("minecraft:chest");

    event.addBlockLootModifier("betterend:jellyshroom_chest")
        .removeLoot("betterend:jellyshroom_chest")
        .addLoot("minecraft:chest");

    event.addBlockLootModifier("betterend:lucernia_chest")
        .removeLoot("betterend:lucernia_chest")
        .addLoot("minecraft:chest");

    event.addBlockLootModifier("betterend:dragon_tree_chest")
        .removeLoot("betterend:dragon_tree_chest")
        .addLoot("minecraft:chest");
});