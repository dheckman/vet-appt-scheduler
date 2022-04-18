export type Clinic = {
  name: string;
  status: string;
  email: string;
  phone: string;
  id: string;
  employees: Employees;
};

export type Employees = {
  short_name: string;
  first_name: string;
  last_name: string;
  clinic_role: string;
  active: boolean;
  id: string;
  clinicId: string;
};

export type Appointments = {
  start_time: string,
  client_first_name: string,
  client_last_name: string
  client_phone_number: string,
  client_email: string,
  patient_name: string,
  patient_breed: string,
  patient_dob: string,
  patient_color: string,
  vet_id: number,
  tech_id: number,
  staff_notes: string,
  appointment_type: string,
  status: string,
  checkin_time: string | null,
  id: string,
  clinic_id: string
}