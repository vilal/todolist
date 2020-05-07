<script>
export default {
  props: {
    originalActive: {
      type: [Boolean, Object, Number],
      default: false
    }
  },
  data() {
    return {
      active: this.originalActive
    };
  },
  methods: {
    setActive(active) {
      this.active = active;
    }
  },
  render() {
    return this.$scopedSlots.default({
      setActive: this.setActive,
      active: this.active
    });
  }
};
</script>