import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

function getPosts() {
  const posts = ref([]);
  const error = ref(null);

  async function load() {
    try {
      const response = await projectFirestore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();
      posts.value = response.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
    } catch (err) {
      error.value = err;
      console.warn(error.value);
    }
  }

  return { posts, error, load };
}

export default getPosts;
