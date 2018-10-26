import React from 'react';
import { EventEmitter } from 'events';

const sayWordContext = React.createContext('奶奶什么还没说');// 使用context跨级(向下)传递信息
const eventEmitter = new EventEmitter();// 跨组件通信之自定义事件实现
export default {Grand:sayWordContext,eventEmitter:eventEmitter};