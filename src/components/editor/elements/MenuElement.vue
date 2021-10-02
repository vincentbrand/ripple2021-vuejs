<template>
  <!-- plain menu -->
  <div v-if="theme.layout == 'plain'">
    <ul class="mp-nav" v-bind:class="theme.layout">
      <li class="navitem" v-for="item in content" :key="item.id">
        <span class="icon" v-if="theme.display.icon"><i :class="item.icon"></i></span>
        <span class="text" v-if="theme.display.title">{{ item.text }}</span>
      </li>
    </ul>
  </div>

  <!-- bubble menu -->
  <div v-else-if="theme.layout == 'bubble'">

    <!-- 3 items -->
    <ul class="mp-nav" v-bind:class="theme.layout" v-if="content.length == 3">
      <li class="navitem count3" v-for="item in content" :key="item.id">
        <span class="icon" v-if="theme.display.icon"><i :class="item.icon"></i></span>
        <span class="text" v-if="theme.display.title">{{ item.text }}</span>
      </li>
    </ul>
    <!-- 5 items -->
    <ul class="mp-nav" v-bind:class="theme.layout" v-else-if="content.length == 5">
      <li class="navitem count5" v-for="item in content" :key="item.id">
        <span class="icon" v-if="theme.display.icon"><i :class="item.icon"></i></span>
        <span class="text" v-if="theme.display.title">{{ item.text }}</span>
      </li>
    </ul>
    <!-- any other number of items -->
    <div v-else>
      <p>This type of layout requires an odd number of menu items; minimal 3, maximum 5</p>
    </div>

  </div>

  <!-- error -->
  <div v-else class="text-center">
    <h5>Error</h5>
    <p>This menu theme layout did not exist</p>
    <p>{{ theme.layout }}</p>
  </div>

</template>

<script>
export default {
  name: "MenuElement",
  props: {
    content:{
      type: Array,
      default: () => ([]),
    },
    theme:{
      type: Object,
      default: () => ({
        layout:'plain',
        color:{
          normal:{
            text:'#000',
            bg:'#fff'
          },
          hover:{
            text:'#fff',
            bg:'#000'
          }
        },
        display:{
          title:true,
          icon:true
        }
      }),
    }
  },
  data: () => ({
  }),

  computed: {
    cssProps() {
      return {
        '--bgcolor': this.theme.color.normal.bg,
        '--hoverbgcolor': this.theme.color.hover.bg,
        '--textcolor': this.theme.color.normal.text,
        '--hovertextcolor': this.theme.color.hover.text,
      }
    }
  },

  created() {
    console.log(this.content);
  }
}
</script>

<style lang="scss" scoped>
.mp-nav {

  // bubble menu
  &.bubble{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    .navitem {
      flex-grow: 1;
      padding: 10px 20px;
      background-color: var(--bgcolor);
      color: var(--textcolor);
      text-align: center;

      .icon {
        margin: 0;
        padding: 0;
        display: block;
        width: 100%;
        color: var(--textcolor);
      }

      .text {
        margin: 0;
        padding: 0;
        color: var(--textcolor);
        font-size: 0.6em;
      }

      &:hover {
        cursor: pointer;
        background-color: #000;
        color: #fff;
        .icon {
          color: var(--hovertextcolor);
        }
        .text {
          color: var(--hovertextcolor);
        }
      }

      &.count3{
        &:nth-child(2){
          border-radius: 50%;
          line-height: 2em;
          color:#f00;
          background: #17a2b8;
        }
      }
      &.count5{
        &:nth-child(3){
          border-radius:50%;
          width:80px;
          height:80px;
          color:#f00;
          background: #17a2b8;
          &:hover{
            color:#fff;
            background: #ddd;
          }
        }
      }



    }


  }

  // plain navigation
  &.plain {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    background-color: var(--bgcolor);

    .navitem {
      flex-grow: 1;
      padding: 10px 20px;
      background-color: var(--bgcolor);
      color: var(--textcolor);
      text-align: center;

      .icon {
        margin: 0;
        padding: 0;
        display: block;
        width: 100%;
        color: var(--textcolor);
      }

      .text {
        margin: 0;
        padding: 0;
        color: var(--textcolor);
        font-size: 0.6em;
      }
      &:hover {
        cursor: pointer;
        /*
        background-color: var(--hoverbgcolor);
        color: var(--hovertextcolor);
        */
        background-color: #000;
        color: #fff;
        .icon {
          color: var(--hovertextcolor);
        }

        .text {
          color: var(--hovertextcolor);
        }
      }
    }
  }
}

/*
.lc-icon{
  color: #ccc !important;
  color: var(--color) !important;
  font-size: var(--font-size) !important;
}
.lc-icon:hover {
  color: var(--hover-color) !important;
}
*/

</style>
