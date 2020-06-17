<template>
    <div class="controls shadow main-grad pa-2">
        <audio ref="currentAudio" :src="url" />
        <v-btn
            class="controls__btn"
            small
            color="orange"
            @click="toggleStateAudio"
        >
            <v-progress-circular
                v-if="isBuffering"
                class="loading-overlay__spinner"
                :size="20"
                :width="2"
                color="black"
                indeterminate
            ></v-progress-circular>
            <v-icon v-else-if="isPlayed">mdi-pause</v-icon>
            <v-icon v-else>mdi-play</v-icon>
        </v-btn>
        <v-btn class="controls__btn" small color="orange" @click="runBack"
            ><v-icon>mdi-rewind-10</v-icon>
        </v-btn>
        <v-btn class="controls__btn" small color="orange" @click="restartStream"
            ><v-icon>mdi-reload</v-icon></v-btn
        >
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
            isBuffering: false,
            isMuted: false,
            volume: '0.5',
            isCooldown: false,
        }
    },
    methods: {
        toggleStateAudio() {
            if (!this.isBuffering) {
                this.isPlayed ? this.stopAudio() : this.playAudio()
            }
        },
        stopAudio() {
            this.isPlayed = false
            this.$refs.currentAudio.pause()
        },
        async playAudio() {
            this.isBuffering = true
            await this.$refs.currentAudio.play()
            this.isBuffering = false
            this.isPlayed = true
        },
        async restartStream() {
            await this.$refs.currentAudio.load()
            this.playAudio()
        },
        runBack() {
            this.$refs.currentAudio.currentTime -= 10
        },
        toggleMute() {
            this.isMuted = !this.isMuted
            if (this.isMuted === true) {
                this.$refs.currentAudio.volume = 0
            } else {
                this.$refs.currentAudio.volume = this.volume
            }
        },
    },
    watch: {
        volume() {
            if (this.isMuted === true) {
                this.$refs.currentAudio.volume = 0
            } else {
                this.$refs.currentAudio.volume = this.volume
                if (!this.isCooldown) {
                    //debounser to avoid multiple localStorage rewriting
                    this.isCooldown = true
                    setTimeout(() => {
                        this.isCooldown = false
                        localStorage.setItem('volume', this.volume)
                    }, 1000)
                }
            }
        },
        url() {
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
