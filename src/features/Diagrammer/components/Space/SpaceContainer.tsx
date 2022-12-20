import styled from 'styled-components'

export const SpaceContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  color: #000;
  height: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;

  &.empty {
    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: #000;
    }

    &::before {
      top: 0;
      bottom: 0;
      left: 48%;
      right: 48%;
    }

    &::after {
      top: 48%;
      bottom: 48%;
      left: 0;
      right: 0;
    }
  }
`
