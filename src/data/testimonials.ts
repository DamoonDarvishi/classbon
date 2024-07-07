import { Testimonial } from "@/types/testimonial.type";

// export const testimonials: Testimonial[] = [
//   {
//     image: "/images/testimonial/one.jpg",
//     name: "محمدرضا احمدی",
//     skills: "توسعه دهنده فرانت‌اند",
//     description:
//       "دوره‌های آموزشی کلاسبن  تغییری عمیقی در دیدگاهم نسبت به فرانت‌اند ایجاد کرده. از طریق این دوره‌ها تونستم نکات اصولی و روش‌های به‌روز رو یاد بگیرم",
//   },
//   {
//     image: "/images/testimonial/eight.jpg",
//     name: "سارا علیزاده",
//     skills: "توسعه‌دهنده ری‌اکت",
//     description:
//       "به عنوان یک علاقمند به ری‌اکت، دوره‌های کلاسبن برام خیلی مفید بوده. از طریق آموزش‌های عملی و مثال‌های واقعی، تونستم بهترین راهکارها و تکنیک‌ها رو برای توسعه بهتر اپلیکیشن‌های ری‌اکت یاد بگیرم",
//   },
//   {
//     image: "/images/testimonial/two.jpg",
//     name: "محمد‌امین رضایی",
//     skills: "برنامه‌نویس وب",
//     description:
//       "دوره‌های آموزشی کلاسبن برای من تبدیل به یک تجربه یادگیری شگفت‌انگیز شده. از طریق آموزش‌های کاربردی، به راحتی مهارت‌های فرانت‌اندم رو بهبود دادم",
//   },
//   {
//     image: "/images/testimonial/nine.jpg",
//     name: "فاطمه محمدی",
//     skills: "برنامه‌نویس و طراح وب",
//     description:
//       "در کلاسبن، تونستم با استفاده از آموزش‌های تخصصی، مهارت‌های برنامه‌نویسی ام رو به یک سطح جدید برسونم. این دوره‌ها واقعاً به من کمک کردند. ممنون",
//   },
//   {
//     image: "/images/testimonial/ten.jpg",
//     name: "زهرا مقدم",
//     skills: "برنامه‌نویس ری‌اکت",
//     description:
//       "کلاسبن بهترین منبع آموزشی برای دوره‌های فرانت‌انده. این دوره‌ها با محتوای کاربردی به من اعتماد به نفس لازم رو برای شروع یک شغل جدید داده",
//   },
//   {
//     image: "/images/testimonial/four.jpg",
//     name: "حسین کریمی",
//     skills: "توسعه‌دهنده ری‌اکت و نکست",
//     description:
//       "من تمام دوره‌های توسعه ری‌اکت رو از کلاسبن شرکت کردم و به راحتی می‌تونم بگم که این بهترین تصمیمی بود که برای پیشرفت در دنیای توسعه وب گرفتم. آموزش‌ها عالی و جامع هستن . درود بر مهندس سپهوند",
//   },
//   {
//     image: "/images/testimonial/three.jpg",
//     name: "محمد خادم",
//     skills: "برنامه‌نویس وب",
//     description:
//       "دوره‌های کلاسبن  به من کمک خیلی زیادی تا حالا کرده. از طریق آموزش‌های عملی و مثال‌های واقعی، تونستم اصول اولیه توسعه وب را مسلط بشم و با خیال راحت به پیشرفت خودم ادامه بدم",
//   },
//   {
//     image: "/images/testimonial/eleven.jpg",
//     name: "سارا معینی",
//     skills: "برنامه نویس ری‌اکت",
//     description:
//       "دوره‌های کلاسبن برای من به عنوان یک فرصت عالی برای یادگیری ری‌اکت بوده. با تدریس استاد سپهوند، توانستم به سرعت پیشرفته کنم. کلاسبن واقعاً جایی برای یادگیری عمیق و به‌روز از تکنولوژی‌های جدیده. ممنون",
//   },
//   {
//     image: "/images/testimonial/twelve.jpg",
//     name: "مریم کاظمی",
//     skills: "برنامه نویس وب",
//     description:
//       "تجربه‌ی من از دوره‌های آموزشی وب‌سایت کلاسبن عالی بوده. من به عنوان یک توسعه‌دهنده فرانت‌اند تونستم از آموزش‌های اصولی و پروژه‌های عملی استفاده کنم. به ویژه، دوره‌های مرتبط با ری‌اکت برای من خیلی مفید بودن و به من کمک کردن تا مهارت‌هام رو ارتقا بدم",
//   },
//   {
//     image: "/images/testimonial/five.jpg",
//     name: "حسین اسماعیلی",
//     skills: "برنامه نویس در کارگزاری مفید",
//     description:
//       "اولین تجربه آموزش من در سامانه کلاسبن واقعا برام جذاب بود. آموزش با کیفیت، محیط یادگیری سریع و کاربرپسند. دمتون گرم",
//   },
//   {
//     image: "/images/testimonial/six.jpg",
//     name: "حسام اکبری",
//     skills: "برنامه نویس در کارگزاری مفید",
//     description:
//       "با اینکه پلتفرم آموزشی کلاسبن به تازگی راه اندازی شده اما پیاده سازی دقیق و کاربر پسند بودن این پلتفرم نشان از یک تیم حرفه ای داره. ",
//   },
//   {
//     image: "/images/testimonial/seven.jpg",
//     name: "امیر سلحشور",
//     skills: "برنامه نویس ری‌اکت",
//     description:
//       "کلاسبن واقعا یک منبع بی‌نظیر برای آموزش ری‌اکته. من از دوره‌های این وب‌سایت برای تقویت مهارت‌هایم در زمینه فرانت‌اند استفاده کردم. آموزش‌ها با جزئیات کامل و تمرین‌های عملی طراحی شدن",
//   },
// ];

export const testimonials: Testimonial[] = [
  {
    image: "/images/testimonial/one.jpg",
    name: "Mohammad Reza Ahmadi",
    skills: "Frontend Developer",
    description:
      "Classbon courses have profoundly changed my perspective on frontend development. Through these courses, I was able to learn fundamental principles and up-to-date techniques.",
  },
  {
    image: "/images/testimonial/eight.jpg",
    name: "Sara Alizadeh",
    skills: "React Developer",
    description:
      "As someone interested in React, Classbon courses have been very beneficial for me. Through practical tutorials and real-world examples, I learned the best solutions and techniques for developing React applications.",
  },
  {
    image: "/images/testimonial/two.jpg",
    name: "Mohammad Amin Rezaei",
    skills: "Web Programmer",
    description:
      "Classbon courses have turned into an amazing learning experience for me. Through practical training, I easily improved my frontend skills.",
  },
  {
    image: "/images/testimonial/nine.jpg",
    name: "Fatemeh Mohammadi",
    skills: "Web Programmer and Designer",
    description:
      "At Classbon, I was able to elevate my programming skills to a new level using specialized tutorials. These courses really helped me. Thank you.",
  },
  {
    image: "/images/testimonial/ten.jpg",
    name: "Zahra Moghadam",
    skills: "React Programmer",
    description:
      "Classbon is the best educational resource for frontend courses. These courses provide me with practical content that gave me the necessary confidence to start a new job.",
  },
  {
    image: "/images/testimonial/four.jpg",
    name: "Hossein Karimi",
    skills: "React and Next Developer",
    description:
      "I attended all React development courses at Classbon, and I can easily say it was the best decision I made to progress in the web development world. The courses are excellent and comprehensive.",
  },
  {
    image: "/images/testimonial/three.jpg",
    name: "Mohammad Khadem",
    skills: "Web Programmer",
    description:
      "Classbon courses have greatly helped me so far. Through practical tutorials and real-world examples, I mastered the basics of web development and continued my progress with ease.",
  },
  {
    image: "/images/testimonial/eleven.jpg",
    name: "Sara Moeini",
    skills: "React Programmer",
    description:
      "Classbon courses have been an excellent opportunity for me to learn React. With Sepahvand's teaching, I was able to advance quickly. Classbon is truly a place for deep and up-to-date learning of new technologies. Thank you.",
  },
  {
    image: "/images/testimonial/twelve.jpg",
    name: "Maryam Kazemi",
    skills: "Web Programmer",
    description:
      "My experience with Classbon's website training courses has been excellent. As a frontend developer, I was able to use fundamental teachings and practical projects. Especially, React-related courses have been very useful for me and helped me enhance my skills.",
  },
];
