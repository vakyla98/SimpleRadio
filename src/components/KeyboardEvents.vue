<template>
    <div></div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'KeyboardEvent',
    props: {
        preventedKeys: Array,
    },
    methods: {
        ...mapMutations(['keyPressed', 'keyUnpressed']),
    },
    created() {
        const component = this
        this.keydownHandler = function(e) {
            if (component.preventedKeys.indexOf(e.code) !== -1) {
                //preventing default key behaviour
                e.preventDefault()
            }
            component.keyPressed(e.code)
        }
        this.keyupHandler = function(e) {
            component.keyUnpressed(e.code)
        }
        window.addEventListener('keydown', this.keydownHandler)
        window.addEventListener('keyup', this.keyupHandler)
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.keydownHandler)
        window.removeEventListener('keyup', this.keyupHandler)
    },
}
</script>

<style scoped>
div {
    display: none;
}
</style>
