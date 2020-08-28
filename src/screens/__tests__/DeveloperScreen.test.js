import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import DeveloperScreen from '../DeveloperScreen';
import { data } from '../../data/data';

Enzyme.configure({ adapter: new Adapter() })

describe('<DeveloperScreen />', () => {
    it('should render the DeveloperScreen without crashing', () => {
        const component = shallow(<DeveloperScreen />)
        expect(component).toMatchSnapshot()
    });

    it('should render the DeveloperScreen with text', () => {
        const component = shallow(<DeveloperScreen />)
        expect(component.find('Text').first().children().text()).toEqual('What Can I Bring To Asda?')
    });

    it('should render the DeveloperScreen with a TextCarousel', () => {
        const component = shallow(<DeveloperScreen />)
        expect(component.find('TextCarousel').props().data).toEqual(data)
    });

    it('should render the DeveloperScreen with text', () => {
        const component = shallow(<DeveloperScreen />)
        expect(component.find('Text').at(1).children().text()).toEqual('Why Do I Want to Be A Developer?')
    });
})