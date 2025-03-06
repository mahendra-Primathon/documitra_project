This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

**Project Name:** DocuMitra

**Description:** 
DocuMitra is a web application built with Next.js, designed to facilitate document management and processing. It provides users with a streamlined interface to manage various forms and documents, ensuring a user-friendly experience.

**Technologies Used:**
- **Next.js:** Framework for server-side rendering and static site generation.
- **React:** Library for building user interfaces.
- **Axios:** For making HTTP requests.
- **MongoDB:** Database for data storage.
- **Firebase:** For authentication and other backend services.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the development server, use the following command:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Form Page Details

The form page is a central feature of the application, allowing users to input and manage their data efficiently. It consists of multiple sub-components that handle different aspects of the form, including:

1. **FormHeader.tsx:** Displays the header for the form page.
2. **FormMain.tsx:** The main container for the form, orchestrating the various steps and components.
3. **FormPersonalDetailsForm.tsx:** Collects personal information from the user.
4. **FormAddressForm.tsx:** Handles address-related data.
5. **FormFileView.tsx:** Displays uploaded files and allows users to manage them.
6. **FormReviewForm.tsx:** A review step for users to confirm their inputs before submission.
7. **FormSummaryCard.tsx:** Provides a summary of the user's inputs for final review.
8. **FormUploadStep.tsx:** Manages the file upload process.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
