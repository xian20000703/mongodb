const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:Tyx666288%40@cluster0.lzh3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) {
        console.log(err.message)
        return
    }
      console.log('Database connected');

      let hash = require("./hash.js");
      let faker = require("./faker.js");
     const hashpass = hash.hashpass;
     
    client.db('Account').collection('User Details').insertOne({        
              User: faker.randomName,                           
              Email: faker.randomEmail,
              Phone: faker.randomPhoneNumber,
              Password: hashpass
            });
        })