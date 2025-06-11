import {  defineType, defineField } from 'sanity';

export const courseType = defineType({
    name: "course",
    title: "Course",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().error("The course title is required"),
        }),
        defineField({
            name: "price",
            title: "Price (USD)",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
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
            name: "image",
            title: "Course image",
            type: "image",
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            validation: (rule) => rule.required(),  
        }),
        defineField({
            name: "modules",
            title: "Modules",
            type: "array",
            of: [{ type: "reference", to: { type: "module"}  }],
        }),
        defineField({
            name: "instructor",
            title: "Instructor",
            type: "reference",
            to: [{ type: "reference", to: { type: "instructor"} }],
        }),
        
    ],
})