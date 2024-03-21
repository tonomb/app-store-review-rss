import fs from 'fs';
import path from 'path';

export async function readData(appid: string) {
  const filePath = getFilePath(appid);
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.log('Error Reading file', err);
    return false;
  }
}

export async function writeData(appid: string, data: any[]) {
  const filePath = getFilePath(appid);
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.promises.writeFile(filePath, jsonData, 'utf-8');
  } catch (err) {
    console.log('Error Writing to file', err);
  }
}

function getFilePath(appid: string): string {
  return path.join(__dirname, `${appid}.json`);
}
