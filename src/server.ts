import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello Melqui in world NodeJS!'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running in port 3333!')
  })
