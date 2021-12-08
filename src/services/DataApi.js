function getDataFromApi() {
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((json) => {
      //limpio datos que me llegan Api con el map
      return json.map((item) => {
        console.log('Fetch', item);
        return {
          id: item.id,
          title: item.title,
          url: item.url,
        };
      });
    });
}

export default getDataFromApi;
