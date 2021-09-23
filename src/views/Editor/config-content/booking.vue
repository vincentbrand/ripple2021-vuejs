<template>
  <div class="row">

    <div class="col-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Booking Setting</h6>
        </div>
        <div class="card-body">
          <label>Select Layout</label>
          <el-select v-model="layout" style="width: 100%;">
            <el-option
                v-for="item in layoutList"
                :key="item.id"
                :value="item.id"
                :label="item.text"
            >
            </el-option>
          </el-select>
          <button class="btn btn-success btn-block  btn-sm mt-4" type="button">
            <i class="fas fa-save fa-sm mr-2"></i> Save Settings
          </button>
        </div>
      </div>
    </div>

    <!-- preview -->
    <div class="col-4">
      <div class="card shadow mb-4">
        Previews
      </div>
    </div>

      <!-- controls -->

    <div class="col-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Page Setting</h6>
        </div>
        <div class="card-body">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:'editor-booking',
  data: () => ({
    isGradient: false,
    layout: 1,
    layoutList: [
      {
        text: 'Layout 1',
        id: 1
      },
      {
        text: 'Layout 2',
        id: 2
      },
      {
        text: 'Layout 3',
        id: 3
      }
    ],
  })
}
</script>
