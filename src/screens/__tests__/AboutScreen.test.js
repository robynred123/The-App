import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutScreen from '../AboutScreen';
import { interests, technologies } from '';

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

jest.mock('@fortawesome/free-solid-svg-icons', () => ({
    faStar: 'StarIcon'
}))

jest.mock('../../data/data', () => ({
    interests: [
        'gardening',
        'cross-country running'
    ],
    technologies: [
        'advanced neural networks',
        'integration layer development'
    ]
}))

describe('<AboutScreen />', () => {
    const component = shallow(<AboutScreen onPress={onPress}/>)

    it('should render the AboutScreen without crashing', () => {
        expect(component).toMatchSnapshot()
    });

    it('should render the AboutScreen with a title of "About Me"', () => {
        expect(component.find('Text').first().children().text()).toEqual('About Me')
    });

    it('should render the AboutScreen with an image', () => {
        expect(component.find('Image')).toBeTruthy()
    });

    it('should render the AboutScreen with a list of technologies', () => {
        expect(component.find('.technology').first().dive().text()).toEqual('advanced neural networks')
        expect(component.find('.technology').at(1).dive().text()).toEqual('integration layer development')
    });

    it('should render the AboutScreen with a list of interests', () => {
        expect(component.find('.interest').first().dive().text()).toEqual('gardening')
        expect(component.find('.interest').at(1).dive().text()).toEqual('cross-country running')
    });

    it('should render the AboutScreen with a link to my website', () => {
        expect(component.find('.website').dive().text()).toEqual(' For More Information, Visit My ')
        expect(component.find('ForwardRef').children().dive().text()).toEqual('Website')
    });
})