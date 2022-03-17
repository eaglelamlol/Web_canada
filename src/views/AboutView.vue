<template>
  <div class="about">
    <div class="Calculator">
      <header>
        <h1>
          BMI Calculator
        </h1>

      </header>

      <form>


        <label for="height">
          Height :
        </label>
        <input type="number" id="height" ref="height"  @input="sum()" >


        <label for="weight">
          Weight :
        </label>
        <input type="number" id="weight" ref="weight"  @input="sum()" >


        <br><br>
        <div class="result">{{current || 0}}</div>
        <br>
        <div class="result">{{currents || "__"}}</div>


        <br>
        <br>

      </form>
    </div>
  </div>

</template>


<script>
export default {
  name: 'Calculator',
  components : {

  },
  data(){
    return{
      current :'',
      currents :'',
    }
  },
  methods : {
    sum(){

      let m = document.getElementById("weight").value;
      let h = Number(document.getElementById("height").value) / 100;
      this.current = Number(m) / (Number(h) * Number(h));
      this.current = this.current.toFixed(2);
      if (this.current <= 18.5)
        this.currents = "Underweight";
      else if (this.current <= 25)
        this.currents = "Normal";
      else if (this.current <= 30)
        this.currents = "Overweight";
      else
        this.currents = "Obese";
    }
  }

}

</script>

<style>


.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 8px;
  text-align: center;

}

#height,#weight{
  text-align: center;
}
.navbar li {
  display : inline-block;
}

.navbar a {
  display: block;
  color: black;
  text-align: center;
  padding: 25px 20px;
  text-decoration: none;
  width: 140px;
  font-size: 20px;
  text-transform: uppercase;
  font-family :Arial, Helvetica, sans-serif;
}

li a:hover {
  color: #6f4fa3;
}


body {

  font-family: Arial,serif;
  background-image: url("../components/img/back.jpg");
  text-align: center;
}

img{
  width: 20%;
}
h1 {
  color: rgba(0, 0, 0, 0.671);
  text-align: center;
}


label{
  display: block;
  padding: 1rem 0;
}

input, textarea, .result{
  border: 2px solid #6f4fa3;
  padding: .5rem;
  border-radius: 100px;
  background-color: transparent;
}

.result{
  width: 11%;
  margin-left: auto;
  margin-right: auto;
}




</style>