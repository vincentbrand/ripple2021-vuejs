<template>
  <div class="emulator-content" v-if="$route.path.includes('news')">
    <div class="col-12">
      <div class="card shadow mb-4 mt-3" v-for="item in dataSource" :key="item.id">
        <div class="card-body">
            <div class="row">
              <div class="col-3" style="padding:0;" v-if="!isBlock">
                <img :src="item.img" class="img-fluid" />
              </div>
              <div class="col-9" v-if="!isBlock">
                <h6 style="font-size:0.8em;" class="text-cut">{{ item.title }}</h6>
                <p style="font-size:0.6em;" class="text-cut-2">
                  {{ item.text }}
                </p>
              </div>

              <div class="col-12" style="padding:0;" v-if="isBlock">
                <img
                  :src="item.img"
                  style="width: 100%"
                  class="img-fluid mb-3"
                />
                <h6 style="font-size:0.8em;margin: 10 0;">
                  {{ item.title }}
                </h6>
                <p style="font-size:0.6em;margin:0;">
                  {{ item.text }}
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataSource", "isBlock"],
};
</script>
