<template>
<div class="col-xl-3 col-lg-3">
    <div class="card shadow mb-4 emulator" :style="RouterIncludes.includes($route.path)?bgStyle:''">
        <div class="card-body" style="padding: 6px;overflow: auto;">
            <!-- tabbar -->
            <div class="tabbar-bottom" v-if="!$route.path.includes('splash')" :style="'background:' + config.navigation.bg ">
                <div class="tabbar-bottom-item"
                    v-for="(item, idx) in config.navigation"
                    :key="idx" @click="cutActiveIdx(idx)"
                    :style="'color:' + config.layout.colors.primary "
                >
                    <span :class="'fas fa-' + item.icon"></span>
                    <div>{{ item.text }}</div>
                </div>
            </div>
            <!-- splash -->
            <cu-screen-splash :imgsrc='config.logo'/>
            <!-- news -->
            <cu-screen-news :isBlock='config.isnewsblock' :dataSource='newsDataSource'/>

            
        </div>
    </div>
</div>
</template>

<script>
import cuScreenSplash from './emulator-content/screen-splash'
import cuScreenNews from './emulator-content/screen-news'
export default {
    name: 'emulator',
    components: {
        "cu-screen-splash": cuScreenSplash,
        "cu-screen-news": cuScreenNews,
    },

    data: () => ({
        bgStyle: '',
        newsDataSource: [],
        RouterIncludes: ['/editor/splash', '/editor/navigation', '/editor/setting']
    }),

    props: [
        "config",  // 模拟器的一些配置
        "tabIdx",  // navigation bar 切换的Index
        "navPillsIdx",  // 上部的nav pills 切换的Index
    ],

    methods: {
        cutActiveIdx (idx) {
            this.$emit('onCutIdx', idx)
        },

        getNewsData (num = 3) {
            for(let i=0; i<num; i++) {
                this.newsDataSource.push({
                    id: i,
                    img: 'https://picsum.photos/id/1012/200/200',
                    title: 'commodo eget aliquet',
                    text: 'Integer feugiat rhoncus turpis, eu fermentum velit imperdin laoreet aliquet elit accumsan'
                })
            }
        }
    },

    created () {
        // const { bg } = this.config;
        const bg = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2219830916,1102276342&fm=26&gp=0.jpg"
        this.getNewsData(5)
        if (bg.includes('http'))
            this.bgStyle = `background: url(${bg});`
        else
            this.bgStyle = `background: ${bg};` 
    }
}
</script>
