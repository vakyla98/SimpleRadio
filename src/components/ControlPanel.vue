<template>
    <div class="controls shadow main-grad pa-2">
        <audio ref="currentAudio" :src="url" />
        <v-btn
            class="controls__btn"
            small
            color="orange"
            @click="toggleStateAudio"
            :loading="isBuffering"
        >
            <v-icon v-if="isPlayed">mdi-pause</v-icon>
            <v-icon v-else>mdi-play</v-icon>
        </v-btn>
        <v-btn class="controls__btn" small color="orange" @click="runBack"
            ><v-icon>mdi-rewind-10</v-icon>
        </v-btn>
        <v-btn class="controls__btn" small color="orange" @click="restartStream"
            ><v-icon>mdi-reload</v-icon></v-btn
        >
        <Timer :time="time" />
        <input-range
            class=" controls__input-range"
            :isMuted="isMuted"
            @muteHandler="toggleMute"
            :volume.sync="volume"
        />
    </div>
</template>
<script>
import InputRange from './InputRange.vue'
import Timer from './Timer.vue'
import debounce from '../helpers/debounce.js'

let timeInterval

export default {
    name: 'ControlPanel',
    components: {
        InputRange,
        Timer,
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
            isBuffering: false,
            isMuted: false,
            time: 0,
            volume: '0.5',
        }
    },
    methods: {
        toggleStateAudio() {
            if (!this.isBuffering) {
                this.isPlayed ? this.stopAudio() : this.playAudio()
            }
        },
        async playAudio() {
            this.isBuffering = true
            await this.$refs.currentAudio.play()
            this.isBuffering = false
            this.isPlayed = true
        },
        stopAudio() {
            this.isPlayed = false
            this.$refs.currentAudio.pause()
        },
        async restartStream() {
            this.isPlayed = false
            this.time = 0
            await this.$refs.currentAudio.load()
            this.playAudio()
        },
        runBack() {
            this.time < 10 ? (this.time = 0) : (this.time -= 10)
            this.$refs.currentAudio.currentTime -= 10
        },
        mute() {
            this.isMuted = true
            this.$refs.currentAudio.muted = true
        },
        unmute() {
            this.isMuted = false
            this.$refs.currentAudio.muted = false
        },
        toggleMute() {
            this.isMuted === true ? this.unmute() : this.mute()
        },
        saveVolume: debounce(volume => {
            localStorage.setItem('volume', volume)
        }, 1000),
    },
    watch: {
        volume() {
            this.unmute()
            this.$refs.currentAudio.volume = this.volume
            this.saveVolume(this.volume)
        },
        url() {
            this.time = 0
            if (this.isPlayed) {
                this.restartStream()
            }
        },
    },
    created() {
        let volume = localStorage.getItem('volume')
        if (volume !== null) {
            this.volume = volume
        }
        timeInterval = setInterval(() => {
            if (this.isPlayed) this.time++
        }, 1000)
        // this.listenSpace = function(e) {
        //     if (e.code === 'Space') this.toggleStateAudio()
        // }
        // window.addEventListener('keyup', this.listenSpace)
    },
    beforeDestroy() {
        // window.removeEventListener('keyup', this.listenSpace)
        clearInterval(timeInterval)
    },
}
</script>

<style lang="scss">
@import '../style/mixins.scss';
.controls {
    align-self: center;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    &__btn {
        margin: 3px;
        flex-grow: 1;
        @include screen(min, 600px) {
            flex-grow: 0;
        }
    }
    &__input-range {
        margin: 3px;
        min-width: 100px;
    }
}
</style>
