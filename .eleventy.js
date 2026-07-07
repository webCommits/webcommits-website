module.exports = function(eleventyConfig){

    eleventyConfig.setServerOptions({
        showAllHosts: true
    })

    eleventyConfig.addPassthroughCopy("src/static/style.css")
    eleventyConfig.addPassthroughCopy("src/static/script.js")
    eleventyConfig.addPassthroughCopy("src/static/i18n.js")
    eleventyConfig.addPassthroughCopy("src/static/images")
    eleventyConfig.addPassthroughCopy("src/sitemap.xml")
    eleventyConfig.addPassthroughCopy("src/robots.txt")
    eleventyConfig.addPassthroughCopy("src/.nojekyll")
    eleventyConfig.ignores.add("src/static/images/signature.html")
    return {
        dir: {
          input: "src",
          output: "docs"
        }
      };
}
