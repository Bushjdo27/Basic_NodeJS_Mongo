const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("Unable connect to server");
    }
    console.log("Connect to server success..");
    const db = client.db("TodoApp");


    db.collection("Todos").find({ _id: new ObjectId('5aa56ce5f7e04d2158f4bf1d') }, { text: true }).toArray().then((docs) => {
        console.log("\n")
        console.log('------ Andrew Solution : ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos ", err)
    });

    db.collection("Todos").find({ _id: new ObjectId('5aa56ce5f7e04d2158f4bf1d') }, { text: 1 }).toArray().then((docs) => {
        console.log("\n")
        console.log('----- Adam Solution : ');
        console.log(JSON.stringify(docs, undefined, 2))
        client.close();
    }, (err) => {
        console.log("Unable to fetch todos ", err)
    });

})