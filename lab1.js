const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    if (err) {
        console.log(err.message)
        return
    }
      console.log('Database connected');

      console.time('insert');

      client.db('week3').collection('companies').insertOne({
    name:'Zenfolio',
  address:{
      street:'123 main street',
      city:'New Work',
      state:'NY',
      zip:'10201'
    },
  employees:
  {
    name:'John',
    age:'25',
    position:'CID'
  }
  }).then(result => {
    console.timeEnd('insert');
    console.log(result);
})

  console.timeEnd('insert');
  console.log(result);
  console.log('completed')
});