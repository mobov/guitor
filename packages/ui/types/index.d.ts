import { VueConstructor } from 'vue';
export declare type MegH5Plugin = {
    installed: boolean;
    install: (Vue: VueConstructor, {}: {}) => void;
};
declare const _default: MegH5Plugin;
export default _default;
