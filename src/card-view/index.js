import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/card'
import allData from '../data'
import {cloneDeep, noop} from 'lodash'

const Wrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex: 5;

  @media (max-width: 768px) {
    flex: 2;
  }
`

const TWO_CARDS = '2-card'

const CardView = ({type, color, option, resetClicked, setReset}) => {
  const data = cloneDeep(allData)
  const [currentCard, setCurrentCard] = useState(data[color.value][option.value])
  const [currentTwoCards, setCurrentTwoCards] = useState(data[color.value])
  const isTwoCard = type.value === TWO_CARDS

  useEffect(() => {
    const data = cloneDeep(allData)

    if (isTwoCard) {
      const selectedCards = data[color.value]
      setCurrentTwoCards({...selectedCards})
    }
    else {
      const selectedCard = data[color.value][option.value]
      setCurrentCard({...selectedCard})
    }
  }, [isTwoCard, color, option])

  useEffect(() => {
    const data = cloneDeep(allData)
    if (resetClicked) {
      if (isTwoCard) {
        const selectedCards = data[color.value]
        setCurrentTwoCards({...selectedCards})
      }
      else {
        const selectedCard = data[color.value][option.value]
        setCurrentCard({...selectedCard})
      }

      setReset(false)
    }

  }, [resetClicked])

  const onClickColumn = (key, option) => {
    if (isTwoCard) {
      const selectedCards = currentTwoCards
      if (selectedCards[option][key]) {
        selectedCards[option][key].isClicked = !selectedCards[option][key].isClicked
      }
      setCurrentTwoCards({...selectedCards})
    }
    else {
      const selectedCard = currentCard
      if (selectedCard[key]) {
        selectedCard[key].isClicked = !selectedCard[key].isClicked
      }
      setCurrentCard({...selectedCard})
    }
  }

  return <Wrapper>
    {
      isTwoCard
        ?
        (<>
          <Card
            data={currentTwoCards['cardA']}
            color={color.value}
            option={'cardA'}
            onClickColumn={onClickColumn}
          />
          <Card
            data={currentTwoCards['cardB']}
            color={color.value}
            option={'cardB'}
            onClickColumn={onClickColumn}
          />
        </>)
        :
        <Card
          data={currentCard}
          color={color.value}
          option={option.value}
          onClickColumn={onClickColumn}
        />
    }
  </Wrapper>
}

CardView.propTypes = {
  type: PropTypes.object,
  color: PropTypes.object,
  option: PropTypes.object,
  resetClicked: PropTypes.bool,
  setReset: PropTypes.func
}

CardView.defaultProps = {
  type: {},
  color: {},
  option: {},
  resetClicked: false,
  setReset: noop
}

export default CardView