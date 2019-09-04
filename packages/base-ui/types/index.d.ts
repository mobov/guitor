import { VueConstructor } from 'vue';
export declare type BaseUIPlugin = {
    installed: boolean;
    install: (Vue: VueConstructor, {}: {}) => void;
};
declare const BaseUi: BaseUIPlugin;
export default BaseUi;
