import config, { IKanbanBoardProps } from './KanbanBoard.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './KanbanBoard.build';
import Render from './KanbanBoard.render';

const KanbanBoard: T4DComponent<IKanbanBoardProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

KanbanBoard.craft = config.craft;
KanbanBoard.info = config.info;
KanbanBoard.defaultProps = config.defaultProps;

export default KanbanBoard;
