import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



interface newsData  {
  article_id: string;
  title: string;
  description: string;
  link: string;
  keywords: string[];
  creator:  string[];
  pubDate: string;
  image_url: string;
  source_name: string;
  source_icon: string;
  country: string[];
  category: string[];
};

interface NewsState {
  articles: newsData[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  nextPage: string | null
}

const apiKey = import.meta.env.VITE_NewsAPI_KEY;

export const fetchLatestNews = createAsyncThunk<{ results: newsData[]; nextPage: string | null }, string | undefined >(
  'news/latestNews',
  async (nextPage) => {
    const pageParam = nextPage ? `&page=${nextPage}` : '';
    const res = await axios.get(`https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&removeduplicate=1${pageParam}`);
    return {
      results: res.data.results as newsData[],
      nextPage: res.data.nextPage || null,
    };
  }
);  

const initialState: NewsState = {
  articles: [],
  status: 'idle',
  error: null,
  nextPage: null,
}

const newsSlice = createSlice({

  name: 'news',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestNews.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchLatestNews.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const existingIds = new Set(state.articles.map(article => article.article_id));
        const newUniqueArticles = action.payload.results.filter(article => !existingIds.has(article.article_id));

        state.articles = [...state.articles, ...newUniqueArticles];
        state.nextPage = action.payload.nextPage;
      })
      .addCase(fetchLatestNews.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch articles'
      })
  },
});

export default newsSlice.reducer;
