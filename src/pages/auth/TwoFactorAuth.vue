<template>
  <q-page class="row justify-center items-center q-pa-sm">
    <q-card
      style="max-width: 700px;"
      class="full-width q-pt-xl q-pa-sm q-my-xl"
    >
      <h3 class="q-ml-md q-mt-md two-factor-header text-center">
        Two-Factor Authentication
      </h3>
      <br />
      <div class=" q-mb-md q-ml-md text-center" style="font-size: 20px;">
        Please enter the 2fa code from your mobile device below.
      </div>
      <br /><br />
      <div class="pf-input-pin__wrapper q-mt-md">
        <input
          class="two-factor-large-input"
          maxlength="1"
          id="login2faInputPin-0"
          tabindex="-1"
          autocomplete="off"
          v-model="pincode1"
          ref="input_pincode1"
          @keydown="processDeleteKey($event)"
          @click="processFocus"
        />
        <input
          class="two-factor-large-input "
          maxlength="1"
          id="login2faInputPin-1"
          tabindex="-1"
          autocomplete="off"
          v-model="pincode2"
          ref="input_pincode2"
          @keydown="processDeleteKey($event)"
          @click="processFocus"
        />
        <input
          class="two-factor-large-input "
          maxlength="1"
          id="login2faInputPin-2"
          tabindex="-1"
          autocomplete="off"
          v-model="pincode3"
          ref="input_pincode3"
          @keydown="processDeleteKey($event)"
          @click="processFocus"
        />
        <input
          class="two-factor-large-input "
          maxlength="1"
          id="login2faInputPin-3"
          tabindex="-1"
          autocomplete="off"
          v-model="pincode4"
          ref="input_pincode4"
          @keydown="processDeleteKey($event)"
          @click="processFocus"
        />
        <input
          class="two-factor-large-input "
          maxlength="1"
          id="login2faInputPin-4"
          tabindex="-1"
          autocomplete="off"
          v-model="pincode5"
          ref="input_pincode5"
          @keydown="processDeleteKey($event)"
          @click="processFocus"
        />
        <input
          class="two-factor-large-input "
          maxlength="1"
          id="login2faInputPin-5"
          tabindex="0"
          autocomplete="off"
          v-model="pincode6"
          ref="input_pincode6"
          @keydown="processDeleteKey($event)"
          @click="processFocus"
        />
      </div>
      <br />
      <button class="q-mt-lg two-factor-button q-mb-md" v-on:click="login">
        Log in
      </button>
    </q-card>
  </q-page>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TwoFactorAuth",
  data: () => ({
    pincode1: "",
    pincode2: "",
    pincode3: "",
    pincode4: "",
    pincode5: "",
    pincode6: "",
    currentInput: 1,
    otpcode: ""
  }),

  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loginUserInfo: "auth/loginUserInfo"
    })
  },

  watch: {
    pincode1: function(newvalue, oldvalue) {
      if (this.currentInput === 1) {
        if (newvalue.length !== 0) {
          if (!isNaN(newvalue[this.pincode1.length - 1])) {
            this.pincode1 = newvalue;
            this.$refs.input_pincode2.focus();
            this.currentInput = 2;
          } else {
            this.pincode1 = oldvalue;
            this.currentInput = 1;
          }
        }
      }
    },
    pincode2: function(newvalue, oldvalue) {
      if (this.currentInput === 2) {
        if (newvalue.length !== 0) {
          if (!isNaN(newvalue[this.pincode2.length - 1])) {
            this.pincode2 = newvalue;
            this.$refs.input_pincode3.focus();
            this.currentInput = 3;
          } else {
            this.pincode2 = oldvalue;
          }
        }
      }
    },

    pincode3: function(newvalue, oldvalue) {
      if (this.currentInput === 3) {
        if (newvalue.length !== 0) {
          if (!isNaN(newvalue[this.pincode3.length - 1])) {
            this.pincode3 = newvalue;
            this.$refs.input_pincode4.focus();
            this.currentInput = 4;
          } else {
            this.pincode3 = oldvalue;
          }
        }
      }
    },
    pincode4: function(newvalue, oldvalue) {
      if (this.currentInput === 4) {
        if (newvalue.length !== 0) {
          if (!isNaN(newvalue[this.pincode4.length - 1])) {
            this.pincode4 = newvalue;
            this.$refs.input_pincode5.focus();
            this.currentInput = 5;
          } else {
            this.pincode4 = oldvalue;
          }
        }
      }
    },
    pincode5: function(newvalue, oldvalue) {
      if (this.currentInput === 5) {
        if (newvalue.length !== 0) {
          if (!isNaN(newvalue[this.pincode5.length - 1])) {
            this.pincode5 = newvalue;
            this.$refs.input_pincode6.focus();
            this.currentInput = 6;
          } else {
            this.pincode5 = oldvalue;
          }
        }
      }
    },
    pincode6: function(newvalue, oldvalue) {
      if (this.currentInput === 6) {
        if (newvalue.length !== 0) {
          if (!isNaN(newvalue[this.pincode6.length - 1])) {
            this.pincode6 = newvalue;
          } else {
            this.pincode6 = oldvalue;
          }
        }
      }
    }
  },
  methods: {
    login: function() {
      this.otpcode =
        this.pincode1 +
        this.pincode2 +
        this.pincode3 +
        this.pincode4 +
        this.pincode5 +
        this.pincode6;
      this.loginUserInfo.otp = this.otpcode;
      this.$store
        .dispatch("auth/login", [this.loginUserInfo, this.rememberme])
        .then(() => {
          if (this.user_logged) {
            if (!this.is_disabled) {
              this.$router.push("./contracts");
            } else {
              this.$bvToast.toast("This user is disabled now", {
                title: "Request Failed",
                variant: "danger",
                autoHideDelay: 3000,
                solid: false
              });
            }
          } else {
            this.$bvToast.toast(this.notification_text, {
              title: "Request Failed",
              variant: this.notification_color,
              autoHideDelay: 3000,
              solid: false
            });
          }
        })
        .catch(() => {
          this.$bvToast.toast(this.notification_text, {
            title: "Request Failed",
            variant: this.notification_color,
            autoHideDelay: 3000,
            solid: false
          });
        });
    },
    logintoMainLayout() {
      this.$router.push({
        path: "submissions-list"
      });
    },
    searchEmptyPostion() {
      if (this.pincode1 === "") return 1;
      if (this.pincode2 === "") return 2;
      if (this.pincode3 === "") return 3;
      if (this.pincode4 === "") return 4;
      if (this.pincode5 === "") return 5;
      if (this.pincode6 === "") return 6;
    },
    processFocus: function() {
      this.currentInput = this.searchEmptyPostion();
      this.gotoCurrentInput();
    },
    processDeleteKey: function($event) {
      this.currentInput = this.searchEmptyPostion();
      if ($event.keyCode === 8) {
        switch (this.currentInput) {
          case 6:
            if (this.pincode6 === "") {
              this.currentInput = this.currentInput - 1;
              this.gotoCurrentInput();
            }
            this.gotoCurrentInput();
            break;
          case 2:
            if (this.pincode2 === "") {
              this.currentInput = this.currentInput - 1;
              this.gotoCurrentInput();
            }
            this.gotoCurrentInput();
            break;
          case 3:
            if (this.pincode3 === "") {
              this.currentInput = this.currentInput - 1;
              this.gotoCurrentInput();
            }
            this.gotoCurrentInput();
            break;
          case 4:
            if (this.pincode4 === "") {
              this.currentInput = this.currentInput - 1;
              this.gotoCurrentInput();
            }
            this.gotoCurrentInput();
            break;
          case 5:
            if (this.pincode5 === "") {
              this.currentInput = this.currentInput - 1;
              this.gotoCurrentInput();
            }
            this.gotoCurrentInput();
            break;
        }
      }
      if ($event.keyCode === 13 && this.pincode6 != "") {
        this.login();
      }
      if ($event.keyCode >= 48 && $event.keyCode <= 57) {
        switch (this.currentInput) {
          case 1:
            if (this.pincode1 !== "") this.currentInput = this.currentInput + 1;
            this.gotoCurrentInput();
            break;
          case 2:
            if (this.pincode2 !== "") this.currentInput = this.currentInput + 1;
            this.gotoCurrentInput();
            break;
          case 3:
            if (this.pincode3 !== "") this.currentInput = this.currentInput + 1;
            this.gotoCurrentInput();
            break;
          case 4:
            if (this.pincode4 !== "") this.currentInput = this.currentInput + 1;
            this.gotoCurrentInput();
            break;
          case 5:
            if (this.pincode5 !== "") this.currentInput = this.currentInput + 1;
            this.gotoCurrentInput();
            break;
        }
      }
      // if(this.currentInput!== 6 && this.)
    },
    gotoCurrentInput: function() {
      switch (this.currentInput) {
        case 1:
          this.$refs.input_pincode1.focus();
          break;
        case 2:
          this.$refs.input_pincode2.focus();
          break;
        case 3:
          this.$refs.input_pincode3.focus();
          break;
        case 4:
          this.$refs.input_pincode4.focus();
          break;
        case 5:
          this.$refs.input_pincode5.focus();
          break;
        case 6:
          this.$refs.input_pincode6.focus();
          break;
      }
    }
  }
};
</script>

<style>
.two-factor-button {
  background: rgb(8, 144, 255);
  box-shadow: rgb(8, 144, 255) 0px 8px 25px -8px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 20px;
  float: right;
}
.pf-input-pin__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.two-factor-large-input {
  width: 60px;
  height: 60px;
  text-align: center;
  border-radius: 2px;
  margin-left: 20px;
  border: 1px solid #e5e5e5;
  font-size: 30px;
}
.two-factor-large-input:focus {
  border-color: #288bf5;
}

.pf-input-pin__wrapper input {
  overflow: visible;
}

.pf-input-pin__input:not(:first-of-type) {
  margin-left: 8px;
}
@media only screen and (max-width: 600px) {
  .two-factor-large-input {
    width: 50px;
    height: 50px;
    margin-left: 5px;
  }
  .two-factor-header {
    font-size: 40px;
  }
}
</style>
