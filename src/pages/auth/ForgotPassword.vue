<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class=" full-width q-pa-lg" style="max-width: 500px">
      <q-card square class="shadow-24">
        <q-card-section class="bg-primary">
          <h4 class="text-h5 text-white q-my-md">Forgot Password</h4>
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

            <q-btn
              unelevated
              size="lg"
              color="primary"
              class="full-width text-white q-mt-xl"
              label="Send"
              type="submit"
              aria-label="Send Email"
              :loading="inRequest"
            />
          </q-form>
        </q-card-section>
        <q-card-section class="text-right q-py-sm q-px-lg">
          <q-btn
            unelevated
            color="primary"
            label="login"
            @click="navigateLogin"
            aria-label="Return Login"
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
  name: "ForgotPassword",
  data() {
    return {
      email: ""
    };
  },
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess"
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
      this.$refs.email.validate();
      if (this.$refs.email.hasError) return;
      let email = {
        email: this.email
      };
      this.$store.dispatch("auth/forgotPassword", email).then(() => {
        if (this.requestSuccess) this.$router.push("/reset-password");
        else
          this.$q.notify({
            type: this.notificationType,
            message: this.notificationText
          });
      });
    }
  }
};
</script>

<style></style>
