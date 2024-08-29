export const menuItems = [
  { text: "Home", link: "/" },
  {
    text: "About us",
    link: "/about",
    hasDropdown: true,
    dropdownLinks: [{ text: "Be our Agent", link: "/be-our-agent" }],
  },
  { text: "Services", link: "/services" },
  {
    text: "Study Destinations",
    link: "/study-destinations",
    hasDropdown: true,
    dropdownLinks: [
      { text: "USA", link: "/study-destinations/usa" },
      { text: "UK", link: "/study-destinations/uk" },
    ],
  },
  {
    text: "Universities",
    link: "/universities",
    hasDropdown: true,
    dropdownLinks: [
      { text: "Harvard", link: "/universities/harvard" },
      { text: "Stanford", link: "/universities/stanford" },
    ],
  },
  {
    text: "Fields",
    link: "/fields",
    hasDropdown: true,
    dropdownLinks: [
      { text: "Engineering", link: "/fields/engineering" },
      { text: "Medicine", link: "/fields/medicine" },
    ],
  },
  {
    text: "Videos & Podcast",
    link: "/media",
    hasDropdown: true,
    dropdownLinks: [
      { text: "Webinars", link: "/media/webinars" },
      { text: "Podcasts", link: "/media/podcasts" },
    ],
  },
  { text: "Blog", link: "/blog" },
  { text: "Contact Us", link: "/contact" },
];