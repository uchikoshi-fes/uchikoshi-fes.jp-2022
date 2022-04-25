/*
 * © 2022 uchikoshi-fes
 * This file is licensed under the MIT License, see /LICENSE file.
 */

// sanitize.css
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "sanitize.css/system-ui.css";
import "sanitize.css/ui-monospace.css";
// original
import "../styles/globals.scss";

const UchikoshiFesApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default UchikoshiFesApp;
