<!-- eslint-disable -->
<template>
  <div class="container">
    <h1>Sign up</h1>
    <form @submit.prevent="signUpButtonPressed" action="">
      <label for="username">Username</label>
      <input v-model="email" type="text" name="username" />
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>
<!-- eslint-disable -->
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
export default {
  name: "loginForm",
  data() {
    return {
      email: "",
      password: "",
      emailValid: true,
      passwordValid: false,
      passwordTouched: false,
    };
  },

  methods: {
    signUpButtonPressed() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("register done");
          router.push("/");
        })
        .catch((erorr) => {
          console.log(erorr.code);
          alert(erorr.message);
        });
    },
  },

  computed: {},
};
</script>
<!-- eslint-disable -->
<style lang="scss" scoped>
.container {
  margin: 100px auto;
}
form {
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: auto;
  input[type="submit"] {
    color: white;
    width: 50%;
    margin: 30px auto;
    background-color: rgb(36, 21, 238);
    border-radius: 8px;
    border-color: transparent;
  }
}
</style>
