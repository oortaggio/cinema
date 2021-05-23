const mongoose = require("mongoose");
const Postis = require("./models/Postis");
const dburi = "mongodb://localhost:27017/cinema"

mongoose.connect(dburi, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    })
  .then(() => {
    console.log("db connected 🚀");
  })

  const inizializza = (posto) => {
    Postis.create(posto)
    .then(() => {
      console.log("Aggiunto: ", posto.codice);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  for (var i = 1; i <= 5; i++) {
    const Posto = {
      codice: "C" + i.toString(),
      nominativo: " ",
      occupato: false
    }
    inizializza(Posto);
  }
