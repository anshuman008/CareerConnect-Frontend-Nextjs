import { posters } from "@/images/posters/posters";



const newData = posters.map((poster) => {
  return {
    title: poster.name,
    subtitle: poster.subtitle,
    price: poster.price,
    currency: "INR",
    url: "https://razorpay.me/@jaykishan3957",
    poster: poster.image.src,
    popular: false,
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
  }
})


const defaultData = [
  {
    title: "Career Connect Services 499 Package",
    subtitle: "All In One Package",
    price: 499,
    currency: "INR",
    url: "https://rzp.io/rzp/allinonecounsellingbundle",
    features: [
      "54 Counselling Covered",
      "All Counselling Choice Filling Order",
      "College-Branch Prediction According to Rank and 12th Percentage",
      "Rank and 12th Percentage Wise College Prediction",
      "Rank and 12th Percentage Wise Branch Prediction",
      "Round-wise Admission Prediction",
      "Instant Notification of All 54 Counselling",
      "Counselling Calendar of All 54 Counselling",
      "No Call Support",
      "No Chat Support",
    ],
    popular: false,
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    title: "Career Connect Services 2499 Online",
    subtitle: "All In One Call Online Package",
    price: 2499,
    currency: "INR",
    url: "https://rzp.io/rzp/allinoneonline",
    features: [
      "Five-Times ONLINE mentor call (1-2 hour personalized discussion)",
      "54 Counselling Covered",
      "All Counselling Choice Filling Order",
      "College-Branch Prediction According to Rank and 12th Percentage",
      "Rank and 12th Percentage Wise College Prediction",
      "Rank and 12th Percentage Wise Branch Prediction",
      "Round-wise Admission Prediction",
      "Instant Notification of All 54 Counselling",
      "Counselling Calendar of All 54 Counselling",
    ],
    popular: true,
    color: "bg-gradient-to-br from-orange-50 to-orange-100",
  },
  {
    title: "Career Connect Services 2499 Offline",
    subtitle: "All In One Offline Package",
    price: 2499,
    currency: "INR",
    url: "https://rzp.io/rzp/allinoneoffline",
    features: [
      "One-time OFFLINE mentor session (1-2 hour personalized discussion)",
      "Four-Times ONLINE mentor call (1-2 hour personalized discussion)",
      "54 Counselling Covered",
      "All Counselling Choice Filling Order",
      "College-Branch Prediction According to Rank and 12th Percentage",
      "Rank and 12th Percentage Wise College Prediction",
      "Rank and 12th Percentage Wise Branch Prediction",
      "Round-wise Admission Prediction",
      "Instant Notification of All 54 Counselling",
      "Counselling Calendar of All 54 Counselling",
    ],
    popular: false,
    color: "bg-gradient-to-br from-green-50 to-green-100",
  },
]

export const neetData = [...defaultData, ...newData]