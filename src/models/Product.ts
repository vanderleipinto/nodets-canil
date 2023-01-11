// Já que não estamos usando banco de dados, vamos simular uma consulta no BD
// usa-se type para tipar os itens que serão incluidos em data abaixo
type Product = {
  title: string;
  price: number;
};

//data é uma array do tipo Product, declarado acima.
const data: Product[] = [
  { title: "Produto x", price: 10 },
  { title: "Produto y", price: 15 },
  { title: "Produto a", price: 25 },
  { title: "Produto b", price: 35 },
  { title: "Produto c", price: 45 },
  { title: "Produto d", price: 65 },
  { title: "Produto e", price: 75 },
  { title: "Produto f", price: 85 },
  { title: "Produto z", price: 90 },
];

export const Product = {
  // objeto com array de funções relacionadas a produtos.
  getAll: (): Product[] => {
    // função que retorna type Product[] todos os produtos.
    return data;
  },

  getPriceAfter: (price: number): Product[] => {
    return data.filter((item) => item.price >= price); // retorna array de itens que satisfazem essa condição
  },

  getPriceBefore: (price: number): Product[] => {
    return data.filter((item) => item.price <= price); // retorna array de itens que satisfazem essa condição
  },

  getPriceEquals: (price: number): Product[] => {
    return data.filter((item) => item.price == price); // retorna array de itens que satisfazem essa condição
  },
};

/* item=>{
  if(item.price>=price){
    return true;
  }else{
    return false;
  } //https://www.w3schools.com/jsref/jsref_filter.asp
 */
