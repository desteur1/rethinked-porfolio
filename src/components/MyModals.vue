<template>
  <!-- v-if="isVisible" directive in the template ensures that the modal is only rendered when the isVisible prop is true. -->

  <!-- modal-overlay class is used for styling the overlay that covers the rest of the screen. The .self modifier ensures the modal closes only when the overlay itself is clicked, not when elements within it are clicked. -->
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button @click="closeModal">Close</button>
      <slot></slot>
      <!-- slot element allows for dynamic content from the parent componentto be inserted into the modal. -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    // required true specifies that the isVisible prop is mandatory. If the parent component does not pass this prop, Vue will log a warning in the console during development. This helps to catch errors early and ensure that the component is used correctly.
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
// The closeModal method emits a close event, which the parent component can listen to in order to change the isVisible prop, thus controlling the modal's visibility.
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
