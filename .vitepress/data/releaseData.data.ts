import { load } from 'js-yaml'

interface ReleaseData {
  version: string
  downloadUrl: string
  fileName: string
  size: number
  sha512: string
  releaseDate: string
}

export declare const data: ReleaseData

export default {
  async load(): Promise<ReleaseData> {
    try {
      const response = await fetch('https://atmostrack.ams3.digitaloceanspaces.com/releases/stable.yml')
      if (!response.ok) {
        throw new Error(`Failed to fetch release data: ${response.status}`)
      }
      
      const yamlText = await response.text()
      const yamlData = load(yamlText) as any
      
      // Parse the YAML structure and extract relevant data
      const version = yamlData.version
      const file = yamlData.files?.[0] // Get the first file (Windows installer)
      
      if (!file) {
        throw new Error('No file data found in release info')
      }
      
      const releaseData: ReleaseData = {
        version: version,
        downloadUrl: `https://atmostrack.ams3.digitaloceanspaces.com/releases/${file.url}`,
        fileName: file.url,
        size: file.size,
        sha512: file.sha512,
        releaseDate: yamlData.releaseDate
      }
      
      return releaseData
    } catch (error) {
      console.error('Error loading release data:', error)
      // Return fallback data
      return {
        version: 'Unable to load',
        downloadUrl: '#',
        fileName: 'Atmostrack-Setup.exe',
        size: 0,
        sha512: '',
        releaseDate: 'Unknown'
      }
    }
  }
}