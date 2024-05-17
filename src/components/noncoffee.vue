<template>
    <div>
        <h2>
            {{ noncoffeeName }}
            <img src="/noncoffee.svg" v-show="MinumanIsFavorite">
        </h2>
        <p>{{ noncoffeeDesc }}</p>
        <button @click="toggleFavorite">Bintangi</button>
    </div>    
</template>

<script>
export default {
 props: ['noncoffeeName','noncoffeeDesc','isFavorite'],
    data() {
        return {
            noncoffeeIsFavorite: this.isFavorite
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