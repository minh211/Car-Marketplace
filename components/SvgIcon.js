/* eslint-disable react/require-default-props */
import clsx from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

const SvgIcon = React.forwardRef((props, ref) => {
    const {
        children,
        className,
        color,
        htmlColor,
        fontSize = '18px', // TODO: small, medium, large, etc.
        viewBox = '0 0 48 48',
        ...other
    } = props;

    return (
        <svg
            className={clsx(className)}
            focusable="false"
            viewBox={viewBox}
            color={color ? `var(--${color})` : htmlColor || '#212121'}
            ref={ref}
            style={{
                fontSize,
                transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                flexShrink: 0,
                userSelect: 'none',
                width: fontSize, // change from 1em to solve safari zoom
                height: fontSize, // change from 1em to solve safari zoom
                display: 'inline-block',
                fill: 'currentColor'
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...other}
        >
            {children}
        </svg>
    );
});

SvgIcon.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOfType([
        PropTypes.oneOf([
            'inherit',
            'white',
            'error-text',
            'success',
            'primary'
        ]),
        PropTypes.string
    ]),
    component: PropTypes.elementType,
    fontSize: PropTypes.oneOfType([PropTypes.string]),
    htmlColor: PropTypes.string,
    viewBox: PropTypes.string
};

export default SvgIcon;
