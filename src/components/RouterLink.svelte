<script>
  import store from "../store.js";
  export let page = {
    path: "/search",
    name: "Search"
  };
  function redirectTo(event) {
    store.setRoute(event.target.pathname);
    window.history.pushState(
      { path: page.path },
      "",
      window.location.origin + page.path
    );
  }
</script>

<style>
  a {
    text-transform: uppercase;
    text-decoration: underline;
    padding: 1rem;
  }
</style>

<a href={page.path} on:click|preventDefault={redirectTo}>{page.name}</a>
