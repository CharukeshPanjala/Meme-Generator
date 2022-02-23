import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  padding: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const MemeContainer = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #35469c;
  margin: 0px;
  margin-bottom: 15px;
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-size: 13px;
  margin-bottom: 5px;
  font-weight: 500;
`
export const InputElement = styled.input`
  border: 1px solid #d7dfe9;
  padding: 10px;
  color: #7e858e;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 12px;
  outline: none;
`

export const SelectOption = styled.select`
  border: 1px solid #d7dfe9;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 12px;
  outline: none;
`
export const EachOption = styled.option`
  font-size: 12px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`

export const Meme = styled.div`
  background-image: url('${props => props.background}');
  background-size: cover;
  width: 37%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const ParagraphElement = styled.p`
  font-weight: 700;
  color: white;
  font-size: ${props => props.fontSize}px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
