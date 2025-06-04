export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Simuler une réponse réussie
  return {
    statusCode: 200,
    body: {
      message: 'Email de réinitialisation envoyé',
      resetToken: 'reset_token_' + Math.random().toString(36).substr(2, 12)
    }
  }
})
