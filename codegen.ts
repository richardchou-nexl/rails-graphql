import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:3000/graphql",
    documents: ["app/javascript/**/*.tsx"],
    generates: {
        "app/javascript/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            }
        },
        "app/javascript/__generated__/types.ts": {
            plugins: ["typescript", "typescript-operations"],
        },
    },
    ignoreNoDocuments: true,
};

export default config;