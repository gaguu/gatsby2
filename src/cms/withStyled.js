import React from "react";

// for injecting styles from styled components into the iframe
import { StyleSheetManager } from "styled-components";

export default Component => props => {
    const iframe = document.querySelector("#nc-root iframe");
    const iframeHeadElem = iframe && iframe.contentDocument.head;

    if (!iframeHeadElem) {
        return null;
    }

    return (
        <StyleSheetManager target={iframeHeadElem}>
            <Component {...props} />
        </StyleSheetManager>
    );
};