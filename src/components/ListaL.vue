<template>
<div>
    <h1>Bienvenido a mi biblioteca </h1>
    <h2>Contamos con estos libros</h2>
    <ul>
        <table align="center">
            <tbody>
                <li v-for="libros in librosArray" :key="libros.id">
                    <td>
                        <b>Titulo:</b> "{{libros.titulo}}"
                    </td>
                    <td>
                        <b>Autor:</b> "{{libros.autor}}"
                    </td>
                    <td>
                        <b>Clasificacion:</b> "{{libros.clasificacion}}"
                    </td>
                    <td>
                        <b>Editorial:</b> "{{libros.editorial}}"
                    </td>
                    <td>
                        <b>ID:</b> "{{libros.idlibro}}"
                    </td>
                    <router-link :to="{ name: 'EditarL', params: { id: libros.id}}"> Editar Libro</router-link>
                    <hr>
                </li>
            </tbody>
        </table>
    </ul>

</div>
</template>

<script>
import {
    bdd
} from '../firebase.js'
export default {
    name: "ListaL",
    data() {
        return {
            librosArray: []
        }

    },
    created() {
        this.listarLibros();
    },
    methods: {
        async listarLibros() {
            const libros1 = await bdd.collection("Libros").get();
            this.librosArray = libros1.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            console.log(this.librosArray)
        }
    },
}
</script>
