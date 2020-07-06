<template>
    <div class="volume-control control-wraper">
        <div class="volume-mute" @click="$emit('toggleMute')">
            <v-icon class="volume-icon mr-2">
                {{ isMuted ? icons.volumeOff : icons.volumeOn }}
            </v-icon>
        </div>
        <input
            class="volume-control__input"
            ref="volumeInput"
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1"
            v-model="currentVolume"
            step="0.01"
        />
    </div>
</template>
<script>
import { mdiVolumeOff, mdiVolumeHigh } from '@mdi/js'

export default {
    name: 'VolumeRange',
    props: {
        isMuted: {
            type: Boolean,
            required: true,
        },
        volume: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            icons: {
                volumeOff: mdiVolumeOff,
                volumeOn: mdiVolumeHigh,
            },
        }
    },
    computed: {
        currentVolume: {
            get() {
                return this.volume
            },
            set() {
                this.$emit('update:volume', this.$refs.volumeInput.value)
            },
        },
    },
}
</script>
