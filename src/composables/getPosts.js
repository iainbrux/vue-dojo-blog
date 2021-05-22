import { ref } from "@vue/reactivity";

function getPosts() {
  const posts = ref([]);
  const error = ref(null);

  async function load() {
    try {
      //simulate delay (for testing purposes)
      /*  await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      }); */
      //continue block
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

  return { posts, error, load };
}

export default getPosts;
