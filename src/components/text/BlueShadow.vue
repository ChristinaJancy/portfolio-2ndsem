<template>
<div class="neons col-12">
    <h1><em>Selected work.</em></h1>
</div>
</template>


<style scoped>
.neons {
   margin-top: 6rem;
}

.neons h1 {
  font-size: 4rem;
  text-align: center;
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
     from {
      color: primary;
    text-shadow: 0 0 5px #00fff2, 0 0 10px #00fff2, 0 0 30px #00fff2, 0 0 40px;
  }
  
  to {
     color: gray;
    text-shadow: 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 80px #00fff2, 0 1 90px #00fff2;
  }
}
</style>