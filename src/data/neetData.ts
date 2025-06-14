import { posters } from "@/images/posters/posters";



// const newData = posters.map((poster) => {
//   return {
//     title: poster.name,
//     subtitle: poster.subtitle,
//     price: poster.price,
//     currency: "INR",
//     url: "https://razorpay.me/@jaykishan3957",
//     poster: poster.image.src,
//     popular: false,
//     color: "bg-gradient-to-br from-blue-50 to-blue-100",
//   }
// })


const defaultData = [
    {
        title: "Career Connect Services 999 Package",
        subtitle: "All In One Package",
        price: 999,
        currency: "INR",
        url: "https://rzp.io/rzp/allinonecounsellingbundlemed",
        features: [
            "Coverage: All India Quota, State Quota, All India Private & Deemed Counselling",
            "College & Course Prediction PDF via WhatsApp/Mail (Hand-made by expert with 10+ yrs experience)",
            "Choice Filling Order: Optimized order according to your rank",
            "Round-wise Admission Chances: Including Mop-up & Stray rounds",
            "Instant Notifications via WhatsApp/Mail till last round",
            "Counselling Calendar: Important dates tracking",
            "Counselling Covered: MCC, AYUSH AACCC, Your State, Open State Private/Deemed, IPU BTech, MHT-CET Pharma/Tech, IISER IAT and more",
            "No Call Support",
            "No Chat Support",
        ],
        popular: false,
        color: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
        title: "Career Connect Services 4999 Package",
        subtitle: "Single Counselling Full Support",
        price: 4999,
        currency: "INR",
        url: "https://rzp.io/rzp/allinonecounsellingsingle",
        features: [
            "Full support for any one counselling (All India or State or Private)",
            "Unlimited Call Support",
            "Unlimited Chat Support",
            "Coverage: All India Quota, State Quota, All India Private & Deemed Counselling",
            "College & Course Prediction PDF via WhatsApp/Mail (Expert crafted)",
            "Choice Filling Order: Based on your rank and profile",
            "Round-wise Admission Chances: Including Mop-up/Stray rounds",
            "Instant Notifications: WhatsApp/Mail updates for every round",
            "Counselling Calendar: Stay updated on deadlines",
            "Counselling Covered: MCC, AYUSH AACCC, Your State, Open State Private/Deemed, IPU BTech, MHT-CET Pharma/Tech, IISER IAT and more",
        ],
        popular: false,
        color: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
        title: "Career Connect Services 9999 Package",
        subtitle: "All In One Package Complete Support",
        price: 9999,
        currency: "INR",
        url: "https://pages.razorpay.com/allinonecounsellingsupport",
        features: [
            "Coverage: All India Quota, State Quota, All India Private & Deemed Counselling",
            "Unlimited Call Support with Experts",
            "Unlimited Chat Support",
            "College & Course Prediction PDF via WhatsApp/Mail (Expert with 10+ yrs experience)",
            "Choice Filling Order: Tailored to your rank",
            "Round-wise Admission Chances: Complete round prediction including Mop-up/Stray",
            "Instant Notifications via WhatsApp/Mail till last round",
            "Counselling Calendar: Timely alerts and date tracking",
            "Counselling Covered: MCC, AYUSH AACCC, Your State, Open State Private/Deemed, IPU BTech, MHT-CET Pharma/Tech, IISER IAT and more",
        ],
        popular: true,
        color: "bg-gradient-to-br from-orange-50 to-orange-100",
    },
];


export const neetData = [...defaultData]