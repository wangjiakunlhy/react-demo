import React from 'react';

const sayWordContext = React.createContext('奶奶什么还没说');
const daughterWordContext = React.createContext('孙女什么还没回答');

export default {Grand:sayWordContext,Daughter:daughterWordContext};