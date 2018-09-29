import CMS from "netlify-cms";
z;
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import DatePreview from "./preview-templates/DatePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("dates", DatePreview);
