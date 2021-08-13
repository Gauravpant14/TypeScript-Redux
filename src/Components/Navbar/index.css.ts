import styled from "styled-components"
export const Container = styled.div`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

li {
  float: left;
}

li {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:hover:not(.active) {
  background-color: #ddd;
}

li.active {
  color: white;
  background-color: #04AA6D;
}
`