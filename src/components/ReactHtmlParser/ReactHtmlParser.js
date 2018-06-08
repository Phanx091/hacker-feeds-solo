import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
class HtmlComponent extends React.Component {
  render() {
    const html = '<div>Example HTML string</div>';
    return <div>{ ReactHtmlParser(html) }</div>;
  }
}