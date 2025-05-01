import fairy from "../assets/fairy-1.svg";
import star from "../assets/star.png";
import planet from "../assets/planet-1.png";
import pencil from "../assets/pencil-1.png";
import rainbow from "../assets/rainbow.png";
import spaceship from "../assets/space-ship.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export const NavbarData = {
  logo: "https://via.placeholder.com/150",
  name: "BeHero",
  navlist: [
    {
      title: "gallery",
      link: "#gallery",
    },
    {
      title: "features",
      link: "#features",
    },
    {
      title: "tutorials",
      link: "#tutorials",
    },
    {
      title: "testimonials",
      link: "#testimonials",
    },

    {
      title: "contact",
      link: "#contact",
    },
  ],
};

export const HeroData = {
  mainheading: "Be Hero of your own story",
  subheading: "Let the child be the director, and the actor in his own play",
  overlayIcons: {
    layer1: [
      {
        name: "fairy",
        img: fairy,
        position: {
          top: "45%",
          left: "-2%",
        },
      },
      {
        name: "planet",
        img: planet,
        position: {
          top: "-20%",
          left: "65%",
        },
      },
      {
        name: "star",
        img: star,
        position: {
          top: "55%",
          left: "-3%",
        },
      },
    ],
    layer2: [
      {
        name: "space-ship",
        img: spaceship,
        position: {
          top: "45%",
          left: "-2%",
        },
      },
      {
        name: "rainbow",
        img: rainbow,
        position: {
          top: "60%",
          left: "80%",
        },
      },
      {
        name: "pencil",
        img: pencil,
        position: {
          top: "-35%",
          left: "60%",
        },
      },
    ],
  },
};

export const ContactData = {
  mainheading: "Get In Touch",
  subheading:
    "We’ll create high-quality linkable content and build at least 40 high-authority links to each asset,paving the way for you to grow your rankings, improve brand.",
  info: {
    title: "Contact Information",
    subtitle:
      "We’ll create high-quality linkable content and build at least 40 high-authority.",
    mode: [
      {
        label: "phone",
        text: "1231231231",
        icon: <PhoneIcon></PhoneIcon>,
      },
      {
        label: "Email",
        text: "support@behero.com",
        icon: <EmailIcon></EmailIcon>,
      },
      {
        label: "Address",
        text: "ghghg dggd gge uigg 4fhewvfuyf gru23giuegfewgfbk ",
        icon: <LocationOnIcon></LocationOnIcon>,
      },
    ],
  },
  ui: [
    {
      id: "name",
      label: "Your Name",
      defaultValue: "Nitesg Hudey",
    },
    {
      id: "email",
      label: "Your Email",
      defaultValue: "Niesh@gamilcom",
    },
    {
      id: "subject",
      label: "Your Subject",
      defaultValue: "Hire You",
    },
    {
      id: "message",
      label: "Your Message",
      defaultValue: "whats in your mind!",
    },
  ],
};

export const FooterData = {
  newsletter: {
    heading:
      "Subscribe to our newsletter to get updates to our latest collections",
    subheading:
      "Get 20% off on your first order just by subscribing to our newsletter",
    text: "You will be able to unsubscribe at any time. Read our privacy policy",
    img: "/images/newsletter_kid.png", // Use actual image path
  },
  main: {
    logo: "/images/logo.png", // Use actual logo image path
    title: "BeHero",
    text: "Let the child be the director, and the actor in his own play",
    socials: [
      {
        name: "Instagram",
        icon: <Instagram />,
        link: "https://instagram.com/behero",
      },
      {
        name: "Facebook",
        icon: <Facebook />,
        link: "https://facebook.com/behero",
      },
      {
        name: "Twitter",
        icon: <Twitter />,
        link: "https://twitter.com/behero",
      },
      {
        name: "LinkedIn",
        icon: <LinkedIn />,
        link: "https://linkedin.com/company/behero",
      },
    ],
    footerLinks: [
      {
        name: "Company",
        links: [
          { label: "About Us", link: "#about" },
          { label: "Our Team", link: "#team" },
          { label: "Careers", link: "#careers" },
          { label: "Blog", link: "#blog" },
        ],
      },
      {
        name: "Support",
        links: [
          { label: "Help Center", link: "#help" },
          { label: "Contact Us", link: "#contact" },
          { label: "FAQs", link: "#faq" },
          { label: "Feedback", link: "#feedback" },
        ],
      },
      {
        name: "Quick Links",
        links: [
          { label: "Courses", link: "#courses" },
          { label: "Become a Teacher", link: "#teach" },
          { label: "Pricing", link: "#pricing" },
          { label: "Terms & Conditions", link: "#terms" },
        ],
      },
    ],
    contact: {
      label: "Contact",
      phone: "(91) 98765 4321 54",
      email: "support@mail.com",
    },
  },
  footerBottom: {
    copyright: "© Copyright by BeHero. All rights reserved.",
    links: [
      { label: "Privacy Policy", link: "#privacy-policy" },
      { label: "Terms of Use", link: "#terms" },
      { label: "Legal", link: "#legal" },
      { label: "Site Map", link: "#sitemap" },
    ],
  },
};