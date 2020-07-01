<template>
    <div></div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations(['keyPressed', 'keyUnpressed']),
    },
    created() {
        const component = this
        this.keydownHandler = function(e) {
            component.keyPressed(e.code)
        }
        this.keyupHandler = function(e) {
            component.keyUnpressed(e.code)
            //cюда добавить if с проверкой props а в props передавать строками кнопки котроые должны быть превент на этой странице(я гений кста)
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
