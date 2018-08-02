import { html, LitElement } from '@polymer/lit-element';
import CSS from './_components.substeps-list-css';
import VerificationStep from '../../molecules/VerificationStep';

class SubstepsList extends LitElement {
  constructor () {
    super();
    this.isOpen = false;
    this.wasForcedOpen = false;
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  static get properties () {
    return {
      subSteps: [],
      isOpen: Boolean,
      hasError: Boolean
    };
  }

  toggleOpen () {
    this.isOpen = !this.isOpen;
  }

  _render ({ subSteps, hasError }) {
    if (!subSteps) {
      return null;
    }

    let isOpen = this.isOpen;

    if (!this.wasForcedOpen && hasError) {
      isOpen = true;
      this.wasForcedOpen = true;
    }

    const itemsLength = subSteps.length;
    const itemString = `${itemsLength} Item${itemsLength > 1 ? 's' : ''}`;
    // TODO: better handle this dynamic class (cf npm classnames)
    const linkClasses = [
      'buv-o-small-text',
      'buv-o-link',
      'buv-c-substeps-list__link',
      isOpen ? 'is-open' : ''
    ].join(' ');

    const listClasses = [
      'buv-c-substeps-list__list',
      isOpen ? 'is-open' : ''
    ].join(' ');

    return html`
    ${CSS}
    <a title='Toggle open list of substeps' onclick='${this.toggleOpen}' class$='${linkClasses}'>
      ${isOpen ? 'Hide' : itemString}
    </a>
    <div class$='${listClasses}' style='max-height: ${isOpen ? itemsLength * 25 : 0}px'>
      ${subSteps.map(subStep => html`${VerificationStep(subStep)}`)}
    </div>
    `;
  }
}

export default SubstepsList;
