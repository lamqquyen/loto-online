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

const ColorSelection = (props) => {
  const {colorOptions, color, setColor,
    typeOptions, type, setType,
  cardOptions, option, setOption} = props

  return <Wrapper>
    <Dropdown
      options={colorOptions}
      label='COLOR'
      selectedValue={color}
      onChangeData={setColor}
    />
    <Dropdown
      options={typeOptions}
      label='TYPE'
      selectedValue={type}
      onChangeData={setType}
    />
    {type.value === typeOptions[0].value && <Dropdown
      options={cardOptions}
      label='OPTION'
      selectedValue={option}
      onChangeData={setOption}
    />}

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
  setOption: PropTypes.func
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
  setOption: noop
}

export default ColorSelection