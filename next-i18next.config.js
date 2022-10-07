// used for SSR (getServerSideProps)
// const path = require("path");
// const localePath = path.resolve("./public/locales");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
    // localePath, //if Vercel fails to build
  },
  // localePath,
};
