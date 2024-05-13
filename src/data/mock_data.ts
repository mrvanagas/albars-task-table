import { HealthCheck, Employee } from '../types/types';

// Health Check structure
export const checksData: HealthCheck[] = [
  {
    id: 'c1',
    employeeId: '1',
    type: 'Psychological Health Check',
    code: '0000',
    expiration: '2024-12-28',
    status: 'Valid',
  },
  {
    id: 'c2',
    employeeId: '1',
    type: 'Physical Health Check',
    code: '0001',
    expiration: '2024-12-28',
    status: 'Valid',
  },
  {
    id: 'c3',
    employeeId: '1',
    type: 'Computer Work Certificate',
    code: '0002',
    expiration: '2024-12-28',
    status: 'Expired',
  },

  {
    id: 'c4',
    employeeId: '2',
    type: 'Psychological Health Check',
    code: '0000',
    expiration: '2024-12-28',
    status: 'Canceled',
  },
  {
    id: 'c5',
    employeeId: '2',
    type: 'Physical Health Check',
    code: '0001',
    expiration: '2024-12-28',
    status: 'Canceled',
  },
  {
    id: 'c6',
    employeeId: '2',
    type: 'Computer Work Certificate',
    code: '0002',
    expiration: '2024-12-28',
    status: 'Expired',
  },

  {
    id: 'c7',
    employeeId: '3',
    type: 'Psychological Health Check',
    code: '0003',
    expiration: '2025-01-15',
    status: 'Valid',
  },
  {
    id: 'c8',
    employeeId: '3',
    type: 'Physical Health Check',
    code: '0004',
    expiration: '2025-01-15',
    status: 'Valid',
  },
  {
    id: 'c9',
    employeeId: '3',
    type: 'Computer Work Certificate',
    code: '0005',
    expiration: '2025-01-15',
    status: 'Valid',
  },

  {
    id: 'c10',
    employeeId: '4',
    type: 'Psychological Health Check',
    code: '0006',
    expiration: '2024-12-30',
    status: 'Valid',
  },
  {
    id: 'c11',
    employeeId: '4',
    type: 'Physical Health Check',
    code: '0007',
    expiration: '2024-12-30',
    status: 'Valid',
  },
  {
    id: 'c12',
    employeeId: '4',
    type: 'Computer Work Certificate',
    code: '0008',
    expiration: '2024-12-30',
    status: 'Expired',
  },

  // Continue adding checks for other employees similarly
  // ...
  {
    id: 'c43',
    employeeId: '13',
    type: 'Psychological Health Check',
    code: '0006',
    expiration: '2024-12-30',
    status: 'Valid',
  },
  {
    id: 'c44',
    employeeId: '13',
    type: 'Physical Health Check',
    code: '0007',
    expiration: '2024-12-30',
    status: 'Valid',
  },
  {
    id: 'c45',
    employeeId: '13',
    type: 'Computer Work Certificate',
    code: '0008',
    expiration: '2024-12-30',
    status: 'Expired',
  },

  {
    id: 'c46',
    employeeId: '14',
    type: 'Psychological Health Check',
    code: '0006',
    expiration: '2024-12-30',
    status: 'Valid',
  },
  {
    id: 'c47',
    employeeId: '14',
    type: 'Physical Health Check',
    code: '0007',
    expiration: '2024-12-30',
    status: 'Valid',
  },
  {
    id: 'c48',
    employeeId: '14',
    type: 'Computer Work Certificate',
    code: '0008',
    expiration: '2024-12-30',
    status: 'Expired',
  },

  // Add more if needed
];

// Employee data structure
export const tableData: Employee[] = [
  {
    id: '1',
    name: 'Aurimas Urbonas',
    department: 'IT',
    userStatus: 'Active',
    jobTitle: 'Software Developer',
    checksIds: ['c1', 'c2', 'c3'],
  },
  {
    id: '2',
    name: 'Domantas Didžiapetris',
    department: 'Marketing',
    userStatus: 'Active',
    jobTitle: 'Marketing Specialist',
    checksIds: ['c4', 'c5', 'c6'],
  },
  {
    id: '3',
    name: 'Erika Mustermann',
    department: 'HR',
    userStatus: 'Active',
    jobTitle: 'HR Manager',
    checksIds: ['c7', 'c8', 'c9'],
  },
  {
    id: '4',
    name: 'John Doe',
    department: 'Finance',
    userStatus: 'Pending',
    jobTitle: 'Accountant',
    checksIds: ['c10', 'c11', 'c12'],
  },
  // Continue adding employees similarly
  // ...
  {
    id: '13',
    name: 'Arthas Menethil',
    department: 'Finance',
    userStatus: 'Pending',
    jobTitle: 'Accountant',
    checksIds: ['c43', 'c44', 'c45'],
  },
  {
    id: '14',
    name: 'Cayde 6',
    department: 'Finance',
    userStatus: 'Pending',
    jobTitle: 'Accountant',
    checksIds: ['c46', 'c47', 'c48'],
  },
  // Add more if needed
];
