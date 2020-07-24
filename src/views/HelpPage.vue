<template>
    <div class="help-page">
        <h3 class="key-description">
            You can use keyboard to controll player.
        </h3>
        <ul class="key-list">
            <li
                class="key"
                v-for="action in keyboardActions"
                :item="item"
                :key="action.name"
            >
                <div class="col-left">
                    <span class="key-name">{{ action.name }}</span>
                </div>
                <div class="col-center">
                    <span class="dash">&mdash;</span>
                </div>
                <div class="col-right">
                    <span class="key-text"> {{ action.describe }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'HelpPage',
    data() {
        return {
            keyboardActions: [
                { name: 'Space', describe: 'Pause/Unpause' },
                { name: 'Backspace', describe: 'Rewind 10 second' },
                { name: 'ArrowLeft', describe: ' Previous station' },
                { name: 'ArrowRight', describe: 'Next station' },
                { name: 'ArrowUp', describe: 'Volume Up' },
                { name: 'ArrowDown', describe: 'Volume Down' },
            ],
        }
    },
}
</script>
<style lang="scss">
.key-description {
    text-align: center;
    margin: 20px 0;
}
.key-list {
    padding: 0 !important;
}
.key {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    &-name {
        background-color: #ff9800;
        border-radius: 4px;
        line-height: 32px;
        padding: 0px 12px;
    }
    .col-left,
    .col-right {
        flex-basis: 48%;
    }
    .col-center {
        flex-basis: 20px;
        margin: 0 10px;
        text-align: center;
    }
    .col-left {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
