<template>
    <div>
        <h2>
            {{ teaName }}
            <img src="/tea.svg" v-show="teaIsFavorite">
        </h2>
        <p>{{ teaDesc }}</p>
        <button @click="toggleFavorite">Bintangi</button>
    </div>
</template>

<script>
export default {
    props: ['teaName','teaDesc','isFavorite'],
    data() {
        return {
            teaIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
            this.$emit('toggle-favorite');
        }
    }
};
</script>

<style scoped>
img {
        height: 1.5em;
        float: right;
    }

</style>