<template>
  <div>

    <h5>Member detail page</h5>

    <div class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <img class="img-fluid rounded-circle" src="https://source.unsplash.com/random/300x300"/>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-borderless table-member-profile">
                <tr>
                  <td>Name</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td></td>
                </tr>
                <tr>
                  <td>City</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Points</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Wallet</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Last Reservation</td>
                  <td></td>
                </tr>
              </table>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12"></div>
    </div>

  </div>
</template>

<script>

export default {
    name: 'memberdetails',
    data: () => ({
        dataSource: [],
    }),
    created () {
        for(let i=0; i<10; i++) {
            this.dataSource.push({
                id: i + 1,
                name: 'Leon' + (i + 1),
                last: '2020-09-' + (7 + i),
                member: '2020-09-' + (14 + i),
                points: i * 2 + 3,
                wallet: i * 5 + 2,
                img: 'https://source.unsplash.com/Mv9hjnEUHR4/30x30'
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.table-member-profile{
  tr{
    td{
      &:first-child{
        font-weight: bold;
      }
    }
  }
}
</style>