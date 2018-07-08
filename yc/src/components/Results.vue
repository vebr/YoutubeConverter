<template>
  <div class="text-center">
<search></search>
  </div>


</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      api_key :'AIzaSyCPVXigP3sEJlnyn7PNt6axqVJ-Fiql-GQ',
      dataForm: False,
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ this.dataForm + '&key=' + this.api_key)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
