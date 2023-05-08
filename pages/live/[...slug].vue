<script setup>

const route = useRoute();
const slug = route.params.slug

  navigateTo('/lives/' + slug, { replace: true });
</script>