import { defineStore } from 'pinia'
import axios from 'axios'

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const usePostsStore = defineStore({
  id: 'posts',
  state: () => ({
    posts: [] as Post[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchPosts() {
      try {
        this.loading = true
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        this.posts = response.data
        this.loading = false
        console.log('1')
      } catch (error) {
        this.loading = false
        //this.error = error.message || 'Error fetching posts'
        console.log('2')
      }
    }
  }
})