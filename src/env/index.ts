import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({
    path: '.env.test',
  })
}

config()

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
  DATABASE_CLIENT: z.enum(['pg', 'sqlite3']),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid enviroment variables', _env.error.errors)

  throw new Error('Invalid enviroment variables')
}

export const env = _env.data
