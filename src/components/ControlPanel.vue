<template>
    <div class="controls">
        <audio ref="currentAudio" :src="url" />
        <button ref="playBtn" @click="toggleStateAudio">X</button>
        <button ref="backBtn" @click="runBack">Back</button>
        <button ref="backBtn" @click="toStreamStart">To start</button>
        <input-range :volume="volume" @changeVolume="changeVolume" />
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
