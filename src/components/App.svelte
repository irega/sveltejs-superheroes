<script>
  import { onMount } from "svelte";
  import SuperHeroList from "./SuperHeroList.svelte";
  import SuperHeroService from "../services/superhero-service";
  import Filters from "./Filters.svelte";
  import SuperHeroDetail from "./SuperHeroDetail.svelte";
  import InformationModal from "./InformationModal.svelte";

  let superheroes,
    originalSuperHeroes,
    nameFilter = "",
    getSuperHeroPromise = null;

  const service = new SuperHeroService();

  onMount(async () => {
    superheroes = originalSuperHeroes = await service.getAll();
  });

  async function getSuperHero(event) {
    getSuperHeroPromise = service.getById(event.detail.id);
  }

  $: {
    if (nameFilter) {
      superheroes = originalSuperHeroes.filter(
        os => os.name.toUpperCase().indexOf(nameFilter.toUpperCase()) !== -1
      );
    } else {
      superheroes = originalSuperHeroes;
    }
  }
</script>

<Filters bind:name={nameFilter} name={nameFilter} />
<SuperHeroList {superheroes} on:superHeroSelected={getSuperHero} />

{#await getSuperHeroPromise}
  <span />
{:then selectedSuperHero}
  {#if selectedSuperHero !== null}
    <SuperHeroDetail
      {selectedSuperHero}
      on:closeDetail={() => (selectedSuperHero = null)} />
  {/if}
{:catch error}
  {#if error.message !== null}
    <InformationModal on:closeModal={() => (error.message = null)}>
      {error.message}
    </InformationModal>
  {/if}
{/await}
