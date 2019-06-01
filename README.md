# Kontiki Proxy Server

> The Kontiki Proxy Server serves up a more complete version of the Kontiki website by pulling in two major components:
> - Booking Component
> - Reviews Component

## Related Projects

  - [Booking Component (Zack)](https://github.com/teammustard/kontiki_component_zackzeyu)
  - [Proxy Server (Zack)](https://github.com/teammustard/kontiki_proxy_zackzeyu)
  - [Integration and End-to-End Tests (Zack)](https://github.com/teammustard/kontiki_integration_tests_zackzeyu)
  -- The integration/end-to-end tests are established in a separate repository because it has puppeteer as a required dependency, which has a large installation size (~170mb)
  - [Reviews Component (Brian)](https://github.com/teammustard/kontiki_component_ohbrian19)
  - [Proxy Server (Brian)](https://github.com/teammustard/kontiki_proxy_ohbrian19)

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Notes - Server Side](#Notes-Server-Side)
4. [Notes](#Notes)

## Usage

> Install dependencies with `npm install`

> I did not include a start server script, however you may use any method you'd like such as nodemon or PM2
>> The main server file is `server/index.js`
>
>> The server uses port 3010 by default, but you may set it using an environment variable `process.env.PORT`
>

> The client side code is solely represented by one file, but has two versions depending on the environment (production vs. development)
> - `dist/index.html`: development environment
> - `public/index.html`: production environment
> !! Note that the environment must match that of the component server (i.e., both need to be on development or production)

## Requirements

Beyond the npm modules required in package.json, you should have the following installed and working on the server:

- Node v10.13.0 (LTS as of May 2019) or higher
- *Optional*: PM2 for keep the server alive and setting the environment variables

## Notes
> **IMPORTANT:  development vs. production**
> The index.html served is different depending on whether the environment is set to be development or production (default: development)
> - The environment is accessed via the `process.env.NODE_ENV` variable
> - The environment MUST be the same on the component server. If the proxy server is running under production and the component server is running under development, the proxy serer may be serving old/outdated production version files stored in the component server

> **IMPORTANT: Handling Changes on the Component Server**
> - Since the proxy server simply pulls all files from the component server, the links may break if file names on the component server change
> - Therefore, after any significant changes to the client-side code on the component server (and after rebuilding/rebundling using Parcel), it may be worthwhile to double check the file name links in both `index.html` files to ensure that they are valid. They should correspond to the same file names in the `/dist` and `/public` folders on the component server