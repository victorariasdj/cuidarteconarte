import { defineCollection, z } from "astro:content";

const corporal = defineCollection({
    schema: z.object({
        date: z.string(),
        title: z.string(),
        img: z.string(),
        categoria: z.string().optional(),
        precio: z.union([z.string(), z.array(z.string())]),
        descripcion: z.string(),
        videoId: z.string().optional(),
        keywords: z.string().optional(),
        galeria: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

const facial = defineCollection({
    schema: z.object({
        date: z.string(),
        title: z.string(),
        img: z.string(),
        categoria: z.string().optional(),
        precio: z.union([z.string(), z.array(z.string())]),
        descripcion: z.string(),
        videoId: z.string().optional(),
        keywords: z.string().optional(),
        galeria: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

const manosYPies = defineCollection({
    schema: z.object({
        date: z.string(),
        title: z.string(),
        img: z.string(),
        categoria: z.string().optional(),
        precio: z.union([z.string(), z.array(z.string())]),
        descripcion: z.string(),
        videoId: z.string().optional(),
        keywords: z.string().optional(),
        galeria: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

const masajesCorporales = defineCollection({
    schema: z.object({
        date: z.string(),
        title: z.string(),
        img: z.string(),
        categoria: z.string().optional(),
        precio: z.union([z.string(), z.array(z.string())]),
        descripcion: z.string(),
        videoId: z.string().optional(),
        keywords: z.string().optional(),
        galeria: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

const ritualesRelajantes = defineCollection({
    schema: z.object({
        date: z.string(),
        title: z.string(),
        img: z.string(),
        categoria: z.string().optional(),
        precio: z.union([z.string(), z.array(z.string())]),
        descripcion: z.string(),
        videoId: z.string().optional(),
        keywords: z.string().optional(),
        galeria: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

const ritualesEnergeticos = defineCollection({
    schema: z.object({
        date: z.string(),
        title: z.string(),
        img: z.string(),
        categoria: z.string().optional(),
        precio: z.union([z.string(), z.array(z.string())]),
        descripcion: z.string(),
        videoId: z.string().optional(),
        keywords: z.string().optional(),
        galeria: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

const experienciasDeLujo = defineCollection({
    schema: z.object({
        date: z.string(),
        title: z.string(),
        img: z.string(),
        categoria: z.string().optional(),
        precio: z.union([z.string(), z.array(z.string())]),
        descripcion: z.string(),
        videoId: z.string().optional(),
        keywords: z.string().optional(),
        galeria: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

const talleres = defineCollection({
    schema: z.object({
        date: z.string(),
        title: z.string(),
        img: z.string(),
        categoria: z.string().optional(),
        precio: z.union([z.string(), z.array(z.string())]),
        descripcion: z.string(),
        videoId: z.string().optional(),
        keywords: z.string().optional(),
        galeria: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

export const collections = { 
    "corporal":corporal, "facial": facial, "manosYPies": manosYPies, "masajesCorporales": masajesCorporales, "ritualesRelajantes": ritualesRelajantes, "ritualesEnergeticos": ritualesEnergeticos, "experienciasDeLujo": experienciasDeLujo, "talleres": talleres };