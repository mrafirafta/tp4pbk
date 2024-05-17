<template>
    <div>
        <h2>
            {{ coffeeName }}
            <img src="/coffee.svg" v-show="coffeeIsFavorite">
        </h2>
        <p>{{ coffeeDesc }}</p>
        <button @click="toggleFavorite">Bintangi</button>
    </div>
</template>

<script>
export default {
    props: ['coffeeName','coffeeDesc','isFavorite'],
    data() {
        return {
            coffeeIsFavorite: this.isFavorite
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