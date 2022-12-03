export function generateID(length: number) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
  let id = ''

  for (let i = length; i > 0; --i) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }

  return id
}
