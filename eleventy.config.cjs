const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
    components: "./src/_includes/components/**/*.webc"
  });

  eleventyConfig.addPassthroughCopy({
    "./public/manifest.json": "assets/manifest.json",
    "./public/.nojekyll": "/.nojekyll",
    "./public/android/": "assets/android/",
    "./public/ios/": "assets/ios/",
    "./public/windows11/": "assets/windows11/",
    "./public/root-js/": "/",
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
