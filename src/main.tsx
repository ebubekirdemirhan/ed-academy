import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { HomePage } from './routes/HomePage';
import { AboutPage } from './routes/AboutPage';
import { TrainingsPage } from './routes/TrainingsPage';
import { TrainingDetailPage } from './routes/TrainingDetailPage';
import { ProductsPage } from './routes/ProductsPage';
import { ProductDetailPage } from './routes/ProductDetailPage';
import { SolutionsPage } from './routes/SolutionsPage';
import { BlogPage } from './routes/BlogPage';
import { BlogPostPage } from './routes/BlogPostPage';
import { ContactPage } from './routes/ContactPage';

// Vite injects BASE_URL: '/' in dev, '/ed-academy/' on GitHub Pages
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="hakkimda" element={<AboutPage />} />
          <Route path="egitimler" element={<TrainingsPage />} />
          <Route path="egitimler/:slug" element={<TrainingDetailPage />} />
          <Route path="urunler" element={<ProductsPage />} />
          <Route path="urunler/:slug" element={<ProductDetailPage />} />
          <Route path="cozumler" element={<SolutionsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="iletisim" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
