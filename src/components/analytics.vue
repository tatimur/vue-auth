<template>
    <div>
        <h1>Аналитика</h1>
        <AreaChart/>
    </div>
</template>

<script>
    import AreaChart from "./AreaChart.vue";

    export default {
        mounted() {
            if (localStorage.getItem('leadhit-site-id') === null) {
                this.$router.push('/')
            }
        },
        components: {
            AreaChart
        },
        data() {
            return {
                chartData: {}
            }
        }
    }
</script>


<style>

</style>