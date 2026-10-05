const message = "Hi! I'm interested in staying at Harmony Hill";
const encodedMessage = encodeURIComponent(message);
const waNumber = "6287789040323";
//href="https://wa.me/message/TVA3I5GFI5VLO1"

const email = "harmonyhillbali@gmail.com";
const encodedSubject = encodeURIComponent("Inquiry about Harmony Hill Bali");
const encodedMailMessage = encodeURIComponent("Hi! I'm interested in staying at Harmony Hill");

export const EXT_LINKS = {
    FOOD_MENU_HH: 'https://www.canva.com/design/DAGhYRNTFgc/BkFZ5gh3rJnTuon_lI1OCg/view?utm_content=DAGhYRNTFgc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hffa6aee53f',
    FOOD_MENU_JN: 'https://www.canva.com/design/DAGZCJNzgeA/L9Tz7Y8pdyin1PZQ9KeN7Q/view?utm_content=DAGZCJNzgeA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99deea3dde',
    ACTIVITIES_MENU: '/documents/activities-20260816.pdf',
    WA_REF: `https://wa.me/${waNumber}?text=${encodedMessage}`,
    EMAIL_REF: `mailto:${email}?subject=${encodedSubject}&body=${encodedMailMessage}`,
};