let data1;
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    data1 = myJson;
    console.log(JSON.stringify(myJson));
  });

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Здравствуйте, Александр Иванович! Как у вас дела?",
      jsn: [{
          "id": 1,
          "f_name": "Иванов",
          "i_name": "Иван",
          "o_name": "Иванович",
          "Y": 1970,
          "address": {
            "state": "Россия",
            "region": "Севверо-Западный",
            "city": "Псков",
            "street": "Грибоедова",
            "house": "12/а",
            "room": "34"
          },
          "phones": [
            "8-921-123-12-12",
            "1"
          ]
        },
        {
          "id": 1,
          "f_name": "Иванов",
          "i_name": "Иван",
          "o_name": "Иванович",
          "Y": 1970,
          "address": {
            "state": "Россия",
            "region": "Севверо-Западный",
            "city": "Псков",
            "street": "Грибоедова",
            "house": "12/а",
            "room": "34"
          },
          "phones": [
            "8-921-123-12-12",
            "1"
          ]
        }
      ]
    };
  }
});