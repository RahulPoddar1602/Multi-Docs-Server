import mongoose  from 'mongoose';

const Connection = async (username = 'aifamsmax', password = 'wimyits') => {
    const URL = `mongodb://${username}:${password}@ac-zsnln8c-shard-00-00.nrflhgu.mongodb.net:27017,ac-zsnln8c-shard-00-01.nrflhgu.mongodb.net:27017,ac-zsnln8c-shard-00-02.nrflhgu.mongodb.net:27017/?ssl=true&replicaSet=atlas-zq9sub-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;