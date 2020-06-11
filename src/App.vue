<template>
    <v-app id="app">
        <div class="audio-wrapper">
            <audio src="http://62.80.190.246:8000/PRK128" controls></audio>
        </div>
        <ControlPanel :url="curUrl" />
    </v-app>
</template>

<script>
import ControlPanel from './components/ControlPanel'
export default {
    name: 'App',
    components: {
        ControlPanel,
    },
    data() {
        return {
            curUrl: 'http://online.radioplayer.ua/FlashRadio',
        }
    },
}
</script>
<style lang="scss">
.audio-wrapper {
    display: flex;
    flex-direction: column;
}
</style>
