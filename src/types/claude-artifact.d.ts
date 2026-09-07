export {}

declare global {
  interface ClaudeDownloadsSaveRequest {
    filename: string
    data: string | Blob | ArrayBuffer | ArrayBufferView
  }

  interface ClaudeDownloadsSaveResult {
    status: 'saved' | 'delivered'
  }

  interface ClaudeDownloadsError {
    code: string
    message: string
  }

  interface ClaudeDownloadsNamespace {
    save: (request: ClaudeDownloadsSaveRequest) => Promise<ClaudeDownloadsSaveResult>
  }

  interface Window {
    claude?: {
      use: (name: 'downloads') => Promise<ClaudeDownloadsNamespace | null>
    }
  }
}
