<template>
    <tbody>
        <tr v-for="product in products" v-bind:key="product.id">
            <th scope="row">{{product.id}}</th>
            <td>{{product.name}}</td>
        </tr>
    </tbody>
</template>

<script>

export default {
   name:'MoleculeTableBody',
   data() {
        return {
            products:[
                {id: 1, name: 'beer'},
                {id: 2, name: 'vine'},
                {id: 3, name: 'soda'},
                {id: 4, name: 'cola'},
            ]
        }
    },
}
</script>