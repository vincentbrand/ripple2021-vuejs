<template>
  <div class="row">
    <div class="col-md-12">

      <section class="content inbox">
        <div class="container-fluid">
          <div class="row clearfix">
            <div class="col-lg-12">
              <div class="card action_bar">
                <div class="body">
                  <div class="row clearfix">
                    <div class="col-4">
                    </div>
                    <div class="col-4">
                    </div>
                    <div class="col-4 text-right">
                      <a class="btn btn-warning btn-sm text-white mx-2">
                        <i class="fas fa-list-alt"></i> Overview
                      </a>
                      <a class="btn btn-info btn-sm text-white mx-2">
                        <i class="fas fa-pencil-alt"></i> Compose
                      </a>
                      <a class="btn btn-danger btn-sm text-white mx-2">
                        <i class="fas fa-trash-alt"></i> Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col-md-12 col-lg-12 col-xl-12 mb-4">
              <ul class="mail_list list-group list-unstyled">
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-body">
                      <div class="media-heading">
                        <a href="#" class="m-r-10 mr-2"><b v-if="message.status > 0">{{ message.title }}</b></a>
                        <!-- badges -->
                        <span class="badge text-white bg-danger" v-if="message.type === 0">{{ message.label }}</span>
                        <span class="badge text-white bg-info" v-if="message.type === 1">{{ message.label }}</span>
                        <span class="badge text-white bg-warning" v-if="message.type === 2">{{ message.label }}</span>
                        <span class="badge text-white bg-primary" v-if="message.type === 3">{{ message.label }}</span>
                        <!-- end of badges -->
                        <small class="float-right text-muted">
                          <time class="hidden-sm-down" datetime="2017">{{ message.dateTime }}</time>
                          <i class="zmdi zmdi-attachment-alt"></i>
                        </small>
                      </div>
                      <hr>
                      <p class="msg">{{ message.text }}</p>
                    </div>
                  </div>
                </li>
              </ul>


            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>

import Seedr from "../../plugins/Seedr";

export default {
  name: 'Message',
  components: {
  },

  data: () => ({
    stateChanged: false,
    message:{
      status:Seedr.int(3),
      label:Seedr.word(),
      type:Seedr.int(3),
      dateTime:Seedr.dateTime( new Date(2018, 0, 1), new Date() ),
      title:Seedr.word(Seedr.int(3)),
      text:Seedr.text()+'.'+Seedr.text(),
    }
  }),

  computed: {
  },

  watch: {
  },

  methods: {
  },

  created() {
    console.log(this.message);
  },

  mounted() {
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