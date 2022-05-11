

export enum Statuses {
  Initial = 'Not Fetched',
  Loading = 'Loading ...',
  UpToDate = 'Up To Date',
  Deleted = 'Deleted',
  Error = 'Error',
}

export interface CourseState {
  id?: number;
  title: string;
  description: string;
  category: string;
  duration: number;
  photo: string;
  price: decimal;
  created_at?: any;
  updated_at?: any;
}

export interface CoursesState {
  courses: CourseState[];
}

const initialState: CoursesState = {
  courses: [
    {
      id: 0,
      title: '',
      description: '',
      category: '',
      diration: 0,
      photo: '',
      price: 0,
      created_at: '',
      updated_at: '',
    },
  ],
  status: Statuses.Initial,
};
