<template>
  <q-page class="full-height row justify-center items-center q-pa-sm">
    <q-card class="q-mx-auto q-pa-sm q-my-xl" style="max-width: 800px">
      <h2 class="q-ml-md q-my-md text-center two-factor-title">
        Two-Factor Authentication
      </h2>
      <div class="q-mt-md q-mb-md q-ml-md text-center" style="font-size: 20px;">
        Follow these step to login with extra security
      </div>

      <div class="two-step-setup-title">
        <div class="row">
          <div class="col-12 col-sm-1 q-pt-sm text-center">
            <div class="two-step-number">1</div>
          </div>
          <div class="col-12 col-sm-11">
            <div class="two-step-setup-info ">
              <div class="q-pt-sm text-center">
                Install a Two-Factor Authentication app on your phone
              </div>
              <div class="q-pt-md q-mb-md text-center" style="font-size:14px">
                Get the
                <strong>Google Authenticator</strong>
                app from App Store for iOS or Google Play for Android.
              </div>
              <div style="text-align:center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en"
                  target="”_blank”"
                  class="m-2"
                  ><img
                    src="../../assets/logo/google-play-badge.png"
                    alt="Google play logo"
                    style="width: 160px;"
                /></a>
                <a
                  href="https://apps.apple.com/us/app/google-authenticator/id388497605"
                  target="”_blank”"
                  class="m-2"
                  ><img
                    src="../../assets/logo/app-store-badge.png"
                    alt="Google play logo"
                    style="width: 160px;"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="two-step-setup-title q-mt-lg">
        <div class="row">
          <div class="col-12 col-sm-1 q-pt-sm text-center">
            <div class="two-step-number">2</div>
          </div>
          <div class="col-12 col-sm-11 ">
            <div class="two-step-setup-info q-px-md ">
              <div class="q-mt-sm q-mb-md text-center">
                Open the app and scan the QR code below.
              </div>

              <div class="row ">
                <div
                  class="col-12 col-sm-6"
                  style=" display: flex;justify-content: center;align-items: center;"
                >
                  <img v-bind:src="fullUrl" alt="QR code" style="width: 80%;" />
                </div>
                <div
                  class="col-12 col-sm-6"
                  style=" display: flex;justify-content: center;align-items: center;"
                >
                  <!-- <div class="mt-1">Or</div> -->
                  <div class="">
                    <div class="text-center" style="font-size: 14px">
                      Use manual entry key
                    </div>
                    <div class="default-input text-center q-mt-sm">
                      <input
                        type="text"
                        style="width: 280px; font-size:14px"
                        label=""
                        class="inputx qrcode_input"
                        disabled
                        placeholder=""
                        v-model="qrCodeKey"
                      />
                    </div>
                    <div class="text-center q-mt-md">
                      <!-- <a v-clipboard:copy="qrCodeKey">Click to Copy</a> -->
                      <div
                        class="clipkBoardCopy"
                        style="font-size: 14px"
                        @click="copyToClipBoard"
                      >
                        Click to copy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="two-step-setup-title q-mt-lg">
        <div class="row">
          <div class="col-12 col-sm-1 q-pa-sm text-center">
            <div class="two-step-number">3</div>
          </div>
          <div class="col-12 col-sm-11">
            <div class="two-step-setup-info q-px-md text-center">
              <div>
                Enter the 6 numbers displayed in the Authenticator App in the
                boxes below.
              </div>
              <div class="pf-input-pin__wrapper q-mt-md">
                <input
                  class="pf-input-pin__input"
                  max="9"
                  maxlength="1"
                  min="0"
                  id="login2faInputPin-0"
                  tabindex="-1"
                  autocomplete="off"
                  v-model="pincode1"
                  ref="input_pincode1"
                  @keydown="processDeleteKey($event)"
                  @click="processFocus"
                />
                <input
                  class="pf-input-pin__input"
                  max="9"
                  maxlength="1"
                  min="0"
                  id="login2faInputPin-1"
                  tabindex="-1"
                  autocomplete="off"
                  v-model="pincode2"
                  ref="input_pincode2"
                  @keydown="processDeleteKey($event)"
                  @click="processFocus"
                />
                <input
                  class="pf-input-pin__input"
                  max="9"
                  maxlength="1"
                  min="0"
                  id="login2faInputPin-2"
                  tabindex="-1"
                  autocomplete="off"
                  v-model="pincode3"
                  ref="input_pincode3"
                  @keydown="processDeleteKey($event)"
                  @click="processFocus"
                />
                <input
                  class="pf-input-pin__input"
                  max="9"
                  maxlength="1"
                  min="0"
                  id="login2faInputPin-3"
                  tabindex="-1"
                  autocomplete="off"
                  v-model="pincode4"
                  ref="input_pincode4"
                  @keydown="processDeleteKey($event)"
                  @click="processFocus"
                />
                <input
                  class="pf-input-pin__input"
                  max="9"
                  maxlength="1"
                  min="0"
                  id="login2faInputPin-4"
                  tabindex="-1"
                  autocomplete="off"
                  v-model="pincode5"
                  ref="input_pincode5"
                  @keydown="processDeleteKey($event)"
                  @click="processFocus"
                />
                <input
                  class="pf-input-pin__input"
                  max="9"
                  maxlength="1"
                  min="0"
                  id="login2faInputPin-5"
                  tabindex="0"
                  autocomplete="off"
                  v-model="pincode6"
                  ref="input_pincode6"
                  @keydown="processDeleteKey($event)"
                  @click="processFocus"
                />
              </div>
              <div style="float: right" class="q-mt-md">
                <q-btn
                  color="red"
                  class="q-ml-md"
                  @click="deleteTwoFactorLogin"
                  v-if="twofaLogged"
                  >Disable</q-btn
                >
                <q-btn
                  color="primary"
                  class="q-ml-md"
                  :loading="sendingRequest"
                  @click="setTwoFactorLogin"
                  >Log in</q-btn
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>
<script>
import { mapGetters } from "vuex";
import { copyToClipboard } from "quasar";
export default {
  name: "TwoFactorAuthSetup",

  data: () => ({
    fullUrl: "",
    qrCodeKey: "",
    pincode1: "",
    pincode2: "",
    pincode3: "",
    pincode4: "",
    pincode5: "",
    pincode6: "",
    currentInput: 1,
    otpcode: "",
    sendingRequest: false
  }),
  props: {
    getQrCode: Boolean
  },

  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loginUserInfo: "auth/loginUserInfo",
      twofaLogged: "auth/twofaLogged",
      twoFaKey: "auth/twoFaKey"
    })
  },

  created() {
    this.getEntryKeyCode();
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
    getEntryKeyCode: function() {
      this.$store.dispatch("auth/getTwoFactor").then(() => {
        if (this.twoFaKey == "") {
          this.$q.notify({
            type: this.notificationType,
            message: this.notificationText
          });
        } else {
          this.qrCodeKey = this.twoFaKey;
          this.buildUrl();
        }
      });
    },
    setTwoFactorLogin: function() {
      this.otpcode =
        this.pincode1 +
        this.pincode2 +
        this.pincode3 +
        this.pincode4 +
        this.pincode5 +
        this.pincode6;
      this.sendingRequest = true;
      this.$store
        .dispatch("auth/setTwoFactor", this.otpcode)
        .then(() => {
          this.$q.notify({
            type: this.notificationType,
            message: this.notificationText
          });
          this.pincode1 = "";
          this.pincode2 = "";
          this.pincode3 = "";
          this.pincode4 = "";
          this.pincode5 = "";
          this.pincode6 = "";
          this.sendingRequest = false;
        })
        .catch(() => {
          this.$q.notify({
            type: this.notificationType,
            message: this.notificationText
          });
          this.sendingRequest = false;
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
        this.setTwoFactorLogin();
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
    },
    copyToClipBoard() {
      copyToClipboard(this.qrCodeKey)
        .then(() => {
          this.$q.notify({
            type: "positive",
            message: "copy to clipboard!"
          });
        })
        .catch(() => {
          this.$q.notify({
            type: "negative",
            message: "failed copy to clipboard"
          });
        });
    },

    deleteTwoFactorLogin() {
      this.otpcode =
        this.pincode1 +
        this.pincode2 +
        this.pincode3 +
        this.pincode4 +
        this.pincode5 +
        this.pincode6;
      this.$store
        .dispatch("twofaManage/deleteTwoFactor", this.otpcode)
        .then(() => {
          this.$bvToast.toast(this.notification_text, {
            title: "Delete Two Factor",
            variant: this.notification_color,
            autoHideDelay: 3000,
            solid: false
          });
          this.pincode1 = "";
          this.pincode2 = "";
          this.pincode3 = "";
          this.pincode4 = "";
          this.pincode5 = "";
          this.pincode6 = "";
        })
        .catch(() => {
          this.$bvToast.toast(this.notification_text, {
            title: "Delete Two Factor",
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
    buildUrl: function() {
      this.fullUrl =
        "https://chart.googleapis.com/chart?cht=qr&chs=" +
        400 +
        "x" +
        400 +
        "&chl=" +
        encodeURIComponent(this.qrCodeKey);
    }
  }
};
</script>
<style>
.two-step-number {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  color: white;
  display: inline-block;
  font-weight: bold;
  line-height: 40px;
  margin-right: 5px;
  text-align: center;
  width: 40px;
  background-color: green;
  font-size: 20px;
}

.two-step-setup-info {
  font-size: 20px;
}

.pf-input-pin__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pf-input-pin__input {
  width: 55px;
  height: 55px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #c5c4c4;
}
.pf-input-pin__input:focus {
  border-color: #288bf5;
}
.pf-input-pin__wrapper input {
  overflow: visible;
  font-family: proxima nova;
}

.pf-input-pin__input:not(:first-of-type) {
  margin-left: 8px;
}
.qrcode_input {
  width: 100%;
  border-radius: 5px;
  border: solid 1px green !important;
  text-align: center;
}
.clipkBoardCopy:hover {
  color: #404adb;
  cursor: pointer;
  text-decoration: none;
}
@media only screen and (max-width: 600px) {
  .two-factor-title {
    font-size: 30px;
    font-weight: 500;
  }
  .pf-input-pin__input {
    width: 40px;
    height: 40px;
  }
  .two-step-setup-info {
    font-size: 16px;
  }
}
</style>
