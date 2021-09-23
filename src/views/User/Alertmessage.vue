<template>
  <div class="row" v-if="alertmessageid">
    <div class="col-md-12">

      <section class="content inbox">
        <div class="container-fluid">

          <div class="row clearfix">
            <div class="col-md-12 col-lg-12 col-xl-12 mb-4">

              <div class="card">
                <div class="card-body">
                  <div class="media">
                    <div class="media-body">
                      <div class="media-heading mb-3">
                        <b class="mr-3">{{ alertmessage.title }}</b>
                        <!-- badges -->
                        <span class="badge text-white bg-danger" v-if="alertmessage.type === 0">{{ alertmessage.label }}</span>
                        <span class="badge text-white bg-info" v-if="alertmessage.type === 1">{{ alertmessage.label }}</span>
                        <span class="badge text-white bg-warning" v-if="alertmessage.type === 2">{{ alertmessage.label }}</span>
                        <span class="badge text-white bg-primary" v-if="alertmessage.type === 3">{{ alertmessage.label }}</span>
                        <!-- end of badges -->
                        <small class="float-right text-muted">
                          <time class="hidden-sm-down" datetime="2017">{{ alertmessage.dateTime }}</time>
                          <i class="zmdi zmdi-attachment-alt"></i>
                        </small>
                      </div>
                      <p class="msg">{{ alertmessage.text }}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  </div>

  <!-- page error -->
  <div class="row" v-else>
    <div class="col-md-12">
      <PageIssue
          title="Error Retrieving Data"
          text="The request is invalid please double check your request or contact support">
      </PageIssue>
    </div>
  </div>

</template>

<script>

import Seedr from "../../plugins/Seedr";

import PageIssue from "@/components/common/PageIssue.vue";

export default {
  name: 'alertmessage',
  components: {
    PageIssue
  },

  data: () => ({
    stateChanged: false,
    alertmessageid:false,
    alertmessage:{}
  }),

  computed: {
  },

  watch: {
  },

  methods: {
  },

  created() {
    this.alertmessage = {
      title:Seedr.word(Seedr.int(3)),
      text:Seedr.text(),
      dateTime: Seedr.dateTime( new Date(2018, 0, 1), new Date() ),
      label:Seedr.word(),
      type:Seedr.int(3),
      status:Seedr.int(3)
    }
    console.log(this.alertmessage);
  },

  mounted() {
    this.alertmessageid=this.$route.params.id;
    console.log(this.alertmessageid);
  },

  beforeDestroy() {
  }

}
</script>

<style scoped>
.badge {
  border-radius: 8px;
  padding: 4px 8px;
  text-transform: uppercase;
  font-size: .7142em;
  line-height: 12px;
  background-color: transparent;
  border: 1px solid;
  margin-bottom: 5px;
  border-radius: .875rem;
}
.bg-green {
  background-color: #50d38a !important;
  color: #fff;
}
.bg-blush {
  background-color: #ff758e !important;
  color: #fff;
}
.bg-amber {
  background-color: #FFC107 !important;
  color: #fff;
}
.bg-red {
  background-color: #ec3b57 !important;
  color: #fff;
}
.bg-blue {
  background-color: #60bafd !important;
  color: #fff;
}
.card {
  background: #fff;
  margin-bottom: 30px;
  transition: .5s;
  border: 0;
  border-radius: .1875rem;
  display: inline-block;
  position: relative;
  width: 100%;
  box-shadow: none;
}
.inbox .action_bar .delete_all {
  margin-bottom: 0;
  margin-top: 8px
}

.inbox .action_bar .btn,
.inbox .action_bar .search {
  margin: 0
}

.inbox .mail_list .list-group-item {
  border: 0;
  padding: 15px;
  margin-bottom: 1px
}

.inbox .mail_list .list-group-item:hover {
  background: #eceeef
}

.inbox .mail_list .list-group-item .media {
  margin: 0;
  width: 100%
}

.inbox .mail_list .list-group-item .controls {
  display: inline-block;
  margin-right: 10px;
  vertical-align: top;
  text-align: center;
  margin-top: 11px
}

.inbox .mail_list .list-group-item .controls .checkbox {
  display: inline-block
}

.inbox .mail_list .list-group-item .controls .checkbox label {
  margin: 0;
  padding: 10px
}

.inbox .mail_list .list-group-item .controls .favourite {
  margin-left: 10px
}

.inbox .mail_list .list-group-item .thumb {
  display: inline-block
}

.inbox .mail_list .list-group-item .thumb img {
  width: 40px
}

.inbox .mail_list .list-group-item .media-heading a {
  color: #555;
  font-weight: normal
}

.inbox .mail_list .list-group-item .media-heading a:hover,
.inbox .mail_list .list-group-item .media-heading a:focus {
  text-decoration: none
}

.inbox .mail_list .list-group-item .media-heading time {
  font-size: 13px;
  margin-right: 10px
}

.inbox .mail_list .list-group-item .media-heading .badge {
  margin-bottom: 0;
  border-radius: 50px;
  font-weight: normal
}

.inbox .mail_list .list-group-item .msg {
  margin-bottom: 0px
}

.inbox .mail_list .unread {
  border-left: 2px solid
}

.inbox .mail_list .unread .media-heading a {
  color: #333;
  font-weight: 700
}

.inbox .btn-group {
  box-shadow: none
}

.inbox .bg-gray {
  background: #e6e6e6
}

@media only screen and (max-width: 767px) {
  .inbox .mail_list .list-group-item .controls {
    margin-top: 3px
  }
}


</style>