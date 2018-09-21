import Layout from "../components/Layout";
import IndexContent from "./index.mdx";
import uiComponents from "../components/ui";

export default () => (
  <Layout>
    <IndexContent components={uiComponents} />
  </Layout>
);
