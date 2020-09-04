import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ContactScreen from '../ContactScreen'

Enzyme.configure({ adapter: new Adapter() })

describe('<ContactScreen />', () => {
  const component = shallow(<ContactScreen />)

  it('should render the ContactScreen without crashing', () => {
    expect(component).toMatchSnapshot()
  })

  it('should render the ContactScreen with a title', () => {
    expect(component.find('Text').first().children().text()).toEqual(
      'Contact Me'
    )
    expect(component.find('Text').first().props().style).toEqual({
      fontSize: 20,
      fontWeight: '700',
      justifyContent: 'center',
      padding: 5,
      textAlign: 'center'
    })
  })

  it('should render the ContactScreen with a name TextInput', () => {
    expect(component.find('Text').at(1).children().text()).toEqual('Name')
    //expect(component.find('TextInput').at(1).props().value).toEqual('name')
  })

  it('should render the ContactScreen with an email TextInput', () => {
    expect(component.find('Text').at(2).children().text()).toEqual('Email')
    //expect(component.find('TextInput').at(2).props().value).toEqual('email')
  })

  it('should render the ContactScreen with a message TextInput', () => {
    expect(component.find('Text').at(3).children().text()).toEqual('Message')
    //expect(component.find('TextInput').at(2).props().value).toEqual('email')
  })
})
