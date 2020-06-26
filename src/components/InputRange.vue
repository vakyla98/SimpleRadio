<template>
    <div class="volume-control">
        <div class="control-wraper">
            <div class="volume-mute" @click="$emit('muteHandler')">
                <v-icon class="volume-icon mr-2" v-if="isMuted">
                    mdi-volume-off
                </v-icon>
                <v-icon class="volume-icon mr-2" v-else>
                    mdi-volume-high
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
    </div>
</template>
<script>
export default {
    name: 'InputRange',
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
    methods: {},
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
<style lang="scss">
@import '../style/vars.scss';
.volume-control {
    display: flex;
    flex-grow: 1;
    // min-width: 250px;
    .volume-icon {
        cursor: pointer;
        color: black;
    }
    .control-wraper {
        flex-grow: 1;
    }
}

input[type='range'] {
    height: 16px;
    width: 100%;
    padding: 0 2px;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    -webkit-appearance: none;
    background-color: $orange;
}
input[type='range']::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    border-radius: 5px;
    background: black;
}
</style>
