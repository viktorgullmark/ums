<template>
  <table class="table-auto mx-auto my-10">
    <thead>
      <th class="px-4 py-2" v-text="'Namn'" />
      <th class="px-4 py-2" v-text="'Date of Birth'" />
      <th class="px-4 py-2" v-text="'Age'" />
      <th class="px-4 py-2" v-text="'Profession'" />
      <th class="px-4 py-2" v-text="'Country'" />
      <th class="px-4 py-2" v-text="'Favorite Quote'" />
      <th class="px-4 py-2" v-text="''" />
    </thead>
    <tbody>
      <tr v-for="(user, key) in users" :key="key">
        <td
          class="border px-4 py-2"
          v-text="user.firstName + ' ' + user.lastName"
        />
        <td class="border px-4 py-2" v-text="user.birthDate" />
        <td class="border px-4 py-2" v-text="userAge(user)" />
        <td
          class="border px-4 py-2"
          v-text="getProfessionNameById(user.profession_id)"
        />
        <td
          class="border px-4 py-2"
          v-text="getCountryNameById(user.country_id)"
        />
        <td class="border px-4 py-2" v-text="user.quote" />
        <td class="px-4 py-2">
          <button-component
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            :on-click="() => removeRow(user)"
            :button-text="'Remove'"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import User from './User';
import { mapState, mapActions } from "vuex";
import ButtonComponent from "./Button.vue";

export default {
  name: "UserList",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      selected: [],
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.userModule.users,
      professions: (state) => state.professionModule.professions,
      countries: (state) => state.countryModule.countries,
    }),
  },
  methods: {
    ...mapActions(["removeUser"]),
    removeRow(user) {
      this.removeUser(user);
    },
    userAge(user) {
      const birthDate = user.birthDate;
      return new Date().getUTCFullYear() - new Date(birthDate).getUTCFullYear();
    },
    getProfessionNameById(id) {
      console.log("professions", this.professions);
      const profession = this.professions.find(
        (profession) => profession.value === id
      );
      console.log("profession", profession);
      return profession ? profession.text : "";
    },
    getCountryNameById(id) {
      console.log("countries", this.countries, id);
      const country = this.countries.find((country) => country.value === id);
      return country ? country.text : "";
    },
  },
};
</script>
