import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Lottie from 'react-lottie';
import animationData from "../Animation/93948-wait-loading-animation.json"
import { useLocation } from 'react-router-dom'


function Home({ cart, handleToCart, data, isloading, value }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const location = useLocation();
  let username = location.state
  return (
    <>
      {/* <--------------------start-Navbar------------------------> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Navbar cart={cart} username={username}></Navbar>
      </nav>
      {/* <------------------------cards start------------------> */}
      <div className="container">
        <section className="row py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
                isloading ? <><Lottie options={defaultOptions}
                  height={400}
                  width={400}
                /></> : data.map((item, index) => {
                  return <Card key={index} item={item} handleToCart={handleToCart} value={value}></Card>
                })
              }
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
