import { Hono, Next } from 'hono'

const app = new Hono()

async function authMiddleware(c: any, next: Next) {
  if(c.req.header("Authorization")) {
    // Do some validation check
    await next()
  } else {
    return c.text("You are not authorized")
  }
}

app.post('/', authMiddleware, async (c) => {
  // getting inputs from the users 
  const body = await c.req.json()
  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("param"))

  return c.text('Hello Hono!')
})

export default app
