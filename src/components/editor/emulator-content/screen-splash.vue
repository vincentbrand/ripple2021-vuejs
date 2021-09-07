<template>
<div class="emulator-content d-flex flex-center"  v-if="RouterIncludes.includes($route.path)">
    <img :src="imgsrc" style="width: 100px;height: 100px;">
</div>
</template>

<script>
export default {
    props: [
        "imgsrc"
    ],

    data: () => ({
        RouterIncludes: ['/emulator/splash', '/emulator/navigation', '/emulator/setting']
    })
}
</script>
