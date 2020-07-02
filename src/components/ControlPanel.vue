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
            <v-icon v-if="isPlayed">{{ icons.pause }}</v-icon>
            <v-icon v-else>{{ icons.play }}</v-icon>
        </v-btn>
        <v-btn class="controls__btn" small color="orange" @click="runBack"
            ><v-icon>{{ icons.rewind }}</v-icon>
        </v-btn>
        <v-btn class="controls__btn" small color="orange" @click="restartStream"
            ><v-icon>{{ icons.reload }}</v-icon></v-btn
        >
        <Timer :time="time" />
        <volume-range
            class=" controls__input-range"
            :isMuted="isMuted"
            @muteHandler="toggleMute"
            :volume.sync="volume"
        />
    </div>
</template>
<script>
import VolumeRange from './VolumeRange.vue'
import Timer from './Timer.vue'
import debounce from '../helpers/debounce.js'
import { mapState } from 'vuex'

import { mdiPlay, mdiPause, mdiReload, mdiRewind10 } from '@mdi/js'

let timeInterval

export default {
    name: 'ControlPanel',
    components: {
        VolumeRange,
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
            icons: {
                play: mdiPlay,
                pause: mdiPause,
                reload: mdiReload,
                rewind: mdiRewind10,
            },
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
            try {
                await this.$refs.currentAudio.play()
                this.isBuffering = false
                this.isPlayed = true
            } catch {
                this.isBuffering = false
                this.isPlayed = false
                console.warn('[CE]-[Too ofter play reques]')
            }
        },
        stopAudio() {
            this.isPlayed = false
            this.$refs.currentAudio.pause()
        },
        async restartStream() {
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
    computed: {
        ...mapState({
            keys: state => state.keyboardModule.keys,
        }),
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
                this.stopAudio()
                this.restartStream()
            }
        },
        keys: {
            deep: true,
            handler() {
                if (this.keys['Space']) {
                    this.toggleStateAudio()
                }
                if (this.keys['Backspace']) {
                    this.runBack()
                }
                if (this.keys['ArrowUp']) {
                    this.volume > 0.9
                        ? (this.volume = '1')
                        : (this.volume = +this.volume + 0.1 + '')
                }
                if (this.keys['ArrowDown']) {
                    this.volume < 0.1
                        ? (this.volume = '0')
                        : (this.volume = +this.volume - 0.1 + '')
                }
                //input range work only with string, '' faster than toSting()
            },
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
    },
    beforeDestroy() {
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
