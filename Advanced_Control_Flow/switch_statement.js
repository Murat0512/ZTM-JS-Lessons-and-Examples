function moveCommand(direction){
    var whatHappens;

    switch(direction){
        case"forward": whatHappens = "You emncountered a Troll"; 
        break;
        case "backward": whatHappens = "You are at home";
        break; 
        case "left" : whatHappens = "You came up to a river";
        break;
        case "right" : whatHappens = "You found a treasure"; 
        break;
        default: whatHappens = "Please enter a direction";

    }
    return whatHappens;
}

console.log(moveCommand("forward"));
console.log(moveCommand("right"));
console.log(moveCommand("backward"));
console.log(moveCommand("left"));   
console.log(moveCommand("up"));
