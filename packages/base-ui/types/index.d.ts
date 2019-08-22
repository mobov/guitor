import { VueConstructor } from 'vue';
export declare type BaseUIPlugin = {
    installed: boolean;
    install: (Vue: VueConstructor, {}: {}) => void;
};
declare const _default: BaseUIPlugin;
export default _default;
