import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../Pages/FeedList'));
const SearchBar = lazy(() => import('../Pages/SearchBar'));


export default function AppRouter() {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Search" element={<SearchBar />} />
      </Routes>
    </Suspense>
  );
}
