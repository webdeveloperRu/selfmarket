<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col-xs-12 col-sm-12 justify-center flex">
        <q-card class="card-bg " style="max-width: 700px">
          <q-card-section class="text-h6 ">
            <div class="text-h6">Edit Profile</div>
          </q-card-section>
          <q-card-section class="flex justify-center">
            <q-avatar size="150px">
              <img :src="avatarImageUrl" v-if="avatarImageUrl != ''" />
              <q-icon
                name="account_circle"
                color="grey-5"
                size="150px"
                v-else
              ></q-icon>
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="q-gutter-md float-right">
              <q-input
                ref="myFileInput"
                style="display:none"
                v-model="avatarFile"
                type="file"
                label="Standard"
                @change="onSelectUserAvatar"
              ></q-input>
              <q-btn
                round
                color="primary"
                icon="cloud_upload"
                @click="getAvatarFile"
              ></q-btn>
            </div>
          </q-card-section>
          <q-card-section class="q-pa-sm q-mt-lg">
            <q-list class="row">
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input v-model="userName" label="User Name" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input v-model="userEmail" label="Email Address" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input v-model="fullName" label="Full Name" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-select
                    v-model="timeZone"
                    :options="timeZoneList"
                    use-input
                    label="statndard"
                    @filter="filterTimeZone"
                  >
                  </q-select>
                </q-item-section>
              </q-item>

              <!-- <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    autogrow
                    v-model="user_details.address"
                    label="Address"
                  />
                </q-item-section>
              </q-item> -->
              <!-- <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input v-model="user_details.city" label="City" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    v-model="user_details.post_code"
                    label="Postal Code"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="textarea"
                    v-model="user_details.about"
                    label="About"
                  />
                </q-item-section>
              </q-item> -->
            </q-list>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              class="text-capitalize bg-primary text-white"
              @click="updateUser"
              :loading="updatingUser"
              >Update User Info</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>

      <div class=" col-xs-12 col-sm-12 justify-center flex q-mt-md">
        <q-card class="" style="max-width: 700px">
          <q-card-section class="text-h6 q-pa-sm">
            <div class="text-h6">Change Password</div>
          </q-card-section>
          <q-card-section class="q-pa-sm row">
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Current Password
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  outlined
                  round
                  v-model="currentPassword"
                  label="Current Password"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                New Password
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  outlined
                  round
                  v-model="newPassword"
                  label="New Password"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Confirm New Password
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  outlined
                  round
                  ref="confirmNewPassword"
                  v-model="confirmNewPassword"
                  label="Confirm New Password"
                />
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              class="text-capitalize bg-primary text-white"
              @click="changePassword"
              :loading="updatingUserPassword"
              >Change Password</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import timeZone from "./time_zone";
export default {
  name: "MyProfile",
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loggedIn: "auth/loggedIn",
      user: "auth/user"
    })
  },

  data() {
    return {
      timeZoneList: timeZone.time_zones,
      timeZone: null,
      userName: "",
      fullName: "",
      userEmail: "",
      avatarImageUrl: "",
      avatarFile: null,
      accountHeader: null,
      updatingUser: false,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      updatingUserPassword: false
    };
  },

  created() {
    this.timeZone = this.user.data.tz;
    this.userName = this.user.data.username;
    this.fullName = this.user.data.full_name;
    this.userEmail = this.user.data.email;
    this.avatarImageUrl = this.user.data.avatar;
  },

  methods: {
    filterTimeZone(val, update) {
      if (val === "") {
        update(() => {
          this.timeZoneList = timeZone.time_zones;

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.timeZoneList = timeZone.time_zones.filter(
          v => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    getAvatarFile() {
      this.$refs.myFileInput.$el.click();
    },
    onSelectUserAvatar(e) {
      let image = e.target.files[0];
      if (image !== undefined) {
        this.createImage(image);
        this.avatarFile = image;
      }
    },
    createImage(file) {
      var reader = new FileReader();
      reader.onload = e => {
        this.avatarImageUrl = e.target.result;
        // this.cssProfileImageUrl = "url(" + this.profileImageUrl + ")";
      };
      reader.readAsDataURL(file);
    },
    updateUser() {
      let user = {
        email: this.userEmail,
        full_name: this.fullName,
        tz: this.timeZone,
        avatar: this.avatarFile,
        account_header: this.accountHeader
      };
      this.updatingUser = true;
      this.$store
        .dispatch("auth/updateUser", user)
        .then(() => {
          this.$q.notify({
            type: this.notificationType,
            message: this.notificationText
          });

          this.updatingUser = false;
        })
        .catch(() => {
          this.$q.notify({
            type: this.notificationType,
            message: this.notificationText
          });

          this.updatingUser = false;
        });
    },

    changePassword() {
      if (this.newPassword != this.confirmNewPassword) {
        this.$q.notify({
          type: "negative",
          message: "password mismatching"
        });
        return;
      }
      this.updatingUserPassword = true;

      this.$store
        .dispatch("auth/changePassword", [
          this.currentPassword,
          this.newPassword
        ])
        .then(() => {
          this.$q.notify({
            type: this.notificationType,
            message: this.notificationText
          });
          this.updatingUserPassword = false;
        })
        .catch(() => {
          this.$q.notify({
            type: this.notificationType,
            message: this.notificationText
          });

          this.updatingUserPassword = false;
        });
    }
  }
};
</script>

<style scoped></style>
