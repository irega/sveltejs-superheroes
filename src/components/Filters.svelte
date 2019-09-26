<script>
  export let name;
  function clearFilters() {
    name = "";
  }
</script>

<style>
  .filters-title {
    margin-bottom: 5px;
  }
</style>

<label class="filters-title" for="name">Search SuperHero:</label>
<input type="text" name="name" bind:value={name} />
<button on:click={clearFilters}>Clear</button>
