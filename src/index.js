import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  const options = {
    ...{
      // Extend calendly block
      calendlyBlock: {},

      // category label
      category: 'Extra',

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
    }, ...opts
  };

  // Add components
  loadComponents(editor, options);

  // Add components
  loadBlocks(editor, options);

}
