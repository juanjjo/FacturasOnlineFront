import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../modules/auth/pages/LoginPage"
import { InvoiceRouter } from '../../src/modules/invoce/router/InvoiceRouter'


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/*" element={<InvoiceRouter></InvoiceRouter>}></Route>
    </Routes>
    </>
  )
}
