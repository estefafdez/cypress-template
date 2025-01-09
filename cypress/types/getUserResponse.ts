export type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type Support = {
  url: string;
  text: string;
};

export type RequestResponse = {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: UserData[] | UserData | { id: number; name: string; year: number; color: string; pantone_value: string };
  support: Support;
};
