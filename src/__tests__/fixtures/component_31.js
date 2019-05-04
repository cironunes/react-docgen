import {CustomButton, sharedProps} from './component_30';
import PropTypes from 'prop-types';

export function SuperCustomButton({color, ...otherProps}) {
  return <CustomButton {...otherProps} style={{color}} />;
}

SuperCustomButton.propTypes = sharedProps;
export {sharedProps};
export * from './component_32';
