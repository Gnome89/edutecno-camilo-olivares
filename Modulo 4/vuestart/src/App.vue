<template>
<div id="app">
    <h2>Cantidad de frutas : {{ cantidadDeFrutas }}</h2>
<button @click="mostrarComponente">Mostrar o Ocultar</button>
    <div v-if="mostrar">
{{ message }}
<img :src="rutaImagen" />
<input v-model="message" />
<helloVue v-if="checked"/>
  <input type="checkbox" id="checkbox" v-model="checked" />
    {{ checked }}
<ul>
<li v-for="(fruta, index) in frutas" :key="index">
<span>{{ fruta.name }}</span>
</li>
</ul>
</div>
</div>
</template>

<script>
import HelloVue from "./helloVue.vue";

export default {
name: "App",
components: {
HelloVue    
},
data() {
return {
    frutas: [{ name: "Frutillas"}, {name: "Manzanas"},  {name:"Kiwis"}],
    mostrar: true,
message: 'Hola Desafío Latam!!! 🤟🤟',
rutaImagen: 
"https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png"   
};
},
  methods: {
    mostrarComponente() {
      alert("Soy un metodo");
      this.mostrar = !this.mostrar;
    }
  }
};
</script>

<style>
.rayado  {
  text-decoration: line-through;
}
</style>