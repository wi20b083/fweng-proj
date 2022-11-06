<template>
    <component :is="tag" :class="class">
        {{content}}
    </component>
</template>

<script>
export default {
    name: 'AtomHeader', 
    props: ['tag', 'class', 'content']
}
</script>