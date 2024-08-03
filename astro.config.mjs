import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cloudinary';

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          // Content collections
          {
            name: 'blog',
            label: 'Blog Posts',
            folder: 'content/blog',
            create: true,
            fields: [
              {
                label: 'Title',
                name: 'title',
                widget: 'string',
              },
              {
                label: 'Publish Date',
                name: 'date',
                widget: 'datetime',
              },
              {
                label: 'Body',
                name: 'body',
                widget: 'markdown',
              },
            ],
          }
        ],
      },
    }),
  ],
});