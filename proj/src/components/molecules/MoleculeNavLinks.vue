<template>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <AtomNavItem/>
        </ul>
    </div>
</template>

<script>
import AtomNavItem from '../atoms/AtomNavItem.vue'
export default{
    name: 'MoleculeNavLinks',
    components:{
        AtomNavItem
    }
}
</script>
