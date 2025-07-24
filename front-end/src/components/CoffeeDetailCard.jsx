import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledDetailWrapper = styled.div`
  border-radius: 20px;
  margin: 0 auto;
  width: 90%;
  min-height: 400px;
  background-color: aliceblue;
`

const CoffeeDetailCard = ({ id }) => {
  const [coffee, setCoffee] = useState({})
      useEffect(() => {
          fetch(`http://localhost:3000/coffees/${id}`)
          .then(data => data.json())
          .then(res => setCoffee(res))
          .catch(() => setCoffee({title: 'არ მოიძებნა'}))
      }, [id])

  return (
    <StyledDetailWrapper>{coffee.title}</StyledDetailWrapper>
  )
}

export default CoffeeDetailCard