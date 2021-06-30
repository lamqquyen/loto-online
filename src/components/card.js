import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {noop} from 'lodash'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 0 8px;
  background: white;
  border: 2px solid black;
`

const Column = styled.td`
  background: ${({hasValue, color, isClicked}) =>
    hasValue
    ? isClicked
      ? 'yellow'
      : 'white'
    : color
  };
  color: ${({hasValue, color}) => !hasValue ? 'white' : color};
  width: auto;
  height: 60px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px;
  border: 2px solid ${({color}) => color};
  cursor: pointer;

  &:nth-child(3n+3) {
    margin-bottom: 8px;
  }
`

const Row = styled.tr`
  width: 40px;
`


const Card = ({data, color, option, onClickColumn}) => {
  const renderedCard = () => {
    const rows = []
    for (let i = 0; i < 9; i++) {
      const row = (<Row key={`row-${i}`}>
        <Column 
          key={`0-${i}`}
          color={color}
          hasValue={data[`0-${i}`]}
          isClicked={data[`0-${i}`] ? data[`0-${i}`].isClicked : false}
          onClick={() => onClickColumn(`0-${i}`, option)}
        >
          {data[`0-${i}`] ? data[`0-${i}`].value : ''}
        </Column>
        <Column 
          key={`1-${i}`}
          color={color}
          hasValue={data[`1-${i}`]}
          isClicked={data[`1-${i}`] ? data[`1-${i}`].isClicked : false}
          onClick={() => onClickColumn(`1-${i}`, option)}
        >
          {data[`1-${i}`] ? data[`1-${i}`].value : ''}
        </Column>
        <Column 
          key={`2-${i}`}
          color={color}
          hasValue={data[`2-${i}`]}
          isClicked={data[`2-${i}`] ? data[`2-${i}`].isClicked : false}
          onClick={() => onClickColumn(`2-${i}`, option)}
        >
          {data[`2-${i}`] ? data[`2-${i}`].value : ''}
        </Column>
        <Column 
          key={`3-${i}`}
          color={color}
          hasValue={data[`3-${i}`]}
          isClicked={data[`3-${i}`] ? data[`3-${i}`].isClicked : false}
          onClick={() => onClickColumn(`3-${i}`, option)}
        >
          {data[`3-${i}`] ? data[`3-${i}`].value : ''}
        </Column>
        <Column 
          key={`4-${i}`}
          color={color}
          hasValue={data[`4-${i}`]}
          isClicked={data[`4-${i}`] ? data[`4-${i}`].isClicked : false}
          onClick={() => onClickColumn(`4-${i}`, option)}
        >
          {data[`4-${i}`] ? data[`4-${i}`].value : ''}
        </Column>
        <Column 
          key={`5-${i}`}
          color={color}
          hasValue={data[`5-${i}`]}
          isClicked={data[`5-${i}`] ? data[`5-${i}`].isClicked : false}
          onClick={() => onClickColumn(`5-${i}`, option)}
        >
          {data[`5-${i}`] ? data[`5-${i}`].value : ''}
        </Column>
        <Column 
          key={`6-${i}`}
          color={color}
          hasValue={data[`6-${i}`]}
          isClicked={data[`6-${i}`] ? data[`6-${i}`].isClicked : false}
          onClick={() => onClickColumn(`6-${i}`, option)}
        >
          {data[`6-${i}`] ? data[`6-${i}`].value : ''}
        </Column>
        <Column 
          key={`7-${i}`}
          color={color}
          hasValue={data[`7-${i}`]}
          isClicked={data[`7-${i}`] ? data[`7-${i}`].isClicked : false}
          onClick={() => onClickColumn(`7-${i}`, option)}
        >
          {data[`7-${i}`] ? data[`7-${i}`].value : ''}
        </Column>
        <Column 
          key={`8-${i}`}
          color={color}
          hasValue={data[`8-${i}`]}
          isClicked={data[`8-${i}`] ? data[`8-${i}`].isClicked : false}
          onClick={() => onClickColumn(`8-${i}`, option)}
        >
          {data[`8-${i}`] ? data[`8-${i}`].value : ''}
        </Column>
      </Row>)

      rows.push(row)
    }

    return rows
  }

  return <Wrapper>
    {renderedCard()}
  </Wrapper>
}


Card.propTypes = {
  data: PropTypes.object,
  color: PropTypes.string,
  option: PropTypes.string,
  onClickColumn: PropTypes.func
}

Card.defaultProps = {
  data: {},
  color: '',
  option: '',
  onClickColumn: noop
}


export default Card