<template>
    <div class="volume-control">
        <div
            class="volume-control__input-wrapper"
            small
            color="orange"
            :ripple="false"
        >
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
    &__input-wrapper {
        background-color: #ff9800;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        display: flex;
        align-items: center;
        height: 28px;
        padding: 0 12px;
        width: 100%;
    }
    .volume-icon {
        cursor: pointer;
        color: black;

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
