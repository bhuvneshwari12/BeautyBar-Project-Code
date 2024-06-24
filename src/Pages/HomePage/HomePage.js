import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './HomePage.css';
import { MDBCol, MDBRow, } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const HomePage = () => {
  const history = useHistory()

  const viewStore = () => {
    history.push('/store')
  }

  const scrollLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 500
  };

  const scrollRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 600;
  };


  return (
    <div>
      <div className='front'>
        <Carousel interval={1000}>
          <Carousel.Item>
          <a onClick={viewStore} href='#'><img src='https://www.100percentpure.com/cdn/shop/files/Refer_a_friend_Home_Page_Hero_Banner_-_Desktop_1920x.webp?v=1697486380' className='frontimage'></img></a>
          </Carousel.Item>

          <Carousel.Item>
        
          <a  onClick={viewStore} href='#'><img src='https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw09ae364d/images/beauty/0-HOME/FRAGRANCES/2024/4-APRIL/A24_F095_LCP-CRUISE_GammeSansBoite_5550x2000_LCP.jpg' className='frontimage'></img></a>
          </Carousel.Item>

          <Carousel.Item>
            <a  onClick={viewStore} href='#'><img src='https://www.elizabetharden.com/cdn/shop/files/20240520_asset-refresh-osh_osh_d_2400.jpg?v=1715960854&width=1920' className='frontimage'></img></a>
          </Carousel.Item>

        </Carousel>
      </div>


      <br></br>
      <Container fluid>
        <Row>
          <Col className="slider-container">
            <Button className="arrow left-arrow" onClick={scrollLeft}>&#10094;</Button>
            <div className="slider" id="slider">
              <Card className="imagee">
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/df9d6496-9f8e-4084-95de-c287f0107791/default.png?tr=cm-pad_resize,w-300" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>

              <Card className="imagee">
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/ad238bfd-da15-4c76-b33a-0efc0607c19d/default.jpg?tr=cm-pad_resize,w-300" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>


              <Card className='imagee'>
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/b31b1e2c-cad3-4ff4-87d6-3f8c441c9572/default.jpg?tr=cm-pad_resize,w-450" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>




              <Card className='imagee'>
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/6ad7123f-a194-4622-943f-422d1e23cd3c/default.jpg?tr=cm-pad_resize,w-300" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>

              <Card className="imagee">
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/29dbad20-154e-4cfd-acd4-d69a2345f0fa/default.jpg?tr=cm-pad_resize,w-300" />

                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>


              <Card className='imagee'>
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/a5cf8f5b-bf25-49b4-b4da-1f9c4c05abe9/default.jpg?tr=cm-pad_resize,w-450" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>

              <Card className='imagee'>
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/b1d9e00b-b244-43e4-b2f8-b27f1dea3089/default.jpg?tr=cm-pad_resize,w-300" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>

              <Card className='imagee'>
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/a50b7b5c-4f3a-475c-be59-aaaf2566d4a4/default.png?tr=cm-pad_resize,w-300" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>

              <Card className='imagee'>
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/8ebfd005-ea08-4e22-aa60-c69eb08ef99f/default.jpg?tr=cm-pad_resize,w-300" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>


              <Card className="imagee">
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/d1ef3ecc-7757-474a-a28f-a4321aa5eaaf/default.jpg?tr=cm-pad_resize,w-450" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>

              <Card className='imagee'>
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/a5cf8f5b-bf25-49b4-b4da-1f9c4c05abe9/default.jpg?tr=cm-pad_resize,w-450" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>

              <Card className='imagee'>
                <Card.Img variant="top" src="https://images-static.nykaa.com/creatives/28e6d780-3fd9-44ae-ad06-574ee72c6a25/default.jpg?tr=cm-pad_resize,w-450" />
                <Button className="shop-now" onClick={viewStore}>Shop Now</Button>
              </Card>

            </div>
            <Button className="arrow right-arrow" onClick={scrollRight}>&#10095;</Button>
          </Col>
        </Row>
      </Container>
      <br></br>




      <MDBRow>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
          <img
            src='https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=600'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
          />


          <img
            src='https://images.pexels.com/photos/15579987/pexels-photo-15579987/free-photo-of-close-up-of-woman-wearing-creative-makeup.jpeg?auto=compress&cs=tinysrgb&w=600'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Wintry Mountain Landscape'
          />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
          <img
            src='https://images.pexels.com/photos/3864213/pexels-photo-3864213.jpeg?auto=compress&cs=tinysrgb&w=600'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Mountains in the Clouds'
          />

          <img
            src='https://images.pexels.com/photos/4620859/pexels-photo-4620859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
          />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
          <img
            src='https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
          />

          <img
            src='https://images.pexels.com/photos/4813341/pexels-photo-4813341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
          />
        </MDBCol>
      </MDBRow>

      <div className="image-container">
        <a href='https://www.maccosmetics.in/'>   <img src="https://images-static.nykaa.com/uploads/d0c0fb93-8e0c-4094-9eb7-1268d69e80d7.jpg?tr=cm-pad_resize,w-300" alt="Image 1" /></a>
        <a href='https://www.elizabetharden.com/collections/makeup'>  <img src="https://images-static.nykaa.com/uploads/780cb137-7555-46ba-aa9f-e9533b216b46.jpg?tr=cm-pad_resize,w-300" alt="Image 2" /></a>
        <a href='https://www.clinique.in/'>  <img src="https://images-static.nykaa.com/uploads/463b338f-b18b-412a-a2f6-4735b566f1f3.jpg?tr=cm-pad_resize,w-300" alt="Image 3" /></a>
        <a href='https://www.florencebymills.com/'><img src="https://images-static.nykaa.com/uploads/80b9ca03-8e75-43be-8538-bb053eeaf2cc.jpg?tr=cm-pad_resize,w-300" alt="Image 4" /></a>
        <a href='https://soldejaneiro.com/'><img src="https://images-static.nykaa.com/uploads/6dab596f-bea4-4e89-9753-bfd695c341e4.jpg?tr=cm-pad_resize,w-300" alt="Image 5" /></a>
        <a href='https://en.caudalie.com/'> <img src="https://images-static.nykaa.com/uploads/fbb7dcdd-8320-4a48-a3bc-d868afa07336.jpg?tr=cm-pad_resize,w-300" alt="Image 6" /></a>
        <a href='https://www.dior.com/en_int/beauty'><img src="https://images-static.nykaa.com/uploads/bf717669-4aa9-46a7-9966-04e9fb897279.jpg?tr=cm-pad_resize,w-300" alt="Image 6" /></a>
      </div>





      <div className="newcontainer">

        <div className="new">
          <a href='#'>
            <img src="https://images-static.nykaa.com/creatives/1bf068ee-e767-4e30-82df-6a922321a3dd/default.jpg?tr=cm-pad_resize,w-900" alt="Image 1" className='image1' onClick={viewStore} />
          </a>
          <div className="button-container">
            <a href="#" className="styled-link">View All Luxury</a>
          </div>
        </div>
        <div className="new">
          <a href='#'>

            <img src="https://images-static.nykaa.com/creatives/1e641f98-6c64-45b2-a07c-3e81c2c2ed5d/default.jpg?tr=cm-pad_resize,w-900" alt="Image 2" className='image1' onClick={viewStore} />
          </a>
          <div className="button-container">
            <a href="#" className="styled-link">View All Luxury </a>
          </div>
        </div>
        <div className="new">
          <a  href='#'>
            <img src="https://images-static.nykaa.com/creatives/bd203cf5-0915-4f4f-93a6-466e258840e5/default.jpg?tr=cm-pad_resize,w-900" alt="Image 2" className='image1' onClick={viewStore} />
          </a>
          <div className="button-container">
            <a href="#" className="styled-link">View All Luxury </a>
          </div>


        </div>
        <div className='giftstore'>
          <a href='/store'><img className='saving' src='https://images-static.nykaa.com/uploads/bb294477-9f87-4d33-a001-814f86633fe3.jpg?tr=cm-pad_resize,w-1800'></img></a>
        </div>
      </div>


      <div className="skincare-container">
        <a href='#'>   <img src="https://images-static.nykaa.com/uploads/1e04ef67-6226-46c5-8c5e-8880fc24eefe.png?tr=cm-pad_resize,w-450" alt="Image 1" className='skincare' onClick={viewStore} /></a>
        <a href='#'>   <img src="https://images-static.nykaa.com/uploads/d712811a-a112-4217-a31d-eb1fa6d80dc4.png?tr=cm-pad_resize,w-450" alt="Image 1" className='skincare' onClick={viewStore} /></a>
        <a href='#'>   <img src="https://images-static.nykaa.com/uploads/eb7375c6-07cd-4430-bf14-f9522880063f.png?tr=cm-pad_resize,w-450" alt="Image 1" className='skincare' onClick={viewStore} /></a>
        <a href='#'>   <img src="https://images-static.nykaa.com/uploads/a2cb711c-ce25-4ffe-a5e0-ea1c71c624b3.png?tr=cm-pad_resize,w-450" alt="Image 1" className='skincare' onClick={viewStore} /></a>
      </div>


      <div className="bestseller-container">

        <a href='#'>   <img src="https://images-static.nykaa.com/uploads/0c6b07a9-b139-479b-8d6f-98d3774597f7.png?tr=cm-pad_resize,w-750" alt="Image 1" className='bestseller'  onClick={viewStore}/></a>
        <a href='#'>   <img src="https://images-static.nykaa.com/uploads/57a0ce5b-c6b6-450d-b6f9-a44d21ab6cc5.png?tr=cm-pad_resize,w-750" alt="Image 1" className='bestseller'  onClick={viewStore}/></a>
        <a href='#'>   <img src="https://images-static.nykaa.com/uploads/b9761ec3-b841-46b9-af60-c54e649895cf.jpg?tr=cm-pad_resize,w-750" alt="Image 1" className='bestseller' onClick={viewStore}/></a>

      </div>



      <br></br>

  
      <div className='giftstore'>
        <a href='/store'><img className='saving' src='https://images-static.nykaa.com/uploads/99aa9da6-b00f-4b56-a801-0047b9061ad0.png?tr=cm-pad_resize,w-1800'></img></a>
      </div>


    </div>
  )
}

export default HomePage;
