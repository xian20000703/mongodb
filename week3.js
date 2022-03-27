const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:Tyx666288%40@cluster0.lzh3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    if (err) {
        console.log(err.message)
        return
    }
      console.log('Database connected');

      console.time('insert');
    
    let result = await client.db('week3').collection('companies').deleteOne({
      name:'Zenfolio'
    });

    // let result = await client.db('week3').collection('companies').updateOne(
    //     {name:'utem'},
    //     {$set:{name:'Zenfolio Inc.'}},
    //     {upsert:true}
    // );

  //client.db('week3').collection('companies').insertOne({
   // name:'Zenfolio',
  //address:{
      //street:'123 main street',
      //city:'New Work',
      //state:'NY',
      //zip:'10201'
    //},
  //employees:
  //{
    //name:'John',
    //age:'25',
    //position:'CID'
  //}
  //}).then(result => {
    //console.timeEnd('insert');
    //console.log(result);
//})

  console.timeEnd('insert');
  console.log(result);
  console.log('completed')
});
