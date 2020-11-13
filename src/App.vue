<template>
<div>
    <div id="nav">
        <router-link to="/">Listar</router-link> |
        <router-link to="/create">Crear</router-link>
    </div>
    <router-view />
</div>
</template>

<style>
#app {
    top: 40%;
    font-family: 'Goldman', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #ffffff;
}

#nav a.router-link-exact-active {
    color: #ffffff;
}
</style>
