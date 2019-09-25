<script>
  import { createEventDispatcher } from "svelte";

  let name;
  const dispatch = createEventDispatcher();

  function notifyNameModified() {
    dispatch("filtersModified", { filters: { name } });
  }

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
<input
  type="text"
  name="name"
  bind:value={name}
  on:input={notifyNameModified}
  on:change={notifyNameModified} />
<button on:click={clearFilters}>Clear</button>
