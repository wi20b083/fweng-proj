<template>
    <component :is="tag">
        {{content}}
    </component>
</template>

<script>
export default {
    name: 'AtomHeader', 
    props: ['tag', 'content']
}
</script>