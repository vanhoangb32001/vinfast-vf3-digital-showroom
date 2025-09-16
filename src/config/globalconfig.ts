interface TypeProfile {
  id: string;
  name: string;
  title: string;
  experience: string;
  phone: string;
  zalo: string;
  fanpage: string;
  location: string;
  specialties: string[];
  languages: string[];
}

export const Profile: TypeProfile = {
  id: "1",
  name: "Hoàng Phúc Vinfast",
  title: "Chuyên viên Tư vấn VinFast",
  experience: "Nhiều kinh nghiệm",
  phone: "0862 797 714",
  zalo: "https://zalo.me/0862797714",
  fanpage: "https://facebook.com/share/1BGZDhc3fb/?mibextid=wwXIfr",
  location: "VinFast Đồng Nai, 270 - 369 QL51, P. Long Hưng, Đồng Nai",
  specialties: ["Xe điện cao cấp", "Dịch vụ VIP", "Tư vấn tài chính"],
  languages: ["Tiếng Việt", "English"]
};

