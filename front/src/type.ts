export type UserDto = {
  email: string;
  password: string;
  name?: string;
};

export type SubtitleLineType = {
  startTime?: string;
  endTime?: string;
  content?: string;
};

export type VimeoControlType = {
  playingTime: number | null;
  isPlaying: boolean;
};
