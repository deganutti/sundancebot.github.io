const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://SundanceBot:ZV78Km7eXtTwAtF@realmcluster-tyrgt.mongodb.net/SundanceBot?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
const credentials = Realm.Credentials.anonymous();
try {
    const user = await app.logIn(credentials);
} catch (err) {
    console.error("Failed to log in", err);
}