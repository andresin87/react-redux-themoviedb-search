import React from 'react';

export const mockComponent = (name, props) => {
	const { children, ...restOfProps } = props;
	return (
		<mocked name={name} props={restOfProps}>
			{children}
		</mocked>
	);
};

export const flushPromises = () => {
	return new Promise(resolve => {
		setTimeout(resolve, 0);
	});
};
