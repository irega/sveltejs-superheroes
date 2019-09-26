<script>
  export let name;
  function clearFilters() {
    name = "";
  }
</script>

<style>

</style>

<input type="text" name="name" bind:value={name} />
<button on:click={clearFilters}>Clear</button>
