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
    title: "All In One Engineering Package",
    subtitle: "Career Connect Services - All In One Engineering Package",
    price: 799,
    currency: "INR",
    url: "https://rzp.io/rzp/allinoneenggcounsellingbundle",
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
    title: "All In One Offline + Online Engineering Package",
    subtitle: "Career Connect Services - All In One Offline + Online Engineering Package",
    price: 1999,
    currency: "INR",
    url: "https://rzp.io/rzp/allinoneenggoffline",
    features: [
      "One-time OFFLINE mentor session (1-2 hour personalized discussion)",
      "Three-Times ONLINE mentor call (1-2 hour personalized discussion)",
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

export const plansData = [...defaultData, ...newData]

 