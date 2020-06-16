import React from 'react';

export const ContentContainer = ({children, className, ...props}) => <div { ...props } className={`content-container ${className}`}>{ children }</div>