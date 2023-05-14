WorldgenEvents.remove(event => {
event.removeOres(ores => {
    ores.blocks = [ 'expandeddelight:salt_ore', 'expandeddelight:deepslate_salt_ore' ]
  })
})

StartupEvents.registry('block', event => {
  event.create('birch_branch', 'wall')
       .material('wood')
       .hardness(2)
       .tagBlock('minecraft:mineable/axe')

  event.create('oak_branch', 'wall')
       .material('wood')
       .hardness(2)
       .tagBlock('minecraft:mineable/axe')
})

StartupEvents.registry('item', event => {
    event.create('toast_dough', 'basic')
        .maxStackSize(64)
})

StartupEvents.registry('item', event => {
    event.create('chocolate_dough', 'basic')
        .maxStackSize(64)
})

StartupEvents.registry('item', event => {
    event.create('milk_bread_dough', 'basic')
        .maxStackSize(64)
})

StartupEvents.registry('item', event => {
    event.create('crusty_bread_dough', 'basic')
        .maxStackSize(64)
})
StartupEvents.registry('item', event => {
    event.create('donut_dough', 'basic')
        .maxStackSize(64)
})