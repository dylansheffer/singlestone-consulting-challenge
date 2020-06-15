import React from 'react';

export const ContentContainer = ({children, ...props}) => <div className="content-container" { ...props }>{ children }</div>