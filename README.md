# PRAXIS-24

<p align="center">
  <a href="https://pccoeieee.org">
    <img width="300" src="#" alt="Praxis24 Logo"/>
  </a>
</p>


## For Contributions 
- we are using SCSS and all the auto-generated CSS is added to the `dist/css` folder
- you can add a CSS file in CSS folder and link that in the required HTML file or
- to generate CSS files in a specified location change the below code in your `Live Sass Compiler` settings and import your SCSS file into the `scss/style.scss` file
```js
    "liveSassCompile.settings.formats": [   
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "~/../dist/css/"
        }
    ],
```

