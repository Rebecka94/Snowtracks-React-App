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
    image: ""
  },
  { id: 2, 
    namn: "Aspen", 
    kontinent: "Nordamerika", 
    land: "USA",
    image: "" 
  },
  { id: 3, 
    namn: "Niseko", 
    kontinent: "Asien", 
    land: "Japan",
    image: ""
  },
  { id: 4, 
    namn: "Åre", 
    kontinent: "Europa", 
    land: "Sverige",
    image: ""
},
{ id: 5, 
    namn: "Branäs", 
    kontinent: "Europa", 
    land: "Sverige",
    image: ""
  },
  { id: 6, 
    namn: "Sälen", 
    kontinent: "Europa", 
    land: "Sverige",
    image: ""
  },
];
