<p align="center">
    <img src="https://imgur.com/mPN9NWg.png" width="100"><br/><br/>
    <img src="https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</p>

## Overview

Astro Linksplash is a splashpage templte build on Astro 4, which can be used as a template to create your own linktree-styled landing page.

## Installation

To install the template, either fork or clone the repo. With Astro, you need only run two packages to get started.

```bash
npm install
```

```bash
npm run dev
```

## Adding Content

Being an Astro template, you have free reign to change whatever code you want. However, this template was built around only needing to update a single file.
`/src/content.ts` contains a variety of global variables that you can edit for all content and images on the site.

| CONFIG VARIABLE | DESCRIPTION                                                         |
| --------------- | ------------------------------------------------------------------- |
| TITLE           | Name or title of page                                               |
| DESCRIPTION     | Short description under the title                                   |
| LOCATION        | Optional location tag with icon                                     |
| GENDER          | Optional gender tag with icon                                       |
| PROFILE_IMAGE   | Profile image above title (size 128x128)                            |
| BANNER          | Full width banner. Either hex color code or image (height of 320px) |
| THEME           | Set theme to light or dark                                          |
| LINKS           | Array where you add sections of links                               |

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

Licensed under the MIT license — see the LICENSE file for details.
