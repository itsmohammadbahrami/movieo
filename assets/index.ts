
import localFont from "next/font/local";

export const IranSansFont = localFont({
    src: [
        {
            path: "./fonts/iransans-light.ttf",
            weight: "400",
            style: "light",
        },
        {
            path: "./fonts/iransans-regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/iransans-bold.ttf",
            weight: "700",
            style: "bold",
        },
    ],
});