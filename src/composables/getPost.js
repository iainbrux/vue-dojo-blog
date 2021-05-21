import { ref } from "vue";

function getPost(id) {
  const post = ref(null);
  const error = ref(null);

  async function load() {
    try {
      //simulate delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      //continue block
      let data = await fetch(`http://localhost:3000/posts/${id}`);
      if (data.ok) {
        console.log("Successfully retrieved JSON from endpoint.");
      } else if (!data.ok) {
        throw new Error("Post does not exist.");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err;
      console.warn(error.value);
    }
  }

  return { post, error, load };
}

export default getPost;
