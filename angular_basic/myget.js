function myInject(data) {
  jQuery.each(data, function (index, value) {
    $('#mul').append('<li>' + value + '</li>');
  });
}

function myFunction() {
  axios.get('http://localhost:8000/hello')
    .then(function (response) {
      console.log(response.data.b);

      myInject(response.data.b);
    })
    .catch(function (error) {
      console.log(error);
    });
}

jQuery(document).ready(function () {
  jQuery("#mbutton").on("click", myFunction);
});

// note the callback myFunction in "onClick"
// try different/addtional parameters in myInject