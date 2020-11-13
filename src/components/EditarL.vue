<template>
<body>
    <div>
        <h1>Actualizar libros</h1>
        <form @submit.prevent="addActualizacion">
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
        <button @click="borrarLibro" type="submit">Eliminar Libro</button>
    </div>
</body>
</template>

<script>
import {
    bdd
} from '../firebase.js'
//import {
//   router
//} from '../router'
export default {
    name: "EditarL",
    data() {
        return {
            nombreAutor: "",
            clasificacion: "",
            editorial: "",
            idLibro1: "",
            titulo: "",
            visible: false,
        }
    },
    created() {
        this.getLibro();
    },
    methods: {
        async getLibro() {
            const id = this.$route.params.id;
            const data = await bdd.collection('Libros').doc(id).get();
            const lib = data.data();

            this.nombreAutor = lib.autor;
            this.clasificacion = lib.clasificacion;
            this.editorial = lib.editorial;
            this.idLibro1 = lib.idlibro;
            this.titulo = lib.titulo;
        },
        async addActualizacion() {
            const id = this.$route.params.id;
            await bdd.collection("Libros").doc(id).set({
                autor: this.nombreAutor,
                clasificacion: this.clasificacion,
                editorial: this.editorial,
                idlibro: this.idLibro1,
                titulo: this.titulo,

            })
            alert("Libro actualizado!");
        },
        async borrarLibro() {
            const id = this.$route.params.id;
            await bdd.collection("Libros").doc(id).delete();
            this.nombreAutor = "";
            this.clasificacion = "";
            this.editorial = "";
            this.idLibro1 = "";
            this.titulo = "";
            alert("Libro borrado!");
        },
    }
}
</script>
