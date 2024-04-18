import { loadEnvConfig } from '@next/env'

export default async function setupEnv(): Promise<void> {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
