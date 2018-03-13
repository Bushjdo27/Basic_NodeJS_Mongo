const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("Unable connect to server");
    }
    console.log("Connect to server success..");
    const db = client.db("TodoApp");

    db.collection('Todos').find({ _id: new ObjectId('5aa56ce5f7e04d2158f4bf1d') }, { projection: { text: true } }).toArray().then(docs => {
        console.log(docs)

    })

    // db.collection("Todos").deleteMany({ text: 'Eat lunch' }).then(({result}) => {
    //     console.log("\n")
    //     console.log(JSON.stringify(result, undefined, 2))
    //     client.close();
    // }, (err) => {
    //     console.log("Unable to fetch todos ", err)
    // });
    // db.collection("Todos").deleteOne({ text: "Eat lunch 2" }).then((re) => {
    //     console.log(re);
    //     client.close()
    // }).catch((e)=>{
    //     console.log("can't not delete : ",e);
    // })

    db.collection("Todos").findOneAndDelete({ text: 'Eat lunch 2', completed: "false" })
        .then(result => {
            console.log(result.value);
            client.close();
        })

})