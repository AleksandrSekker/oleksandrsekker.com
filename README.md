# Table of Contents
- General Info
- Tech info
- Link to deployed web app

## General Info
My personal website built with the [T3 Stack](https://create.t3.gg/).

## Tech info
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [TypeScript](https://www.typescriptlang.org)
- [railway](https://railway.app)
- [react-hook-form](https://react-hook-form.com)
- [i18next](https://www.i18next.com)
- [i18nexus](https://i18nexus.com)
- [framer motion](https://www.framer.com/motion/)
- [headlessUI](https://headlessui.dev)
- [fontawesome](https://fontawesome.com)

## <a name="installation"></a>Installation
To have this app running on your local computer, please follow the below steps:

Clone repository:
```
$ git clone https://github.com/AleksandrSekker/oleksandrsekker.com.git
```
or
```
$ git clone git@github.com:AleksandrSekker/oleksandrsekker.com.git
```
Navigate to the project folder:
```
$ cd oleksandrsekker.com
```
Install project dependencies:
```
$ npm install
```
add .env.local file with the following variables: I18NEXUS_API_KEY, GMAIL_EMAIL_ADDRESS, GMAIL_APP_PASSWORD, DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET
### Remember to add your own values for the variables. This is required for localisation and email sending
For the I18NEXUS_API_KEY, you can get it from [i18nexus](https://i18nexus.com)
For the GMAIL_EMAIL_ADDRESS and GMAIL_APP_PASSWORD, you can get it from [Google](https://myaccount.google.com/apppasswords)

### Not required, but recommended. Now it's not used but in future version i plan to use it
#### Discord login
For the DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET, you can get it from [Discord](https://discord.com/developers/applications)
For the NEXTAUTH_URL, you can get it from [localhost](http://localhost:3000)
#### Database
For the DATABASE_URL, you can create database here [railway](https://railway.app)


Run the project:
```
$ npm run dev 
```
## Link to deployed web app

### https://oleksandrsekker.com/
