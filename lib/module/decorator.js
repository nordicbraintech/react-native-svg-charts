import React from 'react';
import { G } from 'react-native-svg';
const Decorator = _ref => {
  let {
    children,
    data,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(G, null, React.Children.map(children, child => {
    return data.map((value, index) => /*#__PURE__*/React.cloneElement(child, {
      value,
      index,
      ...props
    }));
  }));
};
export default Decorator;
//# sourceMappingURL=decorator.js.map