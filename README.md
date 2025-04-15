# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Github](https://github.com/zardrick/browser-extensions-manager)
- Live Site URL: [Live Site](https://zardrick.github.io/browser-extensions-manager/)

## My process

### Built with

- Semantic HTML5 markup
- Sass (SCSS) for styling
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript (DOM manipulation)

### What I learned

- How to create a dynamic filter system using JavaScript
- How to use `:checked + label` and `:has()` selectors to style custom toggle switches
- How to write modular SCSS and use variables, maps, and mixins effectively
- How to handle theme switching (dark/light) by toggling body classes and overriding styles with `.theme-light`

```js
// Toggle theme functionality
const body = document.body;
const themeToggle = document.querySelector('.header__theme-toggle');
const icon = themeToggle.querySelector('img');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('theme-dark');
  body.classList.toggle('theme-light');
  icon.src = body.classList.contains('theme-dark') ? './assets/images/icon-sun.svg' : './assets/images/icon-moon.svg';
});
```

### Continued development

In future projects, I’d like to:

- Practice using `:has()` more and explore its browser support
- Explore building reusable toggle components with better accessibility
- Integrate localStorage to save theme and extension states
- Try animating card removal and transitions even more smoothly

### Useful resources

- [CSS Tricks: Styling a Checkbox](https://css-tricks.com/the-checkbox-hack/) - Helped with toggle styling
- [MDN Web Docs](https://developer.mozilla.org/) - For JS methods and CSS selectors
- [Frontend Mentor Discord](https://discord.gg/frontendmentor) - For encouragement and peer review

## Author

- Frontend Mentor - [@Zardrick](https://www.frontendmentor.io/profile/zardrick)

---


