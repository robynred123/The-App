import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { TextCarousel } from '../TextCarousel';

Enzyme.configure({ adapter: new Adapter() })

const testData = [
    {
        'key': 1,
        'point': 'testing'
    },
    {
        'key': 2,
        'point': '12345'
    }
]

describe('<TextCarousel />', () => {

    it('should render the TextCarousel without crashing', () => {
        const component = shallow(<TextCarousel data={testData}/>)
        expect(component).toMatchSnapshot()
    })

    it('should render the TextCarousel with an array of data', () => {
        const component = shallow(<TextCarousel data={testData}/>)
        expect((component.find('Text')).map((node) => node.text())).toHaveLength(2)
        expect(component.find('Text').at(0).children().text()).toEqual('testing')
        expect(component.find('Text').at(1).children().text()).toEqual('12345')
        expect(component).toMatchSnapshot()
    })

})