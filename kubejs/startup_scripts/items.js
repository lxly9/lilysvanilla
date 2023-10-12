// priority: 0
StartupEvents.registry('item', event => {
	event.create('wheat_flour').displayName('Wheat Flour').parentModel("minecraft:item/generated").texture("kubejs:assets/wheat_flour") 
	event.create('chocolate_bar').displayName('Chocolate Bar').maxStackSize(16).parentModel("minecraft:item/generated").texture("kubejs:assets/bar_of_chocolate") 
})

