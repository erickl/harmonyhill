'use client';

import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "react-photo-album/masonry.css";

const photos = [
    { src: "/images/nook-deck-breakfast-1.jpeg",     width: 1440, height: 1080, alt: "wooden deck with jungle valley views"      },
    { src: "/images/waterfall-tour.jpeg",            width: 894,  height: 1280, alt: "waterfall tour"                            },
    { src: "/images/sushi.avif",                     width: 650,  height: 488,  alt: "homemade vegan sushi"                      },
    { src: "/images/vegan-forest-berry-cake.avif",   width: 720,  height: 942,  alt: "scrumptious vegan berry cake"              , description: "Try our scrumptious vegan berry cake!"},
    { src: "/images/welcome-to-jungle-nook.avif",    width: 1200, height: 1600, alt: "bath with rice paddy views"                },
    { src: "/images/rice-paddy-tour.avif",           width: 1000, height: 762,  alt: "guided rice paddy walk"                    },
    { src: "/images/nook-bed-view.jpeg",             width: 1248, height: 936,  alt: "bed with rice paddy views"                 },
    { src: "/images/nook-surrounded-by-nature.avif", width: 1200, height: 675,  alt: "secluded cottage surrounded by nature"     },
    { src: "/images/nook-bathroom-sink.jpeg",        width: 1440, height: 1080, alt: "stylish bathroom"                          },
    { src: "/images/nook-bath.jpeg",                 width: 1440, height: 960,  alt: "handmade copper bath tub with jungle view" },
    { src: "/images/nook-deck-view.avif",            width: 1200, height: 900,  alt: "wooden deck with rice paddy views"         },
    { src: "/images/nook-deck-breakfast-2.jpeg",     width: 1280, height: 960,  alt: "complimentary plantbased breakfast"        },
    { src: "/images/nook-bed-swans.avif",            width: 1000, height: 750,  alt: "swan towel art"                            },
    { src: "/images/ricefield2.avif",                width: 930,  height: 701,  alt: "rice paddy views"                          },
    { src: "/images/nook-breakfast-2.jpeg",          width: 1280, height: 960,  alt: "breakfast on the deck"                     },
    { src: "/images/villa-1-nookie.jpeg",            width: 1440, height: 1080, alt: "jungle kitten"                             },
];

export default function JungleNookGallery() {
    const [index, setIndex] = useState(-1);

    return (
        <main>
            <div style={{ width: "100%", display: "block", padding: "1rem" }}>
                <h1>The Jungle Nook Gallery</h1>
                <MasonryPhotoAlbum 
                    photos={photos}
                    onClick={({ index }) => setIndex(index)}
                    spacing={15}
                    columns={3}
                />

                {/* Opens photos in slider, one by one, with descriptions */}
                <Lightbox
                    slides={photos}
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
        </main>
    )
}
