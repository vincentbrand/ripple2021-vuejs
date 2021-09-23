<template>
  <div>

    <!-- header --
    <div class="row">
      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Filter by ID or Name"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-filter fa-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-6">
                Some Range filters here for dates
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->

    <div class="row">
      <div class="col-xl-12 col-lg-12">

        <el-calendar v-model="value">
        </el-calendar>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookings",
  data: () => ({

    paging: {
      page: 1,
      page_size: 20
    }
  }),

  computed: {

  },

  methods: {
  },

  created () {
  }
};
</script>
