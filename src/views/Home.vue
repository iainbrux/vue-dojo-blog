<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import { ref } from "@vue/reactivity";

export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    async function load() {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (data.ok) {
          console.log("Successfully retrieved JSON from endpoint.");
        } else if (!data.ok) {
          throw new Error(
            "Please ensure json-server is watching the correct directory, otherwise please check the endpoint and try again."
          );
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err;
        console.warn(error.value);
      }
    }

    load();

    return { posts, error };
  },
};
</script>
