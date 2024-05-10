interface Check {
  type: string;
  code: string;
  expiration: string;
  status: string;
}

export interface HealthCheck {
  id: string;
  name: string;
  department: string;
  userStatus: string;
  jobTitle: string;
  checks: Check[];
}

export interface CustomTableProps {
  data: HealthCheck[];
}
