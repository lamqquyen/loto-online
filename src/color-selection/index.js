import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Dropdown from '../components/dropdown'
import noop from 'lodash/noop'

const Wrapper = styled.div`
  flex: 1;
  position: relative;
`

const StyledWatermark = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 10px;
  text-align: center;
`

const StyledButton = styled.button`
  width: 100%;
  font-size: 18px;
  line-height: 36px;
  color: white;
  background: black;
  border: none;
`

const ColorSelection = (props) => {
  const {colorOptions, color, setColor,
    typeOptions, type, setType,
  cardOptions, option, setOption, setReset} = props

  return <Wrapper>
    <Dropdown
      options={colorOptions}
      label='COLOR'
      selectedValue={color}
      onChangeData={setColor}
      setColor
    />
    {type.value === typeOptions[0].value && <Dropdown
      options={cardOptions}
      label='OPTION'
      selectedValue={option}
      onChangeData={setOption}
    />}

    <StyledButton onClick={() => setReset(true)}>
      Reset
    </StyledButton>

    <StyledWatermark>
      <b>BUILT BY JACKIE LIN</b><br />"CỜ BẠC LÀ PHẠM PHÁP NGHE CHƯA"
    </StyledWatermark>
  </Wrapper>
}

ColorSelection.propTypes = {
  colorOptions: PropTypes.array,
  color: PropTypes.object,
  setColor: PropTypes.func,
  typeOptions: PropTypes.array,
  type: PropTypes.object,
  setType: PropTypes.func,
  cardOptions: PropTypes.array,
  option: PropTypes.object,
  setOption: PropTypes.func,
  setReset: PropTypes.func
}

ColorSelection.defaultProps = {
  colorOptions: [],
  color: {},
  setColor: noop,
  typeOptions: [],
  type: {},
  setType: noop,
  cardOptions: [],
  option: {},
  setOption: noop,
  setReset: noop
}

export default ColorSelection