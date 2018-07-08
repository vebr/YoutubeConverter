<template lang="html">
  <div class="container">

    <form action="javascript:void(0);">
      <input v-model="dataForm" type="text" @input="search" name="search" placeholder="Search..">
    </form>

    <div v-if="dataForm == '' ">
    </div>
    <div v-else>
      <li v-for=" a in results.items"><br>
        {{ a.snippet.title }}<br>
        <iframe :src="'https://www.youtube.com/embed/' + a.id.videoId ">
          <p>Your browser does not support iframes.</p>
        </iframe>
      </li>
    </div>


  </div>

</template>

<script>
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
import axios from 'axios';

export default {
  data() {
    return {
      api_key :'AIzaSyCPVXigP3sEJlnyn7PNt6axqVJ-Fiql-GQ',
      dataForm: '',
      results: [],
      errors: []
    }
  },
  methods : {
    search: function (event) {
      axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ this.dataForm + '&key=' + this.api_key)
      .then(response => {
        // JSON responses are automatically parsed.
        this.results = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
}
</script>

<style scoped>
  input[type=text] {
      width: 230px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      background-color: white;
      background-image: url('http://wfarm2.dataknet.com/static/resources/icons/set73/7ad35c4c.png');
      background-size: 26px 26px;
      background-position: 10px 10px;
      background-repeat: no-repeat;
      padding: 12px 20px 12px 40px;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out;
  }

  input[type=text]:focus {
      width: 100%;
  }
</style>
