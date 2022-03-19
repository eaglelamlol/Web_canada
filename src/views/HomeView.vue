<template>
  <head>
    Access-Control-Allow-Origin: http://localhost:3001/
  </head>
<div class="about">
<div class="Calculator">
  <header>
    <h1>
      Home
    </h1>

  </header>
  <div>
    <button @click="loadExperiences">Load Submitted Experiences</button>
  </div>
  <ul>

    <li v-for="value in results">
      {{ value }}
    </li>



  </ul>

</div>
</div>

</template>

<script>


export default {

  data() {
    return {
      results: [],
    };
  },
  methods: {
    loadExperiences: function () {
      fetch('http://localhost:3001',
          {method: 'POST'})
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            console.log(data);
            const list = JSON.stringify(data.msg);
            const l2 = JSON.parse(list);
            const results = [];
            for (let i = 0; i < l2.length; i++) {


              let id = l2[i].id;
              let username = l2[i].username;
              let name = l2[i].name;
              let email = l2[i].email;

              results.push({id});
              results.push({username});
              results.push({name});
              results.push({email});
              console.log(results);
            }
            console.log(results);
            this.results = results;

          });
    },
  },
};


</script>
<style>
h1 {
  color: rgba(0, 0, 0, 0.671);
  text-align: center;
}

</style>