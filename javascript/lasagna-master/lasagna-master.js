export function cookingStatus (timer) {
    switch (timer) {
        case 0: 
        return 'Lasagna is done.';
        case undefined:
        return 'You forgot to set the timer.';
        default:
        return 'Not done, please wait.';            
    }
}

export function preparationTime (layers, time = 2) {
    return layers.length * time;
}

export function quantities (layers) {
    let noodles = layers.filter(layer => layer === 'noodles').length * 50;
    let sauce = layers.filter(layer => layer === 'sauce').length * 0.2;
    return {noodles, sauce};

    /* outras possibilidades:
     return {
        noodles: layers.filter(layer => layer === 'noodles').length*50,
        sauce: layers.filter(layer => layer === 'sauce').length*0.2
    } 

    OU (+lento)

    const quantis = { noodles: 0, sauce: 0 };
    fewLayers.forEach(layers => {
        if (layers === 'noodles') quantis.noodles += 50
        else if (layers === 'sauce') quantis.sauce += 0.2
    }
    );
    return quantis;

    OU (+rápido)

    Usar for
    */
} 

export function addSecretIngredient (friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe (recipe, portions) {
    const novo = {};
    for (const ingredients in recipe) {
        novo[ingredients] = (recipe[ingredients]/2) * portions; 
    }
    return novo;
}