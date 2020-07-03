export default {
    state: {
        keys: {
            Space: false,
            Backspace: false,
            ArrowLeft: false,
            ArrowRight: false,
            ArrowUp: false,
            ArrowDown: false,
        },
    },
    mutations: {
        keyPressed(state, key) {
            if (state.keys[key] !== undefined) {
                state.keys[key] = true
            }
        },
        keyUnpressed(state, key) {
            if (state.keys[key] !== undefined) {
                state.keys[key] = false
            }
        },
    },
}
