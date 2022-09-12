import SvgIcon from 'components/Shared/SvgIcon';
import * as React from 'react';

export default function createSvgIcon(path, displayName) {
    const Component = (props, ref) => (
        <SvgIcon data-testid={`${displayName}Icon`} ref={ref} {...props}>
            {path}
        </SvgIcon>
    );

    if (process.env.NODE_ENV !== 'production') {
        // Need to set `displayName` on the inner component for React.memo.
        // React prior to 16.14 ignores `displayName` on the wrapper.
        Component.displayName = `${displayName}Icon`;
    }

    return React.memo(React.forwardRef(Component));
}
