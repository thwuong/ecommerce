export type NavItem = {
    href: string;
    label: string;
    hasChildren: boolean;
};
export type ProductType = {
    id?: string;
    slug?: string;
    title: string;
    description: string;
    price: number;
    discount?: string;
    colors?: string[];
    rating?: {
        rate: number;
    };
    staffPick?: boolean;
    image: string;
};
export type AboutType = {
    title: string;
    description: string;
    image: string;
};
