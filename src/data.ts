export interface SkiResort {
    id: number;
    namn: string;
    kontinent: string;
    land: string;
    image: string;
    description: string;
}

export const skidorter: SkiResort[] = [
  { 
    id: 1, 
    namn: "Chamonix", 
    kontinent: "Europa", 
    land: "Frankrike",
    image: "https://en.chamonix.com/sites/default/files/styles/full_screen/public/media/images/Brevent_hiver_snowboarder-Benjamin_FRISON_-_Compagnie_du_Mont-Blanc-2473.webp?h=0b4f363c&itok=AW5qQ0eI",
    description: "En av världens mest kända skidorter, belägen vid Mont Blanc."
  },
  { 
    id: 2, 
    namn: "Aspen", 
    kontinent: "Nordamerika", 
    land: "USA",
    image: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_720,w_1080,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/AspenHighlands_ufefth.jpg",
    description: "Lyxig skidort i Colorado, populär för sina fantastiska pister och kändisar."
  },
  { 
    id: 3, 
    namn: "Niseko", 
    kontinent: "Asien", 
    land: "Japan",
    image: "https://images.prismic.io/ski-com/ZsjsQ0aF0TcGJXjy_Skicom_Day5-1512.jpg?auto=format%2Ccompress&fit=max&w=3840&q=100",
    description: "Japans bästa skidort med djup pudersnö och varma källor."
  },
  { 
    id: 4, 
    namn: "Åre", 
    kontinent: "Europa", 
    land: "Sverige",
    image: "https://assets.skisafari.com/2019/07/04/5d1dc50e6464aare-skiers-gondola-credit-skistar-jonas-kullman-16x9_0.jpg",
    description: "Sveriges största skidort med livligt nattliv och vackra fjäll."
  },
  { 
    id: 5, 
    namn: "Branäs", 
    kontinent: "Europa", 
    land: "Sverige",
    image: "https://cdn.branasgruppen.se/branas/app/uploads/2020/06/02111215/topp_kulpasnocc88_2.jpg",
    description: "Perfekt för familjer med barnvänliga backar och mysig atmosfär."
  },
  { 
    id: 6, 
    namn: "Sälen", 
    kontinent: "Europa", 
    land: "Sverige",
    image: "https://images.squarespace-cdn.com/content/v1/5950e6bcbe6594fef274f413/1622026628302-98UPAJ0AQG63YO56P2OV/S%C3%A4len.jpg?format=2500w",
    description: "Populär destination för svenska skidälskare, med varierad terräng."
  },
  { 
    id: 7, 
    namn: "Zermatt", 
    kontinent: "Europa", 
    land: "Schweiz",
    image: "https://images.squarespace-cdn.com/content/v1/5a87961cbe42d637c54cab93/5ed30a11-4dda-4737-b907-6496631244f0/zermatt.jpg?format=1500w",
    description: "En ikonisk alpinskidort med fantastisk utsikt över Matterhorn och ett av de största skidområdena i världen."
  },
  { 
    id: 8, 
    namn: "Yuzawa", 
    kontinent: "Asien", 
    land: "Japan",
    image: "https://d2r4787i3zn8dn.cloudfront.net/resort_images/images/yuzawa-nakazato/md_P_03.jpg?1694502220",
    description: "Beläget i Niigata Prefecture, Yuzawa är en av Japans mest populära skidorter och är känd för sina bra snöförhållanden."
  },
  {
  id: 9, 
  namn: "Banff", 
  kontinent: "Nordamerika", 
  land: "Kanada",
  image: "https://www.banff-springs-hotel.com/content/uploads/2022/11/Experience-Map-Ski_Snowboard_Norquay_DanEvans_001-768x762.jpg",
  description: "Belägen i de kanadensiska Rocky Mountains, erbjuder Banff några av de mest imponerande skidterrängerna i Nordamerika."
},
 {
  id: 10, 
  namn: "Gulmarg", 
  kontinent: "Asien", 
  land: "Indien",
  image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/12/9b23e9bcc7c1cf0fb5ea3c1d1e736e59_1000x1000.jpg",
  description: "En av de mest kända skidorterna i Indien, känt för sin djupsnö och fantastiska vyer över Himalaya."
},
{ 
    id: 11, 
    namn: "Vail", 
    kontinent: "Nordamerika", 
    land: "USA",
    image: "https://media.cntraveler.com/photos/5bdb6fb0d1f6b12d39556ac8/16:9/w_1600,c_limit/Vail%20Ski%20Resort_Gondola-One_VailResorts_VCD10824_Jack_Affleck_HighRes.jpg",
    description: "Vail är en av de största skidresorterna i Nordamerika, berömd för sina omfattande backar och livliga by."
  },
  { 
    id: 12, 
    namn: "St. Anton", 
    kontinent: "Europa", 
    land: "Österrike",
    image: "https://www.skiclub.co.uk/wp-content/uploads/2023/08/20-st-anton-Header.jpg",
    description: "St. Anton är en av de mest populära skidorterna i Österrike, känd för sin livliga after-ski och utmanande terräng."
  },
];
