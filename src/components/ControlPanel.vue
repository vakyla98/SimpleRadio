<template>
    <div class="controls shadow main-grad pa-2">
        <audio ref="currentAudio" :src="url" />
        <v-btn
            class="controls__btn"
            small
            color="orange"
            @click="toggleStateAudio"
            ><v-icon v-if="isPlayed">mdi-pause</v-icon>
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
            isMuted: false,
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
        async restartStream() {
            await this.$refs.currentAudio.load()
            this.playAudio()
        },
        runBack() {
            this.$refs.currentAudio.currentTime -= 10
        },
        changeVolume(newVolume) {
            this.volume = newVolume
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
            }
        },
        url() {
            console.log('catch')
            if (this.isPlayed) {
                this.restartStream()
            }
        },
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
