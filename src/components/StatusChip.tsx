import React from 'react';
import Chip from '@mui/material/Chip';

interface StatusChipProps {
  status: string;
}

const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'success':
      case 'valid':
        return 'success';

      case 'inactive':
      case 'error':
      case 'invalid':
        return 'error';

      case 'pending':
      case 'warning':
        return 'warning';

      case 'expired':
        return 'error';

      default:
        return 'default';
    }
  };

  return <Chip size='small' label={status} color={getStatusColor(status)} />;
};

export default StatusChip;
