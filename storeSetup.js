const INITIAL_STATE = {mood: "(^ー^)"}

function moodReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "HAPPY":
            return {...state, mood: "^ㅂ^"};

        case "SAD":
            return {...state, mood: "Q.Q"};

        case "ANGRY":
            return {...state, mood: "ノಠ_ಠノ"};

        case "CONFUSED":
            return {...state, mood: "●.◉"}

        default:
            return state; 
    }
}

const store = Redux.createStore(moodReducer);