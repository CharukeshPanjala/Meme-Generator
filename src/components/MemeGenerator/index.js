import {Component} from 'react'

import {
  BgContainer,
  MemeContainer,
  Heading,
  LabelElement,
  InputElement,
  SelectOption,
  EachOption,
  Meme,
  ParagraphElement,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    optionInput: '',
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      optionInput,
    } = this.state
    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: optionInput,
    })
  }

  render() {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      optionInput,
      imageUrl,
      topText,
      bottomText,
      fontSize,
    } = this.state
    return (
      <BgContainer>
        <MemeContainer onSubmit={this.onSubmitForm}>
          <Heading>Meme Generator</Heading>
          <LabelElement htmlFor="imageUrl">Image URL</LabelElement>
          <InputElement
            id="imageUrl"
            type="text"
            placeholder="Enter the image URL"
            value={imageUrlInput}
            onChange={this.onChangeImageUrl}
          />
          <LabelElement htmlFor="topText">Top Text</LabelElement>
          <InputElement
            id="topText"
            type="text"
            placeholder="Enter the Top Text"
            value={topTextInput}
            onChange={this.onChangeTopText}
          />
          <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
          <InputElement
            id="bottomText"
            type="text"
            placeholder="Enter the Bottom Text"
            value={bottomTextInput}
            onChange={this.onChangeBottomText}
          />
          <LabelElement htmlFor="select">Font Size</LabelElement>
          <SelectOption
            id="select"
            value={optionInput}
            onChange={this.onChangeOption}
          >
            {fontSizesOptionsList.map(eachItem => (
              <EachOption key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </EachOption>
            ))}
          </SelectOption>
          <GenerateButton type="submit">Generate</GenerateButton>
        </MemeContainer>
        <Meme background={imageUrl} data-testid="meme">
          <ParagraphElement fontSize={fontSize}>{topText}</ParagraphElement>
          <ParagraphElement fontSize={fontSize}>{bottomText}</ParagraphElement>
        </Meme>
      </BgContainer>
    )
  }
}

export default MemeGenerator
