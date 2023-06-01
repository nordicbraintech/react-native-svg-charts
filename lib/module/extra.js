import React from 'react';
import { G } from 'react-native-svg';
const Extra = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(G, null, React.Children.map(children, child => {
    return /*#__PURE__*/React.cloneElement(child, props);
  }));
};
export default Extra;
//# sourceMappingURL=extra.js.map