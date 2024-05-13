export interface HealthCheck {
  id: string;
  employeeId: string;
  type: string;
  code: string;
  expiration: string;
  status: string;
}

export interface CustomTableProps {
  data: Employee[];
  checksData: HealthCheck[]
}

export interface Employee {
  id: string;
  name: string;
  department: string;
  userStatus: string;
  jobTitle: string;
  checksIds: string[];
}
