import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddRecipesPages from '../pages/AddRecipesPage/AddRecipesPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import RecipeDetailsPage from '../pages/RecipeDetailsPage/RecipeDetailsPage'
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'


const Router = () => {
  return (
    < BrowserRouter>
      <Header />
      <Routes>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/cadastro" element={<SignUpPage />} />

        <Route path="/" element={<RecipesListPage />} />

        <Route path="/adicionar-receita" element={<AddRecipesPages />} />

        <Route path="/detalhe/:id" element={<RecipeDetailsPage />} />
        {/* id será substituido pela receita especifica */}.

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router