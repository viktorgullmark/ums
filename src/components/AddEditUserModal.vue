<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header uppercase">{{ title }}</div>
          <div class="modal-body">
            <form class="mx-auto my-10">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div class="w-full mb-3">
                    <ums-input
                      label="First Name"
                      id="grid-first-name"
                      placeholder="John"
                      v-model="user.firstName"
                    />
                  </div>
                  <div class="w-full mb-3">
                    <ums-input
                      label="Last Name"
                      id="grid-last-name"
                      placeholder="Doe"
                      v-model="user.lastName"
                    />
                  </div>
                  <div class="w-full mb-3">
                    <ums-input
                      label="Date of Birth"
                      id="grid-date"
                      type="date"
                      placeholder="Date of Birth"
                      v-model="user.birthDate"
                    />
                  </div>
                </div>
                <div>
                  <div class="w-full mb-3">
                    <ums-input
                      label="Favorite Quote"
                      id="grid-quote"
                      placeholder="Asta la vista, baby!"
                      v-model="user.quote"
                    />
                  </div>

                  <div class="w-full mb-3">
                    <ums-drop-down
                      id="profession"
                      label="Profession"
                      :options="professions"
                      :changeSelect="selectProfession"
                    />
                  </div>

                  <div class="w-full mb-3">
                    <ums-drop-down
                      id="country"
                      label="Country"
                      :options="countries"
                      :changeSelect="selectCountry"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer flex justify-between">
            <ums-button
              :on-click="() => $emit('close')"
              :button-text="'Cancel'"
              variant="passive"
            />
            <ums-button
              :on-click="edit ? editUser : addRow"
              :button-text="edit ? 'Edit User' : 'Add User'"
              :isDisabled="!valid"
            >
              <template v-slot:leading>
                <img v-if="edit" src="@assets/icons/pencil-square.svg" />
                <img v-else src="@assets/icons/user-plus.svg" />
              </template>
            </ums-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import UmsDropDown from "@/DropDown";
import UmsInput from "@/Input";
import UmsButton from "@/Button";

export default {
  name: "UmsAddEditUserModal",
  props: {
    initialUser: {
      type: Object,
      default: () => {
        return {
          firstName: "",
          lastName: "",
          birthDate: null,
          quote: "",
        };
      },
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: {
        ...this.initialUser,
      },
      title: this.edit ? "Edit User" : "Add New User",
    };
  },
  components: {
    UmsDropDown,
    UmsButton,
    UmsInput,
  },
  computed: {
    valid: function () {
      return (
        this.user &&
        this.user.firstName.length > 0 &&
        this.user.lastName.length > 0 &&
        this.user.birthDate
      );
    },
    ...mapState({
      professions: (state) => state.professionModule.professions,
      countries: (state) => state.countryModule.countries,
    }),
  },
  methods: {
    ...mapMutations({
      setProfession: "SET_PROFESSION",
      setCountry: "SET_COUNTRY",
    }),
    ...mapActions(["addUser", "updateUser", "setProfession", "setCountry"]),
    addRow() {
      this.addUser(this.user);
      this.$emit("close");
    },
    editUser() {
      this.updateUser(this.user);
      this.$emit("close");
    },
    selectProfession(profession) {
      this.setProfession(profession);
    },
    selectCountry(country) {
      this.setCountry(country);
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 800px;
  overflow: scroll;
  max-height: 100vh;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
