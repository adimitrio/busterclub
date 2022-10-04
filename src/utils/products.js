const products = [
    {id: 1, category:'terror', title:'Alien, el octavo pasajero', description:'string', price: '100', pictureUrl: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/78/48/96/20076298.jpg',stock:'number'},
    {id: 2, category:'terror', title:'Los otros', description:'string',price: '100', pictureUrl: 'https://es.web.img3.acsta.net/c_310_420/pictures/16/02/08/16/50/425295.jpg', stock:'number'},
    {id: 3, category:'accion', title:'Terminator 2: El juicio final', description:'string', price: '100', pictureUrl: 'https://es.web.img3.acsta.net/c_310_420/pictures/17/11/14/12/15/4371161.jpg', stock:'number'},
    {id: 4, category:'accion', title:'Vengadores: Infinity War', description:'string', price: '100', pictureUrl: 'https://es.web.img3.acsta.net/c_310_420/pictures/18/03/16/15/33/3988420.jpg', stock:'number'},
    {id: 5, category:'terror', title:'Psicosis', description:'string', price: '100', pictureUrl: 'https://es.web.img3.acsta.net/c_310_420/pictures/15/11/10/16/00/511029.jpg',stock:'number'},
    {id: 6, category:'accion', title:'Batman: el caballero de la noche', description:'string',price: '100', pictureUrl: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/66/74/01/20350623.jpg', stock:'number'},
    {id: 7, category:'terror', title:'El Exorcista', description:'string', price: '100', pictureUrl: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/72/15/60/20054563.jpg', stock:'number'},
    {id: 8, category:'accion',  title:'Gladiador', description:'string', price: '100', pictureUrl: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/70/92/02/20149073.jpg', stock:'number'}
  ];

  
  export const getProducts = () => {
    const promise = new Promise((resolve) =>   {
      setTimeout( () =>{ 
        return resolve (products);
      },2000) 
    })
    return promise
  };

  export const getProduct = (id) => {
    const promise = new Promise((resolve) =>   {
      const result = products.find((product)=> product.id === parseInt(id))
      setTimeout( () =>{ 
        return resolve (result);
      },2000) 
    })
    return promise
  };

  export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) =>   {
      const result = products.filter((product)=> product.category === categoryId)
      setTimeout( () =>{ 
        return resolve (result);
      },2000) 
    })
    return promise
  };
  