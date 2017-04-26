function myFunction () {
axios.get('http://localhost:8000/hello')
  .then(function (response) {
    console.log(response);
    document.getElementById("demo").innerHTML = response.data.b[2];
  })
  .catch(function (error) {
    console.log(error);
  });
}
