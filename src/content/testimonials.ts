export type TestimonialGroup = "Sweets" | "Restaurant" | "Catering";

export type Testimonial = {
  id: string;
  group: TestimonialGroup;
  name: string;
  /** Optional context as given on the source page (area / event). */
  context?: string;
  quote: string;
};

export const testimonialGroups: readonly TestimonialGroup[] = ["Catering", "Sweets", "Restaurant"];

export const testimonials: readonly Testimonial[] = [
  // Sweets
  {
    id: "mohit-agarwal",
    group: "Sweets",
    name: "Mohit Agarwal",
    quote:
      "I live 5 minutes from the shop. Biggest advantage – fresh mithai any time I want. My kids love the gulab jamun here. Sunday ko toh pakka jaana hota hai. The uncle at the counter knows my order by now. That personal touch you won't find at big chain shops.",
  },
  {
    id: "priya-meena",
    group: "Sweets",
    name: "Priya Meena",
    quote:
      "We ordered sweets for my daughter's engagement. 200 boxes. I was nervous honestly – itna bada order, kya quality same rahegi? But Siyaram ne kamaal kar diya. Every single box was perfect. Guests kept asking where did you get these sweets from. That felt so good.",
  },
  {
    id: "rakesh-sharma",
    group: "Sweets",
    name: "Rakesh Sharma",
    quote:
      "Maine pehli baar Siyaram ki kaju katli try ki thi last Diwali pe. Bhai kya bolu – ab aur kahi se lena band kar diya. Wife bhi kehti hai bas yahi se lao. Fresh milti hai aur taste ekdum ghar jaisa. Price bhi theek hai. Ab toh regular customer ban gaya hoon.",
  },
  // Restaurant
  {
    id: "kavita-sharma",
    group: "Restaurant",
    name: "Kavita Sharma",
    quote:
      "Mere sasural wale Rajasthan se hain. Unhe traditional khana pasand hai. Maine Siyaram se dal bati aur gatte ki sabzi order kiya ghar pe. Sab ne tareef ki. Mummy ji boli 'chal, isko rakh le caterer.' Coming from her, that's a 5-star review.",
  },
  {
    id: "rajendra-singh",
    group: "Restaurant",
    name: "Rajendra Singh",
    quote:
      "Our factory is in Sitapura. Lunch options were always a problem. Then someone told us about Siyaram near Muhana Mandi. Now 8-10 of us go there almost every day. Fast service, good quantity, tasty food. Manager bhi bahut acha hai. Personal attention dete hain.",
  },
  {
    id: "neha-gupta",
    group: "Restaurant",
    name: "Neha Gupta",
    quote:
      "We tried this place because a friend kept saying 'ek baar jao toh sahi.' So we went one Sunday. The dal bati churma was unreal. Like proper village style. My husband ordered it again before we even finished the first one. Now it's our go-to weekend lunch spot.",
  },
  {
    id: "dinesh-yadav",
    group: "Restaurant",
    name: "Dinesh Yadav",
    quote:
      "Main roz yahan lunch karta hoon. Mandi mein kaam karta hoon toh paas mein acha khana chahiye. Siyaram ki thali best hai. Ghar jaisa khana. Roti garam milti hai. Aur rate bhi sahi hai. Koi complaint nahi hai mujhe.",
  },
  // Catering
  {
    id: "pooja-rahul",
    group: "Catering",
    name: "Pooja and Rahul",
    context: "Wedding",
    quote:
      "The best decision we made for our wedding! The food tasting session itself was so good. They actually listened to what we wanted. Our friends are still asking who the caterer was!",
  },
  {
    id: "meena-family",
    group: "Catering",
    name: "The Meena Family",
    context: "Dholai",
    quote:
      "For my parents' 25th anniversary, we wanted pure vegetarian, Jain food for some of our older relatives. Harish ji understood immediately. He set up a separate counter. The care they took was amazing.",
  },
  {
    id: "anil-verma",
    group: "Catering",
    name: "Anil Verma",
    context: "Corporate event",
    quote:
      "Needed corporate catering in Muhana Mandi for an office opening. Siyaram Caters was professional, on time, and the food was delicious. Our clients were very impressed. Will definitely use them again.",
  },
  {
    id: "sunita-g",
    group: "Catering",
    name: "Sunita G.",
    context: "Patrakar Colony",
    quote:
      "We used Siyaram Caters for our daughter's first birthday party. It was a small gathering of about 60 people. They suggested a great menu that had something for both kids and adults. So easy and zero tension for us.",
  },
  {
    id: "sharma-family",
    group: "Catering",
    name: "The Sharma Family",
    context: "Mansarovar",
    quote:
      "Harish bhai and his team handled my son's wedding catering. Even when the baraat was two hours late, they kept all the food perfectly hot and fresh. The guests raved about the chole bhature. Felt like we had family handling the food.",
  },
];
