module.exports = function (eleventyConfig) {
  // Passthroughs if you have static assets inside src/static or similar
  // eleventyConfig.addPassthroughCopy("src/static");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "layouts",
      output: "_site",
    },
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
