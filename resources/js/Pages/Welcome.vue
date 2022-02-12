<template>
    <Head title="Mohamed Shawky Portfolio"/>
    <Header/>
    <MyWork/>
    <Client/>
    <Hire/>
</template>

<script>
import {defineComponent} from 'vue'
import {Head, Link} from '@inertiajs/inertia-vue3';
import Header from '@/Components/Home/Header'
import MyWork from "@/Components/Home/MyWork";
import Client from "@/Components/Home/Client";
import Hire from "@/Components/Home/Hire";

export default defineComponent({
    components: {
        Head,
        Link,
        Header,
        MyWork,
        Client,
        Hire,
    },

    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
    },
    methods: {
        updateList: function () {
            const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
                return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
            });

            document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

            document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
        }
    },
    mounted() {
        this.updateList();
        window.addEventListener('scroll', () => {
            this.updateList();
        })
    }
})
</script>
