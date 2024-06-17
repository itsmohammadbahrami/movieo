interface ISerial {
  enable: boolean;
  parent_title: string;
  season_id: number;
  serial_part: string;
  part_text: string;
  season_text: string;
  last_part: string;
}

interface IRelData {
  rel_type: string;
  rel_id: string;
  rel_uid: any;
  rel_title: any;
  rel_type_txt: string;
}

interface IBadge {
  free: boolean;
  backstage: boolean;
  vision: boolean;
  hear: boolean;
  online_release: boolean;
  exclusive: boolean;
  commingsoon: boolean;
  info: any[];
}

interface IPic {
  movie_img_s: string;
  movie_img_m: string;
  movie_img_b: string;
}

interface ICategories {
  title_en: string;
  title: string;
  link_type: string;
  link_key: string;
}

interface IDuration {
  value: number;
  text: string;
}

interface ICountries {
  country: string;
  country_en: string;
}

interface ITextStatus {
  enable: boolean;
  text: string;
}

interface IAudio {
  languages: string[];
  isMultiLanguage: boolean;
}

export interface IMovie {
  type: string;
  id: string;
  link_type: string;
  link_key: string;
  theme: string;
  output_type: string;
  movie_id: string;
  uid: string;
  movie_title: string;
  movie_title_en: string;
  tag_id: string;
  serial: ISerial;
  watermark: boolean;
  HD: boolean;
  watch_list_action: string;
  commingsoon_txt: string;
  rel_data: IRelData;
  badge: IBadge;
  rate_enable: boolean;
  rate_enable_by_cnt: boolean;
  descr: string;
  cover: string;
  publish_date: string;
  age_range: string;
  pic: IPic;
  rate_avrage: string;
  avg_rate_label: string;
  pro_year: string;
  imdb_rate: string;
  categories: ICategories[];
  duration: IDuration;
  countries: ICountries[];
  dubbed: ITextStatus;
  subtitle: ITextStatus;
  audio: IAudio;
  director: string;
  last_watch: any;
  freemium: boolean;
  position: any;
  sid: any;
  uuid: any;
}

export interface IMoviesState {
  movies: IMovie[];
  filter: string;
  sort: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
