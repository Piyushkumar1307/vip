import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Members' subtitle='Board of Directors' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
