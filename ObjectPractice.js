var gameCharacter = {
    name: "Caleb", 
    xPos: 0,
    items: ["Sword", "Shield"],
    health: 20, 
    move: function(x) {
        this.xPos += x;
    },
}; 