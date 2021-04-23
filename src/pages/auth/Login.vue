<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class=" full-width q-pa-lg" style="max-width: 500px">
      <q-card square class="shadow-24">
        <q-card-section class="bg-primary">
          <h4 class="text-h5 text-white q-my-md">Login</h4>
        </q-card-section>
        <q-card-section>
          <q-form
            class="q-px-sm q-pt-md q-pb-sm"
            @submit.prevent.stop="onSubmit"
          >
            <q-input
              square
              v-model="email"
              type="email"
              label="Email"
              class="q-py-sm"
              :rules="[
                val => !!val || 'Field requrired',
                val => validEmail(val) || 'invalid Email'
              ]"
              ref="email"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>

            <q-input
              square
              v-model="password"
              type="password"
              label="Password"
              class="q-py-sm"
              :rules="[val => !!val || 'Field is required']"
              ref="password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
            <q-btn
              unelevated
              size="lg"
              color="primary"
              class="full-width text-white q-mt-lg"
              label="login"
              type="submit"
              aria-label="Login"
              :loading="sendingRequest"
            />
            <div class="flex justify-between">
              <q-checkbox
                v-model="rememberMe"
                label="Remember Me"
                class="q-pt-sm"
              />
              <q-btn
                flat
                label="Forgot Password"
                to="/forgot-password"
                aria-label="Forgot Password"
                color="primary"
                class="q-pt-sm"
              />
            </div>
          </q-form>
        </q-card-section>
        <q-card-section class="text-right q-px-lg">
          <q-btn
            unelevated
            color="primary"
            label="register"
            @click="navigateRegister"
            aria-label="Return Register"
            outline
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      sendingRequest: false
    };
  },
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loggedIn: "auth/loggedIn"
    })
  },
  methods: {
    navigateRegister() {
      this.$router.push("/register").catch(() => {});
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      return re.test(email);
    },
    onSubmit() {
      this.$refs.password.validate();
      this.$refs.email.validate();
      if (this.$refs.password.hasError || this.$refs.email.hasError) return;
      let user = {
        email: this.email,
        password: this.password
      };
      this.sendingRequest = true;
      this.$store.dispatch("auth/login", [user, this.rememberMe]).then(() => {
        if (this.loggedIn) this.$router.push("/profile");
        else {
          if (this.notification_text == "otp code is requested") {
            this.$router.push("./twofactor-auth");
          } else {
            this.$q.notify({
              type: this.notificationType,
              message: this.notificationText
            });
          }
        }
        this.sendingRequest = false;
      });
    }
  }
};
</script>

<style></style>
