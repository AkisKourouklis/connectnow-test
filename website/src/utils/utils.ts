export const truncate = (string: string, len: number): string => {
  let str = string
  if (string.length > len) {
    str = string.substring(0, len - 1) + '...'
  }

  return str
}
