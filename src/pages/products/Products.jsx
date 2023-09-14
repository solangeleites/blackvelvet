import React from 'react'
import { Card, Container, Image, Price, SectionStyled, Title } from './ProductsStyled'

const Products = () => {
  return (
    <SectionStyled>

<Container>
  <Card>
    <Image src='/assets/product1.jpg' />
    <Title>Cookies x3</Title>
    <Price>$850</Price>
  </Card>



  <Card>
    <Image src='/assets/product2.jpg'/>
    <Title>Chipá 250gr</Title>
    <Price>$1200</Price>
  </Card>

  <Card>
    <Image src='/assets/product1.jpg' />
    <Title>Cookies x3</Title>
    <Price>$850</Price>
  </Card>



  <Card>
    <Image src='/assets/product2.jpg'/>
    <Title>Chipá 250gr</Title>
    <Price>$1200</Price>
  </Card>

  <Card>
    <Image src='/assets/product1.jpg' />
    <Title>Cookies x3</Title>
    <Price>$850</Price>
  </Card>



  <Card>
    <Image src='/assets/product2.jpg'/>
    <Title>Chipá 250gr</Title>
    <Price>$1200</Price>
  </Card>

  <Card>
    <Image src='/assets/product2.jpg'/>
    <Title>Chipá 250gr</Title>
    <Price>$1200</Price>
  </Card>



  <Card>
    <Image src='/assets/product2.jpg'/>
    <Title>Chipá 250gr</Title>
    <Price>$1200</Price>
  </Card>


</Container>

    </SectionStyled>
  )
}

export default Products