import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()
const saltRounds = 10

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Vérifier si l'email existe déjà
  const existingUser = await prisma.user.findUnique({
    where: { email: body.email }
  })
  
  if (existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email déjà utilisé'
    })
  }

  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(body.password, saltRounds)
  
  // Créer l'utilisateur
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: hashedPassword
    }
  })

  return { 
    status: 'success',
    user: { id: user.id, name: user.name, email: user.email }
  }
})