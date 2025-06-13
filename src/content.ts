import type * as T from './content-types';

// All content found in the top profile card
export const TITLE: T.Title                 = 'Jon Snow';
export const DESCRIPTION: T.Description     = 'A brooding and honorable warrior, serves as Lord Commander at Castle Black, guarding the realm from the dangers that lie beyond The Wall.';
export const LOCATION: T.Location           = 'Castle Black';
export const GENDER: T.Gender               = 'Male';

// Profile image is of size 128px x 128px
export const PROFILE_IMAGE: T.ProfileImage  = 'profile.jpg';

// Can be either a filename or color code. Height is 320px.
// Example: banner.jpg or #1D31DB
export const BANNER: T.Banner               = 'banner.png';

// Can be either 'light' or 'dark'
export const THEME: T.Theme                 = 'light';


/* ==============
   ADD LINKS HERE
   ==============
Links are split into sections, with a header title attached to them.
Format:
{
    sectionTitle: string;
    links: [
        { 
            title: string,
            description: string,
            url: string,
            icon?: string
        }
    ]
}

For custom icons, add the icon image to the folder /public/icons and add the file name to the array.
(Icons are of size 48px x 48px)
If no custom icon is specified, the website favicon will be used instead.

*/
export const LINKS: T.Links[] = [
    {
        sectionTitle: 'Social Media',
        links: [
            {
                title: 'Facebook',
                description: 'My Facebook Page',
                url: 'https://www.facebook.com',
                icon: 'facebook.png'
            },
            {
                title: 'X',
                description: 'My X Page',
                url: 'https://www.x.com'
            },
            {
                title: 'Instagram',
                description: 'My Instagram Page',
                url: 'https://www.instagram.com'
            },
            {
                title: 'LinkedIn',
                description: 'My LinkedIn Page',
                url: 'https://www.linkedin.com'
            }
        ]
    }
]
