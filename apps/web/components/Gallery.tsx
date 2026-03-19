'use client';

import { ImageProps } from "@/types"
import React, { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "react-photo-album/masonry.css";

interface GalleryProps {
    title : string,
    images : ImageProps[]
}

export default function Gallery({title, images} : GalleryProps) {
    const [index, setIndex] = useState(-1);

    const galleryStyle: React.CSSProperties = { 
        width: "100%", 
        display: "block", 
        padding: "1rem", 
        boxSizing: "border-box" 
    };

    return (
        <div style={galleryStyle}>
            <h1>{title}</h1>
            <MasonryPhotoAlbum 
                photos={images}
                onClick={({ index }) => setIndex(index)}
                spacing={15}
                columns={3}
            />

            {/* Opens photos in slider, one by one, with descriptions */}
            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Captions]}
                captions={{
                    descriptionTextAlign: "center",
                    descriptionMaxLines: 3
                }}
            />
        </div>
    )
}
