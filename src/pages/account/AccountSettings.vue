<template>
  <q-layout view="hHh Lpr lff" container style="height: 92vh; width: 99.5%">
    <q-drawer
      v-model="drawerLeft"
      show-if-above
      :width="280"
      :breakpoint="1150"
      bordered
    >
      <q-tabs v-model="selectedTab" vertical class="text-grey-8" inline-label>
        <q-tab
          name="my-wallet"
          icon="account_balance_wallet"
          label="My Wallet"
        />
        <q-separator />
        <q-tab name="general" icon="settings" label="General" />
        <q-separator />

        <q-tab name="password" icon="lock" label="Password" />
        <q-separator />

        <q-tab
          name="notfications"
          icon="notifications"
          label="Notification Settings"
        />
        <q-separator />
      </q-tabs>
    </q-drawer>
    <q-page-container class="q-pa-md" v-if="selectedTab == 'general'">
      <div class="row q-mt-xl">
        <div class="col-xs-12 col-sm-12 justify-center flex">
          <q-card style="max-width: 700px; width: 100%" flat>
            <q-card-section class="text-h6 ">
              <div class="text-h5" style="font-weight: 500">
                General Settings
              </div>
            </q-card-section>
            <!-- <q-card-section class="flex justify-center">
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
            </q-card-section> -->
            <!-- <q-card-section classs="q-mb-lg">
              <div class="text-body1 q-mb-sm" style="font-weight: 500">
                User Name
              </div>
              <q-input v-model="userName" placeholder="User Name" outlined />
            </q-card-section> -->
            <q-card-section classs="q-mb-lg">
              <div class="text-body1 q-mb-sm" style="font-weight: 500">
                User Email
              </div>
              <q-input v-model="userEmail" placeholder="User Email" outlined />
            </q-card-section>
            <q-card-section classs="q-mb-lg">
              <div class="text-body1 q-mb-sm" style="font-weight: 500">
                Full Name
              </div>
              <q-input v-model="fullName" placeholder="Full Name" outlined />
            </q-card-section>

            <q-card-section classs="q-mb-lg">
              <div class="text-body1 q-mb-sm" style="font-weight: 500">
                Time Zone
              </div>

              <q-select
                v-model="timeZone"
                :options="timeZoneList"
                use-input
                label="statndard"
                @filter="filterTimeZone"
                outlined
              >
              </q-select>
            </q-card-section>

            <!-- <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-card-section>
                  <q-input
                    autogrow
                    v-model="user_details.address"
                    label="Address"
                  />
                </q-card-section>
              </q-item> -->
            <!-- <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-card-section>
                  <q-input v-model="user_details.city" label="City" />
                </q-card-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-card-section>
                  <q-input
                    v-model="user_details.post_code"
                    label="Postal Code"
                  />
                </q-card-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-card-section>
                  <q-input
                    type="textarea"
                    v-model="user_details.about"
                    label="About"
                  />
                </q-card-section>
              </q-item> -->
            <q-card-actions align="right" class="q-mr-md">
              <q-btn
                class="text-capitalize bg-primary text-white"
                @click="updateUser"
                :loading="updatingUser"
                >Update User Info</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </q-page-container>
    <q-page-container class="q-pa-md" v-if="selectedTab == 'password'">
      <div class="row q-mt-lg">
        <div class=" col-xs-12 col-sm-12 justify-center flex q-mt-md">
          <q-card class="" style="max-width: 700px; width: 100%" flat>
            <q-card-section class="text-h6 q-pa-sm">
              <div class="text-h5" style="font-weight: 500">
                Change Password
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-body2 q-mb-sm" style="font-weight: 600">
                Current Password
              </div>
              <q-input
                type="password"
                outlined
                round
                v-model="currentPassword"
                label="Current Password"
              />
              <div class="text-body2 q-mb-sm q-mt-xl" style="font-weight: 600">
                New Password
              </div>
              <q-input
                type="password"
                outlined
                round
                v-model="newPassword"
                label="New Password"
              />
              <div class="text-body2 q-mb-sm q-mt-xl" style="font-weight: 600">
                Confirm New Password
              </div>
              <q-input
                type="password"
                outlined
                round
                ref="confirmNewPassword"
                v-model="confirmNewPassword"
                label="Confirm New Password"
              />
            </q-card-section>

            <q-card-actions align="right" class="q-mr-md">
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
    </q-page-container>
    <q-page-container class="q-pa-md" v-if="selectedTab == 'notfications'">
      <div class="row q-mt-lg">
        <div class=" col-xs-12 col-sm-12 justify-center flex q-mt-md">
          <q-card class="" style="max-width: 700px; width: 100%" flat>
            <q-card-section class="text-h6 q-pa-sm">
              <div class="text-h5" style="font-weight: 500">
                Notfication Settings
              </div>
            </q-card-section>
            <q-card-section>
              <q-list bordered separator class="rounded-borders">
                <q-item tag="label" v-ripple class="q-pa-md">
                  <q-item-section side top>
                    <q-checkbox v-model="itemSoldNotiCheck" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label style="font-weight: 500"
                      >Notifications</q-item-label
                    >
                    <q-item-label caption class="q-mt-sm">
                      When someone purchased one of your items
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple class="q-pa-md">
                  <q-item-section side top>
                    <q-checkbox v-model="bidActivityNotiCheck" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label style="font-weight: 500"
                      >Bid Activity</q-item-label
                    >
                    <q-item-label caption class="q-mt-sm">
                      When someone bids on one of your items
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple class="q-pa-md">
                  <q-item-section side top>
                    <q-checkbox v-model="priceChangeNotiCheck" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label style="font-weight: 500"
                      >Price Change</q-item-label
                    >
                    <q-item-label caption class="q-mt-sm">
                      When an item you made an offer on changes in price
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple class="q-pa-md">
                  <q-item-section side top>
                    <q-checkbox v-model="auctionExpirationNotiCheck" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label style="font-weight: 500"
                      >Auction Expiration</q-item-label
                    >
                    <q-item-label caption class="q-mt-sm">
                      When a Dutch or English auction you created ends
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple class="q-pa-md">
                  <q-item-section side top>
                    <q-checkbox v-model="outBidNotiCheck" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label style="font-weight: 500">Outbid</q-item-label>
                    <q-item-label caption class="q-mt-sm">
                      When an offer you placed is exceeded by another user
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple class="q-pa-md">
                  <q-item-section side top>
                    <q-checkbox v-model="referralSuccessfulNotiCheck" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label style="font-weight: 500"
                      >Referral Successful</q-item-label
                    >
                    <q-item-label caption class="q-mt-sm">
                      When an item you referred is purchased
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple class="q-pa-md">
                  <q-item-section side top>
                    <q-checkbox v-model="ownedAssetUpdateNotiCheck" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label style="font-weight: 500"
                      >Owned Asset Updates
                    </q-item-label>
                    <q-item-label caption class="q-mt-sm">
                      When a significant update occurs for one of the items you
                      have purchased on opensea
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple class="q-pa-md">
                  <q-item-section side top>
                    <q-checkbox v-model="successfulPurchaseNotiCheck" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label style="font-weight: 500"
                      >Successful Purchase</q-item-label
                    >
                    <q-item-label caption class="q-mt-sm">
                      When you successfully buy an item
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple class="q-pa-md">
                  <q-item-section side top>
                    <q-checkbox v-model="selfmarketNewsletterNotiCheck" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label style="font-weight: 500"
                      >Selfmarket Newsletter
                    </q-item-label>
                    <q-item-label caption class="q-mt-sm">
                      Occasional updates from the Selfmarket team
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>

              <q-btn
                color="primary"
                label="Save"
                class="q-mt-md q-px-md float-right"
              >
              </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page-container>
    <q-page-container class="q-pa-md" v-if="selectedTab == 'my-wallet'">
      <div class="row q-mt-lg">
        <div class=" col-xs-12 col-sm-12 justify-center flex q-mt-md">
          <q-card class="" style="max-width: 700px; width: 100%" flat>
            <q-card-section>
              <q-list bordered padding class="rounded-borders">
                <q-item-section class="q-pa-md">
                  <q-item-label style="font-weight: 500">
                    <q-icon name="settings" style="font-size: 1.5rem"></q-icon>
                    Settings</q-item-label
                  >
                </q-item-section>
                <q-separator spaced />

                <q-item-section class="q-pa-md">
                  <div class="text-subtitle1" style="font-weight: 500">
                    Your wallet address
                  </div>
                  <q-input
                    readonly
                    flat
                    label="0xcf50dee0da26cf4247e3c93fadf5ebc674559ca6"
                  >
                  </q-input>
                  <div class="flex justify-start">
                    <q-btn
                      color="primary"
                      label="Save"
                      size="lg"
                      no-caps
                      class="q-mt-md q-px-md float-right q-mx-md"
                      style="width: 140px"
                    >
                    </q-btn>
                    <q-btn
                      color="primary"
                      label="Logout"
                      outline
                      no-caps
                      size="lg"
                      style="width: 140px"
                      class="q-mt-md q-px-md float-right"
                    >
                    </q-btn>
                  </div>
                </q-item-section>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
import timeZone from "./time_zone";
export default {
  name: "AccountSettings",
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
      updatingUserPassword: false,
      drawerLeft: false,
      selectedTab: "general",
      itemSoldNotiCheck: false,
      bidActivityNotiCheck: false,
      priceChangeNotiCheck: false,
      auctionExpirationNotiCheck: false,
      outBidNotiCheck: false,
      referralSuccessfulNotiCheck: false,
      ownedAssetUpdateNotiCheck: false,
      successfulPurchaseNotiCheck: false,
      selfmarketNewsletterNotiCheck: false
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

<style lang="scss" scoped>
.q-tab {
  justify-content: left;
  padding: 15px 20px;
}
</style>
