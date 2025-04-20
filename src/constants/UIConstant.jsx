import fairy from "../assets/fairy-1.svg";
import star from "../assets/star.png"
import planet from "../assets/planet-1.png"
import pencil from "../assets/pencil-1.png";
import rainbow from "../assets/rainbow.png"
import spaceship from "../assets/space-ship.png"

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
