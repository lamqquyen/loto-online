import React, {useState} from 'react';
import styled from 'styled-components'
import ColorSelection from '../color-selection';
import CardView from '../card-view';

const Background = styled.div`
  background-image: url('https://vnn-imgs-f.vgcloud.vn/2019/07/19/17/uu-tien-xet-tuyen-nguoi-tai-vao-nganh-cong-an-1.JPG');
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
`

const MainWrapper = styled.div`
  margin: 0px auto;
  padding: 20px;
  position: relative;
  display: block;
  background-color:rgba(255, 255, 255, 0.7);
  border: 0px solid transparent;
  border-radius: 8px;
  width: 80%;
  height: 80%;
  text-align: center;
  display: flex;
`


const TYPE_OPTIONS = [
  {
    value: '1-card',
    text: '1 Card'
  },
  {
    value: '2-card',
    text: '2 Cards'
  }
]


const COLORS = [
  {
    value: 'blue',
    text: 'Blue'
  },
  {
    value: 'red',
    text: 'Red'
  },
  {
    value: 'green',
    text: 'Green'
  },
  {
    value: 'purple',
    text: 'Purple'
  },
  {
    value: 'brown',
    text: 'Brown'
  },
  {
    value: 'navy',
    text: 'Navy'
  }
]

const CARD_OPTION = [
  {
    value: "cardA",
    text: "Card A"
  },
  {
    value: "cardB",
    text: "Card B"
  }
]


const Main = () => {
  const [type, setType] = useState(TYPE_OPTIONS[0])
  const [color, setColor] = useState(COLORS[0])
  const [option, setOption] = useState(CARD_OPTION[0])
  const [resetClicked, setReset] = useState(false)

  return (
    <Background>
      <MainWrapper>
        <ColorSelection
          type={type}
          color={color}
          option={option}
          setType={setType}
          setColor={setColor}
          setOption={setOption}
          typeOptions={TYPE_OPTIONS}
          colorOptions={COLORS}
          cardOptions={CARD_OPTION}
          setReset={setReset}
        />
        <CardView
          type={type}
          color={color}
          option={option}
          resetClicked={resetClicked}
          setReset={setReset}
        />
      </MainWrapper>
    </Background>
  )
  
}

export default Main