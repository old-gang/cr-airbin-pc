import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* color: var(--primary-color); */ // 颜色变量

  /* 使用css in js 来写样式 */
  color: ${(props) => props.theme.color.primaryColor};

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`
