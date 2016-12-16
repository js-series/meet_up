# Day 3
## Intro JS Events

We set out to introduce ourselves to JavaScript by digging right into the **utility** of JS events.

Along the way we learned a few new skills:

  * Linking JavaScript to an HTML file
  * Selecting from the **DOM** (`document`) using IDs.
  * Manipulating the `innerHTML` and CSS classes of an element.
  * Adding **event listeners** to react to user actions.

The first step to learning a language is getting comfortable copy/pasting some unfamiliar code, but being able to control and alter the parts you understand. Many times the code you come across from the community will have unfamiliar patterns or style but you can identify at a high level what certain parts are doing.

### Useful Terms

 * **DOM** or **Document Object Model**: it's the JavaScript interface to your HTML page.

  > Think `document` in the `document.getElementById`

 * **Event Listener**: it's everything in the `function () {}` we used with the `.addEventListener('click', function () {})`.

---

#### Bonus Terms

These are terms that might have come up, but we've not covered in detail yet.

* **Function**: a function is a reusable chunk of procedural code.

  ```JavaScript
    //  the function keyword starts the definition of a function
    //    |
    //    |   ------ The parens list any params, the ()
    //    |   |       means there aren't any params
    //    |   |
    //   \|/ \|/
    function () { // <-  curly's starts the function body

      // Some javascript goes here in the body

    } // <- curly's end the function body
  ```

  A familiar example

  ```
    function () {
      document.getElementById('myBanner').innerHTML = 'hello';
    }
  ```

* **Method**: a function that runs with respect to an object.

    ```JavaScript
    // The .getElementById is a method on the document.
    document.getElementById('myBanner')
    // The .alert is a method on the window
    window.alert('I am an alert');    
    ```

## Skills Summary

### Core Understanding

[You should be able to start a new project from scratch in Atom.](atom_tips/visual_new_project.md)

We can define some HTML.

`index.html`

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Example</title>
  </head>
  <body>
    <h1 id="myBanner">Change me</h1>
    <button id="myButton">Click to Change</button>

    <!--The script goes at the end of the body  -->
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```


We can write a simple script to change the `h1`.

`app.js`

```JavaScript

document.getElementById('myButton').addEventListener('click', function () {
  document.getElementById('myBanner').innerHTML = 'Changed!';
});
```

### Basic Debugging Skills

* You can open you developer console... quickly. Learn your shortcuts!

  * Mac: `OPTION + CMD + j` (shortcut for `View/Developer/JavaScript Console`)
  * Windows/Linux: `CONTROL + SHIFT + j`

* You can add `console.log` statements to your script, `app.js`, to see how it's running.

  `app.js`

  ```JavaScript
  // Log that your script was loaded.
  console.log('Script loaded');

  document.getElementById('myButton').addEventListener('click', function () {
    document.getElementById('myBanner').innerHTML = 'Changed!';
  });

  // Log that your script finished
  console.log('Script finished loading');
  ```

  In the above example you have confirmed the start and end of your script were successfully reached.

  Also, note that if you do run into problems you can open your JS console and will almost always see a link to the error in your JS. Thank you chrome!

#### Challenge

*Fix the following script and HTML so that it runs correctly.*

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Example</title>
  </head>
  <body>
    <h1 id="myBanner">Change me</h1>
    <button id="myButton">Click to Change</button>

    <!--The script goes at the end of the body  -->
    <script type="text/javascript"></script>
  </body>
</html>
```


`app.js`

```JavaScript
// Log that your script was loaded.
console.log('Script loaded');

document.getElementByID('myButton').addEvent('click', function () {
  document.getElementById('myBanner').innerHTML = 'Changed!';
});

// Log that your script finished
console.log('Script finished loading');
```

## Changing CSS classes

Using your knowledge of `addEventListener` and `document.getElementById` you put your skills to the test by now changing CSS classes applied to an HTML element.

`index.html`

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Example</title>
    <!-- A link to your CSS -->
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1 id="myBanner" class="urgent">Hello World</h1>
    <button id="urgentButton">Make Urgent</button>
    <button id="calmButton">Make Calm</button>
    <!-- Add another button to remove both urgent and calm classes  -->

    <!--The script goes at the end of the body  -->
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```

`style.css`

```CSS
.urgent {
  color: white;
  font-weight: bold;
  background-color: red;
  transition: background-color 0.5s ease;
}

.calm {
  color: white;
  font-weight: normal;
  background-color: blue;
  transition: background-color 0.5s ease;
}
```


`app.js`

```JavaScript
document.getElementById('urgentButton').addEventListener('click', function () {
  document.getElementById('myBanner').classList.remove('calm');
  document.getElementById('myBanner').classList.add('urgent');
});

document.getElementById('calmButton').addEventListener('click', function () {
  document.getElementById('myBanner').classList.remove('urgent');
  document.getElementById('myBanner').classList.add('calm');
});

// Add your remove urgent and calm button click listening here.
```

### Challenge

[Try on codepen?](http://codepen.io/thedelmer/pen/mOaBVb)

Add a `Remove All` **button** that **when clicked** removes the `urgent` and `calm` classes.
