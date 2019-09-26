<script>
  export let name;
  function clearFilters() {
    name = "";
  }
</script>

<style>

</style>

<input type="text"  bind:value={name} />
<button on:click={clearFilters}>Clear</button>
