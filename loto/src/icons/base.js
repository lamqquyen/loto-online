import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledSVG = styled.svg.attrs({className: (p) => p.className})`
  display: block;
  width: auto;
  fill: ${(props) => props.cssFill || 'black'};
  padding: 0px;
  height: 24px;
`

StyledSVG.propTypes = {
  cssFill: PropTypes.string
}

StyledSVG.defaultProps = {
  cssFill: null
}

export default StyledSVG
