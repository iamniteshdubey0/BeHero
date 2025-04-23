import fairy from "../assets/fairy-1.svg";
import star from "../assets/star.png";
import planet from "../assets/planet-1.png";
import pencil from "../assets/pencil-1.png";
import rainbow from "../assets/rainbow.png";
import spaceship from "../assets/space-ship.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
      defaultValue:'Nitesg Hudey'
    },
    {
      id: "email",
      label: "Your Email",
      defaultValue:'Niesh@gamilcom'
    },
    {
      id: "subject",
      label: "Your Subject",
      defaultValue:'Hire You'
    },
    {
      id: "message",
      label: "Your Message",
      defaultValue:'whats in your mind!'
    },
  ],
};
