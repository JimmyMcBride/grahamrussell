import { readdirSync, statSync } from 'fs';
import path from 'path';

export async function load() {
  const baseDir = 'static';
  const folders = readdirSync(baseDir);

  const projects = folders
    .map((folder) => {
      const folderPath = path.join(baseDir, folder);
      if (statSync(folderPath).isDirectory()) {
        const images = readdirSync(folderPath).filter((file) =>
          /\.(jpg|jpeg|png|gif)$/i.test(file)
        );
        return { folder, images };
      }
    })
    .filter(Boolean);

  return { projects };
}
