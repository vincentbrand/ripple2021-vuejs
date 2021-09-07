<template>
  <div class="row">
    <div class="col-xl-3 col-lg-3">
      <div class="card shadow mb-4">
        <div class="card-header card-sale bg-bronze text-white">
          Bronze
        </div>
        <div class="card-body">
          <ul class="features-list">
            <li>
              <b><i>20</i></b> Bookings per day
            </li>
            <li>
              Up to <b><i>500</i></b> Members
            </li>
            <li><i class="fas fa-check"></i> Multiple Venues</li>
            <li><i class="fas fa-check"></i> Custom Layouts and Design</li>
            <li><i class="fas fa-times"></i> Free Updates</li>
            <li><i class="fas fa-times"></i> Web version and Mini program</li>
            <li><i class="fas fa-times"></i> Automatic Reports</li>
            <li><i class="fas fa-times"></i> Team Management</li>
            <li><i class="fas fa-times"></i> Full Support</li>
            <li><i class="fas fa-times"></i> SMS notifications</li>
          </ul>
          <h6 class="price">¥1888</h6>
          <hr />
          <a href="support" class="btn btn-primary btn-block text-white">
            <i class="fa fas fa-phone"></i> CONTACT US
          </a>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-lg-3">
      <div class="card shadow mb-4">
        <div class="card-header card-sale bg-silver">
          Silver
        </div>
        <div class="card-body">
          <ul class="features-list">
            <li>
              <b><i>50</i></b> Bookings per day
            </li>
            <li>
              Up to <b><i>1000</i></b> Members
            </li>
            <li><i class="fas fa-check"></i> Multiple Venues</li>
            <li><i class="fas fa-check"></i> Custom Layouts and Design</li>
            <li><i class="fas fa-check"></i> Free Updates</li>
            <li><i class="fas fa-check"></i> Web version and Mini program</li>
            <li><i class="fas fa-times"></i> Automatic Reports</li>
            <li><i class="fas fa-times"></i> Team Management</li>
            <li><i class="fas fa-times"></i> Full Support</li>
            <li><i class="fas fa-times"></i> SMS notifications</li>
          </ul>
          <h6 class="price">¥3888</h6>
          <hr />
          <a href="support" class="btn btn-primary btn-block text-white">
            <i class="fa fas fa-phone"></i> CONTACT US
          </a>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-lg-3">
      <div class="card shadow mb-4">
        <div class="card-header card-sale bg-gold2">
          Gold
        </div>
        <div class="card-body">
          <ul class="features-list">
            <li>
              <b><i>100</i></b> Bookings per day
            </li>
            <li>
              Up to <b><i>5000</i></b> Members
            </li>
            <li><i class="fas fa-check"></i> Multiple Venues</li>
            <li><i class="fas fa-check"></i> Custom Layouts and Design</li>
            <li><i class="fas fa-check"></i> Free Updates</li>
            <li><i class="fas fa-check"></i> Web version and Mini program</li>
            <li><i class="fas fa-check"></i> Automatic Reports</li>
            <li><i class="fas fa-check"></i> Team Management</li>
            <li><i class="fas fa-check"></i> Full Support</li>
            <li><i class="fas fa-check"></i> SMS notifications</li>
          </ul>
          <h6 class="price">¥6888</h6>
          <hr />
          <a href="support" class="btn btn-primary btn-block text-white">
            <i class="fa fas fa-phone"></i> CONTACT US
          </a>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-lg-3">
      <div class="card shadow mb-4">
        <div class="card-header card-sale bg-platinum">
          Platinum
        </div>
        <div class="card-body">
          <ul class="features-list">
            <li>Unlimited Bookings</li>
            <li>
              Up to <b><i>10.000</i></b> Members
            </li>
            <li><i class="fas fa-check"></i> Multiple Venues</li>
            <li><i class="fas fa-check"></i> Custom Layouts and Design</li>
            <li><i class="fas fa-check"></i> Free Updates</li>
            <li><i class="fas fa-check"></i> Web version and Mini program</li>
            <li><i class="fas fa-check"></i> Automatic Reports</li>
            <li><i class="fas fa-check"></i> Team Management</li>
            <li><i class="fas fa-check"></i> Full Support</li>
            <li><i class="fas fa-check"></i> SMS notifications</li>
          </ul>
          <h6 class="price">¥8888</h6>
          <hr />
          <a href="support" class="btn btn-primary btn-block text-white">
            <i class="fa fas fa-phone"></i> CONTACT US
          </a>
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
</style>
