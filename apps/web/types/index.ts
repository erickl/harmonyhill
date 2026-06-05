export interface ImageProps {
    src: string;
    alt?: string;
    description?: string;
    width?: number;
    height?: number;
    aspectRatio?: string;
    
    options?: {
        // index useful if Image part of carousel slide, i.e if index == 0, might only preload first image
        index?: number; 
        rounded?: boolean;
    }
}