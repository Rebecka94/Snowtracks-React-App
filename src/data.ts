export interface SkiResort {
    id: number;
    namn: string;
    kontinent: string;
    land: string;
}

export const skidorter: SkiResort[] = [
  { id: 1, 
    namn: "Chamonix", 
    kontinent: "Europa", 
    land: "Frankrike" 
  },
  { id: 2, 
    namn: "Aspen", 
    kontinent: "Nordamerika", 
    land: "USA" 
  },
  { id: 3, 
    namn: "Niseko", 
    kontinent: "Asien", 
    land: "Japan" 
  },
  { id: 4, 
    namn: "Åre", 
    kontinent: "Europa", 
    land: "Sverige" 
},
{ id: 5, 
    namn: "Branäs", 
    kontinent: "Europa", 
    land: "Sverige" 
  },
  { id: 6, 
    namn: "Sälen", 
    kontinent: "Europa", 
    land: "Sverige" 
  },
];
