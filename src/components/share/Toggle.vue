<template>
  <div class="toggle">
    <span class="toggle__title">{{ title }}</span>

    <button
      @click="toggle(optionOneValue)"
      class="toggle__button toggle__button--first"
      :class="[ isSearchByOptionOne ? 'toggle__button--active' : '' ]"
      :disabled="isSearchByOptionOne"
    >
      {{ optionOneName }}
    </button>

    <button
      @click="toggle(optionTwoValue)"
      class="toggle__button toggle__button--second"
      :class="[ !isSearchByOptionOne ? 'toggle__button--active' : '' ]"
      :disabled="!isSearchByOptionOne"
    >
      {{ optionTwoName }}
    </button>

  </div>
</template>

<script>

export default {
  name: "toggle",
  props: [
    'title',
    'optionOneName',
    'optionOneValue',
    'optionTwoName',
    'optionTwoValue',
    'optionActive'
  ],
  data() {
    return {
      isSearchByOptionOne: this.optionActive === this.optionOneValue
    }
  },
  methods: {
    toggle(option) {
      this.isSearchByOptionOne = !this.isSearchByOptionOne;
      this.$emit("toggle", option);
    }
  }
};
</script>

<style scoped>
.toggle {
  font-size: 16px;
  color: #fff;
}

.toggle__title {
  margin: 0 22px 0 0;
  font-weight: 100;
  text-transform: uppercase;
}

.toggle__button {
  padding: 11px 23px;
  text-transform: uppercase;
  color: #fff;
  border: none;
  background-color: #484848;
  cursor: pointer;
}

.toggle__button--first {
  border-radius: 2px 0 0 2px;
}

.toggle__button--second {
  border-radius: 0 2px 2px 0;
}

.toggle__button--active {
  background-color: #f65261;
  cursor: default;
}
</style>
