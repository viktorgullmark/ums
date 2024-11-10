<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header uppercase">Add New User</div>
          <div class="modal-body">
            <form class="mx-auto my-10">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div class="w-full mb-3">
                    <input-component
                      label="First Name"
                      id="grid-first-name"
                      placeholder="John"
                      v-model="user.firstName"
                    />
                  </div>
                  <div class="w-full mb-3">
                    <input-component
                      label="Last Name"
                      id="grid-last-name"
                      placeholder="Doe"
                      v-model="user.lastName"
                    />
                  </div>
                  <div class="w-full mb-3">
                    <input-component
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
                    <input-component
                      label="Favorite Quote"
                      id="grid-quote"
                      placeholder="Asta la vista, baby!"
                      v-model="user.quote"
                    />
                  </div>

                  <div class="w-full mb-3">
                    <drop-down
                      id="profession"
                      label="Profession"
                      :options="professions"
                      :changeSelect="selectProfession"
                    />
                  </div>

                  <div class="w-full mb-3">
                    <drop-down
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
            <button-component
              :on-click="() => $emit('close')"
              :button-text="'Cancel'"
              variant="passive"
            />
            <button-component
              :on-click="addRow"
              :button-text="'Add User'"
              :isDisabled="!valid"
            >
              <template v-slot:leading>
                <img src="./../assets/icons/user-plus.svg" />
              </template>
            </button-component>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import DropDown from "@/DropDown";
import InputComponent from "@/Input";
import ButtonComponent from "@/Button";

export default {
  name: "AddUserModal",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        birthDate: null,
        quote: "",
      },
    };
  },
  components: {
    DropDown,
    ButtonComponent,
    InputComponent,
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
    ...mapActions(["addUser", "setProfession", "setCountry"]),
    addRow() {
      this.addUser(this.user);
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

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
