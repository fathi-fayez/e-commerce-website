<!-- eslint-disable -->
<template>
  <div class="footer py-5">
    <div class="row text-start">
      <div class="col-6 col-lg-3">
        <img
          src="../assets/images/ecommerce-logo-png-11.png"
          height="50"
          alt=""
        />
        <img src="../assets/images/store1.png" alt="" />
        <img src="../assets/images/store2.png" alt="" />
      </div>

      <div class="col-6 col-lg-3">
        <h4>Information</h4>
        <ul class="footer-list">
          <li><a href="">About us</a></li>
          <li><a href="">Shipping Policy</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-3">
        <h4>User Area</h4>
        <ul class="footer-list">
          <li><a href="">My account</a></li>
          <li><a href="">My Cart</a></li>
          <li><a href="">Login</a></li>
          <li><a href="">Checkout</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-3">
        <h4>Contact Info</h4>
        <p>+2010 2271 6283</p>
        <p>509 724 580 - issued in Egypt on 03/11/2019, expires 08/11/2023</p>
      </div>
      <hr />
    </div>
    <div class="copyright-text mt-3 text-center">
      <a href="https://my-portfolio-brown-seven-19.vercel.app/"
        >Copyright © 2021 <span class="text-dark fw-bold">Fathi </span>
        <span class="text-danger fw-bold">Fayez</span></a
      >
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: "footerSection",
};
</script>
<!-- eslint-disable -->
<style lang="scss">
.footer {
  background-color: #673ab7;
  padding: 50px 100px;
}
a {
  text-decoration: none !important;
  color: black !important;
}
@media (max-width: 768px) {
  .footer {
    padding: 20px;
  }
}
</style>
