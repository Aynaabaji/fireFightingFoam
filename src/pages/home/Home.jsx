import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Form from '../../components/form/Form'
import SideEffects from '../../components/sideEffects/SideEffects'
import Costs from '../../components/costs/Costs'
import Compensation from '../../components/compensation/Compensation'
import NextStep from '../../components/nextStep/NextStep'
import CaseFile from '../../components/caseFile/CaseFile'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Form />
      <SideEffects />
      <Costs />
      <Compensation />
      <NextStep />
      <CaseFile />
      <Footer />
    </div>
  )
}

export default Home
