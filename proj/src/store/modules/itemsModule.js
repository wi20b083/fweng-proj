const state = {
    items:[
        
        {
            id: 1,
            name: "Beer",
            imagesource: require("../../assets/beer.png"),
            alttext: "Image of beer",
        },
        {
            id: 2,
            name: "Wine",
            imagesource: require("../../assets/wine.png"),
            alttext: "image of wine",
        },   
        {
            id: 3,
            name: "Berliner Luft",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "image of wine",
        },            
    ]
}

const getters = {
    getItemsById: (state) => (id) =>{
        debugger;
        return state.items.filter(item => item.id === id)
    }
}

export default{
    namespaced: true,
    state,
    getters,
}