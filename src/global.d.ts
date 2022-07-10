/// <reference types="svelte" />
type RpcAsset = "void" | "arch" | "ubuntu" | "raspberrypi" | "fedora" | "debian" | "linux" // OS
| "bf3" | "bf4" | "bf2042" // Battlefield
| "fe3h" | "fefates" | "fewarriors" | "fewthreehopes" // Fire Emblem
| "xandy" | "bw2" | "omegaalpha" | "ultrasunultramoon" // Pokemon
| "lol" | "minecraft" // Other
| "kagero" | "orochi" // Kagero Package Manager
| "azura" | "shigure" // Fates-Audioplayer
| "kda" | "starset" | "bmth" | "neighbourhood" | "fallinrev" | "ncs"; // Bands

interface AppMeta {
    title: string;
    rich_title: string;
    description: string;
    author: string;
    github: string;
    license: string;
}