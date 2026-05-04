import { Route, Routes } from "react-router-dom"
import AppLayout from "../Layout/AppLayout"
import EditGenderPage from "../pages/Gender/EditGenderPage";
import DeleteGenderPage from "../pages/Gender/DeleteGenderPage";
import GenderMainPage from "../pages/Gender/GenderMainPage";
import UserMainPage from "../pages/User/UserMainPage";
import LoginPage from "../pages/Auth/LoginPage";
import ProtectedRoute from "./ProtectedRoute";




const AppRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
          }>
          <Route path="/genders" element={<GenderMainPage />} />
          <Route path="gender/edit/:gender_id" element={<EditGenderPage />} />
          <Route path="gender/delete/:gender_id" element={<DeleteGenderPage />} />
          <Route path="users" element={<UserMainPage />} />

        </Route>
      </Routes>
  )
}

export default AppRoutes;
