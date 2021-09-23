<template>
<div class="row">

    <div class="col-xl-4 col-lg-4">
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="text-primary">Support</h5>
                <p>Ripple aims to give the best technical support and guarantees possible. Besides regular maintenance and security checks we try to make sure that the system is online 99.9% of the time.</p>
                <p>We strive to make our system as easy to use as possible, but it can always happen that you encounter problems. Please contact our support with any questions or comments that you have. </p>
                <p>Please use this dedicated form to contact our support and we will get back to you as soon as possible, or for more urgent matters please call us during office hours directly at: 15026751094 or by click the support icon right.</p>
            </div>
        </div>
    </div>

    <div class="col-xl-4 col-lg-4">
        <div class="card mb-4">
            <div class="card-body">
                <div class="py-2">
                    <h6>Support Form</h6>
                    <p style="font-size: 0.8em;font-style: italic;">
                        For all support your contact details are logged, <br>
                        we will get in touch as soon as possible.
                    </p>
                </div>
                <div class="py-2">
                    <select class="form-control" id="">
                        <option selected="">Technical Issue</option>
                        <option>Purchase Issue</option>
                        <option>Authentication Issue</option>
                        <option>Other Issues</option>
                    </select>
                </div>
                <div class="py-2">
                    <textarea class="form-control" rows="5"></textarea>
                </div>

                <div class="py-2 text-right">
                    <button class="btn btn-primary" type="button" disabled="">
                        <i class="fas fa-envelope fa-sm mr-2"></i> Report Issue
                    </button>
                </div>

                
            </div>
        </div>
    </div>		

    <div class="col-xl-4 col-lg-4">
        <div class="card mb-4 bg-transparent" v-if="supportOnline">
            <div class="card-body text-center">
                <h6 class="text-gray-400">Our support team is available</h6>
                <a href="#">
                    <i class="fas fa-10x fas fa-headset text-success mt-5 mb-5"></i>
                </a>
                <h6 class="text-gray-400">Click here to call them</h6>
            </div>
        </div>
        <div class="card mb-4 bg-transparent" v-else>
            <div class="card-body text-center">
                <h6 class="text-gray-400">Unfortunatly our support team is unavailable</h6>
                <i class="fas fa-10x fas fa-headset text-danger mt-5 mb-5"></i>
                <h6 class="text-gray-400">Try again on 10:00 - 17:00 any weekday</h6>
            </div>
        </div>			
    </div>


</div>
</template>


<script>
import moment from 'moment';

export default {
  name: 'Support',

  data: () => ({
    pageTitle: 'Support',
    supportOnline: true
  }),

  methods: {
    moment: function () {
      return moment();
    }
  },

  computed: {
    dashboard () {
      return false
    }
  },

  mounted(){
    console.log(this.pageTitle+' page loaded');
  },

  created () {
    // check if current time is between 10:00-18:00
    var format = 'hh:mm',
        time = moment(),
        beforeTime = moment('10:00', format),
        afterTime = moment('18:00', format);
    // check time range and change layout variable
    if (time.isBetween(beforeTime, afterTime)) {
      this.supportOnline =  true;
    } else {
      this.supportOnline =  false;
    }

  }

}
</script>
