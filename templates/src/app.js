// require('dotenv').config()
// import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import resolvers from './resolvers'
// import context from './config/context'


// mongoose.connect('mongodb://username:password@host:port/database?options...', 
// {useNewUrlParser: true});


/* mongoose.connect(`${process.env.APP_DB_HOST}:${process.env.APP_DB_PORT}/${process.env.APP_DB_NAME}`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})


mongoose.connection.on("disconnected", () => {
  console.log("Connection Disconnected");
});

mongoose.connection.on("reconnected", () => {
  console.log("Connection reconnected");
});

const close = () => {
  mongoose.connection.close()
} */

const server = new ApolloServer({
  typeDefs: importSchema('./src/schema/index.graphql'),
  resolvers,
  // context seta uma lógica q fica disponível pra todos os resolvers
  // context,
  // playground: false,
})

server.listen(3003).then(({ url }) => {
  console.log(`Executando em ${url}`)
})
