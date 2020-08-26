import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { MenuButton } from '../MenuButton';

Enzyme.configure({ adapter: new Adapter() })

const navigation = { navigate: jest.fn() };

describe('<MenuButton />', () => {

    it('should render the MenuButton without crashing', () => {
        const component = shallow(<MenuButton />)
        expect(component).toMatchSnapshot()
    })

    it('should render the MenuButton with a title of "test"', () => {
        const component = shallow(<MenuButton title='test'/>)
        expect(component.find('Text').props().children).toEqual('test')
        expect(component).toMatchSnapshot()
    })

    //TODO: refactor to add test for successful navigation
    it('should render the MenuButton and navigate on press', () => {
        const component = shallow(<MenuButton navigateTo='test' navigation={navigation}/>)
        //Enzyme adapter returning ForwardRef instead of TouchableOpacity
        const navigate = component.find('ForwardRef').simulate('press')
        expect(navigate).toMatchSnapshot()
    })
})