// src/context/ViaMobileContext.js

/**
 * createContext() is a method in React's Context API: 
 *  It allows you to create a new context that can be shared across the component tree,
 *  allowing data to be passed between components without having to explicitly cascade through props.
 * 
 * When you call createContext(), it returns a context object that contains two important components: Provider and Consumer.
 * Provider:
 *  Provider is a React component that allows the consumer component to subscribe to changes in the context.
 *  You can use the value property to set the value of the context, which will then be available to any Consumer nested under the Provider.
 * Consumer:
 *  Consumer is a React component that allows a component to get its value from the context.
 *  Typically, we now prefer to use the useContext Hook over the Consumer component because it provides a cleaner way to use context.
 */

import React, { createContext } from 'react';

const ViaMobileContext = createContext();

export default ViaMobileContext;