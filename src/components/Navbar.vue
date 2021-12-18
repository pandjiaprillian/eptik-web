<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <img src="@/assets/images/bsi.png">
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{ name: 'privacy' }" class="nav-link" active-class="active">Infringements Of Privacy</router-link>
                    <router-link :to="{ name: 'forgery' }" class="nav-link" active-class="active">Data Forgery</router-link>
                    <router-link :to="{ name: 'espionage' }" class="nav-link" active-class="active">Cyber Espionage</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>