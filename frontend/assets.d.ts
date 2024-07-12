// all assets declarations go here

declare namespace assets {
    import {ImageSourcePropType} from "react-native";

    declare module '*.png' {
        const value: ImageSourcePropType;

        export default value;
    }

    declare module '*.jpg' {
        const value: ImageSourcePropType;

        export default value;
    }

    declare module '*.svg' {
        const value: ImageSourcePropType;

        export default value;
    }

    declare module '*.ttf' {
        const value: string;

        export default value;
    }
}
