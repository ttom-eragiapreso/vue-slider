
const { createApp } = Vue;

createApp({
  data(){

  return {

    allImages: [{
                  countryName: "Svezia",
                  image: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
                  description: "La Svezia è bella"
                },{
                  countryName: "Perù",
                  image: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
                  description: "Il Perù è bello"
                },{
                  countryName: "Argentina",
                  image: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
                  description: "L'Argentina è bella"
                },{
                  countryName: "Colombia",
                  image: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
                  description: "La Colombia è bella"
                },{
                  countryName: "Chile",
                  image: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
                  description: "Il Chile è bello"
                }],

    currentImage: 0
        }
      

},

  methods: {
    nextPrev(isNext){
      isNext? this.currentImage++ : this.currentImage--

      if(this.currentImage < 0) this.currentImage = this.allImages.length -1;
      if(this.currentImage === this.allImages.length) this.currentImage = 0
    }
  },



mounted(){
  setInterval(() => {
    this.nextPrev(true)
  }, 3000)

  
}

}).mount("#app")



