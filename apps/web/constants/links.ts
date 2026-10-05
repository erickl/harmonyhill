const message = "Hi! I'm interested in staying at Harmony Hill";
const encodedMessage = encodeURIComponent(message);
const waNumber = "6287789040323";
//href="https://wa.me/message/TVA3I5GFI5VLO1"


export const EXT_LINKS = {
    FOOD_MENU_HH: 'https://www.canva.com/design/DAGhYRNTFgc/BkFZ5gh3rJnTuon_lI1OCg/view?utm_content=DAGhYRNTFgc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hffa6aee53f',
    FOOD_MENU_JN: 'https://www.canva.com/design/DAGZCJNzgeA/L9Tz7Y8pdyin1PZQ9KeN7Q/view?utm_content=DAGZCJNzgeA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99deea3dde',
    ACTIVITIES_MENU: '/documents/activities-20260816.pdf',
    WA_REF: `https://wa.me/${waNumber}?text=${encodedMessage}`,
    EMAIL_REF: `mailto:harmonyhillbali@gmail.com?subject=Inquiry%20about%20Harmony%20Hill%20Bali&body=Hi!%20I'm%20interested%20in%20staying%20at%20Harmony%20Hill`
};