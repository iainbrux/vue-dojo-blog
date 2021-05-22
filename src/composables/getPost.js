import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

function getPost(id) {
  const post = ref(null);
  const error = ref(null);

  async function load() {
    try {
      let response = await projectFirestore
        .collection("posts")
        .doc(id)
        .get();

      if (!response.exists) {
        throw new Error('That post does not exist')
      }
      post.value = {
        ...response.data(),
        id: response.id,
      };
      console.log(post.value);
    } catch (err) {
      error.value = err;
      console.warn(error.value);
    }
  }

  return { post, error, load };
}

export default getPost;
