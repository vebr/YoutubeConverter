<template>
  <div class="text-center">

    <li v-for=" a in posts.items"><br>
      {{ a.snippet.title }}<br>
      <iframe :src="'https://www.youtube.com/embed/' + a.id.videoId ">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </li>

  </div>


</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=natalia+global&key=AIzaSyCPVXigP3sEJlnyn7PNt6axqVJ-Fiql-GQ `)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
