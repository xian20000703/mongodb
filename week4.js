const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:Tyx666288%40@cluster0.lzh3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
  if (err){

  }
  console.log("Connected to MongoDB");
  await client.db('week4').collection('posts').updateOne(
    {
    _id:ObjectId("624a9d618485ff1e0fec864d")
    },
    {
      $pop:{'comments':-1}
    }
  )

  let result = await client.db('week4').collection('posts').findOne(
    {
    _id:ObjectId("624a9d618485ff1e0fec864d")
    }
  )


  console.log(result)
});

