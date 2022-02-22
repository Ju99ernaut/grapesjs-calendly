import { type } from './consts';

export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const { calendlyBlock, category, style } = opts;
  const content = `<div style = "padding:10px 0;" data-gjs-type="calendly">
      <div class= "gpd-calendly-btn gpd-calendly-btn-st" data-gjs-type="calendly-btn">Schedule Now!</div>
    </div>
    ${style ? `<style>${style}</style>` : ''}`;

  calendlyBlock && bm.add(type, {
    label: 'calendly',
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 14H7v2h7m5 3H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 7H7v2h10v-2z"></path></svg>`,
    category,
    content,
    ...calendlyBlock
  });
}
