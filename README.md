# 📰 Insight Loop  

**Insight Loop** is a modern news aggregator built with **React, Redux Toolkit, Vite, Chakra UI, and Clerk authentication**.  
The app fetches live news from [NewsData.io API](https://newsdata.io/) and provides **search, category filtering, infinite scrolling, authentication-protected routes, and persistence**.  

🔗 **Project Repository:** [GitHub](https://github.com/MuzamilAli-78/maazi-times.git)  
🌍 **Live Demo:** [Vercel Deployment](https://maazi-times.vercel.app/)  

---

## ⚡ Tech Stack
- **React + TypeScript** – frontend framework  
- **Redux Toolkit + redux-persist** – state management with persistence  
- **Chakra UI** – component library & styling  
- **Clerk** – authentication & protected routes  
- **Axios** – API requests  
- **React Router DOM (v6)** – routing  
- **Vite** – bundler  

---

## 🗂️ Project Structure
src/
├─ assets/images/ # static images & logos 
├─ components/ # reusable UI components 
│ └─ ui/ # Chakra UI helpers (color-mode, toaster, etc.) 
├─ layouts/ # Layout wrappers (RootLayout with Navbar/Footer) 
├─ pages/ # Page-level components (Home, Category, Search, etc.) 
├─ redux/ # State management (newsSlice, store) 
├─ App.tsx # Router & route definitions 
├─ main.tsx # App entry, Providers setup 



---

## 🔑 Features

### 1. **Authentication**
- Integrated with **Clerk**.  
- `ProtectedRoutes.tsx` ensures only signed-in users can view **full article details**.  

### 2. **News Fetching & Redux State**
- `newsSlice.ts` manages:  
  - Articles  
  - Loading & error states  
  - `nextPage` (pagination token)  
- Async thunk `fetchLatestNews` fetches from **NewsData.io API**.  
- Prevents duplicate articles by filtering with `article_id`.  

### 3. **Homepage (`Home.tsx`)**
- Hero **carousel** with featured news.  
- "Top Stories" section with **Load More button**.  
- Uses Chakra UI **Spinner** and fallback images for better UX.  

### 4. **Categories (`Category.tsx`)**
- Dynamic route: `/category/:name`.  
- Dropdown selector for categories.  
- Displays category-specific news + fallback (`BlankCard`) when no results.  
- Includes **Additional Sources** sidebar (`SourceNews.tsx`).  

### 5. **Search (`Search.tsx`)**
- Debounced search input (500ms).  
- Fetches results from API (`q=${query}`).  
- Empty results handled via `BlankCard`.  

### 6. **Article Details (`ArticleDetails.tsx`)**
- Routes: `/category/:name/:articleId` or `/search/:articleId`.  
- Displays full article info in **CarousalCard** format.  
- Includes back button for easy navigation.  
- Fully **protected with Clerk authentication**.  

### 7. **UI Components**
- `NewsCard` → List-style news card.  
- `ArticleCard` → Category-based card.  
- `Carousal` + `CarousalCard` → Interactive news slider.  
- `SideNews` → Source info cards.  
- `BlankCard` → Empty state handler.  
- `Navbar` → Responsive menu with Clerk integration.  
- `Footer` → Category links, branding, and social links.  

### 8. **Persistent State**
- Uses **redux-persist** → keeps fetched news/articles in local storage across refreshes.  

---

## 🔧 Installation & Setup

### 1. Clone Repo
```sh
git clone https://github.com/MuzamilAli-78/maazi-times.git
cd maazi-times
