<template>
    <div class="star">
        <v-icon>
            {{ isFavourite ? icons.favourite : icons.notFavourite }}
        </v-icon>
    </div>
</template>
<script>
import { mdiStar, mdiStarOutline } from '@mdi/js'
export default {
    name: 'Star',
    data() {
        return {
            icons: {
                favourite: mdiStar,
                notFavourite: mdiStarOutline,
            },
        }
    },
    props: {
        isFavourite: { type: Boolean, default: false },
    },
}
</script>
<style lang="scss">
.star {
    position: absolute;
    align-self: flex-end;
    transform: translate(-8px, 8px);
}
</style>
