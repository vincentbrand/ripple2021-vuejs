<template>
<div class="row">
  <div class="col-xl-12 col-lg-12">
    <!-- Progress Small -->
    <div class="card">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Campaign Goal Progress</h6>
      </div>
      <div class="card-body">
        <div class="mb-1 small">Followers <b>(75%)</b></div>
        <div class="progress mb-4">
          <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="mb-1 small">Comments <b>(62%)</b></div>
        <div class="progress mb-4">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 62%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="mb-1 small">Shares <b>(18%)</b></div>
        <div class="progress mb-4">
          <div class="progress-bar bg-danger" role="progressbar" style="width: 18%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="mb-1 small">Likes <b>(93%)</b></div>
        <div class="progress mb-4">
          <div class="progress-bar bg-success" role="progressbar" style="width: 93%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>	                	                	                
      </div>
    </div>
  </div>
</div>
	
</template>

<script>
export default {
  name: 'Progress',
  methods: {
  }
}
</script>

<style scoped lang="less">

</style>
