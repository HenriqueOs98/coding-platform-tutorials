import { defineCollection, z } from 'astro:content';

// Define the course collection
const courseCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        exp: z.number(),
        order: z.number().optional(),
        image: z.string().optional()
    }),
});

// Define the tutorial collection
const tutorialCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        courseSlug: z.string(),
        order: z.number(),
        initialCode: z.string(),
        language: z.string().default('javascript'),
        highlightedLines: z.array(z.number()).optional(),
        validation: z.object({
            requiredVariables: z.array(z.object({
                name: z.string(),
                type: z.string(),
                value: z.any()
            })).optional(),
            expectedOutput: z.string().optional(),
            requiredStatements: z.array(z.string()).optional()
        }).optional(),
        code_solution: z.string().optional(),
        output_solution: z.string().optional()
    }),
});

// Export a single `collections` object to register your collections
export const collections = {
    'courses': courseCollection,
    'tutorials': tutorialCollection,
};
