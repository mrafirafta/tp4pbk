<template>
  <div id="wrapper">
    <h1 style="font-size:50px;">SEKARSA COFFE AND SPACE</h1>
    <h1>Coffee</h1><br>
    <coffee
      v-for="x in coffee"
      :key="x.name"
      :coffee-name="x.name"
      :coffee-desc="x.desc"
      :is-favorite="x.favorite" 
      @toggle-favorite="receiveEmit" />
      <br>
    <h1>Non-Coffee</h1><br>
    <noncoffee
      v-for="x in noncoffee"
      :key="x.name"
      :noncoffee-name="x.name"
      :noncoffee-desc="x.desc"
      :is-favorite="x.favorite" 
      @toggle-favorite="receiveEmit" />
      <br>
      <h1>Tea</h1><br>
      <tea
      v-for="x in tea"
      :key="x.name"
      :tea-name="x.name"
      :tea-desc="x.desc"
      :is-favorite="x.favorite" 
      @toggle-favorite="receiveEmit" />
      
  </div>
</template>
<script>
import coffee from './components/coffee.vue';
import noncoffee from './components/noncoffee.vue';
import tea from './components/tea.vue';

export default {
  components: {
    coffee,
    noncoffee,
    tea
  },
  data() {
    return {
      coffee: [
        { name: 'Sekarsa', desc: 'Kopi Susu Gula Aren', favorite: true },
        { name: 'Serasa', desc: 'Kopi susu Caramel', favorite: false },
        { name: 'Seaksara', desc: 'Kopi Susu Pisang', favorite: true },
        { name: 'Selaksa', desc: 'Kopi Susu Pandan', favorite: true }
      ],
      noncoffee: [
        { name: 'Cookies & Cream', desc: 'Minuman yang dicampur dengan Oreo', favorite: true },
        { name: 'Vanilla Regar', desc: 'Minuman Rasa Vanilla dengan Regal', favorite: false },
        { name: 'Manggo Creamy Jelly', desc: 'Minuman Creamy Yang Rasanya Mangga Dicampur dengan Jelly', favorite: true },
        { name: 'Reed Velvet', desc: 'Minuman Creamy Rasa Manis', favorite: true }
      ],
      tea: [
        { name: 'Lemon Tea', desc: 'Minuman rasa Lemon', favorite: true },
        { name: 'Lcyh Tea', desc: 'Minuman yang segar disertai Buah Lcyhe', favorite: false },
        { name: 'Berry Lemon Tea', desc: 'Minuman rasa Lemon dengan rasa campuran berry', favorite: true }
      ],
    };
  },
  methods: {
    receiveEmit() {
      alert('Telah ditambahkan ke favorite!');
    }
  }
};
</script>

<style>
  #wrapper {
    display: block;
    flex-wrap: wrap;
    justify-content: center; /* Menambahkan ini untuk menata elemen ke tengah */
    gap: 20px; /* Mengganti margin dengan gap untuk pengaturan jarak yang lebih konsisten */
}

#wrapper > div {
    border: dashed black 1px;
    flex-basis: 150px; /* Menambah ukuran elemen untuk ruang yang lebih baik */
    padding: 20px; /* Meningkatkan padding untuk lebih banyak ruang di dalam elemen */
    background-color: rgb(110, 75, 253);
    margin-bottom:10px;
    border-radius: 10px; /* Menambahkan border-radius untuk tampilan yang lebih halus */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Menambahkan bayangan untuk efek mengambang */
    text-align: center; /* Menambahkan ini agar teks di dalam elemen terpusat */
    color: white; /* Mengubah warna teks untuk kontras yang lebih baik */
}

/* Tambahan untuk pengaturan responsif */
@media (max-width: 768px) {
    #wrapper > div {
        flex-basis: calc(50% - 20px); /* Mengatur ukuran elemen untuk layar yang lebih kecil */
    }
}

@media (max-width: 480px) {
    #wrapper > div {
        flex-basis: calc(100% - 20px); /* Mengatur ukuran elemen untuk layar yang sangat kecil */
    }
}

</style>