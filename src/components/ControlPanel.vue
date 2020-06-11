<template>
    <div class="controls shadow main-grad pa-2 ma-2">
        <audio ref="currentAudio" :src="url" />
        <v-btn class="ma-1" small color="orange" @click="toggleStateAudio"
            ><v-icon v-if="isPlayed">mdi-pause</v-icon>
            <v-icon v-else>mdi-play</v-icon>
        </v-btn>
        <v-btn class="ma-1" small color="orange" @click="runBack"
            ><v-icon>mdi-rewind-10</v-icon>
        </v-btn>
        <v-btn class="ma-1" small color="orange" @click="toStreamStart"
            ><v-icon>mdi-reload</v-icon></v-btn
        >
        <input-range
            class="ma-1"
            :volume.sync="volume"
            @changeVolume="changeVolume"
        />
    </div>
</template>
<script>
import InputRange from './InputRange.vue'
export default {
    name: 'ControlPanel',
    components: {
        InputRange,
    },
    props: {
        url: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isPlayed: false,
            volume: '0.5',
        }
    },
    methods: {
        toggleStateAudio() {
            this.isPlayed ? this.stopAudio() : this.playAudio()
        },
        stopAudio() {
            this.isPlayed = false
            this.$refs.currentAudio.pause()
        },
        playAudio() {
            this.isPlayed = true
            this.$refs.currentAudio.play()
        },
        toStreamStart() {
            this.$refs.currentAudio.load()
            this.playAudio()
        },
        runBack() {
            this.$refs.currentAudio.currentTime -= 10
        },
        changeVolume(newVolume) {
            this.volume = newVolume
        },
    },
    watch: {
        volume() {
            console.log(this.volume)
            this.$refs.currentAudio.volume = this.volume
        },
    },
}
</script>

<style lang="scss">
@import '../style/vars.scss';
@import '../style/mixins.scss';
.controls {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 10px;
    height: 50px;
}
</style>
