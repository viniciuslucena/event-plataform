import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3parp0dm001xmeujc5l4v/master',
  cache: new InMemoryCache()
})