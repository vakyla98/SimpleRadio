<template>
    <label for="volume">
        <v-btn small color="orange" :ripple="false"
            ><v-icon class='mr-2'>mdi-volume-high</v-icon
            ><input
                class="volume-input"
                ref="volumeInput"
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="1"
                v-model="currentVolume"
                step="0.01"
        /></v-btn>
    </label>
</template>
<script>
export default {
    name: 'InputRange',
    props: {
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
    watch: {
        volume() {
            console.log(this.volume)
        },
    },
}
</script>
<style lang="scss">
@import '../style/vars.scss';

input[type='range'] {
    height: 16px;
    width: 100%;
    padding: 0 2px;
    border: 2px solid black;
    border-radius: 8px;
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
    cursor: ew-resize;
    background: black;
}
</style>
