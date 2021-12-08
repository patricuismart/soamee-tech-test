function getDataFromApi() {
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((json) => {
      //Clean data recived from Api with a map
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
