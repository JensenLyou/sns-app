import React from 'react'
import styled from '@emotion/styled/macro'

const SVG = styled('svg')``

const Registrar = ({ className }) => (
  <SVG
    width="26"
    height="26"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g fill="#ea6060" fillRule="evenodd">
      <path d="M11.074 23.993v1.384H0v-1.384c0-.692.554-1.384 1.384-1.384v-1.385c0-.692.692-1.384 1.385-1.384h5.537c.692 0 1.384.692 1.384 1.384v1.385c.83 0 1.384.553 1.384 1.384M13.126.208l5.814 5.814a.67.67 0 0 1 0 .969l-.969.968a.67.67 0 0 1-.969 0c-.83-.83-2.076-.83-2.907 0l-.553.554 3.876 3.876a1.338 1.338 0 0 1 1.938 0l5.675 5.676c1.107 1.107 1.107 2.907 0 3.876-1.107 1.107-2.907 1.107-3.876 0l-5.675-5.676a1.338 1.338 0 0 1 0-1.938l-3.876-3.876-.416.554c-.83.83-.83 2.076 0 2.907a.67.67 0 0 1 0 .969l-.969.969a.67.67 0 0 1-.969 0l-5.952-5.814a.67.67 0 0 1 0-.97l.97-1.107a.67.67 0 0 1 .968 0c.83.831 2.077.831 2.907 0l2.907-2.906c.83-.831.83-2.077 0-2.907a.67.67 0 0 1 0-.97l1.107-.968a.67.67 0 0 1 .97 0" />
    </g>
  </SVG>
)

export default Registrar
