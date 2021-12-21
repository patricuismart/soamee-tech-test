function getDataFromApi(userId) {
  //fetch by user ID

  const apiUrl = `https://jsonplaceholder.typicode.com/users${
    userId ? '?id=' + userId : ''
  }`;
  return fetch(apiUrl)
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

export default getDataFromApi;
