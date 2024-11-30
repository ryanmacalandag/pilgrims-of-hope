import { promises as fs } from 'fs'

export default async function getjson(filename:string) {
  const file = await fs.readFile(process.cwd() + '/app/_data/' + filename, 'utf8')
  return file;
}
