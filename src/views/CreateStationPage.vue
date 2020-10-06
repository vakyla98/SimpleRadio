<template>
    <form class="container form-container">
        <span>Current count stations: {{ stations.length }} </span>
        <v-text-field
            v-model.trim="image"
            :error-messages="imageErrors"
            label="Image URL"
            required
            @input="$v.image.$touch()"
            @blur="$v.image.$touch()"
        ></v-text-field>
        <v-text-field
            v-model.trim="name"
            :error-messages="nameErrors"
            label="Station name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
            v-model.trim="route"
            :error-messages="routeErrors"
            label="Station route"
            required
            @input="$v.route.$touch()"
            @blur="$v.route.$touch()"
        ></v-text-field>
        <v-text-field
            v-model.trim="url"
            :error-messages="urlErrors"
            label="Station URL"
            required
            @input="$v.url.$touch()"
            @blur="$v.url.$touch()"
        ></v-text-field>

        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
    </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, url } from 'vuelidate/lib/validators'
import { mapActions, mapMutations, mapState } from 'vuex'
import { stationService } from '../services'

export default {
    mixins: [validationMixin],
    validations: {
        image: { required, url },
        name: { required },
        route: { required },
        url: { required, url },
    },

    data: () => ({
        image: '',
        name: '',
        route: '',
        url: '',
    }),

    computed: {
        ...mapState({
            stations: state => state.stationsModule.stations,
        }),
        imageErrors() {
            const errors = []
            if (!this.$v.image.$dirty) return errors
            !this.$v.image.required && errors.push('Image URL is required')
            !this.$v.image.url && errors.push('This is not URL')
            return errors
        },
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.required && errors.push('Name is required')
            return errors
        },
        routeErrors() {
            const errors = []
            if (!this.$v.route.$dirty) return errors
            !this.$v.route.required && errors.push('Route is required')
            return errors
        },
        urlErrors() {
            const errors = []
            if (!this.$v.url.$dirty) return errors
            !this.$v.url.required && errors.push('URL is required')
            !this.$v.url.url && errors.push('This is not URL')
            return errors
        },
    },

    methods: {
        ...mapActions(['fetchStations']),
        ...mapMutations(['changeLoadingState']),
        async submit() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            } else {
                let data = {
                    image: this.image,
                    name: this.name,
                    route: this.route,
                    url: this.url,
                }
                await stationService.addStation(data)
                await this.fetchStations() //update storage
                this.clear()
            }
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.url = ''
            this.route = ''
            this.image = ''
        },
    },
}
</script>
<style lang="scss">

</style>
