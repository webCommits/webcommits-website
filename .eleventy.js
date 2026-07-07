const crypto = require("node:crypto")
const fs = require("node:fs")
const path = require("node:path")

function getAssetVersion() {
    const hash = crypto.createHash("sha256")
    for (const file of ["style.css", "script.js", "i18n.js"]) {
        hash.update(fs.readFileSync(path.join(__dirname, "src/static", file)))
    }
    return hash.digest("hex").slice(0, 12)
}

module.exports = function(eleventyConfig){

    eleventyConfig.addGlobalData("assetVersion", getAssetVersion())

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
