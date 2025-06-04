import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Trouver l'utilisateur
  const user = await prisma.user.findUnique({
    where: { email: body.email }
  })
  
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Email ou mot de passe incorrect'
    })
  }

  // Vérifier le mot de passe
  const valid = await bcrypt.compare(body.password, user.password)
  
  if (!valid) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Email ou mot de passe incorrect'
    })
  }

  const expiresIn = process.env.JWT_EXPIRES_IN 
    ? Number(process.env.JWT_EXPIRES_IN)
    : '7d';

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET!,
    { expiresIn }
  )

  return { 
    token, 
    user: { 
      id: user.id, 
      name: user.name, 
      email: user.email 
    } 
  }
})