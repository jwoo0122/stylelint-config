"use strict"

module.exports = {
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-styled-components"
  ],
  "syntax": "scss",
  "rules": {
      "selector-type-case": null,
      "comment-empty-line-before": null,
      "declaration-empty-line-before": null,
      "selector-type-no-unknown": [true, {
        "ignore": ["custom-elements", "default-namespace"]
      }],
      "no-eol-whitespace": [true, {
        "ignore": ["empty-lines"]
      }]
  }
}
