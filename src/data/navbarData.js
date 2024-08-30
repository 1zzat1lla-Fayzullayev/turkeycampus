export const menuItems = [
  { text: "Home", link: "/" },
  {
    text: "About us",
    link: "/about",
    hasDropdown: true,
    dropdownLinks: [{ text: "Be our Agent", link: "" }],
    dropdownIcon: true,
  },
  { text: "Services", link: "/services" },
  {
    text: "Study Destinations",
    link: "/study-destinations",
    hasDropdown: true,
    dropdownLinks: [
      { text: "USA", link: "" },
      { text: "UK", link: "" },
    ],
    dropdownIcon: true,
  },
  {
    text: "Universities",
    link: "/universities",
    hasDropdown: true,
    dropdownLinks: [
      { text: "Harvard", },
      { text: "Stanford", },
    ],
    dropdownIcon: true,
  },
  {
    text: "Fields",
    link: "/fields",
    hasDropdown: true,
    dropdownLinks: [
      { text: "Engineering", },
      { text: "Medicine", },
    ],
    dropdownIcon: true,
  },
  {
    text: "Videos & Podcast",
    link: "/media",
    hasDropdown: true,
    dropdownLinks: [
      { text: "Webinars", },
      { text: "Podcasts", },
    ],
    dropdownIcon: true,
  },
  { text: "Blog", link: "/blog" },
  { text: "Contact Us", link: "/contact" },
];