import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Dropdown from '../../../src/components/Dropdown/dropdown.container';


describe('<Dropdown />', () => {
  test('exists', () => {
    expect(Dropdown).toBeDefined();
  });

  test('renders the component with no props', () => {
    const wrapper = shallow(<Dropdown />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  test('renders the component with props', () => {
    const menuItems = [
      {
        text: 'Selection A',
        value: 'selectA'
      },
      {
        text: 'Selection B',
        value: 'selectB'
      },
      {
        text: 'Selection C',
        value: 'selectC'
      }
    ];

    const onClick = (params) => {};
    const wrapper = shallow(<Dropdown menuItems = {menuItems} onClick = {onClick}/>)
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
    expect(wrapper.props().menuItems).toEqual(menuItems);
    expect(wrapper.props().onClick).toEqual(onClick);
  });

  test('invokes callback with selected item', () => {
    const onClickMock = jest.fn();
    const menuItems = [
      {
        text: 'Selection A',
        value: 'selectA'
      },
      {
        text: 'Selection B',
        value: 'selectB'
      },
      {
        text: 'Selection C',
        value: 'selectC'
      }
    ];
    const component = mount(<Dropdown menuItems = {menuItems} onClick = {onClickMock}/>);

    component.find('.dropdown-item-btn[itemindex=1]').simulate('click');
    component.unmount();

    expect(onClickMock).toHaveBeenCalledWith(1);
  });
});