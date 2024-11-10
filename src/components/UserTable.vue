<template>
  <table
    class="table-auto border mx-auto w-full text-sm text-left rtl:text-right text-gray-600"
  >
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <th class="px-6 py-3">
        <input type="checkbox" @click="toggleSelectAll" v-model="allSelected" />
      </th>
      <th class="px-6 py-3" v-text="'Name'" />
      <th class="px-6 py-3" v-text="'Date of Birth'" />
      <th class="px-6 py-3" v-text="'Age'" />
      <th class="px-6 py-3" v-text="'Profession'" />
      <th class="px-6 py-3" v-text="'Country'" />
      <th class="px-6 py-3" v-text="'Favorite Quote'" />
    </thead>
    <tbody>
      <tr v-for="(user, key) in users" :key="key" class="bg-white border-b">
        <td class="px-6 py-3">
          <input
            type="checkbox"
            :id="user.id"
            :name="user.id"
            :value="user.id"
            @change="() => $emit('selected', selected)"
            v-model="selected"
          />
        </td>
        <th
          scope="row"
          class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
          v-text="user.firstName + ' ' + user.lastName"
        />

        <td class="px-6 py-3" v-text="user.birthDate" />
        <td class="px-6 py-3" v-text="userAge(user)" />
        <td
          class="px-6 py-3"
          v-text="getProfessionNameById(user.profession_id)"
        />
        <td class="px-6 py-3" v-text="getCountryNameById(user.country_id)" />
        <td class="px-6 py-3" v-text="user.quote" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserTable",
  data() {
    return {
      allSelected: false,
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
    userAge(user) {
      const birthDate = user.birthDate;
      return new Date().getUTCFullYear() - new Date(birthDate).getUTCFullYear();
    },
    getProfessionNameById(id) {
      const profession = this.professions.find(
        (profession) => profession.value === id
      );
      return profession ? profession.text : "";
    },
    getCountryNameById(id) {
      const country = this.countries.find((country) => country.value === id);
      return country ? country.text : "";
    },
    toggleSelectAll() {
      this.selected = this.allSelected ? [] : this.users.map((user) => user.id);
      this.$emit("selected", this.selected);
    },
  },
};
</script>
