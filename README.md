# nuxt-blog

> A Nuxt.js server side rendered blog application (PWA included) based on [Contenful API](https://www.contentful.com/).

## Conecting with API

To run a blog, firstly you have to connect with API. To do that follow below steps:

1. Sign up for [Contentful](https://www.contentful.com/).

2. Log into Contentful and create new space. During creating new space you have to choose `Create an example space` and then select `Blog` tab.

3. Clone the repository.

3. Inside `api` directory copy/paste `config.js.samle` file and rename to `config.js`.

4. Overwride `config.js` with data form Contentful blog space.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

### License

- MIT

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
