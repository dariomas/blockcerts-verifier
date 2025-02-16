import { html } from '@polymer/lit-element';
import CSS from './_components.file-upload-css';
import getText from '../../../i18n/getText';

export default function FileUpload ({ onChange = () => {}, hideFileUpload = false }) {
  if (hideFileUpload) {
    return null;
  }

  return html`
    ${CSS}
    <label for='buv-json-file-upload' class='buv-o-link  buv-o-text-12'>
      <span class='buv-o-link__text--underline'>${getText('text.fileUpload')}</span>
      <input
        type='file'
        accept='application/json'
        id='buv-json-file-upload'
        class='buv-u-visually-hidden'
        onchange='${(e) => { onChange(e.target.files[0]); }}'
      />
    </label>
    <span class="buv-o-text-12">${getText('text.dragAndDropHint')}</span>`;
}
