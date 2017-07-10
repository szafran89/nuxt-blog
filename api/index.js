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
    })
    return await data.items
  }
}
