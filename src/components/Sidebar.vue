<template>
    <!-- Sidebar  -->
    <nav id="sidebar" class="sidenav" style="overflow-y: hidden;">
        <div class="sidebar-header">
            <img src="../assets/img/logo.svg" alt="laba" style="width: 80%;" class="ml-4">
        </div>
        <ul class="list-unstyled components mt-5">
            <li class="">
                <router-link to="/" class="afri__1"><img src="../assets/img/window.svg" /><span
                        class="afri__1_1 ml-3">Dashboard</span></router-link>
            </li>
            <li class="mt-2">
                <router-link to="/"><img src="../assets/img/company.svg" /><span class="ml-3">Clients</span></router-link>
            </li>
            <li class="mt-2">
                <router-link to="/"><img src="../assets/img/campaign.svg" /><span class="ml-3">Campaigns</span></router-link>
            </li>
            <li class="mt-2">
                <router-link to="/"><img src="../assets/img/target.svg" /><span class="ml-3">Audience</span></router-link>
            </li>
            <li class="mt-2">
                <router-link to="/"><img src="../assets/img/dice.svg" /><span class="ml-3">Games</span></router-link>
            </li>
            <li class="mt-2">
                <router-link to="/"><img src="../assets/img/coupon.svg" /><span class="ml-3 pt-3">Redemption</span></router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'sidebar',
}
</script>

<style scoped>

</style>