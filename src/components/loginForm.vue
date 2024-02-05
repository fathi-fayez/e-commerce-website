<!-- eslint-disable -->
<template>
  <div class="container">
    <h1>Sign In</h1>
    <form @submit.prevent="signInButtonPressed" action="">
      <label for="username">UserName</label>
      <input v-model="email" type="text" name="username" />
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" />
      <p v-if="errMsg">{{ errMsg }}</p>
      <input type="submit" value="submit" />
    </form>
  </div>
</template>
<!-- eslint-disable -->
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
export default {
  name: "loginForm",
  data() {
    return {
      email: "",
      password: "",
      errMsg: "",
      emailValid: true,
      passwordValid: false,
      passwordTouched: false,
    };
  },

  methods: {
    signInButtonPressed() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          router.push("/");
        })
        .catch((erorr) => {
          switch (erorr.code) {
            case "auth/invalid-email":
              this.errMsg = "Invalid email";
              break;
            case "auth/user-not-found":
              this.errMsg = "No account with that email was found";

              break;

            case "auth/wrong-password":
              this.errMsg = "Incorrect password";
              break;
            default:
              this.errMsg = "Email or password was incorrect";
              break;
          }
        });
    },
  },
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
  p {
    color: red;
    font-size: 20px;
  }
}
</style>
