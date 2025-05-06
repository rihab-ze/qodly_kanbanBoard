import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdOutlineTextSnippet } from 'react-icons/md';

import KanbanBoardSettings, { BasicSettings } from './KanbanBoard.settings';

export default {
  craft: {
    displayName: 'KanbanBoard',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(KanbanBoardSettings, BasicSettings),
    },
  },
  info: {
    settings: KanbanBoardSettings,
    displayName: 'KanbanBoard',
    exposed: true,
    icon: MdOutlineTextSnippet,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    name: 'Qodly',
  },
} as T4DComponentConfig<IKanbanBoardProps>;

export interface IKanbanBoardProps extends webforms.ComponentProps {
  name?: string;
}
