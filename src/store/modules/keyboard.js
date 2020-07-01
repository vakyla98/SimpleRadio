export default {
    state: {
        keys: {
            Space: false,
            Backspace: false,
        },
    },
    mutations: {
        keyPressed(state, key) {
            if (state.keys.hasOwnProperty(key)) {
                state.keys[key] = true
            }
        },
        keyUnpressed(state, key) {
            if (state.keys.hasOwnProperty(key)) {
                state.keys[key] = false
            }
        },
    },
}
