<template>
    <v-list-item :to="link.route" exact>
        <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
    </v-list-item>
</template>
<script>
export default {
    name: 'MenuLink',
    props: {
        link: {
            type: Object,
            required: true,
        },
    },
}
</script>
