const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("Unable connect to Server ", err);
    }

    console.log("Connected server...");
    const db = client.db("TodoApp");

    db.collection("Todos").findOneAndUpdate(
        { _id: new ObjectID('5aa7ed34d5dc5122f03f799a') }
        , {
            $set: {
                completed: false
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log("Update success");
        console.log(result);
        client.close();
    }).catch((err) => {
        console.log("Something went wrong")
    })
})