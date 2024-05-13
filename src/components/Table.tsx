import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Checkbox,
  TableFooter,
  TablePagination,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Popper,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReplayIcon from '@mui/icons-material/Replay';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CustomTableProps } from '../types/types';
import StatusChip from './StatusChip';
import ResizableTableCell from './ResizeableCell';

const CustomTable: React.FC<CustomTableProps> = ({ data, checksData }) => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLElement | null>(
    null,
  );
  const [popperOpen, setPopperOpen] = useState(false);
  const [columnWidths, setColumnWidths] = useState([
    150, 150, 50, 80, 100, 100, 100, 160,
  ]);

  const toggleRow = (id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSelect = (id: string, checkId?: string) => {
    setSelected((prev) => {
      const newState = { ...prev };
      if (checkId) {
        const key = `${id}-${checkId}`;
        newState[key] = !newState[key];
      } else {
        checksData
          .filter((check) => check.employeeId === id)
          .forEach((check) => {
            newState[`${id}-${check.id}`] = !newState[`${id}-${check.id}`];
          });
      }
      return newState;
    });
  };

  const toggleSelectAll = () => {
    const allSelected = Object.values(selected).every((value) => value);
    setSelected((prev) => {
      const newState = { ...prev };
      data.forEach((entry) => {
        checksData
          .filter((check) => check.employeeId === entry.id)
          .forEach((check) => {
            newState[`${entry.id}-${check.id}`] = !allSelected;
          });
      });
      return newState;
    });
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const currentData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const handleTogglePopper = (event: React.MouseEvent<HTMLElement>) => {
    setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget);
    setPopperOpen((prev) => !prev);
  };

  const handleClosePopper = () => {
    setPopperOpen(false);
    setPopperAnchorEl(null);
  };

  const handleResize = (index: number, size: number) => {
    const newWidths = [...columnWidths];
    newWidths[index] = size;
    setColumnWidths(newWidths);
  };

  const totalWidth = columnWidths.reduce((acc, width) => acc + width, 0);

  return (
    <TableContainer
      component={Paper}
      style={{ width: '100%', maxHeight: '600px' }}
    >
      <div style={{ maxWidth: '800px', overflowX: 'auto' }}>
        <Table
          style={{
            width: totalWidth > 700 ? totalWidth : '700px',
            minWidth: '700px',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                padding='checkbox'
                style={{
                  position: 'sticky',
                  left: 0,
                  zIndex: 100,
                  backgroundColor: '#fafafa',
                }}
              >
                <Checkbox
                  checked={
                    Object.values(selected).length > 0 &&
                    Object.values(selected).every((value) => value)
                  }
                  onChange={toggleSelectAll}
                />
              </TableCell>
              <TableCell style={{ backgroundColor: '#fafafa' }} />
              <ResizableTableCell
                width={columnWidths[1]}
                onResize={(width) => handleResize(1, width)}
              >
                Full Name / Health Check
              </ResizableTableCell>
              <ResizableTableCell
                width={columnWidths[2]}
                onResize={(width) => handleResize(2, width)}
              >
                Code
              </ResizableTableCell>
              <ResizableTableCell
                width={columnWidths[3]}
                onResize={(width) => handleResize(3, width)}
              >
                Expiration
              </ResizableTableCell>
              <ResizableTableCell
                width={columnWidths[4]}
                onResize={(width) => handleResize(4, width)}
              >
                Status
              </ResizableTableCell>
              <ResizableTableCell
                width={columnWidths[5]}
                onResize={(width) => handleResize(5, width)}
              >
                Department
              </ResizableTableCell>
              <ResizableTableCell
                width={columnWidths[6]}
                onResize={(width) => handleResize(6, width)}
              >
                User Status
              </ResizableTableCell>
              <ResizableTableCell
                width={columnWidths[7]}
                onResize={(width) => handleResize(7, width)}
              >
                Job Title
              </ResizableTableCell>
              <TableCell
                style={{
                  position: 'sticky',
                  right: 0,
                  zIndex: 100,
                  backgroundColor: '#fafafa',
                }}
              >
                <ReplayIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((entry) => (
              <React.Fragment key={entry.id}>
                <TableRow>
                  <TableCell
                    padding='checkbox'
                    style={{
                      position: 'sticky',
                      left: 0,
                      zIndex: 100,
                      backgroundColor: '#fff',
                    }}
                  >
                    <Checkbox
                      checked={entry.checksIds.every(
                        (checkId) => selected[`${entry.id}-${checkId}`],
                      )}
                      onChange={() => toggleSelect(entry.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size='small'
                      onClick={() => toggleRow(entry.id)}
                    >
                      {open[entry.id] ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {entry.name}
                  </TableCell>
                  {/* Empty cells for alignment */}
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell>{entry.department}</TableCell>
                  <TableCell>
                    <StatusChip status={entry.userStatus} />
                  </TableCell>
                  <TableCell>{entry.jobTitle}</TableCell>
                  <TableCell
                    style={{
                      position: 'sticky',
                      right: 0,
                      zIndex: 100,
                      backgroundColor: '#fff',
                    }}
                  >
                    <IconButton onClick={handleTogglePopper}>
                      <MoreHorizIcon />
                    </IconButton>
                    <Popper
                      open={popperOpen}
                      anchorEl={popperAnchorEl}
                      transition
                      disablePortal
                    >
                      {({ TransitionProps }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: 'center top' }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClosePopper}>
                              <MenuList
                                autoFocusItem={popperOpen}
                                id='composition-menu'
                              >
                                <MenuItem onClick={handleClosePopper}>
                                  Action One
                                </MenuItem>
                                <MenuItem onClick={handleClosePopper}>
                                  Action Two
                                </MenuItem>
                                <MenuItem onClick={handleClosePopper}>
                                  Action Three
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </TableCell>
                </TableRow>
                {open[entry.id] &&
                  entry.checksIds.map((checkId) => {
                    const check = checksData.find((ch) => ch.id === checkId);
                    return (
                      check && (
                        <TableRow key={`${entry.id}-${check.id}`}>
                          <TableCell padding='checkbox'>
                            <Checkbox
                              checked={selected[`${entry.id}-${check.id}`]}
                              onChange={() => toggleSelect(entry.id, check.id)}
                            />
                          </TableCell>
                          <TableCell />
                          <TableCell>{check.type}</TableCell>
                          <TableCell>{check.code}</TableCell>
                          <TableCell>{check.expiration}</TableCell>
                          <TableCell>
                            <StatusChip status={check.status} />
                          </TableCell>
                          {/* Empty cells for alignment */}
                          <TableCell />
                          <TableCell />
                          <TableCell />
                          <TableCell />
                        </TableRow>
                      )
                    );
                  })}
              </React.Fragment>
            ))}
          </TableBody>
          <TableFooter
            style={{
              position: 'sticky',
              bottom: 0,
              zIndex: 101,
              backgroundColor: '#fff',
            }}
          >
            <TableRow>
              <TableCell colSpan={2}>Count: {data.length}</TableCell>
              <TableCell colSpan={9}>
                <TablePagination
                  rowsPerPageOptions={[25, 50, 100]}
                  component='div'
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </TableContainer>
  );
};

export default CustomTable;
