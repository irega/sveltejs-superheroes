<script>
  export let superheroes = [];

  const loaded = new Map();
  function lazy(node, data) {
    if (loaded.has(data.src)) {
      node.setAttribute("src", data.src);
    } else {
      const img = new Image();
      img.src = data.src;
      img.onload = () => {
        loaded.set(data.src, img);
        node.setAttribute("src", data.src);
      };
    }
  }
</script>

<style>
  .container {
    float: left;
    margin-bottom: 1%;
    margin-right: 1%;
    min-width: 200px;
  }
  .name {
    display: block;
    text-align: center;
    font-weight: bold;
    width: 80%;
  }
  .picture {
    max-height: 240px;
    max-width: 160px;
  }
</style>

<ul>
  {#each superheroes as superhero}
    <div class="container">
      <img
        class="picture"
        src="https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/no-portrait.jpg"
        use:lazy={{ src: superhero.picture }}
        alt={superhero.name} />
      <span class="name">{superhero.name}</span>
    </div>
  {/each}
</ul>
