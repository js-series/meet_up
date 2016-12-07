# CSS Foundations
## Outline

* CSS code
* External, internal, and inline styling.
  * DEMO TIME: practice
* Types of Selectors: tag, id, class, universal
* Common CSS styles
* Simple Pseudo-selectors (LOVE HATE)
* Comments
* Google Web Fonts
* Atom Beautify
* Grouping and Nesting Selectors
* ID vs. Class
* Pitfalls
* Review/Recap


### Review/Recap CSS Questions:

* Explain how CSS can be applied in three ways to the HTML.

> external, internal, and inline

* Describe how cascading works with CSS. Explain the purpose of the key identifiers (tag, ID, and class).

> Author stylesheets take precedence over the Browser (User-agent/Default styling). Author styling is applied according to its selectors levels of specificity. Tag, Class, and ID styling is used to increase specificity of styling rules. Two tags with the same specificity are given precedence for the later they were loaded.

* Show examples of CSS to improve the styles of text, container backgrounds, and links.

  > Here is an example of styling text:

  ```css
    .warning {
      color: red;
      text-align: left;
      text-decoration: underline;
      text-transform: capitalize;
    }
  ```
  >  Here is a background styling:

  ```css
    .container {
      background-color: blue;
    }
  ```

  > For styling font:

  ```css
    .notice {
      font-weight: bold;
      font-size: 2%;
    }
  ```

  * Bonus: Compare and contrast between `%`, `em`, and `px` for `font-size`.

* Show how to write comments to both HTML and CSS documents.

    ```HTML
    <!-- My comments -->
    ```

    or

    ```CSS
    /* hello world */
    ```


* Show how to add Google Fonts to web pages.

  > Visit [Google Web Fonts](https://fonts.google.com/) and select a font. Then just add an `@import` and css declarations for using the font with **elements** on your page.

```CSS
@import('https://fonts.googleapis.com/css?family=Loved+by+the+King');


h1 {
  font-family: 'Loved by the King', cursive;
  font-size: 3rem;
}
```

* Show how to Group and Nest CSS styles efficiently.

  * In the following example we give each `p.important` elements and `span.important` elements a boldness and highlighting, [see css and HTML example](http://codepen.io/thedelmer/pen/GNdbBo/?editors=1100).
