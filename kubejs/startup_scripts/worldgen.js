WorldgenEvents.remove(event => {
event.removeOres(ores => {
    ores.blocks = [ 'expandeddelight:salt_ore', 'expandeddelight:deepslate_salt_ore' ]
  })
event.removeOres(ores => {
    ores.blocks = [ 'betterend:thallasium_ore', 'betterend:terminite_ore' ]
  })
})
