export interface SkiResort {
    id: number;
    namn: string;
    kontinent: string;
    land: string;
    image: string;
}

export const skidorter: SkiResort[] = [
  { id: 1, 
    namn: "Chamonix", 
    kontinent: "Europa", 
    land: "Frankrike",
    image: "https://en.chamonix.com/sites/default/files/styles/full_screen/public/media/images/Brevent_hiver_snowboarder-Benjamin_FRISON_-_Compagnie_du_Mont-Blanc-2473.webp?h=0b4f363c&itok=AW5qQ0eI"
  },
  { id: 2, 
    namn: "Aspen", 
    kontinent: "Nordamerika", 
    land: "USA",
    image: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_720,w_1080,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/AspenHighlands_ufefth.jpg" 
  },
  { id: 3, 
    namn: "Niseko", 
    kontinent: "Asien", 
    land: "Japan",
    image: "https://images.prismic.io/ski-com/ZsjsQ0aF0TcGJXjy_Skicom_Day5-1512.jpg?auto=format%2Ccompress&fit=max&w=3840&q=100"
  },
  { id: 4, 
    namn: "Åre", 
    kontinent: "Europa", 
    land: "Sverige",
    image: "https://assets.skisafari.com/2019/07/04/5d1dc50e6464aare-skiers-gondola-credit-skistar-jonas-kullman-16x9_0.jpg"
},
{ id: 5, 
    namn: "Branäs", 
    kontinent: "Europa", 
    land: "Sverige",
    image: "https://cdn.branasgruppen.se/branas/app/uploads/2020/06/02111215/topp_kulpasnocc88_2.jpg"
  },
  { id: 6, 
    namn: "Sälen", 
    kontinent: "Europa", 
    land: "Sverige",
    image: "https://images.squarespace-cdn.com/content/v1/5950e6bcbe6594fef274f413/1622026628302-98UPAJ0AQG63YO56P2OV/S%C3%A4len.jpg?format=2500w"
  },
];
