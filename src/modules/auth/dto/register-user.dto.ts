export class RegisterUserDto {
  name: string;
  email: string;
  password: string;
  level?: number;
  status?: number;
  user_id?: string;
  address?: string;
  job?: string;
  note?: string;
  phone?: string;
  google_id?: string;
  facebook_id?: string;
  kakao_id?: string;
  naver_id?: string;
  apple_id?: string;
  zipcode?: string;
  detail_address?: string;
  withdrawal_reason?: string;
}