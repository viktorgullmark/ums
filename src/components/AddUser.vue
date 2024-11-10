<template>
  <form class="md:w-8/12 mx-auto my-10">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          v-text="'First Name'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Enter FirstName"
          v-model="user.firstName"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
          v-text="'Last Name'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-last-name"
          type="text"
          placeholder="Enter LastName"
          v-model="user.lastName"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-date"
          v-text="'Date of Birth'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-date"
          type="date"
          v-model="user.birthDate"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-quote"
          v-text="'Favorite Quote'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-quote"
          type="text"
          placeholder="Enter Quote"
          v-model="user.quote"
        />
      </div>
      <drop-down
        label="Profession"
        :options="professions"
        :changeSelect="selectProfession"
      />
      <drop-down
        label="Country"
        :options="countries"
        :changeSelect="selectCountry"
      />
    </div>
    <button-component :on-click="addRow" :button-text="'Save User'" />
  </form>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import DropDown from "./DropDown";
import ButtonComponent from "./Button";

export default {
  name: "AddUser",
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
  },
  computed: {
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

<style scoped></style>
