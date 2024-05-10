import React, { useState, useEffect } from 'react';
import { TableCell } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface ResizableTableCellProps {
  width: number;
  onResize: (width: number) => void;
  children?: React.ReactNode;
}

const ResizableTableCell: React.FC<ResizableTableCellProps> = ({
  width,
  onResize,
  children,
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    setStartX(event.clientX);
    setStartWidth(width);
    event.stopPropagation();
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isResizing) {
        const newWidth = startWidth + (event.clientX - startX);
        if (newWidth > 30) {
          onResize(newWidth);
        }
      }
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, startWidth, startX, onResize]);

  return (
    <TableCell
      style={{
        width: `${width}px`,
        position: 'relative',
        padding: '10px',
        border: '1px solid #e0e0e0',
        backgroundColor: '#fafafa'
      }}
    >
      {children}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '10px',
          cursor: 'col-resize',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseDown={handleMouseDown}
      >
        <DragIndicatorIcon style={{ color: '#999' }} />
      </div>
    </TableCell>
  );
};

export default ResizableTableCell;
