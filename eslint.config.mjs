import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  enableReact: true,
  enablePrettier: "disableStyleOnly",
  rulesNaming: "modern",
  extendConfig: [
    {
      ignores: ["build"],
    },
    {
      files: ["**/*.config.{js,cjs,mjs,ts,cts,mts}"],
      rules: {
        "import-x/no-default-export": "off",
        "import-x/no-extraneous-dependencies": "off",
      },
    },
  ],
});
