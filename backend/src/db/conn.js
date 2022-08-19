const mongoose = require("mongoose");
async function MongooseConnection() {
  await mongoose
    .connect("mongodb://localhost:27017/register", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => {
      console.log(`connection successful`);
    })
    .catch((e) => {
      console.log(`unsuccessful connection: ${e}`);
    });
}

MongooseConnection()