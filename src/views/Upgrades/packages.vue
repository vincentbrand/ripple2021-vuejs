<template>
  <div class="row">
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div class="card shadow mb-4">
        <div class="card-header card-sale bg-bronze text-white">
          {{ $t('pages.packages.bronze') }}
        </div>
        <div class="card-body">
          <ul class="features-list">
            <li v-html="$t('pages.packages.bookingperday', [10])"></li>
            <li v-html="$t('pages.packages.members', ['500'])"></li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.venues') }}</li>
            <li class="text-cutoff"><i class="fas fa-check"></i> {{ $t('pages.packages.layouts') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.updates') }}</li>
            <li class="text-cutoff"><i class="fas fa-check"></i> {{ $t('pages.packages.webversions') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.reports') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.team') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.fullsupport') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.sms') }}</li>
          </ul>
          <hr>
          <p class="old-price">¥1288</p>
          <h6 class="price">¥888</h6>
          <hr>
          <div class="row">
            <div class="col-6">
              <router-link to="/purchase/cart" class="btn btn-info btn-block btn-sm text-white">
                <i class="fas fa-shopping-basket mr-2"></i> {{ $t('pages.packages.add') }}
              </router-link>
            </div>
            <div class="col-6">
              <router-link to="/purchase/cart" class="btn btn-success btn-block btn-sm text-white">
                <i class="fas fa-money-bill mr-2"></i> {{ $t('pages.packages.buy') }}
              </router-link>
            </div>
          </div>
          <hr />
          <router-link to="support" class="btn btn-primary btn-block btn-sm text-white">
            <i class="fas fa-phone"></i> {{ $t('pages.packages.contact') }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-lg-6 col-md-6">
      <div class="card shadow mb-4">
        <div class="card-header card-sale bg-silver">
          {{ $t('pages.packages.silver') }}
        </div>
        <div class="card-body">
          <ul class="features-list">
            <li v-html="$t('pages.packages.bookingperday', [50])"></li>
            <li v-html="$t('pages.packages.members', ['1.000'])"></li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.venues') }}</li>
            <li class="text-cutoff"><i class="fas fa-check"></i> {{ $t('pages.packages.layouts') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.updates') }}</li>
            <li class="text-cutoff"><i class="fas fa-check"></i> {{ $t('pages.packages.webversions') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.reports') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.team') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.fullsupport') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.sms') }}</li>
          </ul>
          <hr>
          <p class="old-price">¥2588</p>
          <h6 class="price">¥1888</h6>
          <hr>
          <div class="row">
            <div class="col-6">
              <router-link to="/purchase/cart" class="btn btn-info btn-block btn-sm text-white">
                <i class="fas fa-shopping-basket mr-2"></i> {{ $t('pages.packages.add') }}
              </router-link>
            </div>
            <div class="col-6">
              <router-link to="/purchase/cart" class="btn btn-success btn-block btn-sm text-white">
                <i class="fas fa-money-bill mr-2"></i> {{ $t('pages.packages.buy') }}
              </router-link>
            </div>
          </div>
          <hr />
          <router-link to="support" class="btn btn-primary btn-block btn-sm text-white">
            <i class="fas fa-phone"></i> {{ $t('pages.packages.contact') }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-lg-6 col-md-6">
      <div class="card shadow mb-4">
        <div class="card-header card-sale bg-gold2">
          {{ $t('pages.packages.gold') }}
        </div>
        <div class="card-body">
          <ul class="features-list">
            <li v-html="$t('pages.packages.bookingperday', [100])"></li>
            <li v-html="$t('pages.packages.members', ['5.000'])"></li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.venues') }}</li>
            <li class="text-cutoff"><i class="fas fa-check"></i> {{ $t('pages.packages.layouts') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.updates') }}</li>
            <li class="text-cutoff"><i class="fas fa-check"></i> {{ $t('pages.packages.webversions') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.reports') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.team') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.fullsupport') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.sms') }}</li>
          </ul>
          <hr>
          <p class="old-price">¥3788</p>
          <h6 class="price">¥2888</h6>
          <hr>
          <div class="row">
            <div class="col-6">
              <router-link to="/purchase/cart" class="btn btn-info btn-block btn-sm text-white">
                <i class="fas fa-shopping-basket mr-2"></i> {{ $t('pages.packages.add') }}
              </router-link>
            </div>
            <div class="col-6">
              <router-link to="/purchase/cart" class="btn btn-success btn-block btn-sm text-white">
                <i class="fas fa-money-bill mr-2"></i> {{ $t('pages.packages.buy') }}
              </router-link>
            </div>
          </div>
          <hr />
          <router-link to="support" class="btn btn-primary btn-block btn-sm text-white">
            <i class="fas fa-phone"></i> {{ $t('pages.packages.contact') }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-lg-6 col-md-6">
      <div class="card shadow mb-4">
        <div class="card-header card-sale bg-platinum">
          {{ $t('pages.packages.platinum') }}
        </div>
        <div class="card-body">
          <ul class="features-list">
            <li>{{ $t('pages.packages.unlimitedbookingperday') }}</li>
            <li v-html="$t('pages.packages.members', ['10.000'])"></li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.venues') }}</li>
            <li class="text-cutoff"><i class="fas fa-check"></i> {{ $t('pages.packages.layouts') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.updates') }}</li>
            <li class="text-cutoff"><i class="fas fa-check"></i> {{ $t('pages.packages.webversions') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.reports') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.team') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.fullsupport') }}</li>
            <li><i class="fas fa-check"></i> {{ $t('pages.packages.sms') }}</li>
          </ul>
          <hr>
          <p class="old-price">¥8888</p>
          <h6 class="price">¥6666</h6>
          <hr>
          <div class="row">
            <div class="col-6">
              <router-link to="/purchase/cart" class="btn btn-info btn-block btn-sm text-white">
                <i class="fas fa-shopping-basket mr-2"></i> {{ $t('pages.packages.add') }}
              </router-link>
            </div>
            <div class="col-6">
              <router-link to="/purchase/cart" class="btn btn-success btn-block btn-sm text-white">
                <i class="fas fa-money-bill mr-2"></i> {{ $t('pages.packages.buy') }}
              </router-link>
            </div>
          </div>
          <hr />
          <router-link to="support" class="btn btn-primary btn-block btn-sm text-white">
            <i class="fas fa-phone"></i> {{ $t('pages.packages.contact') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.price {
  font-weight: bolder;
  text-align: right;
  color: #d11083;
  font-size: 2em;
}
.old-price{
  font-weight: bold;
  text-align: right;
  text-decoration: line-through;
  color: #666;
  font-size: 1em;
  margin:0;
  padding:0;
}
ul.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}
ul.features-list li {
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
}
.fa-check {
  margin: 0 20px 0 0;
  color: #25df32;
}
.fa-times {
  margin: 0 20px 0 0;
  color: #d22424;
}
.card-sale {
  font-size: 2em;
  text-align: center;
}
.bg-gold {
  background: radial-gradient(
      ellipse farthest-corner at right bottom,
      #fedb37 0%,
      #fdb931 8%,
      #9f7928 30%,
      #8a6e2f 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      #ffffff 0%,
      #ffffac 8%,
      #d1b464 25%,
      #5d4a1f 62.5%,
      #5d4a1f 100%
    );
}
.bg-silver {
  color: #ffffff;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  background: -moz-linear-gradient(
    -72deg,
    #dedede,
    #ffffff 16%,
    #dedede 21%,
    #ffffff 24%,
    #454545 27%,
    #dedede 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedede 72%,
    #ffffff 80%,
    #dedede 84%,
    #a1a1a1
  );
  background: -webkit-linear-gradient(
    -72deg,
    #dedede,
    #ffffff 16%,
    #dedede 21%,
    #ffffff 24%,
    #454545 27%,
    #dedede 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedede 72%,
    #ffffff 80%,
    #dedede 84%,
    #a1a1a1
  );
  background: -o-linear-gradient(
    -72deg,
    #dedede,
    #ffffff 16%,
    #dedede 21%,
    #ffffff 24%,
    #454545 27%,
    #dedede 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedede 72%,
    #ffffff 80%,
    #dedede 84%,
    #a1a1a1
  );
  background: linear-gradient(
    -72deg,
    #dedede,
    #ffffff 16%,
    #dedede 21%,
    #ffffff 24%,
    #454545 27%,
    #dedede 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedede 72%,
    #ffffff 80%,
    #dedede 84%,
    #a1a1a1
  );
}
.bg-bronze {
  color: #ffdeca;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  background: -moz-linear-gradient(
    -72deg,
    #ca7345,
    #ffdeca 16%,
    #ca7345 21%,
    #ffdeca 24%,
    #a14521 27%,
    #ca7345 36%,
    #ffdeca 45%,
    #ffdeca 60%,
    #ca7345 72%,
    #ffdeca 80%,
    #ca7345 84%,
    #732100
  );
  background: -webkit-linear-gradient(
    -72deg,
    #ca7345,
    #ffdeca 16%,
    #ca7345 21%,
    #ffdeca 24%,
    #a14521 27%,
    #ca7345 36%,
    #ffdeca 45%,
    #ffdeca 60%,
    #ca7345 72%,
    #ffdeca 80%,
    #ca7345 84%,
    #732100
  );
  background: -o-linear-gradient(
    -72deg,
    #ca7345,
    #ffdeca 16%,
    #ca7345 21%,
    #ffdeca 24%,
    #a14521 27%,
    #ca7345 36%,
    #ffdeca 45%,
    #ffdeca 60%,
    #ca7345 72%,
    #ffdeca 80%,
    #ca7345 84%,
    #732100
  );
  background: linear-gradient(
    -72deg,
    #ca7345,
    #ffdeca 16%,
    #ca7345 21%,
    #ffdeca 24%,
    #a14521 27%,
    #ca7345 36%,
    #ffdeca 45%,
    #ffdeca 60%,
    #ca7345 72%,
    #ffdeca 80%,
    #ca7345 84%,
    #732100
  );
}
.bg-platinum {
  color: #fcfcfc;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  background: -moz-linear-gradient(
    -72deg,
    #dedeff,
    #ffffff 16%,
    #dedeff 21%,
    #ffffff 24%,
    #555564 27%,
    #dedeff 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedeff 72%,
    #ffffff 80%,
    #dedeff 84%,
    #555564
  );
  background: -webkit-linear-gradient(
    -72deg,
    #dedeff,
    #ffffff 16%,
    #dedeff 21%,
    #ffffff 24%,
    #555564 27%,
    #dedeff 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedeff 72%,
    #ffffff 80%,
    #dedeff 84%,
    #555564
  );
  background: -o-linear-gradient(
    -72deg,
    #dedeff,
    #ffffff 16%,
    #dedeff 21%,
    #ffffff 24%,
    #555564 27%,
    #dedeff 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedeff 72%,
    #ffffff 80%,
    #dedeff 84%,
    #555564
  );
  background: linear-gradient(
    -72deg,
    #dedeff,
    #ffffff 16%,
    #dedeff 21%,
    #ffffff 24%,
    #555564 27%,
    #dedeff 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedeff 72%,
    #ffffff 80%,
    #dedeff 84%,
    #555564
  );
}

.bg-gold2 {
  color: #ffffff;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  background: -moz-linear-gradient(
    -72deg,
    #ffdea1,
    #ffffff 16%,
    #ffdea1 21%,
    #ffffff 24%,
    #736445 27%,
    #ffdea1 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffdea1 72%,
    #ffffff 80%,
    #ffdea1 84%,
    #736445
  );
  background: -webkit-linear-gradient(
    -72deg,
    #ffdea1,
    #ffffff 16%,
    #ffdea1 21%,
    #ffffff 24%,
    #736445 27%,
    #ffdea1 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffdea1 72%,
    #ffffff 80%,
    #ffdea1 84%,
    #736445
  );
  background: -o-linear-gradient(
    -72deg,
    #ffdea1,
    #ffffff 16%,
    #ffdea1 21%,
    #ffffff 24%,
    #736445 27%,
    #ffdea1 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffdea1 72%,
    #ffffff 80%,
    #ffdea1 84%,
    #736445
  );
  background: linear-gradient(
    -72deg,
    #ffdea1,
    #ffffff 16%,
    #ffdea1 21%,
    #ffffff 24%,
    #736445 27%,
    #ffdea1 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffdea1 72%,
    #ffffff 80%,
    #ffdea1 84%,
    #736445
  );
}

.text-cutoff{
  text-overflow: ellipsis;
  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
}
</style>
