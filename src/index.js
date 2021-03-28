import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import styles from './styles';

export default grapesjs.plugins.add('grapesjs-calendly', (editor, opts = {}) => {
  const options = { ...{
  // let c = opts;
  //
  // let defaults = {
    calendlyBlock: {},

    // Default style
    defaultStyle: true,

    // Section class prefix
    sectionClsPfx: 'gjs',

    // Shp-divder label
    // labelShapeDvd: 'Shape Divider',

    // Shp-divder category label
    labelSectionCategory: 'Selection',

    //Label Svg
    labelSvg: 'svg',

    //labelType
    labelType: 'calendly',

    style: `
      .gpd-calendly-btn-st{
        background-color:#3c9cde;
        color:#FFF;
        padding:8px 12px;
        border:0;
        border-radius:4px;
        text-align:center;
        font:caption;
        cursor:pointer;
      }
    `
    },  ...opts };
  // Add components
  loadComponents(editor, options);

  // Add components
  loadBlocks(editor, options);

  // Load Styles
  styles(editor, options);

});
