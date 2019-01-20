export interface Venue {
  id: number;
  name: string;
  lat: number;
  lon: number;
  repinned: boolean;
  address_1: string;
  city: string;
  country: string;
  localized_country_name: string;
}

export interface Group {
  created: number;
  name: string;
  id: number;
  join_mode: string;
  lat: number;
  lon: number;
  urlname: string;
  who: string;
  localized_location: string;
  state: string;
  country: string;
  region: string;
  timezone: string;
}

export interface MeetupGroup {
  created: number;
  duration: number;
  id: string;
  name: string;
  rsvp_limit: number;
  status: string;
  time: number;
  local_date: string;
  local_time: string;
  rsvp_close_offset: string;
  updated: number;
  utc_offset: number;
  waitlist_count: number;
  yes_rsvp_count: number;
  venue: Venue;
  group: Group;
  link: string;
  description: string;
  visibility: string;
}

