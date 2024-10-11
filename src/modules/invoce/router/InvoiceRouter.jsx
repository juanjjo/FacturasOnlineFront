import { Navigate, Route, Routes } from "react-router-dom"
import { InvoicePage } from "../pages/InvoicePage"
import { Navbar } from "../../../shared/ui/components/navbar"
import { GenerateInvoicePage } from "../pages/GenerateInvoicePage"
import { Dashboard } from "../../../shared/ui/components/Dashboard"
import { Footer } from "../../../shared/ui/components/Footer"

export const InvoiceRouter = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <Navbar className={''}></Navbar>
        <div className="flex-grow mx-0 md:mx-auto md:flex md:justify-center  max-w-screen-xl p-5 sm:p-10 md:px-16 ">
          <Routes>
            <Route path="home" element={<Dashboard></Dashboard>}></Route>
            <Route path="invoices" element={<InvoicePage></InvoicePage>}></Route>
            <Route path="invoice/generate" element={<GenerateInvoicePage></GenerateInvoicePage>}></Route>
            {/* <Route path="dc" element={<DcPage></DcPage>}></Route>
        <Route path="search" element={<SearchPage></SearchPage>}></Route>
        <Route path="hero/:id" element={<HeroesPage></HeroesPage>}></Route> */}
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}
