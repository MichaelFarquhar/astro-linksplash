<p align="center">
    <img src="https://imgur.com/mPN9NWg.png" width="100"><br/><br/>
    <img src="https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</p>

**Astro LinkSplash** is a splash page template built on Astro 4 and Tailwindcss. It serves as a versatile starting template to create your own linktree-styled landing page.

## 🛠️ Installation

To set up the template, you can either fork or clone the repository. Getting started with Astro is as simple as running two commands.

```bash
npm install
```

```bash
npm run dev
```

## ✏️ Adding Content

> [!IMPORTANT]
> Modifying all content in this template can be done through a single configuration file: `/src/content.ts`.

This file contains a global variables for all text and images on the site, it's also where you add your links. All variables are typed to help with proper formatting.
Below is a list of all configuration variables found in the file.

| CONFIG VAR      | DESCRIPTION                                                         |
| --------------- | ------------------------------------------------------------------- |
| `TITLE`         | Name or title of page                                               |
| `DESCRIPTION`   | Short description under the title                                   |
| `LOCATION`      | Optional location tag with icon                                     |
| `GENDER`        | Optional gender tag with icon                                       |
| `PROFILE_IMAGE` | Profile image above title (size 128x128)                            |
| `BANNER`        | Full width banner. Either hex color code or image (height of 320px) |
| `THEME`         | Set theme to light or dark                                          |
| `LINKS`         | Array where you add sections of links                               |

## 🚀 Deploying Your Site

Check the [Astro Documentation](https://docs.astro.build/en/guides/deploy/) for comprehensive tutorials on deploying your Astro project to various hosting platforms.

If you'd like, you can test a local production-ready build of your site by running the following command:

```bash
npm run build
```

## 🤝 Contributing

If you find any issues or have suggestions for improvements, feel free to open an [issue](https://github.com/MichaelFarquhar/astro-linksplash/issues) or submit a [pull request](https://github.com/MichaelFarquhar/astro-linksplash/pulls). Any type of contributions are welcome!

## 📄 License

Licensed under the MIT license — see the [LICENSE](LICENSE) file for details.
