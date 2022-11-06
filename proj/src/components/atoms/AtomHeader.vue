<template>
    <component :is="tag" :class="classname">
        {{content}}
    </component>
</template>

<script>
export default {
    name: 'AtomHeader', 
    props: ['tag', 'classname', 'content']
}
</script>