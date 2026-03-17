import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoFullName = process.env.GITHUB_REPOSITORY;
if (!repoFullName) {
  console.error('GITHUB_REPOSITORY environment variable is not set.');
  process.exit(1);
}

const [owner, repoName] = repoFullName.split('/');

const packageJsonPath = path.resolve(fileURLToPath(import.meta.url), '../../package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

packageJson.name = repoName;
packageJson.description = repoName;
packageJson.homepage = `https://${owner}.github.io/${repoName}`;

writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
console.info(`package.json updated: name="${repoName}", homepage="https://${owner}.github.io/${repoName}"`);

execSync('npm install', { stdio: 'inherit' });
