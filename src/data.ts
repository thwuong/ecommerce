import { NavItem } from "./type";

export const navList: NavItem[] = [
    {
        href: "/",
        label: "Home",
        hasChildren: false,
    },
    {
        href: "/shop",
        label: "Shop",
        hasChildren: true,
    },
    {
        href: "/about-us",
        label: "About us",
        hasChildren: false,
    },
    {
        href: "/blog",
        label: "Blog",
        hasChildren: false,
    },
    {
        href: "/contact",
        label: "Contact",
        hasChildren: false,
    },
    {
        href: "/thmee-features",
        label: "Theme features",
        hasChildren: false,
    },
];
export const categories: NavItem[] = [
    {
        href: "/",
        label: "Headphones",
        hasChildren: false,
    },
    {
        href: "/shop",
        label: "Earbuds",
        hasChildren: false,
    },
    {
        href: "/about-us",
        label: "Speakers",
        hasChildren: false,
    },
];
