<template>
<div>
    <h1>Creador de libros</h1>
    <form @submit.prevent="addLibro">
        <p>
            Nombre del libro: <input type="text" v-model="titulo">
        </p>

        <p>
            Nombre del autor: <input type="text" v-model="nombreAutor">
        </p>

        <p>
            Clasificacion: <input type="text" v-model="clasificacion">
        </p>

        <p>
            Editorial: <input type="text" v-model="editorial">
        </p>

        <p>
            ID: <input type="text" v-model="idLibro1">
        </p>
        <button type="submit">Enviar</button>

    </form>
</div>
</template>

<script>
import {
    bdd
} from '../firebase.js'
//import {
//   router
//} from '../router'
export default {
    name: "CrearL",
    data() {
        return {
            nombreAutor: "",
            clasificacion: "",
            editorial: "",
            idLibro1: "",
            titulo: "",

        }
    },
    methods: {
        async addLibro() {
            await bdd.collection('Libros').add({
                autor: this.nombreAutor,
                clasificacion: this.clasificacion,
                editorial: this.editorial,
                idlibro: this.idLibro1,
                titulo: this.titulo
            })
            alert("¡Libro Agregado!");
            this.nombreAutor = "";
            this.clasificacion = "";
            this.editorial = "";
            this.idLibro1 = "";
            this.titulo = "";
            //router.push("/")
        }
    }
}
</script>
