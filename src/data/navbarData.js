export const menuItems = [
  { text: "Home", link: "/" },
  {
    text: "About us",
    link: "/about",
    hasDropdown: true,
    dropdownLinks: [{ text: "Be our Agent", link: "/be-our-agent" }],
    dropdownIcon: true,
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
    dropdownIcon: true,
  },
  {
    text: "Universities",
    link: "/universities",
    hasDropdown: true,
    dropdownLinks: [
      { text: "Harvard", link: "/universities/harvard" },
      { text: "Stanford", link: "/universities/stanford" },
    ],
    dropdownIcon: true,
  },
  {
    text: "Fields",
    link: "/fields",
    hasDropdown: true,
    dropdownLinks: [
      { text: "Engineering", link: "/fields/engineering" },
      { text: "Medicine", link: "/fields/medicine" },
    ],
    dropdownIcon: true,
  },
  {
    text: "Videos & Podcast",
    link: "/media",
    hasDropdown: true,
    dropdownLinks: [
      { text: "Webinars", link: "/media/webinars" },
      { text: "Podcasts", link: "/media/podcasts" },
    ],
    dropdownIcon: true,
  },
  { text: "Blog", link: "/blog" },
  { text: "Contact Us", link: "/contact" },
];