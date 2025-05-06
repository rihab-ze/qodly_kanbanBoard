import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useState } from 'react';

import { IKanbanBoardProps } from './KanbanBoard.config';

const KanbanBoard: FC<IKanbanBoardProps> = ({ name, style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();
  const [tasks, setTaskes] = useState<string[]>();
  const handleOndragStart = (e: React.DragEvent, task: string) => {
    e.dataTransfer.setData('task', task);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div draggable onDragStart={(e) => handleOndragStart(e, 'Task 1')}>
        Task 1
      </div>
      <div onDragOver={handleDragOver}></div>
    </div>
  );
};

export default KanbanBoard;
