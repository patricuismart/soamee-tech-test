function getDataFromApi() {
  for (let index = 0; index < 25; index++) {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => {
        //Clean data recived from Api with a map
        return json.map((user) => {
          //console.log('Fetch', user);
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city,
            company: user.company.name,
            website: user.website,
          };
        });
      });
  }
}

export default getDataFromApi;
