const mongoose = require("mongoose");

const uri =
  "mongodb+srv://cananbuyukdag:2kSd5gtS78KTB6KA@ecommercedb.kfvzkll.mongodb.net/?retryWrites=true&w=majority";

const connection = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb bağlantısı başarılı"))
    .catch((err) => console.log("Bağlantısı Hatası! Hata: " + err.message));
};

module.exports = connection;
