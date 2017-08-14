import { createClient } from 'contentful'
import config from './config'

export default {
  client: createClient({
    space: config.space,
    accessToken: config.accessToken
  }),
  async getPosts () {
    const data = await this.client.getEntries({
      content_type: config.contentTypes.posts
      // 'fields.category.sys.id': 'FJlJfypzaewiwyukGi2kI' // children
      // 'fields.category.sys.id': '6XL7nwqRZ6yEw0cUe4y0y6'
    })
    return await data.items
  },
  async getPostBySlug (slug) {
    const data = await this.client.getEntries({
      content_type: config.contentTypes.posts,
      'fields.slug': slug
    })
    return await data.items[0]
  },
  async getCategories () {
    const data = await this.client.getEntries({
      content_type: config.contentTypes.categories
    })
    return await data.items
  }
}
