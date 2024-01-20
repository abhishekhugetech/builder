export interface UploadResponse {
    id: string;
    width: number;
    height: number;
    extension: string;
    mime: string;
    fileName: string;
    size: number;
    url: string;
}

export enum UploadErrorType {
    UserError = "UserError",
    APIError = "APIError",
    InternalError = "InternalError",
}

export interface UploadError {
    errorType: string;
    message: string;
}

// Upload IMage API response
export interface ImageBBUploadResponse {
    data: ImageBBUploadData
    success: boolean
    status: number
  }
  
  export interface ImageBBUploadData {
    id: string
    title: string
    url_viewer: string
    url: string
    display_url: string
    width: number
    height: number
    size: number
    time: number
    expiration: number
    image: ImageBBUploadImage
    thumb: ImageBBUploadImage
    delete_url: string
  }
  
  export interface ImageBBUploadImage {
    filename: string
    name: string
    mime: string
    extension: string
    url: string
  }

  