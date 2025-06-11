import { defineType, defineField } from 'sanity';

export const lessonType = defineType({
    name: "lesson",
    title: "Lesson",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "name",
            maxLength: 96,
        },
        validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "videourl",
            title: "Video URL",
            type: "url",
            description: "The url for the video player (e.g. YouTube, Vimeno)",
        }),
        defineField({
            name: "loomurl",
            title: "Loom share URL",
            type: "url",
            description: "The fuul loom share URL (e.g., https://www.loom.com/share/...)",
        validation: (rule) => rule.custom((value) => {
            if (!value) return true; // aloja valor vacio
            try {
                const url = new URL(value);
                if (!url.hostname.endsWith("loom.com")) {
                    return "URL must be from loom.com";
                }
                if (!url.pathname.startsWith("/share/")) {
                    return "Must be a loom share URL";
                }
                const videoId = url.pathname.split("/share/")[1];
                if (!/^[a-f0-9-]{32,36}/.test(videoId)) {
                    return "Invalid loom video ID";
                }
                    return true; // url valida
                    } catch {
                    return "Por favor ingrese una url valida"; 
            }
            }),
        }),
        defineField ({
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        }),  
    ],
})