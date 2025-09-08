import { defineStore } from "pinia";
import { useColorMode, useLocalStorage, type BasicColorSchema } from '@vueuse/core'
import { ref } from 'vue';

type IToggle = "Enabled" | "Disabled";

export const useOptionsStore = defineStore("options", () => {
    const options = useLocalStorage("options", ref({
        colorMode: useColorMode({
            emitAuto: true,
        })
    }));
    const pageSize = useLocalStorage("pageSize", 25);
    const pageless = useLocalStorage<IToggle>("pageless", "Disabled");
    const allowLargerParams = useLocalStorage<IToggle>("allowLargerParams", "Disabled");
    const autoCarousel = useLocalStorage<IToggle>("autoCarousel", "Enabled");
    const useBeta = useLocalStorage<IToggle>("useBeta", "Disabled");
    const imageDownloadType = useLocalStorage<"WEBP" | "PNG" | "JPG">("imageDownloadType", "PNG")
    const baseURL = useLocalStorage("baseURL", "");

    // A janky way to fix using color modes
    options.value.colorMode = useColorMode<BasicColorSchema>({
        emitAuto: true,
        initialValue: options.value.colorMode as BasicColorSchema
    }) as any

    return {
        // Variables
        options,
        pageSize,
        pageless,
        allowLargerParams,
        autoCarousel,
        useBeta,
        imageDownloadType,
        baseURL
    };
});
