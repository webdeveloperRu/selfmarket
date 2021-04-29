<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="full-width q-pa-lg" style="max-width: 500px">
      <q-card square class="shadow-24">
        <q-card-section class="bg-primary">
          <h4 class="text-h5 text-white q-my-md">Registration</h4>
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
              ref="email"
              class="q-py-sm"
              :rules="[
                val => !!val || 'Field requrired',
                val => validEmail(val) || 'invalid Email'
              ]"
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
              ref="password"
              :rules="[val => !!val || 'Field is required']"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
            <q-input
              square
              v-model="confirmPassword"
              type="password"
              label="Confirm Password"
              class="q-py-sm"
              :rules="[
                val => !!val || 'Field is required',
                val => val == password || 'password mismatching'
              ]"
              ref="confirmPassword"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
            <q-btn
              unelevated
              size="lg"
              color="primary"
              class="full-width text-white q-ma-lg q-mt-xl"
              label="Register"
              aria-label="Register"
              type="submit"
              :loading="sendingRequest"
            />
          </q-form>
        </q-card-section>
        <q-card-section class="text-right q-pa-lg">
          <q-btn
            unelevated
            color="primary"
            label="login"
            @click="navigateLogin"
            outline
            aria-label="Return Login"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
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
    navigateLogin() {
      this.$router.push("/login").catch(() => {});
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      return re.test(email);
    },
    onSubmit() {
      this.$refs.password.validate();
      this.$refs.confirmPassword.validate();
      this.$refs.email.validate();
      if (
        this.$refs.password.hasError ||
        this.$refs.confirmPassword.hasError ||
        this.$refs.email.hasError
      )
        return;
      let user = {
        email: this.email,
        password: this.password
      };
      this.sendingRequest = true;
      this.$store.dispatch("auth/register", user).then(() => {
        this.$q.notify({
          type: this.notificationType,
          message: this.notificationText
        });
        if (this.loggedIn) this.$router.push("/profile");

        this.sendingRequest = false;
      });
    }
  }
};
</script>

<style></style>
