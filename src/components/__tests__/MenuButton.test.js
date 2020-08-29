import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MenuButton } from '../MenuButton';

Enzyme.configure({ adapter: new Adapter() })

const navigation = { navigate: jest.fn() };

const onPress = jest.fn()

describe('<MenuButton />', () => {
    const component = shallow(<MenuButton title='test' navigateTo='test' navigation={navigation}/>)

    it('should render the MenuButton without crashing', () => {
        expect(component).toMatchSnapshot()
    })

    it('should render the MenuButton with a title of "test"', () => {
        expect(component.find('Text').props().children).toEqual('test')
    })

   /* it('should render the MenuButton and navigate on press', () => {
        //Enzyme adapter returning ForwardRef instead of TouchableOpacity
        const button = component.find('ForwardRef').props().onPress
        
        expect(onPress).toHaveBeenCalledTimes(1)
    })*/
})