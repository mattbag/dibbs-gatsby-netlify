import React from "react";
import PropTypes from "prop-types";
import { DatePostTemplate } from "../../templates/date-post";

const DatePreview = ({ entry, widgetFor }) => (
  <DatePostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
);

DatePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default DatePreview;
