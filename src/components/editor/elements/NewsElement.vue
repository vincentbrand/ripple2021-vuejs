<template>
  <li class="preview-item">

    <div class="card my-3" v-if="style.layout == 'plain'">
      <div class="card-body">
        <div class="row">
          <div class="col-4" v-if="style.display.image">
            <img :src="content.headerimage" class="img-fluid article-image my-2" v-if="style.display.image">
          </div>
          <div class="col-8 pt-2">
            <h5 class="article-title" v-if="style.display.title">{{ content.title | cutOffDot }}</h5>
            <h6 class="article-date" v-if="style.display.dateTime">{{ content.dateTime}</h6>
            <p class="article-text text-cutoff" v-if="style.display.text">{{ content.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card my-3" v-else-if="style.layout == 'title_first'">
      <div class="card-body">
        <h5 class="article-title" v-if="style.display.title">{{ content.title }}</h5>
        <img :src="content.headerimage" class="img-fluid article-image my-2" v-if="style.display.image">
        <p class="article-text text-cutoff" v-if="style.display.text">{{ content.text }}</p>
      </div>
    </div>

    <div class="card my-3" v-else-if="style.layout == 'overlay'">
      <div class="card-body">
        <h5 class="article-title overlay-title" v-if="style.display.title">{{ content.title }}</h5>
        <img :src="content.headerimage" class="img-fluid article-image my-2" v-if="style.display.image">
        <p class="article-text text-cutoff" v-if="style.display.text">{{ content.text }}</p>
      </div>
    </div>

    <div class="card my-3" v-else>
      <div class="card-body">
        <p>Style Layout Settings are not valid</p>
      </div>
    </div>

  </li>
</template>

<script>
export default {
  name: "NewsElement",
  props: {
    content:{
      type: Object,
      default: () => ({}),
    },
    style:{
      type: Object,
      default: () => ({
        layout:'plain',
        display:{
          title:true,
          image:true,
          text:true,
          date:true
        }
      }),
    }
  },
  data: () => ({
  }),
  created() {
    console.log(this.content);
  }
}
</script>

<style lang="scss" scoped>
.article-title{
  font-size: 1.1em;
  font-weight: bold;
  &.overlay-title{
    position: absolute;
    top:40px;
    left:20px;
    color:#666;
  }
}
.article-text{
  font-size: 0.8em;
  font-weight: normal;
}
.text-cutoff{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
