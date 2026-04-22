export interface ImageProps {
    src: string;
    alt: string;
    description?: string;
    width?: number;
    height?: number;
    // index useful if Image part of carousel slide
    index?: number; 
}