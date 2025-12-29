import { Linkedin, Github, Twitter } from "lucide-react";
import { SITE_CONFIG } from "./constants";
import { FaKaggle, FaMedium } from 'react-icons/fa6';

export const socials = [
    {
        href: SITE_CONFIG.links.linkedin,
        label: "LinkedIn",
        icon: Linkedin,
    },
    {
        href: SITE_CONFIG.links.github,
        label: "GitHub",
        icon: Github,
    },
    {
        href: SITE_CONFIG.links.twitter,
        label: "Twitter",
        icon: Twitter,
    },
    {
        href: SITE_CONFIG.links.kaggle,
        label: "Kaggle",
        icon: FaKaggle,
    },
    {
        href: SITE_CONFIG.links.medium,
        label: "Medium",
        icon: FaMedium,
    },
];
