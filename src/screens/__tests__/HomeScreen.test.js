import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {
    it('should render the HomeScreen without crashing', () => {
        const component = shallow(<HomeScreen />)
        expect(component).toMatchSnapshot()
    });

    it('should render the HomeScreen with text', () => {
        const component = shallow(<HomeScreen />)
        expect(component.find('Text').at(0).children().text()).toEqual('Welcome!')
        expect(component).toMatchSnapshot()
    });

    it('should render the HomeScreen with an "about me" button', () => {
        const component = shallow(<HomeScreen />)
        const button = component.find('MenuButton').at(0).props().find('title')
        expect(button).toEqual('About Me')
        
    });

    // it('should render the HomeScreen with an "about me" button', () => {
    //     const component = shallow(<HomeScreen />)
    //     const button = component.find('MenuButton').at(1).props()
    //     expect(button).toEqual('{"navigateTo: "Developer", "navigation": undefined, "title": "Why Me? Why Asda?"}')
    // });
})