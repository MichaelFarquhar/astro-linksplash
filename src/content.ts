import type * as T from './content-types';

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

// **** ADD LINKS HERE ****
export const LINKS: T.Links[] = [
    {
        sectionTitle: 'Social Media',
        links: [
            {
                title: 'Facebook',
                description: 'My Facebook Page',
                url: 'https://www.facebook.com'
            },
            {
                title: 'Twitter',
                description: 'My Twitter Page',
                url: 'https://www.twitter.com'
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
