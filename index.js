var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Здравствуйте, Александр Иванович! Как у вас дела?",
      checked: false,
      picked: "Один",
      selected: "А",
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
            ""
          ]
        },
        {
          "id": 2,
          "f_name": "Антонов",
          "i_name": "Никанор",
          "o_name": "Феоктистович",
          "Y": 1952,
          "address": {
            "state": "Россия",
            "region": "Севверо-Западный",
            "city": "Псков",
            "street": "Леона Поземского",
            "house": "57",
            "room": "11"
          },
          "phones": [
            "8-921-123-35-42",
            ""
          ]
        }
      ]
    };
  }
});