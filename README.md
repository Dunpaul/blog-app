# Blog App

## Introduction
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The project is a simple static site generator which takes a folder containing markdown files and renders them creating a website.

The project strongly uses [TypeScript](https://www.typescriptlang.org/) syntax and [TailwindCSS](https://tailwindcss.com/) for it's styling.

## Project Composition

The project has a `Home` page, an `About us` page, an `Articles` page, an `Authors` page and `Careers` page.  The pages fetch their content from respective folders; `Home` page  from `home` directory, `About us` page from `about` directory and `posts` from the `posts` directory located in the `root` directory of the project. The `home`, `about` and `posts` directories contain markdown files for respective sections and pages except for intended error pages; `Authors` page and `Careers` page. The `Authors` page is used to demonstrate a `500 - server error ` page, while the `Careers` page is used to demonstrate a `404-page not found` error page. They are custom error pages that are located in the `pages` directory. 

> Note: When you navigate to the `Authors` page you will see the default `Next.js` error page since the app is in development mode.

## Getting Started

To run the project locally;
 - First clone it from this repository using any of the following methods
    ```bash
    # HTTPS
    git clone https://github.com/Dunpaul/blog-app.git
    
    # SSH
    ssh-keygen -o -t rsa -C git@github.com:Dunpaul/blog-app.git
    
    # GitHub CLI
    gh repo clone Dunpaul/blog-app
    ```
 - Then install the necessary dependencies
    ```bash
    # ensure you are in the root directory of the application
    cd blog-app
    
    npm install
    ```
 - Then run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

 - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Updating the Application
To add or update the blog content of the application;
 - Navigate to the `posts` directory in the `root` directory of the project
 - Create a new markdown file, it should have the `.md` extension. For example
    ```markdown
      my_first_blog.md
     ```
 - Edit the newly created file using the following format. You copy this and use it as a template
    ```markdown
        ---
        title: 'Blog article name'
        date: 'yyyy-mm-dd'
        image: 'image-path'
        author: 'Author's Name'
        ---
        Blog Content...
    ```
 - Save the file and reload the application to view new changes
   
To modify or update the application's `Home` page (hero section);
 - Navigate to the `home` directory in the `root` folder of the application
 - Edit `hero.md` markdown file's content to your liking to update the hero section's content of the application.
    ```markdown
     ---
        title: 'Change this'
        introduction: 'Change this'
     ---
     Hero Section's content
   ```
- Save the file and reload the application to view new changes

To modify or update the application's `About us` page hero section;
- Navigate to the `about` directory in the `root` folder of the application
- Edit `about.md` markdown file's content to your liking to update the hero section's content of the application.
   ```markdown
    ---
       title: 'Change this'
       date: 'Change this'
       image: 'update-the-relevant-image-path'
    ---
    About us Section's content
  ```
- Save the file and reload the application to view new changes

> NOTE: Do not add any of the files in the `home` and `about` directories as you won't see any changes

> NOTE:Do not delete any files in the `home` and `about` directories. Deleting any files in the `home` and `about` directories would cause the application to break down


## Further Development

You can start editing the page by modifying `pages/index.ts`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Directories Description

| Directory    | Description                                                                                                                      |
|--------------|----------------------------------------------------------------------------------------------------------------------------------|
| `blog-app`   | This is the root folder of the project                                                                                           |
| `about`      | Contains a markdown file which contains the information for `About us` page                                                      |
| `components` | Contains TypeScript files which are the respective UI components for the application                                             |
| `home`       | Contains a markdown file which contains the information for `Home` page                                                          |
| `lib`        | Contains `about.ts`, `home.ts` and `posts.ts` TypeScript files which fetches the about, home and blog content of the application |
| `pages`      | Contains TypeScript files which are the respective pages for the application                                                     |
| `public`     | Contains resources which are accessible throughout the application such as images, favicon, etc                                  |
| `posts`      | Contains Markdown files for respective blog articles in the application                                                          |
| `public`     | Contains resources that can be accessed throughout the application                                                               |
| `styles`     | Contains a `global.css` file which contains the tailwind directives which define the styling of the application                  |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

