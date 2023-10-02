import { StaticImageData } from "next/image";

export type Song = {
    id: number;
    name: string;
    link: string;
    img: StaticImageData;
}