<template>
  <div class="cart">
    <div class="row mb-4">

      <!-- title -->
      <div class="col-12">
        <h4>{{ $t('pages.cart.title') }}</h4>
        <hr>
      </div>

      <!-- Cart -->
      <div class="col-md-8 col-md-8">
        <div class="card">
          <div class="card-body">

            <h6>{{ $t('pages.cart.contents') }}</h6>
            <hr>
            <!-- cart contents -->

            <div class="product row" v-for="(item,x) in cart.products" :key="item.id">
              <div class="col-7">
                <h5>{{ item.title }}</h5>
                <p>{{ item.description }}</p>
              </div>
              <div class="col-3 py-4">
                <p class="timelabel">period</p>
                <el-select v-model="item.duration" style="width: 100%;" @change="calculateCart">
                  <el-option
                      v-for="(p,index) in item.purchase"
                      :key="index"
                      :value="p.duration"
                      :label="$t('pages.cart.duration.'+p.label)"

                  >
                  </el-option>
                </el-select>
              </div>
              <div class="col-2 py-5 text-right">
                <h4 class="price">{{ getPrice(item.duration, item.purchase, x) }}</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="card card-info-comment my-5">
          <div class="card-body">
            <h6>Dear Customer</h6>
            <p>All our time calculations we count one month as 31 days. This means that for every year you will get an extra week automatically added to your purchase.</p>
          </div>
        </div>

      </div>
      <!-- Purchase Options -->
      <div class="col-md-4 col-md-4">
        <div class="card">
          <div class="card-body">

            <h6>{{ $t('pages.cart.pricing') }}</h6>
            <hr>

            <!-- products -->
            <ul class="list-unstyled">
              <li class="product " v-for="item in cart.products" :key="item.id">
                <p class="title">{{ item.title }}</p>
                <p class="price">{{ getPrice(item.duration, item.purchase) }}</p>
              </li>
              <li class="subtotal">
                <p class="title">{{ $t('pages.cart.subtotal') }}</p>
                <p class="amount">{{ cart.subtotal }}</p>
              </li>
              <!--
              <li class="discount">
                <p class="title">New Member Discount</p>
                <p class="amount">20%</p>
              </li>
              -->
              <!--
              <li class="newprice">
                <p class="title">{{ $t('pages.cart.total') }}</p>
                <p class="amount">{{ cart.total }}</p>
              </li>
              -->
            </ul>

            <h5 class="grand-total text-right">{{ cart.total }}</h5>
            <hr>
            <h6>{{ $t('pages.cart.paymentmethod') }}</h6>
            <hr>
            <div class="text-center">
              <el-radio-group v-model="paymentMethod">
                <el-radio label="wechatpay" class="option-wechatpay" selected><i class="fab fa-weixin fa-payment-icon"></i> {{ $t('pages.cart.wechatpay') }}</el-radio>
                <el-radio label="alipay" class="option-alipay"><i class="fab fa-alipay fa-payment-icon"></i> {{ $t('pages.cart.alipay') }}</el-radio>
              </el-radio-group>
            </div>
            <hr>
            <button class="btn btn-success float-right ml-3" @click="purchaseCart">
              {{ $t('pages.cart.purchase') }}
            </button>
            <button class="btn btn-danger float-right" @click="cancelCart">
              {{ $t('pages.cart.cancel') }}
            </button>

          </div>
        </div>
      </div>



      <!-- modal -->
      <div class="modal payment-modal fade show" v-if="isModal" style="display: block">
        <div class="modal-dialog text-center">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title option-wechatpay" id="exampleModalLabel" v-if="paymentMethod == 'wechatpay'">WeChat Payment</h5>
              <h5 class="modal-title option-alipay" id="exampleModalLabel" v-if="paymentMethod == 'alipay'">Alipay Payment</h5>
              <button class="close" type="button" @click="isModal = false">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h5>{{ cart.total }}</h5>
                  <p>Please Scan the QR code to finish payment</p>
                  <img :src="base64" class="img-fluid qr-example"/>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary btn-sm" type="button" @click="isModal = false">Cancel</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
import Seedr from "../../plugins/Seedr";
import moment from "moment";

export default {
  name: 'Cart',

  data: () => ({
    paymentMethod:'wechatpay',
    isModal:false,
    // purchaseDuration: [1,3,6,12,24,36],
    temp:[],
    cart:{
      // computed items
      subtotal: 0,
      total: 0,
      products:[{
        id: 1,
        title: '',
        description: '',
        amount: 1,
        purchase: [
          {duration: 1, label: '1month', price: 88}
        ],
        startDate: '',
        duration: 12,
        price: 0
      }]
    },
    base64:'data:image/png;base64,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PJLx8Jvs6qaX7k16AgIIIIAAAggggAACCCCAAAIIIIAAch+QNHgYPvycDgM+ukHG8iskDa//nB/Yqsdlp+O603Hk3SBpAmqGA2PO9ASbgNPsJyaPrxyk+B6k8gtqpVuQm7I9zBT28XSQ1UWi6fvl/0QAAggggAACCCCAAAIIIIAAAggggADyLcHFtL9WDCKCk/rh7rl4VYffVX4mzGfY5RibWT9yOZ7X4lWcoJL5mTCf4SbYhlk/cllj9SpO4abrSOtb3HuW2oJXe6wuwkxvyulDFvY9ChBAAAEEEEAAAQQQQAABBBBAAAEEkPuCuMHH1SDFwUUfpDrcLq+Qz/bjmt3hdzffcvHYavNRW3hC+/tx9Sao7HzLBeSo3RKO4h6G5f24qo/v8D7/jPe44j169U23u+ll+T8FgAACCCCAAAIIIIAAAggggAACCCCAPAfk/QBVM353nkg4LyT9+7JeRIafw/oPP7xtjquww99Z+iH9+3pchorXp/UfZr7CH+jiJsjCBF369zeVoHLj9WG+QeUr3tfubmEj3MOLnxkY4vjP6gPuvqlWN8X8NMh1KBgggAACCCCAAAIIIIAAAggggAACCCC3BVHBtuLgYj48OAuuPiC46LUvssPv6Xht+YHD+hE7/N4Mcs70hIagqceW1o/YCapmkDPbcvZ0y0tBDvOel6ZwV4OkN+VPDwGr/icEEEAAAQQQQAABBBBAAAEEEEAAAQSQ54LI+o/F89OHC/L44KJb/+HOTy/Of0iQp4Xf8w/g1XNU5z/SL9i8PYh7iTcvt+TtcSnc8ptgN8isBbndQw6AAAIIIIAAAggggAACCCCAAAIIIE8GCfMDNoiZ/1i+9o9fIb3tma4fwKznSMPx7trCefEpSHsDs9OsFxkqX+IlrPx5KNkXMgcJV9riT/a/UvM6iueh7OGW/XiQ7oce0s+T/lMECCCAAAIIIIAAAggggAACCCCAAAJIAHLz4cQqP3E0g6h8jAp2yvM9Rne42gzvK5BwXog9f92sL3H7cclyhNsPuI/nhZjz1936ku6f785J2/POzXqReP76X1/dQ72q3w8QQAABBBBAAAEEEEAAAQQQQAABBBBAAAHkGSD/AeN4u0XcCFjhAAAAV3RFWHRjb21tZW50AEZpbGUgc291cmNlOiBodHRwOi8vYm9vZmN2Lm9yZy9pbmRleC5waHA/dGl0bGU9RmlsZTpFeGFtcGxlX3JlbmRlcmVkX3FyY29kZS5wbmfj2F4lAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTE5VDIyOjAwOjMyLTA4OjAwxcqQ1AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0xOVQyMjowMDozMi0wODowMLSXKGgAAABHdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuNy43LTEwIDIwMTctMDctMzEgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnSW9S5wAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQANTAwN8UAPAAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MDDraVOxAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1MTY0MjgwMzJ1Pn10AAAAE3RFWHRUaHVtYjo6U2l6ZQA0LjA0S0JCqTs4QQAAAABJRU5ErkJggg=='
  }),

  methods: {
    getPrice(duration, itemArray, i){
      // this.cart.products[index]
      let result = i;
      itemArray.forEach(element => {
        if(element.duration == duration){
          result = element.price;
          // this.cart.products[i].price = element.price;
        }
      });
      return result;
    },
    cancelCart(){
      console.log('cancel cart');
    },
    calculateCart(){
      this.cart.subtotal = 0;
      this.cart.total = 0;
      this.cart.products.forEach((product, index) => {
        this.cart.products[index].purchase.forEach((prices, i) => {
          if(this.cart.products[index].purchase[i].duration == product.duration){
            // console.log( this.cart.products[index].purchase[i].price );
            this.cart.subtotal += this.cart.products[index].purchase[i].price;
          }
        });
      });
      // calculate discount
      this.cart.total = this.cart.subtotal;
    },
    purchaseCart(){
      this.isModal = true;
      document.getElementsByTagName('body')[0].className = 'open-modal';
      console.log('purchase cart');
    }
  },
  // props: ['myprop'],
  watch: {
    total: function() {
      console.log('Prop changed: ')
    },
    subtotal: function() {

    }
  },

  computed: {
  },

  created () {

    // clear out data
    this.cart.products = [];

    // dummy data
    var format = 'YYYY MMMM Do';
    // var purchasePrices = [88,166,288,333,666,888,1288,2666,5200,6060,8888];
    for(let i=0; i<Seedr.range(1,5); i++) {
      this.cart.products.push({
        id: i + 1,
        title: Seedr.word(),
        description: Seedr.text().substr(0,200),
        amount: Seedr.range(1,3),
        purchase:[
          {duration:1,label:'1month',price:88},
          {duration:3,label:'3month',price:166},
          {duration:6,label:'6month',price:288},
          {duration:12,label:'12month',price:333},
          {duration:24,label:'24month',price:666},
          {duration:36,label:'36month',price:888}
        ],
        startDate: moment(Date.now()).format(format),
        duration:12,
        price:333
      })
    }
    console.log(this.cart.products);

    // calculate cart on start
    this.calculateCart();
  },

  mounted(){
    console.log('mounted');
  }


}
</script>
<style lang="scss">


li{
  text-align: right;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  /* NEW */
  &.product{
    p{
      margin:0;
      padding:0;
      font-size: 1.1em;
      &.title{
        text-align: left;
        font-weight: normal;
        color:#999;
      }
      &.price{
        font-weight: bold;
        color:#666;
      }
    }
  }
  &.subtotal{
    margin: 10px 0;
    padding: 10px 0 10px 0;
    border-top:1px dashed #ccc;
    border-bottom:1px dashed #ccc;
    p {
      margin: 0;
      padding: 0;
    }
  }
  &.discount{
    p{
      margin:0;
      padding:0;
      &.title{

      }
      &.amount{

      }
    }
  }
}
.fa-payment-icon{
  font-size: 1.2em;
}
.option-wechatpay{
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #5e8a07 !important;
    background: #5e8a07 !important;
  }
  .el-radio__label{
    color:#5e8a07 !important;
  }
}
.option-alipay{
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #003c8b !important;
    background: #003c8b !important;
  }
  .el-radio__label{
    color:#003c8b !important;
  }
}


div.row.product{
  padding:10px 0 20px 0;
  margin:0 0 20px 0;
  border-bottom:1px solid #ccc;
}

p.timelabel{
  padding:0;
  margin:0;
  font-size: 0.8em;
  text-align: center;
  color:#b7b9cc!important;
}

.card{
  &.card-info-comment{
    background:#f2f2f2;
    border:none;
    opacity: 0.2;

    .card-body{
      font-size: 0.7em;
      h6{
        font-weight: bold;
      }
      p{
        line-height: 2em;
      }
    }
    &:hover{
      opacity: 1;
    }
  }
}


.modal{
  &.payment-modal{
    .modal-dialog{
      .modal-content{
        .modal-header{
          border:none;
        }
        .modal-footer{
          border:none;
        }
      }
    }
  }
}


h5.option-wechatpay{
  color:#5e8a07 !important;
}
h5.option-alipay{
  color:#003c8b !important;
}
.qr-example{
  max-width: 200px;
}
</style>