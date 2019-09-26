<script>
  import { createEventDispatcher } from "svelte";

  export let selectedSuperHero;

  const dispatch = createEventDispatcher();
  const closeDetail = () => dispatch("closeDetail");
</script>

<style>
  .back {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    z-index: 10;
  }
  .modal {
    padding: 1rem;
    position: fixed;
    top: 20vh;
    left: 38%;
    max-height: 80vh;
    min-width: 20%;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    overflow: auto;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 5%;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  footer {
    margin-bottom: -0.8rem;
    justify-content: flex-end;
    display: flex;
  }
  footer button {
    cursor: pointer;
  }
  .picture {
    max-height: 240px;
    max-width: 160px;
  }
</style>

<div class="back" on:click={closeDetail} />
<div class="modal">
  <header>{selectedSuperHero.name}</header>
  <div class="content">
    <img
      class="picture"
      src={selectedSuperHero.picture}
      alt={selectedSuperHero.name} />
    <ul>
      <li>
        <span>Full name: {selectedSuperHero.fullName}</span>
      </li>
      <li>
        <span>Race: {selectedSuperHero.race}</span>
      </li>
      <li>
        <span>Gender: {selectedSuperHero.gender}</span>
      </li>
      <li>
        <span>Hair color: {selectedSuperHero.hairColor}</span>
      </li>
      <li>
        <span>Eyes color: {selectedSuperHero.eyeColor}</span>
      </li>
    </ul>
  </div>
  <footer>
    <button on:click={closeDetail}>Close</button>
  </footer>
</div>
