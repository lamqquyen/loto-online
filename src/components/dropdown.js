import React, {useState} from 'react';
import styled from 'styled-components'
import ArrowUp from '../icons/arrow-up'
import ArrowDown from '../icons/arrow-down'
import PropTypes from 'prop-types'
import {noop} from 'lodash'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`

const StyledLabel = styled.label`
  font-size: 20px;
  color: black;
  font-weight: 500;
  margin-right: 8px;
  text-align: right;
`

const StyledDropdown = styled.div`
  width: 100%;
  height: 30px;
  background: white;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 5px;
`

const StyledOptionWrapper = styled.div`
  position: absolute;
  top: 32px;
  left: 0px;
  background: white;
  width: 100%;
  text-align: left;
  z-index: 10;
  max-height: 280px;
  overflow: auto;
`

const StyledOption = styled.div`
  padding: 0 5px;
  height: 35px;
  display: flex;
  align-items: center;
  color: ${({setColor, value}) => setColor ? value : 'black'};
  &:hover {
    background: grey;
    color: white;
  }

  ${({selected}) => selected && 'background: #d6d6d6;'}
`

const StyledArrowUp = styled(ArrowUp)`
  position: absolute;
  right: 5px;
`

const StyledArrowDown = styled(ArrowDown)`
  position: absolute;
  right: 5px;
`

const Dropdown = ({label, options, selectedValue, onChangeData, setColor}) => {
  const [isDown, setDown] = useState(false)

  const selected = options.find((option) => option.value === selectedValue.value)
  const renderOptions = options.map((option) => {
    return (
      <StyledOption
        key={option.value}
        selected={option.value === selected.value}
        onClick={() => onChangeData(option)}
        value={option.value}
        setColor={setColor}>
        {option.text}
      </StyledOption>)
  })

  const onClick = () => {
    setDown(!isDown)
  }

  return <Wrapper>
    <StyledLabel>{label}</StyledLabel>
    <StyledDropdown onClick={onClick}>
      {selected.text}
      {isDown && <StyledOptionWrapper>
        {renderOptions}
      </StyledOptionWrapper>}
      {isDown ? <StyledArrowUp /> : <StyledArrowDown />}
    </StyledDropdown>
  </Wrapper>
}


Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  selectedValue: PropTypes.object,
  onChange: PropTypes.func,
  setColor: PropTypes.bool
}

Dropdown.defaultProps = {
  label: '',
  options: [],
  selectedValue: {value: ''},
  onChange: noop,
  setColor: false
}


export default Dropdown