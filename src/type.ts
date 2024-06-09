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
    price: string;
    discount?: string;
    colors?: string[];
    rate?: number;
    staffPick?: boolean;
    image: string;
};
