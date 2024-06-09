export default function formatPrice(
    price: number,
    locale: string = "en-US",
    currency: string = "usd",
    options?: Intl.NumberFormatOptions
) {
    return Number(price).toLocaleString(locale, {
        style: "currency",
        unitDisplay: "short",
        currency: currency,
        ...options,
    });
}
