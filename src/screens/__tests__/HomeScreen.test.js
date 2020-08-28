import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import HomeScreen from '../HomeScreen';

Enzyme.configure({ adapter: new Adapter() })

const testProps = (props) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
})

describe('<HomeScreen />', () => {
    it('should render the HomeScreen without crashing', () => {
        const component = shallow(<HomeScreen />)
        expect(component).toMatchSnapshot()
    });

    it('should render the HomeScreen with text', () => {
        const component = shallow(<HomeScreen />)
        expect(component.find('Text').first().children().text()).toEqual('Welcome!')
        expect(component).toMatchSnapshot()
    });

    it('should render the HomeScreen with an "about me" button', () => {
        const component = shallow(<HomeScreen {...testProps}/>)
        expect(component.find('MenuButton').first().props().title).toEqual('About Me')
        expect(component.find('MenuButton').first().props().navigateTo).toEqual('About')
        expect(component.find('MenuButton').first().props().navigation).toEqual(testProps.navigatation)
    });

    it('should render the HomeScreen with an "Why Me" button', () => {
        const component = shallow(<HomeScreen {...testProps}/>)
        expect(component.find('MenuButton').at(1).props().title).toEqual("Why Me? Why Asda?")
        expect(component.find('MenuButton').at(1).props().navigateTo).toEqual("Developer")
        expect(component.find('MenuButton').at(1).props().navigation).toEqual(testProps.navigatation)
    });
})